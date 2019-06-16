$(function() {
    //点击确认修改密码
    $("#modify-btn").on("tap", function() {
            // console.log('aaa');
            //获取表单内容
            var originpass = $("[name='originpass']").val()
            var oldpass = $("[name='oldpass']").val()
            var newpass = $("[name='newpass']").val()
            var vCode = $("[name='vCode']").val()
            console.log(vCode);

            //ajax请求数据
            $.ajax({
                type: "post",
                url: " /user/updatePassword",
                data: {
                    oldPassword: oldpass,
                    newPassword: originpass,
                    vCode: vCode
                },
                beforeSend: function() {
                    if (!originpass.trim()) {
                        mui.toast("密码格式错误")
                        return
                    }
                    if (oldpass != newpass) {
                        mui.toast("密码不一致")
                        return
                    }

                },
                success: function(res) {
                    console.log(res);
                    if (res.success) {
                        mui.toast("修改成功")
                        setTimeout(function() {
                            location.href = "./login.html"
                        }, 2000)
                    }
                }
            })

        })
        //点击获取验证码
    $("#vCode").on("tap", function() {
        // console.log('bbb');
        // ajax请求数据
        $.ajax({
            type: "get",
            url: ' /user/vCodeForUpdatePassword',
            success: function(res) {
                console.log(res.vCode);

            }
        })
    })
})