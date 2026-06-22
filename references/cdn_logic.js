function f() {
    var e = ""; e = window.location.origin + "/sourceConfig.json";
    var n = new XMLHttpRequest;
    n.open("get", e), n.send(null), n.onload = function () {
        if (200 == n.status) {
            var e = JSON.parse(n.responseText), c = e.sourceUrl + "/courseSetting/";
            window.cdnPath = c, i.p = c, window.__webpack_require__ = i
        } else {
            c = window.location.origin + "/courseSetting/"; window.cdnPath = c, i.p = c, window.__webpack_require__ = i
        }
    }, n.onerror = function () {
        var e = window.location.origin + "/courseSetting/"; window.cdnPath = e, i.p = e, window.__webpack_require__ = i
    }
}

function asyncAppendNode(fileName, path, insertTimeout, retryCount) {
    var time = null;
    var count = 0;
    // css，js文件地址
    function createUrl() {
        return window.cdnPath + path + '/' + fileName
    }
    function insert() {
        var tagName = 'link'
        if (/.js/.test(fileName)) {
            tagName = 'script'
        }
        var node = document.createElement(tagName)
        if (tagName === 'link') {
            node.type = 'text/css'
            node.rel = 'stylesheet'
            node.href = createUrl()
            document.head.appendChild(node)
        } else {
            node.src = createUrl()
            document.head.appendChild(node)
        }
    }

    function startTask() {
        count++;
        time && clearTimeout(time);
        if (window.cdnPath) {
            setTimeout(() => {
                console.log((insertTimeout || 200) + 'ms后插入')
                insert()
            }, insertTimeout || 200)
        } else {
            if (!retryCount || retryCount > count) {
                time = setTimeout(() => {
                    startTask()
                }, 200)
            }
        }
    }
    startTask()
}