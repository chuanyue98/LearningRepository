
//关闭应用 
common.killApp = function (appName) {
    let forcedStopStr = ["结束", "停", "强"];
    let packageName = app.getPackageName(appName);//获取应用包名 通过软件名
    if (packageName) {
        app.openAppSetting(packageName);//进入应用设置信息
        text(appName).waitFor();//等待查询到名字出现
        for (var i = 0; i < forcedStopStr.length; i++) {
            if (textContains(forcedStopStr[i]).exists()) {//判定关键字是否存在
                sleep(500);
                let forcedStop = textContains(forcedStopStr[i]).findOne();
                if (forcedStop.enabled()) {
                    text("结束运行").waitFor();
                    //这里的结束运行不能被点击,我用控件中心点来点击
                    var 结束运行 = text("结束运行").findOne().bounds();
                    click(结束运行.centerX(), 结束运行.centerY());
                    sleep(500);
                    forcedStop.click();
                    text("确定").findOne().click();
                    sleep(1000);
                    home();
                    break;
                }
            }
        }
    }
}


