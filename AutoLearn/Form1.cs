using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using System.Configuration;
using Newtonsoft.Json;
using System.Security.Cryptography;
using System.Text;
using System.Diagnostics;

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

        private PackInformation packInformation;

        private readonly string Version = "V0.1.2";

        private void SetConfig(Configuration configuration, string key, string value)
        {
            if (configuration.AppSettings.Settings.AllKeys.Contains(key))
            {
                configuration.AppSettings.Settings[key].Value = value;
            }
            else
            {
                configuration.AppSettings.Settings.Add(key, value);
            }
        }
        private string GetConfig(string key)
        {
            string? temp_item = ConfigurationManager.AppSettings[key];
            temp_item ??= "";
            return temp_item;
        }
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
            loger.Log("当前版本:" + Version);

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(textBoxServerURL.Text);
            client.Timeout = TimeSpan.FromSeconds(10);

            try
            {
                HttpResponseMessage response = await client.GetAsync("/check_version?version=" + Version);
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
                    if(cnt != 0)
                    {
                        // 更新完成
                        loger.Log("下载完成");

                        // 在这里添加重启 AutoLearn 的逻辑
                        // 弹出消息框
                        MessageBox.Show(packInformation.message+"\n下载完成即将重启AutoLearn");

                        // 执行重启 AutoLearn 的逻辑
                        ProcessStartInfo processInfo = new ProcessStartInfo
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

        public Form1()
        {
            InitializeComponent();
            int x = Screen.GetBounds(this).Width - this.Width;
            //int y = Screen.GetBounds(this).Height - this.Height;
            this.Left = x;
            this.Top = 20;

            loger = new(listBox1);
            learnCore = new(loger);

            //开始加载配置
            username = GetConfig("username");
            password = GetConfig("password");
            username2 = GetConfig("username2");
            password2 = GetConfig("password2");
            if (!Boolean.TryParse(GetConfig("isSpeedUp"), out isSpeedUp))
            {
                isSpeedUp = false;
            }
            numericUpDown1.Enabled = isSpeedUp;
            if (!Int32.TryParse(GetConfig("playSpeed"), out playSpeed))
            {
                playSpeed = 1;
            }

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
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (learnCore.IsRunning)
            {
                button1.Text = "启动";
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
                button1.Text = "停止";
                learnCore.Login(textBoxUsername.Text, textBoxPassword.Text);
                button2.Enabled = true;
                button3.Enabled = true;
                dateTimePicker1.Enabled = true;
                dateTimePicker2.Enabled = true;
                button3_Click(null, null);
            }
        }

        private void Form1_Closing(object sender, FormClosingEventArgs e)
        {
            learnCore.Quit();

            //写配置项
            Configuration configuration = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);
            SetConfig(configuration, "username", username);
            SetConfig(configuration, "password", password);
            SetConfig(configuration, "username2", username2);
            SetConfig(configuration, "password2", password2);
            SetConfig(configuration, "isSpeedUp", isSpeedUp.ToString());
            SetConfig(configuration, "playSpeed", playSpeed.ToString());
            configuration.Save();

            loger.Save();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            learnCore.GetCourseList(checkBoxAutoEvaluate.Checked);
            Thread learnThread = new Thread(learnCore.Learn);
            learnThread.IsBackground = true;
            learnThread.Start();
            button2.Enabled = false;
        }

        private void buttonLearnGXK_Click(object sender, EventArgs e)
        {
            ChromeDriver driver = new();
            driver.Navigate().GoToUrl("http://yuanjian.xaito.net/index.php");
            loger.Log("尝试登录公需课");
            driver.FindElement(By.Id("user")).SendKeys(username2);
            driver.FindElement(By.Id("pass")).SendKeys(password2);
            driver.FindElement(By.Id("submit-btn")).Submit();
            loger.Log("登陆成功");
            string JSCodeCommonCourse;
            {
                using StreamReader sr = new StreamReader("JSCodeCommonCourse.js");
                JSCodeCommonCourse = sr.ReadToEnd();
            }
            Object ret = driver.ExecuteAsyncScript(JSCodeCommonCourse);
            string[] urls = new string[]{
                "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=45",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=49",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=50",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=51",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=52",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=62",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=34",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=54",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=55",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=33",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=56",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=13",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=12",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=3",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=1",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=11",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=46",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=47",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=48",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=57",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=58",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=59",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=60",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=61"
        };
            foreach (string url in urls)
            {
                driver.Navigate().GoToUrl(url);
            }
            driver.Navigate().GoToUrl("http://yuanjian.xaito.net/index.php?m=Index&a=exam&type=1");
            loger.Log("公需课学习完成。");
            driver.Quit();
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
            else if (numericUpDown1.Value > 8)
            {
                numericUpDown1.Value = 8;
            }
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
            await CheckVersion();
        }

        private async void button4_Click(object sender, EventArgs e)
        {
            await CheckVersion();
        }
    }
}