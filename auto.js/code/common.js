var common = {}

/** 
* 解锁屏幕
*/ 
common.unlock = function()
{
    if(!device.isScreenOn())
    {
        device.wakeUp();
        sleep(500);
        swipe(500,2000,500,1000,210);
        password_input();
    }
}
function password_input()
{
    var password = "1234"
    for(var i = 0; i < password.length; i++)
    {
        var p = text(password[i].toString()).findOne().bounds();
        click(p.centerX(), p.centerY());
        sleep(100);
    }
}

/** 
* 关闭应用
*/ 
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

/**
 * 手机所有app名字,包名
 */
common.getAllAppNameAndPackageName = function () {
    var names=[]
    var pm=context.getPackageManager()

    let list=pm.getInstalledApplications(0)
    for(let i=0;i<list.size();i++){
      let p=list.get(i)
      var app={
        appName:p.loadLabel(pm),
        packageName:p.packageName
      }
      var item = app.appName+"-->"+app.packageName
    //  names.push(app.appName)
        names.push(item);
    }
    return names
}

/**
 * 微信扫一扫
 */
common.WeChatScan=function (){
    context.startActivity(app.intent({
      action: "VIEW",
      className:"com.tencent.mm.ui.LauncherUI",
      packageName:"com.tencent.mm",
      extras: {
          "LauncherUI.From.Scaner.Shortcut": true
      }
    }).setFlags(335544320));
}

module.exports = common