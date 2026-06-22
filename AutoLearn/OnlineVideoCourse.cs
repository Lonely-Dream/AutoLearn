using OpenQA.Selenium.Chrome;
using Newtonsoft.Json.Linq;
using OpenQA.Selenium;

namespace AutoLearn
{
    internal class OnlineVideoCourse : Course
    {
        public OnlineVideoCourse(string id, string name, float score, 
            float period, string code, string stepToGetScore,
            WebDriver driver, string checkCode, string XHRCode) 
            : base(id, driver, checkCode, XHRCode)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
            Score = score;
            Period = period;
            Code = code ?? throw new ArgumentNullException(nameof(code));
            StepToGetScore = stepToGetScore ?? throw new ArgumentNullException(nameof(stepToGetScore));
        }
        public OnlineVideoCourse(string id,ChromeDriver driver, string checkCode, string XHRCode) 
            : base(id, driver, checkCode, XHRCode)
        {
            ;
        }
        public override bool Learn(int playSpeed)
        {
            try
            {
                driver.ExecuteScript("document.getElementsByTagName('video')[0].playbackRate ="+playSpeed.ToString());
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
            }
            Object ret = driver.ExecuteAsyncScript(JSCodeCourse, "checkVideo()");
            if(ret != null)
            {
                return (Int64)ret == -1;
            }
            return false;
        }

        public override void JumpToCourse(string eln_session_id)
        {
            // string url = "https://sxqc-gbpy.21tb.com/els/html/studyCourse/studyCourse.enterCourse.do?courseType=NEW_COURSE_CENTER&studyType=STUDY&courseId="+ Id;
            string url = "https://sxqc-gbpy.21tb.com/courseSetting/courseLearning/play?courseType=NEW_COURSE_CENTER&courseId=" + Id;
            driver.Navigate().GoToUrl(url);
            Thread.Sleep(1500);
            driver.Navigate().GoToUrl(url);
        }

        public override void CloseCourse()
        {
            //driver.ExecuteScript(JSCodeXHR, "/els/html/courseStudyItem/courseStudyItem.exitStudy.do?courseId=" + Id);
        }
    }
}
