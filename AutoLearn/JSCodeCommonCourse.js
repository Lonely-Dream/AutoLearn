const callback = arguments[arguments.length - 1];
var urls = [
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=45",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=49",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=50",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=51",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=52",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=62",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=34",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=54",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=55",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=33",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=56",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=13",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=12",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=3",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=1",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=11",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=46",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=47",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=48",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=57",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=58",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=59",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=60",
    "http://yuanjian.xaito.net/index.php?m=Index&a=video_show&id=61"
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
