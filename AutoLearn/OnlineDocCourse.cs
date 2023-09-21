using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium.Chrome;
using Newtonsoft.Json.Linq;
using OpenQA.Selenium;

namespace AutoLearn
{
    internal class OnlineDocCourse : Course
    {
        public OnlineDocCourse(string id, string name, float score,
            float period, string code, string stepToGetScore,
            WebDriver driver, Loger loger, string checkCode, string XHRCode)
            : base(id, driver, loger, checkCode, XHRCode)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
            Score = score;
            Period = period;
            Code = code ?? throw new ArgumentNullException(nameof(code));
            StepToGetScore = stepToGetScore ?? throw new ArgumentNullException(nameof(stepToGetScore));
        }
        public OnlineDocCourse(string id, ChromeDriver driver, Loger loger, string checkCode, string XHRCode)
            : base(id, driver, loger, checkCode, XHRCode)
        {
            ;
        }
        public override void CloseCourse()
        {
            //throw new NotImplementedException();
            loger.Log("尝试关闭OnlineDoc");
        }

        public override void JumpToCourse(string eln_session_id)
        {
            string url = string.Format("https://sxqc-gbpy.21tb.com/els/html/courseInfo/courseinfo.checkMsUrl.do?courseId={0}&enterCourseUrl=https://sxqc-gbpy.21tb.com/els/html/studyCourse/studyCourse.enterCourse.do?courseId={1}%26courseType=NEW_COURSE_CENTER%26studyType=STUDY", Id, Id);
            string buffer = driver.ExecuteAsyncScript(JSCodeXHR, "get", url).ToString();
            JObject pairs = JObject.Parse(buffer);
            bool success = pairs["success"].Value<bool>();
            if (!success)
            {
                loger.Log("跳转课程失败," + buffer);
                return;
            }
            string message = pairs["message"].Value<string>();
            driver.Navigate().GoToUrl(message);
        }

        public override bool Learn(int playSpeed)
        {
            Object ret = driver.ExecuteAsyncScript(JSCodeCourse, "checkVideo()");
            if (ret != null)
            {
                Thread.Sleep(15000);//降低该类型课程的交互速度
                return (Int64)ret == -1;
            }
            return false;
        }
    }
}
