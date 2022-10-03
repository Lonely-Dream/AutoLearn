// 网络请求
const callback = arguments[arguments.length - 1];
var method = arguments[0];
var url = arguments[1];
var param = null;
if(method=="get"){
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.withCredentials =true;
    
    xhr.onreadystatechange = function(){
        console.log(xhr.responseText);
        callback(xhr.responseText);
    }
    xhr.send();
}
else if(method=="post"){
    if(arguments.length==3){
        param = arguments[2];
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url,false);
    xhr.withCredentials =true;
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    xhr.onreadystatechange = function(){
        console.log(xhr.responseText);
        callback(JSON.stringify(xhr.responseText));
    }

    xhr.send(param);
}

// $.ajax({
//     url: url,
//     success: function (d) {
//         callback(JSON.stringify(d));
//     }
// });