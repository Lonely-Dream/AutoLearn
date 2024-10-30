using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using System.Configuration;
using Newtonsoft.Json;
using System.Security.Cryptography;
using System.Text;
using System.Diagnostics;
using WebDriverManager.DriverConfigs.Impl;
using WebDriverManager;

namespace AutoLearn
{
    public partial class Form1 : Form
    {
        private AutoLearnCore learnCore;
        private Loger loger;
        private string username;
        private string password;
        private string username2;
        private string password2;
        private bool isSpeedUp = false;
        private int playSpeed = 1;
        private bool isIniting = true;
        private Thread learnThread;
        private bool isStartLearn = false;
        private PackInformation packInformation;
        private CheckBox[,] courseFilterCheckBox;
        private List<int[]> courseFilter;

        static string CalculateMD5Checksum(string filePath)
        {
            if (!File.Exists(filePath))
            {
                return "";
            }

            MD5 md5 = MD5.Create();

            using (var stream = File.OpenRead(filePath))
            {
                byte[] hashBytes = md5.ComputeHash(stream);
                StringBuilder sb = new StringBuilder();

                foreach (byte b in hashBytes)
                {
                    sb.Append(b.ToString("x2")); // 将每个字节格式化为两位的十六进制数
                }

                return sb.ToString();
            }
        }
        private bool DownloadFile(FileInformation fileInformation)
        {
            string file_url = "/" + fileInformation.file_url;
            string file_path = "./update/" + fileInformation.filename;

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(textBoxServerURL.Text);

            HttpResponseMessage response = client.GetAsync(file_url).Result;
            if (response.IsSuccessStatusCode)
            {
                Stream contentStream = response.Content.ReadAsStreamAsync().Result;
                string dir = Path.GetDirectoryName(file_path);
                if (!Directory.Exists(dir))
                {
                    Directory.CreateDirectory(dir);
                }

                Stream fileStream = File.Create(file_path);
                contentStream.CopyTo(fileStream);
                fileStream.Flush();
                fileStream.Close();
                return true;
            }
            else
            {
                return false;
            }
        }
        private async Task CheckVersion()
        {
            loger.Log("当前版本:" + Config.VERSION);

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(textBoxServerURL.Text);
            client.Timeout = TimeSpan.FromSeconds(10);

            try
            {
                HttpResponseMessage response = await client.GetAsync("/check_version?version=" + Config.VERSION);
                response.EnsureSuccessStatusCode();
                string data = await response.Content.ReadAsStringAsync();

                PackInformation? temp = JsonConvert.DeserializeObject<PackInformation>(data);
                if (temp != null)
                {
                    packInformation = temp;
                }
                else
                {
                    throw new Exception("反序列化失败");
                }

                if (packInformation.files_number == 0)
                {
                    loger.Log("当前版本已是最新");
                    return;
                }
                loger.Log("最新版本:" + packInformation.version);
                loger.Log(packInformation.message);

                Thread thread = new(() =>
                {
                    int cnt = 0;
                    foreach (FileInformation fileInformation in packInformation.files)
                    {
                        string md5 = CalculateMD5Checksum(fileInformation.filename);

                        if (md5 == fileInformation.md5)
                        {
                            loger.Log(fileInformation.filename + "已是最新");
                        }
                        else
                        {
                            loger.Log(fileInformation.filename + "开始更新");
                            DownloadFile(fileInformation);
                            cnt++;
                        }
                    }
                    if (cnt != 0)
                    {
                        // 更新完成
                        loger.Log("下载完成");

                        // 在这里添加重启 AutoLearn 的逻辑
                        // 弹出消息框
                        MessageBox.Show(packInformation.message + "\n下载完成即将重启AutoLearn");

                        // 执行重启 AutoLearn 的逻辑
                        ProcessStartInfo processInfo = new()
                        {
                            FileName = "./update.bat",
                            CreateNoWindow = true, // 不创建命令提示符窗口
                            UseShellExecute = false // 必须为 false
                        };
                        new Process
                        {
                            StartInfo = processInfo
                        }.Start();
                    }
                });

                thread.Start();
            }
            catch (Exception e)
            {
                loger.Log(e.Message);
                loger.Log("检查版本失败");
                packInformation = new()
                {
                    files_number = 0
                };
            }
        }

