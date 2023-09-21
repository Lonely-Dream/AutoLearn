const callback = arguments[arguments.length - 1];
var frame = window.frames[0];

function checkVideo() {
    console.log("Check Video");
    //检查当前课程是否学完
    if (!document.getElementById("goNextStep").className.endsWith("hide")){
        //当前课程已学完
        console.log("当前课程已学完goNextStep=-1");
        return -1;
    }

    var video = frame.document.getElementsByTagName("video")[0];
    if (video.ended) {
        console.log("播放完成。");
        return -1;
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