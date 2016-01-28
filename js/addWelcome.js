/**
 * Created by tyb on 16-1-28.
 */
$(document).ready(function(){
    $("#header").load("header.html",[],function(){
        var welcomeDiv =
        "<div class='container theme-showcase' role='main'>" +
        "<div class='jumbotron'>" +
        "<h1><b>Welcome to Let's Go!</b></h1>" +
        "<p>商店里进行购物结算时会使用收银机（POS）系统，" +
        "这台收银机会在结算时根据 客户的购物车（Cart）中的商品（Item）和商店正在进行的优惠活动（Promotion）进行结算和打印购物清单。" +
        "已知该商店正在对部分商品进行“买二赠一”的优惠活动。" +
        "我们需要实现一个名为printInventory函数，该函数能够将指定格式的数据作为参数 输入，然后在浏览器的控制台中输出结算清单的文本。 </p>" +
        "<button class='btn btn-lg btn-primary' type='button'><b>Let's Go</b></button> " +
        "</div></div>"
        $(document.body).append(welcomeDiv);
    });
});