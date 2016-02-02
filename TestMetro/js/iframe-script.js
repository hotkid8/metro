/**
 * Created by Administrator on 2016/1/21.
 */
var Script = function () {
//≤‚ ‘“≥√ÊŒﬁÀ¢–¬
    $(function () {
        var date = new Date();
        $("#ajaxtest").html(date.getSeconds());
        var winheight = $(window).height();
        $("#main-content").height(winheight - 100);
    });
    $(window).resize(function () {
        var winheight = $(window).height();
        $("#main-content").height(winheight - 100);
    });
    //control mobile menu click and hide
    $(".sidebar-menu .sub-menu .sub li a,#controlerindex").click(function(){
        $('.nav-collapse').collapse('hide');
    });
}();