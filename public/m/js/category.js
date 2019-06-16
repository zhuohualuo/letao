$(function() {
    //利用Ajax发送请求
    $.ajax({
            url: "/category/queryTopCategory",
            type: "get",
            success: function(res) {
                // console.log(res.rows);
                var html = template("templateLeft", res)
                    // console.log(res.rows.categoryName);
                    // console.log(html);
                $("#ul").html(html)
                if (res.rows.length > 0) {
                    var id = res.rows[0].id;
                    console.log(id);

                    fun(id);
                    //一开始显示第一个li元素的内容
                    $("#ul").find("li:first-of-type").addClass("active")
                }
            }
        })
        //事件委托
    $("#ul").on("click", "li", function() {
        //获取一级目录的id
        var id = $(this).attr("data")
            //点击显示高亮
        $(this).addClass("active").siblings().removeClass("active")
        fun(id);

    })

    function fun(id) {
        $.ajax({
            type: "get",
            url: "/category/querySecondCategory",
            data: {
                "id": id
            },
            success: function(res) {
                console.log(res);
                //模板引擎渲染
                var html2 = template("templateRight", res)
                $("#ul2").html(html2)

            }
        })
    }
})