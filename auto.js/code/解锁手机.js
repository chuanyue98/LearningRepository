var 解锁手机 = {}
// 输入密码
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
    解锁屏幕
*/ 
function unlock()
{
    if(!device.isScreenOn())
    {
        device.wakeUp();
        sleep(500);
        swipe(500,2000,500,1000,210);
        password_input();
    }
}

module.exports = 解锁手机