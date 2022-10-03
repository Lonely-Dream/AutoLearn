const callback = arguments[arguments.length - 1];
var frame = window.frames[0];

function learnNextCourse(isNext) {
    var chapters = frame.document.getElementsByClassName("section");
    var sectionNumber = 0;
    for (var i = 0; i < chapters.length; ++i) {
        sectionNumber +=chapters[i].children.length;
    }
    console.log("当前课程共有:" + chapters.length + "章",sectionNumber+"节");
    for (var i = 0; i < chapters.length; ++i) {
        var sections = chapters[i].children;
        for (var j = 0; j < sections.length; ++j) {
            var section = sections[j];
            console.log(section.getElementsByClassName("section-title")[0].textContent, section.className);
            if (!section.className.endsWith("finish")) {
                if (isNext) {
                    section.click();
                }
                return 0;
            }
        }
    }
    //全部章节已学完
    return -1;
}
function checkVideo() {
    console.log("Check Video");

    //检查当前播放小节是否未完成
    if (frame.document.getElementsByClassName("first-line active")[0].parentElement.className.endsWith("finish")) {
        //已完成
        //检查章节是否全部学完
        if (learnNextCourse(true) == -1) {
            return -1;
        }
    }
    else{
        if (learnNextCourse(false) == -1) {
            return -1;
        }
    }

    var video = frame.document.getElementsByTagName("video")[0];
    if (video.ended) {
        console.log("当前小节播放完成。")
        return learnNextCourse(true);
    }
    else {
        video.play();
        video.muted = true;
        var timeLeft = parseInt(video.duration - video.currentTime);
        console.log("剩余时间:", timeLeft);
        return timeLeft;
    }
}
callback(eval(arguments[0]));