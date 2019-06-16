//入口函数
$(function() {

    var arr = JSON.parse(localStorage.getItem("letao") || "[]")
    if (arr.length > 0) {
        // var html = "";
        // console.log(arr);

        // arr.forEach(function(value) {
        //     html += "<li class='mui-table-view-cell'>" + value + "</li>"
        // })
        var html = template("tt", { "data": arr })
        $("#historyList").html(html)
    }
    $("#search").on("click", function() {

            //点击搜索跳转页面(要输入数据)
            var value = $(this).siblings("input").val()
            if (value.trim().length == 0) {
                return mui.alert("请输入关键词")
            }
            $("#search").siblings("input").val("")
                //将keyword放入到localStorage中
            arr.push(value);
            localStorage.setItem("letao", JSON.stringify(arr))
            location.href = "./search_result.html?keyword=" + value;


        })
        //点击清除
    $("#clear").on("click", function() {
        mui.confirm("你确定要清除吗", function(bool) {
            if (bool.index == 1) {
                console.log('aaa');
                // arr = [];
                localStorage.removeItem("letao");
                $("#historyList").html("")
            }
        })
    })
})