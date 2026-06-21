const callback = arguments[arguments.length - 1];

function learnNextCourse(isNext) {
    var sections = document.getElementsByClassName("section");
    var sectionItemNumber = 0;
    for (var i = 0; i < sections.length; ++i) {
        sectionItemNumber +=sections[i].children.length;
    }
    console.log("当前课程共有:" + sections.length + "章",sectionItemNumber+"节");
    for (var i = 0; i < sections.length; ++i) {
        var sectionItems = sections[i].children;
        for (var j = 0; j < sectionItems.length; ++j) {
            var sectionItem = sectionItems[j];
            console.log(sectionItem.textContent, sectionItem.className);
            if (!sectionItem.classList.contains("finish")) {
                if (isNext) {
                    sectionItem.click();
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
    if (document.getElementsByClassName("first-line active")[0].parentElement.classList.contains("finish")) {
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

    var video = document.getElementsByTagName("video")[0];
    if (video.ended) {
        console.log("当前小节播放完成。")
        return learnNextCourse(true);
    }
    else {
        video.play();
        console.log("video.playbackRate", video.playbackRate);
        video.muted = true;
        var timeLeft = parseInt(video.duration - video.currentTime);
        console.log("剩余时间:", timeLeft);
        return timeLeft;
    }
}
callback(eval(arguments[0]));