const callback = arguments[arguments.length - 1];
for(var i =0; i<arguments.length;++i){
    console.log(arguments[i]);
}

//获取当前课程JavaScript
function _getCourseLists(pageSize) {
    var url = '/els/html/courseCenter/courseCenter.studyTaskList.do?' +
         'courseType=NEW_COURSE_CENTER&' +
         'page.pageSize=' + pageSize + '&' +
         'page.sortName=TASKTIME&' +
         'courseStudyRecord.courseStudyType=MUST&' +
         //'courseStudyRecord.courseStatus=STUDY&' +
         'courseStudyRecord.filterPartyClass=false&' +
         'page.pageNo=1';
    $.ajax({
        url: url,
        success: function (d) {
            callback(JSON.stringify(d));
        }
    });
}

function getCourseLists(pageSize, queryURL) {
    var url = '/els/html/courseCenter/courseCenter.studyTaskList.do?' +
        'courseType=NEW_COURSE_CENTER&' +
        'page.pageSize=' + pageSize + '&' +
        queryURL+'&'+
        'courseStudyRecord.filterPartyClass=false&' +
        'page.pageNo=1';
    $.ajax({
        url: url,
        success: function (d) {
            callback(JSON.stringify(d));
        }
    });
}

function closeCourse(courseId){
    var param = "elsSign="+window.$cookies.get("eln_session_id");
    var url = "https://sxqc-gbpy.21tb.com/els/html/courseStudyItem/courseStudyItem.exitStudy.do?courseId="+courseId;
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url,false);
    xhr.withCredentials =true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function(){
        console.log("关闭", xhr.responseText);
    }

    xhr.send(param);
}

function checkVideoPlay(){
    if(window.docArr !==undefined){
        //文档类型课程，不做加载检查
        callback(0);
    }
    var text = document.body.textContent;
    if(text.indexOf("当前已有课程正在学习中")!=-1){
        var courseId = text.substr(text.indexOf("courseId")+9,32);
        console.log(courseId,"学习中")
        closeCourse(courseId);
        callback(-3);
    }
    var video = document.getElementsByTagName("video")[0];
    if(video === null || video === undefined){
        console.log("video组件未找到");
        callback(-1);
    }
    callback(0);
}

function evaluateCourse(courseId, elnSessionId){
    // 提交星级评分 GET请求
    const queryParams1 = {
        courseId: courseId,
        star: 5
    }
    $.ajax({
        type: 'GET',
        async: false,
        url: '/els/html/guangsu/studyCourse/saveOnLineCourseStar',
        data: queryParams1,
        success: function (d) {
            console.log("Star rating response:", d);
        }
    });

    // 提交完整课程评价 POST请求
    const td = [
        { name: '632857b588ce4711a74c61b356d846ae', value: '68b9000dfe7a401aac40022a0bc7da96' },
        { name: '5d8af955025048aab039906142fef39f', value: '1da11c30ab10462cacb77df9d5797b49' },
        { name: '5f8e4b352ec04f6f9d6c582a506cc79b', value: '259abf2ce5e44b709627efdaa012ba51' },
        { name: '03bd9fe51ca64cf89fcab4dfb1cdce67', value: 'd34fb18e4c334ad79bcee3d56c81d339' },
        { name: 'd6b6f56d5f574cb7bbcf8c1701c05283', value: '1、课程容易理解，不晦涩；\r\n2、讲师逻辑清晰，引导好；\r\n3、平台氛围良好，易学习。' }
    ];
    const postBody  = {
        willGoStep: 'COURSE_EVALUATE',
        answers: JSON.stringify(td),
        courseId: courseId,
        courseType: 'NEW_COURSE_CENTER'
    };
    const queryParams2 ={
        eln_session_id: elnSessionId,
        elsSign: elnSessionId
    }
    $.ajax({
        type: 'POST',
        async: false,
        url: '/els/html/studyCourse/studyCourse.saveCourseEvaluate.do?'+$.param(queryParams2),
        data: postBody,
        success: function (d) {
            var refret = {
                "transAmount": "2.0",
                "coinAmount": null,
                "coursePeriod": "0.5",
                "nextStep": null,
                "courseScore": "0.5",
                "state": "true",
                "dimLabel": "成长值"
            };
            console.log("Course evaluation response:", d);
            callback(JSON.stringify(d));
        }
    });
}

function getCookieValue(cookieName) {
    if(window.$cookies !== undefined && window.$cookies.get(cookieName) !== undefined){
        return window.$cookies.get(cookieName);
    }

    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name.trim() === cookieName) {
            return value ? decodeURIComponent(value) : "";
        }
    }
    return "";
}

function submitExam(elnSessionId, courseId, answers, examUserId) {
    console.log("Submitting course exam");
    const queryParams1 = {
        eln_session_id: elnSessionId,
        elsSign: elnSessionId,
        courseType: "NEW_COURSE_CENTER"
    };
    const postBody = {
        courseId: courseId,
        willGoStep: "COURSE_EXAM",
        answers: JSON.stringify(answers),
        examUserId: examUserId
    };
    console.log("queryParams1", queryParams1);
    console.log("postBody", postBody);

    $.ajax({
        type: 'POST',
        async: false,
        url: '/els/html/studyCourse/studyCourse.saveCourseExam.do?' + $.param(queryParams1),
        data: postBody,
        success: function (d) {
            const refret = {
                "transAmount": "3.0",
                "score": "100.0",
                "coinAmount": null,
                "coursePeriod": "1.0",
                "nextStep": null,
                "courseScore": "1.0",
                "state": "true",
                "dimLabel": "成长值",
                "examCount": "1",
                "examPass": "true"
            };
            console.log("Course exam submission response:", d);
            callback(JSON.stringify(d));
        }
    });
}

function courseExam(courseId) {
    const queryParams1 = {
        courseId: courseId,
        studyType: "COURSE_EXAM",
        courseType: "NEW_COURSE_CENTER"
    };

    $.ajax({
        type: 'GET',
        async: false,
        url: '/els/html/guangsu/studyCourse/enterCourse',
        data: queryParams1,
        success: function (d) {
            function getAnswer(questionItems) {
                var questionAnswerList = [];
                questionItems.forEach((item, j) => {
                    if (item.rightAnswer) {
                        questionAnswerList.push({
                            name: item.questionId,
                            value: item.itemId
                        });
                    }
                });
                return questionAnswerList
            }

            var examAnswerList = [];
            // Helper to process question categories safely if they exist
            const questionTypes = ['SINGLE', 'MULTIPLE', 'TRUE_FALSE'];
            questionTypes.forEach(type => {
                if (d.data && d.data.question && d.data.question[type]) {
                    d.data.question[type].forEach((question) => {
                        examAnswerList.push(...getAnswer(question.questionItems));
                    });
                }
            });

            submitExam(getCookieValue("eln_session_id"), d.data.courseId, examAnswerList, d.data.examUserId);
        }
    });
}

eval(arguments[0])
