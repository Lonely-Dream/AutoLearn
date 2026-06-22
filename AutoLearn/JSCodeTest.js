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
        courseId: "8fea90380821be82543e1110f5e6399c",
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

function courseExam(courseId,answers){
    console.log("todo courseExam",courseId,answers);
}

eval(arguments[0])
