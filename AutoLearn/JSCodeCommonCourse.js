const callback = arguments[arguments.length - 1];
//var arr = document.querySelector("#lt1 > div.kcnrzs > ul").children;
//var result = "";
//for (var i = 0; i < arr.length; ++i) {
//    result += '"' + arr[i].children[0].href +'",\n';
//}
//copy(result);
var urls = [
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=45",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=49",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=50",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=51",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=52",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=62",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=34",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=54",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=55",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=33",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=56",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=13",

    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=12",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=3",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=1",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=11",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=46",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=47",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=48",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=57",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=58",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=59",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=60",
    "https://yuanjian.yi-bo.cn/index.php?m=Index&a=video_show&id=61"
];
var i = 0;
function fxhr(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
        console.log(xhr.responseText);
        if (++i < urls.length) {
            callback(fxhr(urls[i]));
        }
        else {
            return true;
        }
    }
    xhr.send();
}
fxhr(urls[0]);
