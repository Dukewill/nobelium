!function() {
    function a(a) {
        var b, c;
        if (a.preventDefault(),
        b = window.getSelection().toString() + "<br><br>本文采用 CC BY-NC-SA 4.0 许可协议，著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。<br>作者：Dukewill<br>来源：" + document.title + "<br>链接：" + window.location.href,
        c = window.getSelection().toString() + "\n\n本文采用 CC BY-NC-SA 4.0 许可协议，著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\n作者：Dukewill\n来源：" + document.title + "\n链接：" + window.location.href,
        a.clipboardData)
            a.clipboardData.setData("text/html", b),
            a.clipboardData.setData("text/plain", c);
        else if (window.clipboardData)
            return window.clipboardData.setData("text", c)
    }
    document.body.addEventListener("copy", function(b) {
        window.getSelection().toString().length > 10 && a(b)
    })
}();