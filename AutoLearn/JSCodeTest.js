const callback = arguments[arguments.length - 1];
for(var i =0; i<arguments.length;++i){
    console.log(arguments[i]);
}

//获取当前课程JavaScript
function getCourseLists(pageSize) {
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

function closeCourse(courseId){
    var param = "elsSign="+CONFIG.elnSessionId;
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
    var frame = window.frames[0];
    if(frame === undefined){
        console.log("frame === undefined");
        callback(-2);
    }
    var video = frame.document.getElementsByTagName("video")[0];
    if(video === null || video === undefined){
        console.log("video组件未找到");
        callback(-1);
    }
    callback(0);
}

function evaluateCourse(courseId){
    var td = [
        { name: '632857b588ce4711a74c61b356d846ae', value: '68b9000dfe7a401aac40022a0bc7da96' },
        { name: '5d8af955025048aab039906142fef39f', value: '1da11c30ab10462cacb77df9d5797b49' },
        { name: '5f8e4b352ec04f6f9d6c582a506cc79b', value: '259abf2ce5e44b709627efdaa012ba51' },
        { name: '03bd9fe51ca64cf89fcab4dfb1cdce67', value: 'd34fb18e4c334ad79bcee3d56c81d339' },
        { name: 'd6b6f56d5f574cb7bbcf8c1701c05283', value: '1、课程容易理解，不晦涩；\r\n2、讲师逻辑清晰，引导好；\r\n3、平台氛围良好，易学习。' }
    ];
    var param = {
        willGoStep: 'COURSE_EVALUATE',
        answers: JSON.stringify(td),
        courseId: courseId,
        courseType: 'NEW_COURSE_CENTER'
    };
    $.ajax({
        type: 'POST',
        async: false,
        url: CONFIG.ctx+'html/studyCourse/studyCourse.saveCourseEvaluate.do?eln_session_id='+CONFIG.elnSessionId + "&elsSign=" + CONFIG.elnSessionId,
        data: param,
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
            callback(JSON.stringify(d));
        }
    });
}

function courseExam(courseId,answers){
    var param = {
        willGoStep: 'COURSE_EXAM',
        //answers: JSON.stringify(formData),
        answers:answers,
        courseId: info.courseId,
        examUserId: info.examUserId
    };

    $.ajax({
        type: 'POST',
        async: false,
        url: '/els/html/studyCourse/studyCourse.saveCourseExam.do?courseType=NEW_COURSE_CENTER&eln_session_id=' + CONFIG.elnSessionId + "&elsSign=" + CONFIG.elnSessionId,
        data: param,
        success: function (d) {
            console.log(d);
        }
    });
}

eval(arguments[0])
