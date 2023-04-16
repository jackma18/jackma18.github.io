// 设计一个函数，这个函数用于获取当前屏幕的大小（宽度），动态给html添加font-size
(function (doc, win) {
    // 获取到html这个标签
    let docEL = doc.documentElement;
    //检测当前这个屏幕时横屏还是竖屏
    let resizeEvent = "orientationchange" in window ? "orientationchange" : "resize",
        //计算出当前屏幕所用的font-size值
        recalc = function () {
            //获取到当前屏幕的宽度
            const clientWidth = docEL.clientWidth;

            if (!clientWidth) return;
            //屏幕大于750px，给html添加font-size：100px，内联样式
            if (clientWidth > 750) {
                docEL.style.fontSize = "100px";
            } else {
                //屏幕小于等于750px，动态计算当前屏幕所用的font-size的值，以iphone6、7、8为例，375px font-size：50px
                docEL.style.fontSize = (clientWidth / 750) * 100 + "px";
            }
        }

    recalc();
    //窗口发生变化，重新计算
    win.addEventListener(resizeEvent, recalc, false);
    //页面重新加载，重新计算
    doc.addEventListener("DOMContentLoaded", recalc, false);

})(document, window);