        private async Task CheckWebDriver()
        {
            loger.Log("正在检查浏览器驱动，请稍等。");

            await Task.Run(() =>
            {
                try
                {
                    // 确保 Edge 和 Chrome 驱动都已配置
                    new DriverManager().SetUpDriver(new EdgeConfig());
                    new DriverManager().SetUpDriver(new ChromeConfig());

                    loger.Log("浏览器驱动正常。");
                }
                catch (Exception e)
                {
                    loger.Log($"浏览器驱动检查失败：{e.Message}");
                }
            });
        }
        private void UpdateCourseFilter()
        {
            courseFilter = new List<int[]> { };
            for (int i = 0; i < Config.CF_ROW; ++i)
            {
                for (int j = 0; j < Config.CF_COL; ++j)
                {
                    if (courseFilterCheckBox[i, j].Checked)
                    {
                        courseFilter.Add(new int[] { i, j });
                    }
                }
            }
        }

        public Form1()
        {
            InitializeComponent();
            //this.TopLevel = true;

            Text = string.Format("AutoLearn {0}", Config.VERSION);

            int x = Screen.GetBounds(this).Width - this.Width;
            //int y = Screen.GetBounds(this).Height - this.Height;
            this.Left = x;
            this.Top = 20;

            loger = new(listBox1);
            learnCore = new(loger);

            // 初始化课程过滤器
            courseFilterCheckBox = new CheckBox[Config.CF_ROW, Config.CF_COL];

            for (int i = 0; i < Config.CF_ROW; ++i)
            {
                for (int j = 0; j < Config.CF_COL; ++j)
                {
                    Control? controls = Controls.Find(string.Format("cb_cf_{0}{1}", i, j), true).FirstOrDefault() ?? throw new Exception("初始化课程过滤器失败!");
                    courseFilterCheckBox[i, j] = controls as CheckBox ?? throw new Exception("课程过滤器转换失败！");
                }
            }

            //开始加载配置
            username = Config.GetConfig("username");
            password = Config.GetConfig("password");
            username2 = Config.GetConfig("username2");
            password2 = Config.GetConfig("password2");
            if (!bool.TryParse(Config.GetConfig("isSpeedUp"), out isSpeedUp))
            {
                isSpeedUp = false;
            }
            numericUpDown1.Enabled = isSpeedUp;
            if (!int.TryParse(Config.GetConfig("playSpeed"), out playSpeed))
            {
                playSpeed = 1;
            }
            string courseFilterConfigString = Config.GetConfig("courseFilter");
            if (!string.IsNullOrEmpty(courseFilterConfigString))
            {
                string[] courseFilterConfigs = courseFilterConfigString.Split(",");

                for (int i = 0; i < Config.CF_ROW; ++i)
                {
                    for (int j = 0; j < Config.CF_COL; ++j)
                    {
                        courseFilterCheckBox[i, j].Checked = courseFilterConfigs[i * Config.CF_COL + j] == "1";
                    }
                }
            }
            UpdateCourseFilter();

            textBoxUsername.Text = username;
            textBoxPassword.Text = password;
            textBoxUsername2.Text = username2;
            textBoxPassword2.Text = password2;

            checkBox1.Checked = isSpeedUp;
            numericUpDown1.Value = playSpeed;

            dateTimePicker2.Value = DateTime.Now;

            button2.Enabled = false;
            button3.Enabled = false;
            dateTimePicker1.Enabled = false;
            dateTimePicker2.Enabled = false;

            isIniting = false;

            // 等待驱动检查完之后再使能
            button__start.Enabled = false;
        }
        private void Form1_Closing(object sender, FormClosingEventArgs e)
        {
            learnCore.Quit();

            //写配置项
            Configuration configuration = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);
            Config.SetConfig(configuration, "username", username);
            Config.SetConfig(configuration, "password", password);
            Config.SetConfig(configuration, "username2", username2);
            Config.SetConfig(configuration, "password2", password2);
            Config.SetConfig(configuration, "isSpeedUp", isSpeedUp.ToString());
            Config.SetConfig(configuration, "playSpeed", playSpeed.ToString());

