using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium.Support.UI;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AutoLearn
{
    internal class AutoLearnCore
    {
        private WebDriver? driver;
        private string JSCodeXHR;
        private string JSCodeOnlineVideoCourse;
        private string JSCodeTwoScreenCourse;
        private string JSCodeOneScreenCourse;
        private string JSCodeTest;
        private string JSCodeOnlineDoc;
        private List<Course> courses;
        private string userDataDir;
        public int playSpeed = 1;
        private string elnSessionId;

        public bool DriverIsRun { get; set; }
        public bool IsLearning { get; set; }
        public AutoLearnCore()
        {
            driver = null;
            DriverIsRun = false;
            IsLearning = false;
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
            {
                using StreamReader sr = new StreamReader("JSCodeOneScreenCourse.js");
                JSCodeOneScreenCourse = sr.ReadToEnd();
            }
            {
                using StreamReader sr = new StreamReader("JSCodeOnlineDoc.js");
                JSCodeOnlineDoc = sr.ReadToEnd();
            }
        }
        public string GenerateQueryURL(List<int[]> courseFilters)
        {
            string[] courseFilterType = new string[] {
                "courseStudyRecord.getWay",
                "courseStudyRecord.courseStudyType",
                "courseStudyRecord.stepToGetScore",
                "courseStudyRecord.courseStatus",
                "page.sortName"
            };
            string[,] courseFilterItem = new string[,] {
                //courseStudyRecord.getWay
                {"","SELF","STUDY_PLAN","RM_PROJECT" },

                //courseStudyRecord.courseStudyType
                {"","MUST","SELECTIVE","SELF" },

                //courseStudyRecord.stepToGetScore
                {"","COURSE_COURSE_STUDY","COURSE_EVALUATE","COURSE_EXAM" },

                //courseStudyRecord.courseStatus
                {"","NOT_STARTED","STUDY","HAS_ENDED" },

                //page.sortName
                {"STUDYTIME","TASKTIME","LIMITTIME","STUDYTIME" }
            };
            List<string> temp = new List<string> { };

            foreach (var courseFilter in courseFilters)
            {
                temp.Add(string.Format("{0}={1}",
                        courseFilterType[courseFilter[0]],
                        courseFilterItem[courseFilter[0], courseFilter[1]]));
            }

            return string.Join("&", temp);
        }
        public void CreateDriver()
        {
            try
            {
                var options = new ChromeOptions();
                string userDataDir = System.IO.Path.Combine(System.IO.Path.GetTempPath(), "AutoLearn-"+Path.GetRandomFileName());
                System.IO.Directory.CreateDirectory(userDataDir);
                Log.Info("临时用户数据目录：" + userDataDir);

                options.AddArgument($"--user-data-dir={userDataDir}");
                //options.AddArgument(@"--load-extension=D:\CSharp\AutoLearn\cdn-injector");
                options.BinaryLocation = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "chrome-win64", "chrome.exe");

                var driverPath = AppDomain.CurrentDomain.BaseDirectory;
                driver = new ChromeDriver(driverPath, options);
                return;
            }
            catch (DriverServiceNotFoundException e)
            {
                Log.Error(e.Message);
                Log.Error("Chrome Driver未找到，请自行下载或联系开发者");
            }
            catch (InvalidOperationException e)
            {
                Log.Error(e.Message);
                Log.Error("Chrome Driver版本不兼容，请自行更新或联系开发者");
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                Log.Error("未定义故障");
            }
            driver = null;
        }
        /// <summary>
        /// 初始化浏览器
        /// </summary>
        public bool Init()
        {
            CreateDriver();

            if (driver == null)
            {
                DriverIsRun = false;
                return false;
            }
            DriverIsRun = true;
            return true;
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
            // 清理临时用户数据目录
            if (!string.IsNullOrEmpty(userDataDir) && Directory.Exists(userDataDir))
            {
                try
                {
                    Directory.Delete(userDataDir, true);
                    Log.Info("已删除临时用户数据目录：" + userDataDir);
                }
                catch (Exception e)
                {
                    Log.Error("删除临时用户数据目录失败：" + e.Message);
                }
            }
            DriverIsRun = false;
            IsLearning = false;
        }
        public async Task Login(string loginName,string password)
        {
            if(driver == null)
            {
                return;
            }
            driver.Navigate().GoToUrl("https://sxqc-gbpy.21tb.com/");

            // 等待登录输入框加载完成
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(60));
            wait.Until(d =>
            {
                try
                {
                    var element = d.FindElement(By.Id("loginName"));
                    if (element.Displayed)
                    {
                        element.Click();
                        return true;
                    }
                    return false;
                }
                catch (NoSuchElementException)
                {
                    return false;
                }
            });

            Log.Info("尝试登录");
            //driver.FindElement(By.Id("loginName")).SendKeys(loginName);
            //driver.FindElement(By.Id("password")).SendKeys(password);
            //driver.FindElement(By.ClassName("login_Btn")).Submit();
            //使用原生js辅助登录
            driver.ExecuteScript($"$('#loginName').val('{loginName}')");
            driver.ExecuteScript($"$('#password').val('{password}')");
            driver.ExecuteScript("$(\"#continueLogin\").val(true);check();");
            driver.Navigate().GoToUrl("https://sxqc-gbpy.21tb.com/els/html/index.parser.do?id=NEW_COURSE_CENTER");
            Log.Info("登录成功");
            Cookie cookie = driver.Manage().Cookies.GetCookieNamed("eln_session_id");
            elnSessionId = cookie.Value;
            Log.Info(($"{cookie.Name}={cookie.Value}"));
        }
        public void GetCourseList(List<int[]> courseFilters, bool isEvalution)
        {
            if (driver == null)
            {
                return;
            }

            string queryURL = GenerateQueryURL(courseFilters);
            Log.Info(queryURL);

            //获取待学习课程 第一次访问
            string buffer = (string)driver.ExecuteAsyncScript(JSCodeTest, 
                string.Format("getCourseLists({0},'{1}')", 12,queryURL));
            JObject keyValuePairs = JObject.Parse(buffer);
            int totalCourse = keyValuePairs["total"].Value<int>();

            //获取全部待学习课程
            buffer = (string)driver.ExecuteAsyncScript(JSCodeTest,
                string.Format("getCourseLists({0},'{1}')", totalCourse, queryURL));
            keyValuePairs = JObject.Parse(buffer);
            JArray rows = keyValuePairs["rows"].Value<JArray>();
            int cntExam = 0;
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
                bool limited = item["limited"].Value<bool>();

                if (courseStandard == null)
                {
                    Log.Error("读取课程类型错误。");
                    continue;
                }
                if (limited)
                {
                    Log.Info(courseName + " 受限课程，将跳过。");
                    continue;
                }
                if(currentStep == "COURSE_EVALUATE")
                {
                    Log.Info("待评价：" + courseName + " 类型：" + courseStandard);
                    if (isEvalution)
                    {
                        EvalutionCourse(courseId);
                    }
                    else
                    {
                        Log.Info("评价被关闭。");
                    }
                }
                else if(currentStep == "COURSE_COURSE_STUDY")
                {
                    if (courseStandard == "ONLINEVIDEOCOURSE")
                    {
                        Log.Info(courseName + " ONLINEVIDEOCOURSE");
                        courses.Add(
                            new OnlineVideoCourse(courseId, courseName, shouldGetScore,
                            coursePeriod, courseCode, stepToGetScore,
                            driver, JSCodeOnlineVideoCourse, JSCodeXHR)
                        );
                    }
                    else if (courseStandard == "ONLINEDOC")
                    {
                        Log.Info(courseName + " ONLINEDOC");
                        courses.Add(
                            new OnlineDocCourse(courseId, courseName, shouldGetScore,
                            coursePeriod, courseCode, stepToGetScore,
                            driver, JSCodeOnlineDoc, JSCodeXHR)
                        );
                    }
                    else if (courseStandard == "ONESCREEN")
                    {
                        Log.Info(courseName + " ONESCREEN");
                        courses.Add(
                            new OneScreenCourse(courseId, courseName, shouldGetScore,
                            coursePeriod, courseCode, stepToGetScore,
                            driver, JSCodeOneScreenCourse, JSCodeXHR)
                        );
                    }
                    else if (courseStandard == "TWOSCREEN")
                    {
                        Log.Info(courseName+ " TWOSCREEN");
                        courses.Add(
                            new TwoScreenCourse(courseId, courseName, shouldGetScore,
                            coursePeriod, courseCode, stepToGetScore,
                            driver, JSCodeTwoScreenCourse, JSCodeXHR)
                        );
                    }
                    else if (courseStandard == "THREESCREEN")
                    {
                        Log.Info(courseName+ " THREESCREEN");
                        courses.Add(
                            new TwoScreenCourse(courseId, courseName, shouldGetScore,
                            coursePeriod, courseCode, stepToGetScore,
                            driver, JSCodeTwoScreenCourse, JSCodeXHR)
                        );
                    }
                    else
                    {
                        Log.Error("暂时不支持：" + courseName + " 类型：" + courseStandard);
                    }
                }
                else if(currentStep == "COURSE_EXAM")
                {
                    ++cntExam;
                    Log.Info(courseName + " 需要进行考试");
                }
                else
                {
                    Log.Info(courseName + " 处于：" + currentStep);
                }
            }
            Log.Info("当前筛选下的课程总数:" + totalCourse.ToString());
            Log.Info("待考试课程数:" + cntExam.ToString());
            Log.Info("待学习课程数:" + courses.Count.ToString());
        }
        public void Learn()
        {
            if(driver == null)
            {
                return;
            }
            for (int i = 0; i < courses.Count; )
            {
                Course course = courses[i];
                int cnt_init = 0;
                int realPlaySpeed = 0;

                try
                {
                    Log.Info("尝试跳转到下一门课程");
                    course.JumpToCourse(elnSessionId);
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
                            Log.Info("video组件未找到");
                        }
                        else if(result == -2)
                        {
                            Log.Info("frame未加载完成");
                        }
                        else if(result == -3)
                        {
                            Log.Info("有课程正在学习中，尝试终止它。");
                            Thread.Sleep(2000);
                            break;
                        }
                        else
                        {
                            Log.Error("未知错误。");
                        }

                        Log.Info(String.Format("Loding... {0}/{1}", countRetry++, MaxRetry));
                        Thread.Sleep(1000);
                        if(countRetry == MaxRetry)
                        {
                            result = 1;
                            break;
                        }
                    } while (IsLearning);
                    if (!IsLearning)
                    {
                        Log.Info("停止学习");
                        return;//AutoLearnCore 退出
                    }
                    if (result == 1 || result == -3)
                    {
                        Log.Info("重新加载该课程。");
                        continue;
                    }
                    Log.Info("开始学习: " + course.Name);
                    while (!course.Learn(realPlaySpeed))
                    {
                        Thread.Sleep(5000);
                        //视频开始时，倍速可能会导致视频反复横跳
                        if (cnt_init > 4)
                        {
                            realPlaySpeed = playSpeed;
                        }
                        else
                        {
                            cnt_init++;
                        }

                        if (!IsLearning)
                        {
                            Log.Info("停止学习");
                            return;//AutoLearnCore 退出
                        }
                    }
                    ++i;
                }
                catch (Exception e)
                {
                    if (!IsLearning)
                    {
                        break;
                    }
                    course.CloseCourse();
                    Log.Error(course.Id + e.Message);
                }
            }

            Log.Info("当前筛选下的所有课程学习阶段已完成");
            MessageBox.Show("当前筛选下的所有课程学习阶段已完成");
        }
        private void EvalutionCourse(string courseId)
        {
            if(driver== null)
            {
                return;
            }
            try
            {
                driver.Navigate().GoToUrl("https://sxqc-gbpy.21tb.com/courseSetting/courseLearning/play?"
                                        + "courseType=NEW_COURSE_CENTER&"
                                        + "courseId=" + courseId);
                string cmd = $"evaluateCourse('{courseId}','{elnSessionId}');";
                Object ret = driver.ExecuteAsyncScript(JSCodeTest, cmd);
                if (ret == null)
                {
                    Log.Error("评价失败：" + courseId);
                    return;
                }
                Log.Info(ret.ToString());

                JObject pairs = JObject.Parse(ret.ToString());
                bool state = pairs["state"].Value<bool>();
                if (state)
                {
                    //检查是否有考试
                    string nextStep = pairs["nextStep"].Value<string>();
                    Log.Info(nextStep);
                    if (nextStep != null && nextStep == "COURSE_EXAM")
                    {
                        Log.Info("自动评价已完成，该课程需要测试。");
                    }
                    else
                    {
                        float courseScore = pairs["courseScore"].Value<float>();
                        float coursePeriod = pairs["coursePeriod"].Value<float>();
                        Log.Info(" 获得：" + courseScore + "学分 " + coursePeriod + "学时");
                    }
                }
                else
                {
                    Log.Error("评价失败：" + courseId);
                }
            }
            catch (Exception e)
            {
                Log.Error("评价失败：" + courseId + e);
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
                Log.Info("查询成功 学分：" + result[0] + " 学时：" + result[1]);
            }
            catch(Exception e)
            {
                Log.Error(e.Message);
                Log.Error("学分查询失败。");
            }
            return result;
        }
    }
}
