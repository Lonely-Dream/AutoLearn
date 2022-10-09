const callback = arguments[arguments.length - 1];

function checkVideo() {
    console.log("Check Video");
    //检查当前课程是否学完
    if (!document.getElementById("goNextStep").className.endsWith("hide")){
        //当前课程已学完
        console.log("当前课程已学完goNextStep=-1");
        return -1;
    }
    var currentPage = Number(document.getElementsByClassName('cl-doc-curr')[0].textContent);
    var totalPage = Number(document.getElementsByClassName('cl-doc-total')[0].textContent);
    try {
        if(currentPage>=totalPage){
            document.getElementsByClassName('cy-doc-btn cy-doc-left')[0].click();
            document.getElementsByClassName('cy-doc-btn cy-doc-left')[0].click();
            document.getElementsByClassName('cy-doc-btn cy-doc-left')[0].click();
        }
        else{
            document.getElementsByClassName('cy-doc-btn cy-doc-right')[0].click()
        }
    } catch (error) {
        console.log(error);
    }

    $.ajax({
        url: CONFIG.ctx + 'html/courseStudyItem/courseStudyItem.saveCoursePrecent.do',
        type: 'post',
        dataType: 'json',
        async: false,
        data: {
            courseId: info.courseId,
            playTime: 180
        },
        success: function (d) {
            console.log(d);
        }
    });
    return 1;
}
callback(eval(arguments[0]));