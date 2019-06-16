$(function() {
    //页面加载
    //通过Ajax渲染数据
    $.ajax({
        url: " /address/queryAddress",
        type: "get",
        success: function(res) {
            console.log(res);

        }
    })
})