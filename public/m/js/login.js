$(function() {
    $("#login").on("click", function() {
        console.log('aaa');
        var username = $("[name='username']").val()
        var password = $("[name='password']").val()
        $.ajax({
            type: "post",
            url: "/user/login",
            data: {
                username: username,
                password: password
            },
            datatype: "json",
            beforeSend: function() {
                if (username.trim() == "") {
                    mui.toast("用户名错误")
                }
                if (password.trim() == "") {
                    mui.toast("密码错误")
                }
            },
            success: function(res) {
                console.log(res);
                if (res.success) {
                    mui.toast("登录成功")
                    setTimeout(function() {
                        location.href = "user.html";
                    }, 2000)
                } else {
                    mui.toast("登录失败")
                }
            }

        })

    })
})