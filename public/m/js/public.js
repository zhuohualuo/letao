$(function() {
    $("body").on("tap", "a", function() {
        mui.openWindow({
            url: $(this).attr("href")
        })
    })

    //获取验证码
    $("#login-now").on("tap", function() {
        $.ajax({
            type: "get",
            url: "/user/vCode",
            success: function(res) {
                console.log(res.vCode);

            }
        })
    })

    //实现注册
    $("#login").on("click", function() {
        console.log('aaa');
        var username = $("[name='username']").val()
        var mobile = $("[name='mobile']").val()
        var password = $("[name='password']").val()
        var againpass = $("[name='againpass']").val()
        var vCode = $("[name='vCode']").val()
        console.log(username + '---' + mobile + '----' + password + '---' + againpass + '---' + vCode);

        $.ajax({
            type: "post",
            url: "/user/register",
            beforeSend: function() {
                if (username.trim() == "") {
                    mui.toast("请输入正确的用户名")
                }
                var reg = /^1\d{10}$/
                if (!reg.test(mobile)) {
                    mui.toast("请输入正确的号码")
                }
                if (password != againpass) {
                    mui.toast("两次密码不一样")
                }
                if (vCode.trim() == "") {
                    mui.toast("验证码不正确")
                }
            },
            data: {
                username: username,
                mobile: mobile,
                password: password,
                vCode: vCode
            },
            success: function(res) {
                console.log(res);
                mui.toast("注册成功")
                setTimeout(function() {
                    location.href = "login.html";

                }, 2000)
            }
        })
    })
})