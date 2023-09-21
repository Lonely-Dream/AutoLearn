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
    internal class TwoScreenCourse : Course
    {
        public TwoScreenCourse(string id, string name, float score,
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
        public TwoScreenCourse(string id, WebDriver driver, Loger loger, string checkCode, string XHRCode)
            : base(id, driver, loger, checkCode, XHRCode)
        {
            ;
        }
        public override bool Learn(int playSpeed)
        {
            try
            {
                driver.ExecuteScript("window.frames[0].document.getElementsByTagName('video')[0].playbackRate =" + playSpeed.ToString());
            }
            catch (Exception e)
            {
                loger.Log(e.Message);
            }
            Object ret = driver.ExecuteAsyncScript(JSCodeCourse, "checkVideo()");
            if (ret != null)
            {
                return (Int64)ret == -1;
            }
            return false;
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

            //driver.Navigate().GoToUrl(
            //    "https://sxqc-gbpy.21tb.com/els/html/courseStudyItem/courseStudyItem.learn.do?" +
            //    "courseId=" + Id +
            //    "&courseType=NEW_COURSE_CENTER" +
            //    "&vb_server=http%3A%2F%2F21tb-video.21tb.com" +
            //    "&eln_session_id=" + eln_session_id
            //);
        }
        public override void CloseCourse()
        {
            //driver.ExecuteScript(JSCodeXHR, "/els/html/courseStudyItem/courseStudyItem.exitStudy.do?courseId=" + Id);
        }
    }
}
