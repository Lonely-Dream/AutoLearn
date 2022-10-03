using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace AutoLearn
{
    internal class AutoLearnCore
    {
        private ChromeDriver? driver;
        private Loger loger;
        private string JSCodeXHR;
        private string JSCodeOnlineVideoCourse;
        private string JSCodeTwoScreenCourse;
        private string JSCodeTest;
        private List<Course> courses;

        public bool IsRunning { get; private set; }
        public AutoLearnCore(Loger loger)
        {
            this.loger = loger ?? throw new ArgumentNullException(nameof(loger));
            driver = null;
            courses = new List<Course>();
            {
                using StreamReader sr = new StreamReader("JSCodeXHR.js");
                JSCodeXHR = sr.ReadToEnd();
            }
            {
                using StreamReader sr = new StreamReader("JSCodeTest.js");
                JSCodeTest = sr.ReadToEnd();
            }
            {
                using StreamReader sr = new StreamReader("JSCodeOnlineVideoCourse.js");
                JSCodeOnlineVideoCourse = sr.ReadToEnd();
            }
            {
                using StreamReader sr = new StreamReader("JSCodeTwoScreenCourse.js");
                JSCodeTwoScreenCourse = sr.ReadToEnd();
            }
        }
        /// <summary>
        /// 初始化浏览器
        /// </summary>
        public void Init()
        {
            driver = new();
            if(driver == null)
            {
                IsRunning = false;
                throw new ArgumentNullException(nameof(driver));
            }
            IsRunning = true;
        }
        /// <summary>
        /// 关闭浏览器
        /// </summary>
        public void Quit()
        {
            if(driver != null)
            {
                driver.Quit();
                driver = null;
            }
            IsRunning = false;
        }
        public void Login(string loginName,string password)
        {
            if(driver == null)
            {
                return;
            }
            driver.Navigate().GoToUrl("https://sxqc-gbpy.21tb.com/");
            loger.Log("尝试登录");
            driver.FindElement(By.Id("loginName")).SendKeys(loginName);
            driver.FindElement(By.Id("password")).SendKeys(password);
            //driver.FindElement(By.ClassName("login_Btn")).Submit();
            //使用原生js辅助登录
            driver.ExecuteScript("$(\"#continueLogin\").val(true);check();");
            driver.Navigate().GoToUrl("https://sxqc-gbpy.21tb.com/els/html/index.parser.do?id=NEW_COURSE_CENTER");
            loger.Log("登录成功");
            Cookie cookie = driver.Manage().Cookies.GetCookieNamed("eln_session_id");
            loger.Log(cookie.Name);
            loger.Log(cookie.Value);
        }
        public void GetCourseList(bool isEvalution)
        {
            if (driver == null)
            {
                return;
            }
            Cookie cookie = driver.Manage().Cookies.GetCookieNamed("eln_session_id");
            loger.Log(cookie.Name);
            loger.Log(cookie.Value);

            //获取待学习课程 第一次访问
            string buffer = (string)driver.ExecuteAsyncScript(JSCodeTest, "getCourseLists(12)");
            JObject keyValuePairs = JObject.Parse(buffer);
            int totalCourse = keyValuePairs["total"].Value<int>();

            //获取全部待学习课程
            buffer = (string)driver.ExecuteAsyncScript(JSCodeTest, "getCourseLists("+totalCourse+")");
            keyValuePairs = JObject.Parse(buffer);
            JArray rows = keyValuePairs["rows"].Value<JArray>();
            foreach(JObject item in rows)
            {
                string courseStandard = item["courseStandard"].Value<string>();
                string courseId = item["courseId"].Value<string>();
                string courseName = item["courseName"].Value<string>();
                string courseCode = item["courseCode"].Value<string>();
                string stepToGetScore = item["stepToGetScore"].Value<string>();
                float shouldGetScore = item["shouldGetScore"].Value<float>();
                float coursePeriod = item["coursePeriod"].Value<float>();
                string currentStep = item["currentStep"].Value<string>();

                if (courseStandard == null)
                {
                    loger.Log("读取课程类型错误。");
                    continue;
                } 
                if(currentStep == "COURSE_EVALUATE")
                {
                    loger.Log("待评价：" + courseName + " 类型：" + courseStandard);
                    if (isEvalution)
                    {
                        EvalutionCourse(courseId);
                    }
                    else
                    {
                        loger.Log("评价被关闭。");
                    }
                }
                else if(currentStep == "COURSE_COURSE_STUDY")
                {
                    if (courseStandard == "ONLINEVIDEOCOURSE")
                    {
                        loger.Log(courseName);
                        courses.Add(
                            new OnlineVideoCourse(courseId, courseName, shouldGetScore,
                            coursePeriod, courseCode, stepToGetScore,
                            driver, loger, JSCodeOnlineVideoCourse, JSCodeXHR)
                        );
                    }
                    else if (courseStandard == "TWOSCREEN")
                    {
                        loger.Log(courseName);
                        courses.Add(
                            new TwoScreenCourse(courseId, courseName, shouldGetScore,
                            coursePeriod, courseCode, stepToGetScore,
                            driver, loger, JSCodeTwoScreenCourse, JSCodeXHR)
                        );
                    }
                    else if (courseStandard == "ONESCREEN")
                    {
                        loger.Log(courseName);
                        courses.Add(
                            new TwoScreenCourse(courseId, courseName, shouldGetScore,
                            coursePeriod, courseCode, stepToGetScore,
                            driver, loger, JSCodeTwoScreenCourse, JSCodeXHR)
                        );
                    }
                    else if (courseStandard == "THREESCREEN")
                    {
                        loger.Log(courseName);
                        courses.Add(
                            new TwoScreenCourse(courseId, courseName, shouldGetScore,
                            coursePeriod, courseCode, stepToGetScore,
                            driver, loger, JSCodeTwoScreenCourse, JSCodeXHR)
                        );
                    }
                    else
                    {
                        loger.Log("暂时不支持：" + courseName + " 类型：" + courseStandard);
                    }
                }
                else
                {
                    loger.Log(courseName + " 处于：" + currentStep);
                }
            }
            loger.Log("目前待学习课程：" + totalCourse);
        }
        public void Learn()
        {
            Cookie cookie = driver.Manage().Cookies.GetCookieNamed("eln_session_id");
            //loger.Log(cookie.Name);
            //loger.Log(cookie.Value);
            for (int i = 0; i < courses.Count; )
            {
                Course course = courses[i];

                try
                {
                    loger.Log("尝试跳转到下一门课程");
                    course.JumpToCourse(cookie.Value);
                    Int64 result;
                    int countRetry = 1;
                    const int MaxRetry = 30;
                    do
                    {
                        result = (Int64)driver.ExecuteAsyncScript(JSCodeTest, "checkVideoPlay()");
                        if(result == 0)
                        {
                            break;
                        }
                        else if(result == -1)
                        {
                            loger.Log("video组件未找到");
                        }
                        else if(result == -2)
                        {
                            loger.Log("frame未加载完成");
                        }
                        else if(result == -3)
                        {
                            loger.Log("有课程正在学习中，尝试终止它。");
                            Thread.Sleep(2000);
                            break;
                        }
                        else
                        {
                            loger.Log("未知错误。");
                        }

                        loger.Log(String.Format("Loding... {0}/{1}", countRetry++, MaxRetry));
                        Thread.Sleep(1000);
                        if(countRetry == MaxRetry)
                        {
                            result = 1;
                            break;
                        }
                    } while (true);
                    if(result == 1 || result == -3)
                    {
                        loger.Log("重新加载该课程。");
                        continue;
                    }
                    loger.Log("开始学习: " + course.Name);
                    while (!course.Learn())
                    {
                        Thread.Sleep(2000);
                        if (!IsRunning)
                        {
                            loger.Log("停止学习");
                            return;//AutoLearnCore 退出
                        }
                    }
                    ++i;
                }
                catch (Exception e)
                {
                    if (!IsRunning)
                    {
                        break;
                    }
                    course.CloseCourse();
                    loger.Log(course.Id + e.Message);
                }
            }
        }
        private void EvalutionCourse(string courseId)
        {
            if(driver== null)
            {
                return;
            }
            try
            {
                driver.Navigate().GoToUrl("https://sxqc-gbpy.21tb.com/els/html/studyCourse/studyCourse.enterCourse.do?"
                                      + "courseId=" + courseId
                                      + "&courseType=NEW_COURSE_CENTER&studyType=STUDY");
                Object ret = driver.ExecuteAsyncScript(JSCodeTest, "evaluateCourse('" + courseId + "')");
                if (ret == null)
                {
                    loger.Log("评价失败：" + courseId);
                    return;
                }
                loger.Log(ret.ToString());

                JObject pairs = JObject.Parse(ret.ToString());
                bool state = pairs["state"].Value<bool>();
                if (state)
                {
                    //检查是否有考试
                    string nextStep = pairs["nextStep"].Value<string>();
                    loger.Log(nextStep);
                    if (nextStep != null && nextStep == "COURSE_EXAM")
                    {
                        loger.Log("自动评价已完成，该课程需要测试。");
                    }
                    else
                    {
                        float courseScore = pairs["courseScore"].Value<float>();
                        float coursePeriod = pairs["coursePeriod"].Value<float>();
                        loger.Log(" 获得：" + courseScore + "学分 " + coursePeriod + "学时");
                    }
                }
                else
                {
                    loger.Log("评价失败：" + courseId);
                }
            }
            catch (Exception e)
            {
                loger.Log("评价失败：" + courseId);
            }
        }
        private void EvalutionCourse(Course course)
        {
            EvalutionCourse(course.Id);
        }
        public float[] GetScoreAndPeriod(string startTime,string endTime)
        {
            float[] result = new float[2] { 0, 0 };
            try
            {
                Object ret = driver.ExecuteAsyncScript(JSCodeXHR, "get",
                "https://sxqc-gbpy.21tb.com/rtr/html/studentsituation/studentsituation.elsSituation.do?startTime=" + startTime + "&endTime=" + endTime);
                JObject pairs = JObject.Parse(ret.ToString());
                result[0] = pairs["elsCourseScore"].Value<float>();
                result[1] = pairs["elsCoursePeriod"].Value<float>();
                loger.Log("查询成功 学分：" + result[0] + " 学时：" + result[1]);
            }
            catch(Exception e)
            {
                loger.Log(e.Message);
                loger.Log("学分查询失败。");
            }
            return result;
        }
    }
}
