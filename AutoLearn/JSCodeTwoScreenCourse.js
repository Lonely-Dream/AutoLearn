const callback = arguments[arguments.length - 1];
var frame = window.frames[0];

function learnNextSection(){
    //scormItem-no cl-catalog-link cl-catalog-link-sub item-no cl-catalog-playing
    var sections = document.getElementsByClassName("cl-catalog-item-sub");
    console.log("当前课程共有:" + sections.length +"节");
    for(var i = 0;i<sections.length;++i){
        var section = sections[i];
        var className = section.children[0].className;
        if(className.indexOf("done")==-1){
            console.log(className);
            section.children[0].click();
            return i;
        }
    }
    return -1;
}

function checkVideo() {
    console.log("Check Video");
    //检查当前课程是否学完
    if (!document.getElementById("goNextStep").className.endsWith("hide")){
        //当前课程已学完
        console.log("当前课程已学完goNextStep=-1");
        return -1;
    }

    //检查当前小节是否已经播放过
    var currentSection = document.getElementsByClassName("scormItem-no cl-catalog-link cl-catalog-link-sub item-no cl-catalog-playing")[0];
    if(currentSection.className.indexOf("done")!=-1){
        //该小节已学完
        var index = learnNextSection();
        if(index==-1){
            //当前课程已学完
            console.log("当前课程已学完learnNextSection()=-1");
            return -1;
        }
        console.log("播放第"+index+"节");
    }

    var video = frame.document.getElementsByTagName("video")[0];
    if (video.ended) {
        //该小节已学完
        var index = learnNextSection();
        if(index==-1){
            //当前课程已学完
            console.log("当前课程已学完learnNextSection()=-1");
            return -1;
        }
        console.log("播放第"+index+"节");
        return -1;
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