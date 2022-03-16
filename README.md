README

本项目主要用于在 vscode 快速访问常用网址和适当休息中使用。

目前集成微信阅读、leetcode、牛客、前端面试题、菜鸟教程、廖雪峰和阮一峰博客、以及视觉中国、CNU。

过程中的页面 title 会以 README.md 名称显示，所以不用担心！

项目本身缺点，并不能嵌入所有网站，这能嵌入一些单页面应用（不能存在打开新页面的网站），主要是 iframe 的限制导致。
不过目前这些网站足以让广大程序员们使用了。如果大家能找到符合条件的网站，欢迎来 github 告知我！！

【重要!!!!】:最近发现 leetcode 无法正常登录,我为大家一种解决方法，首先在浏览器打开 leetcode 并登录，然后按 F12，然后进入 application(应用程序),打开左边 Cookie 进入<https://leetcode-cn.com>的选项后找到 Key 为 LEETCODE_SESSION 的项,把他的 key 和 value 记住,然后进入 vscode 里面按 ctrl+shift+i(或者点击最上面的帮助——>切换开发人员工具),你会看到跟浏览器一样的控制台,同样进入 application(应用程序),添加刚才记住的 key 和 value,最后重新点击本插件的 leetcode 网页即可登陆成功。
注意：浏览器登的 leetcode 可以关闭，但不可以手动退出账号哦，不然 LEETCODE_SESSION 就失效了,正常情况下是可以保持 24 小时登录状态。

项目地址：https://github.com/zw990316/urlNavigation.git
