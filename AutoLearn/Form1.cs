using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using System.Configuration;

namespace AutoLearn
{
    public partial class Form1 : Form
    {
        private AutoLearnCore learnCore;
        //private ChromeDriver driver;
        private Loger loger;
        private string username;
        private string password;
        private string username2;
        private string password2;

        public Form1()
        {
            InitializeComponent();
            int x = Screen.GetBounds(this).Width - this.Width;
            //int y = Screen.GetBounds(this).Height - this.Height;
            this.Left = x;
            this.Top = 20;

            loger = new(listBox1);
            learnCore = new(loger);
            username = ConfigurationManager.AppSettings["username"];
            password = ConfigurationManager.AppSettings["password"];
            if (username == null)
            {
                username = "";
            }
            if (password == null)
            {
                password = "";
            }
            textBoxUsername.Text = username;
            textBoxPassword.Text = password;

            username2 = ConfigurationManager.AppSettings["username2"];
            password2 = ConfigurationManager.AppSettings["password2"];
            if (username2 == null)
            {
                username2 = "";
            }
            if (password2 == null)
            {
                password2 = "";
            }
            textBoxUsername2.Text = username2;
            textBoxPassword2.Text = password2;

            dateTimePicker2.Value = DateTime.Now;

            button2.Enabled = false;
            button3.Enabled = false;
            dateTimePicker1.Enabled = false;
            dateTimePicker2.Enabled = false;
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
                loger.Log("正在加载...");
                button1.Text = "停止";
                learnCore.Init();
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
            //判断用户信息编辑框中的内容是否发生变化
            if (username != textBoxUsername.Text || password!= textBoxPassword.Text)
            {
                Configuration configuration = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);
                try
                {
                    configuration.AppSettings.Settings["username"].Value = textBoxUsername.Text;
                }
                catch (NullReferenceException)
                {
                    configuration.AppSettings.Settings.Add("username", textBoxUsername.Text);
                }

                try
                {
                    configuration.AppSettings.Settings["password"].Value = textBoxPassword.Text;
                }
                catch (NullReferenceException)
                {
                    configuration.AppSettings.Settings.Add("password",textBoxPassword.Text);
                }
                configuration.Save();
            }
            //判断用户信息编辑框中的内容是否发生变化
            if (username2 != textBoxUsername2.Text || password2 != textBoxPassword2.Text)
            {
                Configuration configuration = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);
                try
                {
                    configuration.AppSettings.Settings["username2"].Value = textBoxUsername2.Text;
                }
                catch (NullReferenceException)
                {
                    configuration.AppSettings.Settings.Add("username2", textBoxUsername2.Text);
                }

                try
                {
                    configuration.AppSettings.Settings["password2"].Value = textBoxPassword2.Text;
                }
                catch (NullReferenceException)
                {
                    configuration.AppSettings.Settings.Add("password2", textBoxPassword2.Text);
                }
                configuration.Save();
            }
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
    }
}