            string[] courseFilterStates = new string[Config.CF_ROW * Config.CF_COL];
            for (int i = 0; i < Config.CF_ROW; ++i)
            {
                for (int j = 0; j < Config.CF_COL; ++j)
                {
                    if (courseFilterCheckBox[i, j].Checked)
                    {
                        courseFilterStates[i * Config.CF_COL + j] = "1";
                    }
                    else
                    {
                        courseFilterStates[i * Config.CF_COL + j] = "0";
                    }
                }
            }
            Config.SetConfig(configuration, "courseFilter", string.Join(",", courseFilterStates));

            configuration.Save();

            loger.Save();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (learnCore.IsRunning)
            {
                button__start.Text = "启动";
                learnCore.Quit();
                loger.Log("会话结束");
                button2.Enabled = false;
                button3.Enabled = false;
                dateTimePicker1.Enabled = false;
                dateTimePicker2.Enabled = false;
            }
            else
            {
                if (!learnCore.Init())
                {
                    return;
                }
                loger.Log("正在加载...");
                button__start.Text = "停止";
                learnCore.Login(textBoxUsername.Text, textBoxPassword.Text);
                button2.Enabled = true;
                button3.Enabled = true;
                dateTimePicker1.Enabled = true;
                dateTimePicker2.Enabled = true;
                button3_Click(null, null);
            }
        }
        private void button2_Click(object sender, EventArgs e)
        {
            button2.Enabled = false;
            if (isStartLearn)
            {
                button2.Text = "开始学习";

                learnCore.IsRunning = false;
                if (learnThread.ThreadState == System.Threading.ThreadState.Running)
                {
                    learnThread.Join();
                }
                loger.Log("线程终止");

                isStartLearn = false;
            }
            else
            {
                button2.Text = "停止学习";
                learnCore.IsRunning = true;

                UpdateCourseFilter();
                learnCore.GetCourseList(courseFilter, checkBoxAutoEvaluate.Checked);
                learnThread = new Thread(learnCore.Learn)
                {
                    IsBackground = true
                };
                learnThread.Start();

                isStartLearn = true;
            }
            button2.Enabled = true;
        }

