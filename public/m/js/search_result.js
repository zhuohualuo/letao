$(function() {

    var hh = getUrl(location.href, "keyword");
    console.log(hh);


    function getUrl(url, name) {
        var str = url.substr(url.indexOf("?") + 1)
        var arr = str.split("&");
        for (var i = 0; i < arr.length; i++) {
            var arr1 = arr[i].split("=")
            if (arr1[0] == name) {
                return arr1[1]
            }
        }
    }




    // ajax先渲染一次
    // getDate(hh);

    var page = 1;
    var pageSize = 1;
    // var html = "";
    var that = null;
    var priceSeach = 1;
    var numSearch = 1;
    //上拉加载
    mui.init({
        pullRefresh: {
            container: "#refreshContainer", //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up: {
                height: 50, //可选.默认50.触发上拉加载拖动距离
                auto: true, //可选,默认false.自动上拉加载一次
                contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
                callback: getDate
                    // this.endPullupToRefresh(false);
                    //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });


    function getDate() {
        //ajax获取数据
        that = this
        $.ajax({
            url: "/product/queryProduct",
            type: "get",
            data: {
                page: page++,
                pageSize: pageSize,
                keyWord: hh,
                price: priceSeach,
                num: numSearch
            },
            success: function(res) {
                if (res.data.length == 0) {
                    return that.endPullupToRefresh(true)
                }
                console.log(res);
                //模板引擎渲染
                html = template("searchBox", res);
                // $("#ulBox").html("")
                $("#ulBox").append(html)

                that.endPullupToRefresh(false);

            }
        })

    }

    //排序点击事件
    $("#price").on("tap", function() {
        priceSeach = priceSeach == 1 ? 2 : 1;
        page = 1;
        mui('#refreshContainer').pullRefresh().refresh(true);
        $("#ulBox").html("")
        getDate.call(that)
    })
    $("#num").on("tap", function() {
        num = num == 1 ? 2 : 1;
        num = 1;
        mui('#refreshContainer').pullRefresh().refresh(true);
        $("#ulBox").html("")
        getDate.call(that)
    })

})