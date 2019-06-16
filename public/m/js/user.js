//ajax请求数据(登入)
var text = null;
$.ajax({
    type: 'get',
    url: " /user/queryUserMessage",
    async: false,
    success: function(res) {
        //模板引擎渲染
        console.log(res);
        text = res;
        if (res.error) {
            location.href = "login.html";
        }

    }
})

$(function() {


    $("#logout").on("click", function() {
        console.log('aaa');
        //ajax请求数据(登出)
        $.ajax({
            type: 'get',
            url: "/user/logout",
            success: function(res) {
                //模板引擎渲染
                console.log(res);
                if (res.success) {
                    mui.toast("登出成功")
                    setTimeout(function() {
                        location.href = "index1.html"
                    }, 2000)
                }
            }
        })

    })

    var html = template("userTem", text)
    $("#ulBOX").html(html)
})