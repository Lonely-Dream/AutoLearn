# AutoLearn
# 参考
https://googlechromelabs.github.io/chrome-for-testing/

https://googlechromelabs.github.io/chrome-for-testing/LATEST_RELEASE_{major_version}

https://storage.googleapis.com/chrome-for-testing-public/{full_version}/win64/chrome-win64.zip
https://storage.googleapis.com/chrome-for-testing-public/{full_version}/win64/chromedriver-win64.zip

# 学习课程
老接口
https://sxqc-gbpy.21tb.com/els/html/studyCourse/studyCourse.enterCourse.do?courseId=4d933b3b1b452766d58c5b94d87117cb&courseType=NEW_COURSE_CENTER&studyType=STUDY

新接口
https://sxqc-gbpy.21tb.com/courseSetting/courseLearning/play?courseType=NEW_COURSE_CENTER&courseId=4d933b3b1b452766d58c5b94d87117cb

# Update
## 20260622
1. 重构日志模块，优化使用方式
2. 修复无法评价课程的问题
3. 废弃 Edge 浏览器的支持
4. 修复 online video 课程跳转问题

## 20260621
1. 修复2026年online video类型的课程无法学习的问题
2. 修复启停逻辑
3. 分离参考资料

## 20250904
1. 解决 .NET9 默认启用 CET, 在一些不支持的环境下导致 0xC0000602 故障无法启动的问题

## 20250722
1. 升级框架到 .NET9.0
2. 最小支持系统 win 10.0.17763.0
3. 取消 WebDriverManager 的适用
4. 调整浏览器启动参数

## 20230921
1. 支持内网在线更新
2. 支持倍速播放
3. 修复了课程筛选bug