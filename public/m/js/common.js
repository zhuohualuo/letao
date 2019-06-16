$(function() {
    //解除a使跳转
    $("body").on("click", "a", function() {
        mui.openWindow({
            url: $(this).attr("href")
        })
    })

})