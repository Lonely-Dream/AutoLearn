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
        private readonly ScriptProvider scriptProvider;
        private string JSCodeXHR;
        private string JSCodeOnlineVideoCourse;
        private string JSCodeTwoScreenCourse;
        private string JSCodeOneScreenCourse;
        private string JSCodeTest;
        private string JSCodeOnlineDoc;
        private List<Course> courses;
        private List<CourseTask> courseTasks;
        private List<int[]> currentCourseFilters;
        private string userDataDir;
        private string diskCacheDir;
        /// <summary>
        /// 磁盘缓存大小 Byte
        /// </summary>
        private readonly long diskCacheSize = 1024 * 1024 * 1024;
        private readonly LearningWorkflowOptions defaultWorkflowOptions = new(true, false);
        private LearningWorkflowOptions workflowOptions;
        private const string CourseStepStudy = "COURSE_COURSE_STUDY";
        private const string CourseStepEvaluate = "COURSE_EVALUATE";
        private const string CourseStepExam = "COURSE_EXAM";
        private const string SupportedCourseStandard = "ONLINEVIDEOCOURSE";
        public int playSpeed = 1;
        private string elnSessionId;

        public bool DriverIsRun { get; set; }
        public bool IsLearning { get; set; }
        public AutoLearnCore()
        {
            driver = null;
            DriverIsRun = false;
            IsLearning = false;
            scriptProvider = new ScriptProvider();
            courses = new List<Course>();
            courseTasks = new List<CourseTask>();
            currentCourseFilters = new List<int[]>();
            workflowOptions = defaultWorkflowOptions;
            JSCodeXHR = scriptProvider.Get(ScriptIds.Xhr);
            JSCodeTest = scriptProvider.Get(ScriptIds.Workflow);
            JSCodeOnlineVideoCourse = scriptProvider.Get(ScriptIds.OnlineVideoCourse);
            JSCodeTwoScreenCourse = scriptProvider.Get(ScriptIds.TwoScreenCourse);
            JSCodeOneScreenCourse = scriptProvider.Get(ScriptIds.OneScreenCourse);
            JSCodeOnlineDoc = scriptProvider.Get(ScriptIds.OnlineDocCourse);
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
                userDataDir = System.IO.Path.Combine(System.IO.Path.GetTempPath(), "AutoLearn-"+Path.GetRandomFileName());
                System.IO.Directory.CreateDirectory(userDataDir);
                Log.Info("临时用户数据目录：" + userDataDir);
                diskCacheDir = System.IO.Path.Combine(System.IO.Path.GetTempPath(), "AutoLearnCache");
                System.IO.Directory.CreateDirectory(diskCacheDir);
                Log.Info($"磁盘缓存大小：{diskCacheSize / 1024 / 1024}MB 缓存目录：{diskCacheDir}");

                options.AddArgument($"--user-data-dir={userDataDir}");
                options.AddArgument($"--disk-cache-dir={diskCacheDir}");
                options.AddArgument($"--disk-cache-size={diskCacheSize}");
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
        public void GetCourseList(List<int[]> courseFilters, LearningWorkflowOptions workflowOptions)
        {
            currentCourseFilters = courseFilters.Select(item => new[] { item[0], item[1] }).ToList();
            this.workflowOptions = workflowOptions;
            RefreshCourseTasks();
        }

        /// <summary>
        /// 刷新课程任务列表，并统计各类课程数量
        /// </summary>
        private void RefreshCourseTasks()
        {
            courseTasks = FetchCourseTasks(currentCourseFilters);
            courses.Clear();

            int totalCourse = courseTasks.Count;
            int cntExam = courseTasks.Count(item => item.CurrentStep == CourseStepExam);
            int cntStudy = courseTasks.Count(item => item.CurrentStep == CourseStepStudy);
            int cntSupported = courseTasks.Count(item => item.CurrentStep == CourseStepStudy && item.CourseStandard == SupportedCourseStandard);
            int cntUnsupported = cntStudy - cntSupported;

            Log.Info("当前筛选下的课程总数:" + totalCourse.ToString());
            Log.Info("待考试课程数:" + cntExam.ToString());
            Log.Info("待学习课程数:" + cntSupported.ToString());
            if (cntUnsupported > 0)
            {
                Log.Info("已跳过的非在线视频学习课程数:" + cntUnsupported.ToString());
            }
        }

        private List<CourseTask> FetchCourseTasks(List<int[]> courseFilters)
        {
            if (driver == null)
            {
                return new List<CourseTask>();
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
            List<CourseTask> result = new List<CourseTask>();
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

                result.Add(new CourseTask
                {
                    CourseStandard = courseStandard,
                    Id = courseId,
                    Name = courseName,
                    Code = courseCode,
                    StepToGetScore = stepToGetScore,
                    CurrentStep = currentStep,
                    ShouldGetScore = shouldGetScore,
                    CoursePeriod = coursePeriod,
                    Limited = limited
                });
            }

            return result;
        }

        private void BuildLearningQueue()
        {
            courses.Clear();

            foreach (CourseTask task in courseTasks)
            {
                if (task.CurrentStep != CourseStepStudy)
                {
                    continue;
                }

                Course? course = CreateCourse(task);
                if (course != null)
                {
                    courses.Add(course);
                }
            }
        }

        private Course? CreateCourse(CourseTask task)
        {
            if (driver == null)
            {
                return null;
            }

            if (task.CourseStandard == SupportedCourseStandard)
            {
                Log.Info(task.Name + " " + task.CourseStandard);
                return new OnlineVideoCourse(task.Id, task.Name, task.ShouldGetScore,
                    task.CoursePeriod, task.Code, task.StepToGetScore,
                    driver, JSCodeOnlineVideoCourse, JSCodeXHR);
            }

            Log.Info("暂不启用：" + task.Name + " 类型：" + task.CourseStandard);
            return null;
        }

        private void ProcessPendingActionableTasks()
        {
            List<string> actionableCourseIds = courseTasks
                .Where(item => item.CurrentStep == CourseStepEvaluate || item.CurrentStep == CourseStepExam)
                .Select(item => item.Id)
                .Distinct()
                .ToList();

            foreach (string courseId in actionableCourseIds)
            {
                if (!IsLearning)
                {
                    return;
                }

                ProcessCourseFollowUpSteps(courseId, false);
            }
        }

        private void ProcessCourseFollowUpSteps(string courseId, bool waitForStudyTransition)
        {
            const int MaxRefreshRetry = 5;
            int refreshRetry = 0;

            while (IsLearning)
            {
                RefreshCourseTasks();
                CourseTask? courseTask = courseTasks.FirstOrDefault(item => item.Id == courseId);

                if (courseTask == null)
                {
                    Log.Info("课程流程已完成：" + courseId);
                    return;
                }

                if (waitForStudyTransition && courseTask.CurrentStep == CourseStepStudy)
                {
                    if (refreshRetry >= MaxRefreshRetry)
                    {
                        Log.Info("课程学习完成后未发现可处理的评价或考试步骤：" + courseTask.Name);
                        return;
                    }

                    refreshRetry++;
                    Log.Info($"等待课程状态刷新：{courseTask.Name} {refreshRetry}/{MaxRefreshRetry}");
                    Thread.Sleep(2000);
                    continue;
                }

                waitForStudyTransition = false;

                if (!TryHandleCourseStep(courseTask))
                {
                    return;
                }
            }
        }

        private bool TryHandleCourseStep(CourseTask courseTask)
        {
            if (courseTask.CurrentStep == CourseStepEvaluate)
            {
                Log.Info("待评价：" + courseTask.Name + " 类型：" + courseTask.CourseStandard);
                if (!workflowOptions.AutoEvaluate)
                {
                    Log.Info("评价被关闭。");
                    return false;
                }

                EvalutionCourse(courseTask.Id);
                return true;
            }

            if (courseTask.CurrentStep == CourseStepExam)
            {
                Log.Info(courseTask.Name + " 需要进行考试");
                if (!workflowOptions.AutoExam)
                {
                    Log.Info("自动考试被关闭。");
                    return false;
                }

                ExamCourse(courseTask.Id);
                return true;
            }

            Log.Info(courseTask.Name + " 处于：" + courseTask.CurrentStep);
            return false;
        }
        public void Learn()
        {
            if(driver == null)
            {
                return;
            }
            ProcessPendingActionableTasks();
            if (!IsLearning)
            {
                Log.Info("停止学习");
                return;
            }

            RefreshCourseTasks();
            BuildLearningQueue();

            if (courses.Count > 1)
            {
                // 先访问一次课程播放页面,进行资源缓存
                Course course = courses[0];
                course.JumpToCourse(elnSessionId);
                Thread.Sleep(2000);
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

                    ProcessCourseFollowUpSteps(course.Id, true);
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

            RefreshCourseTasks();
            ProcessPendingActionableTasks();

            Log.Info("当前筛选下的自动学习流程已完成");
            MessageBox.Show("当前筛选下的自动学习流程已完成");
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
        private void ExamCourse(string courseId)
        {
            if (driver == null)
            {
                return;
            }
            try
            {
                driver.Navigate().GoToUrl("https://sxqc-gbpy.21tb.com/courseSetting/courseLearning/play?"
                                        + "courseType=NEW_COURSE_CENTER&"
                                        + "courseId=" + courseId);
                string cmd = $"courseExam('{courseId}');";
                Object ret = driver.ExecuteAsyncScript(JSCodeTest, cmd);
                if (ret == null)
                {
                    Log.Error("考试失败：" + courseId);
                    return;
                }
                Log.Info(ret.ToString());

                JObject pairs = JObject.Parse(ret.ToString());
                bool state = pairs["state"].Value<bool>();
                if (state)
                {
                    bool examPass = pairs["examPass"].Value<bool>();
                    float score = pairs["score"].Value<float>();
                    int examCount = pairs["examCount"].Value<int>();
                    if(!examPass){
                        Log.Info($"考试未通过，成绩：{score}，考试次数：{examCount}");
                    }
                    else{
                        float courseScore = pairs["courseScore"].Value<float>();
                        float coursePeriod = pairs["coursePeriod"].Value<float>();
                        Log.Info($"考试通过，成绩：{score}，考试次数：{examCount} 获得：{courseScore}学分 {coursePeriod}学时");
                    }
                }
                else
                {
                    Log.Error("考试失败：" + courseId);
                }
            }
            catch (Exception e)
            {
                Log.Error("考试失败：" + courseId + e);
            }
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
