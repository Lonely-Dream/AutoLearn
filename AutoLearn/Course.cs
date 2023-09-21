using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace AutoLearn
{
    internal abstract class Course
    {
        /// <summary>
        /// 课程ID
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// 课程名
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 学分
        /// </summary>
        public float Score { get; set; }
        /// <summary>
        /// 学时
        /// </summary>
        public float Period { get; set; }
        /// <summary>
        /// 课程代号
        /// </summary>
        public string Code { get; set; }
        /// <summary>
        /// 课程名
        /// </summary>
        public string StepToGetScore { get; set; }
        
        public WebDriver driver;
        public Loger loger;
        protected string JSCodeCourse;
        protected string JSCodeXHR;

        protected Course(string id, WebDriver driver, Loger loger, string checkCode, string XHRCode)
        {
            Id = id ?? throw new ArgumentNullException(nameof(id));
            this.driver = driver ?? throw new ArgumentNullException(nameof(driver));
            this.loger = loger;
            this.JSCodeCourse = checkCode;
            this.JSCodeXHR = XHRCode;
        }

        public abstract bool Learn(int playSpeed);
        public abstract void JumpToCourse(string eln_session_id);
        public abstract void CloseCourse();
    }
}
