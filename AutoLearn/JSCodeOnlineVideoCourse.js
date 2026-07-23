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

    var activeLine = document.getElementsByClassName("first-line active")[0];
    if (activeLine === undefined || activeLine === null) {
        //播放列表未就绪，通常表示已离开视频学习页面（如进入评价/考试阶段）
        console.log("未找到当前播放小节，可能已离开学习阶段。");
        return -1;
    }

    //检查当前播放小节是否未完成
    if (activeLine.parentElement.classList.contains("finish")) {
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
    if (video === undefined || video === null) {
        //video组件缺失，通常表示已离开视频学习阶段，交由上层重新判定课程状态
        console.log("video组件未找到，可能已离开学习阶段。");
        return -1;
    }
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