        private void buttonLearnGXK_Click(object sender, EventArgs e)
        {
            ChromeDriver driver = new();
            driver.Navigate().GoToUrl("https://yuanjian.yi-bo.cn/index.php");
            loger.Log("尝试登录公需课");
            driver.FindElement(By.Id("user")).SendKeys(username2);
            driver.FindElement(By.Id("pass")).SendKeys(password2);
            driver.FindElement(By.Id("submit-btn")).Submit();
            loger.Log("登陆成功");
            try
            {
                Cookie cookie = driver.Manage().Cookies.GetCookieNamed("PHPSESSID");
                loger.Log(cookie.Value);
            }
            catch (Exception)
            {
                loger.Log("？");
            }
            string JSCodeCommonCourse;
            {
                using StreamReader sr = new StreamReader("JSCodeCommonCourse.js");
                JSCodeCommonCourse = sr.ReadToEnd();
            }
            Object ret = driver.ExecuteAsyncScript(JSCodeCommonCourse);
            string[] urls = new string[]{
                "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=45",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=49",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=50",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=51",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=52",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=62",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=34",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=54",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=55",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=33",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=56",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=13",

    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=12",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=3",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=1",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=11",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=46",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=47",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=48",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=57",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=58",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=59",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=60",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=61"
        };
            for (int i = 0; i < urls.Length; i++)
            {
                driver.Navigate().GoToUrl(urls[i]);
                loger.Log(string.Format("第{0}课学习完成", i + 1));
            }
            driver.Navigate().GoToUrl("https://yuanjian.yi-bo.cn/index.php?m=Index&a=exam&type=1");
            loger.Log("公需课学习完成。");
            //driver.Quit();
        }
        private void button3_Click(object sender, EventArgs e)
        {
            if (learnCore.IsRunning)
            {
                float[] ret = learnCore.GetScoreAndPeriod(dateTimePicker1.Text, dateTimePicker2.Text);
                label5.Text = "学分：" + ret[0];
                label6.Text = "学时：" + ret[1];
            }
        }
        private void dateTimePicker1_ValueChanged(object sender, EventArgs e)
        {
            if (learnCore.IsRunning)
            {
                float[] ret = learnCore.GetScoreAndPeriod(dateTimePicker1.Text, dateTimePicker2.Text);
                label5.Text = "学分：" + ret[0];
                label6.Text = "学时：" + ret[1];
            }
        }
        private void dateTimePicker2_ValueChanged(object sender, EventArgs e)
        {
            if (learnCore.IsRunning)
            {
                float[] ret = learnCore.GetScoreAndPeriod(dateTimePicker1.Text, dateTimePicker2.Text);
                label5.Text = "学分：" + ret[0];
                label6.Text = "学时：" + ret[1];
            }
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {
            if (isIniting)
            {
                return;
            }
            if (checkBox1.Checked)
            {
                // 选择倍速播放 提示信息
                DialogResult result = MessageBox.Show("确认是否开启倍速播放？不建议的功能，不确定导致其他问题和后果，请斟酌。", "警告", MessageBoxButtons.YesNo, MessageBoxIcon.Warning);
                if (result == DialogResult.Yes)
                {
                    // 确认开启
                    numericUpDown1.Enabled = true;
                    numericUpDown1.Value = 4;
                }
            }
            else
            {
                checkBox1.Checked = false;
                numericUpDown1.Enabled = false;
                numericUpDown1.Value = 1;
            }

            isSpeedUp = checkBox1.Checked;
        }

        private void numericUpDown1_ValueChanged(object sender, EventArgs e)
        {
            if (numericUpDown1.Value < 1)
            {
                numericUpDown1.Value = 1;
            }
            //else if (numericUpDown1.Value > 8)
            //{
            //    numericUpDown1.Value = 8;
            //}
            playSpeed = (int)numericUpDown1.Value;
            learnCore.playSpeed = playSpeed;
        }

        private void textBoxUsername_TextChanged(object sender, EventArgs e)
        {
            username = textBoxUsername.Text;
        }

        private void textBoxPassword_TextChanged(object sender, EventArgs e)
        {
            password = textBoxPassword.Text;
        }

        private void textBoxUsername2_TextChanged(object sender, EventArgs e)
        {
            username2 = textBoxUsername2.Text;
        }

        private void textBoxPassword2_TextChanged(object sender, EventArgs e)
        {
            password2 = textBoxPassword2.Text;
        }

        private async void Form1_Shown(object sender, EventArgs e)
        {
            await CheckWebDriver();
            button__start.Enabled = true;
            await CheckVersion();
        }

        private async void button4_Click(object sender, EventArgs e)
        {
            await CheckVersion();
        }

        private void cb_cf_CheckedChanged(object sender, EventArgs e)
        {
            CheckBox cb = sender as CheckBox ?? throw new ArgumentNullException(nameof(sender));
            int row = int.Parse(cb.Name.Substring(6, 1));
            int col = int.Parse(cb.Name.Substring(7, 1));

            //if (row == 4)
            //{
            //    // 该行为单选
            //    if (cb.Checked)
            //    {
            //        for (int j = 0; j < Config.CF_COL; ++j)
            //        {
            //            if (j != col)
            //            {
            //                courseFilterCheckBox[row, j].Checked = false;
            //            }
            //        }
            //    }
            //    else
            //    {
            //        cb.Checked = true;
            //    }

            //    return;
            //}

            // 其他行
            if (col == 0)
            {
                // 选中了前4行 的all
                if (cb.Checked)
                {
                    for (int j = 1; j < Config.CF_COL; ++j)
                    {
                        courseFilterCheckBox[row, j].Checked = false;
                    }
                }
                //else
                //{
                //    cb.Checked = true;
                //}
            }
            else
            {
                // 选中了每行的其他的
                if (cb.Checked)
                {
                    courseFilterCheckBox[row, 0].Checked = false;
                }
            }
        }

        private void cb_cf_4x_MouseClick(object sender, MouseEventArgs e)
        {
            CheckBox cb = sender as CheckBox ?? throw new ArgumentNullException(nameof(sender));
            int row = int.Parse(cb.Name.Substring(6, 1));
            int col = int.Parse(cb.Name.Substring(7, 1));

            if (row == 4)
            {
                // 该行为单选
                if (!cb.Checked)
                {
                    for (int j = 0; j < Config.CF_COL; ++j)
                    {
                        if (j != col)
                        {
                            courseFilterCheckBox[row, j].Checked = false;
                        }
                    }
                }
                cb.Checked = true;
            }
        }
    }
}