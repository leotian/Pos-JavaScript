/**
 * Created by tyb on 16-1-28.
 */
function loadView (view) {
    $('#view').data('view', view).load(viewHelper(view), function () {
    });
}

function viewHelper (view) {
    return _.template('/views/<%= view %>.html', { view: view });
}

$(document).ready(function(){
    $("#header").load("views/header.html",[],function(){
        $("#view").load("views/home.html");
        $("ul li:eq(0)").addClass("active");

        $("#list").click(
            function(){
                loadViews('list');
            }
        );
        $("#home").click(
            function(){
                loadViews('home');
            }
        )
    });
});

function loadViews(view){
    if (view=='list') loadList();
    if (view=='home') loadHome()
}

function loadList(){
    $("#view").load("views/goodlist.html",[],function(){
        document.title='商品列表页';
        $("ul li:eq(1)").addClass("active");
        $("ul li:eq(0)").removeClass("active");
    });
}

function loadHome(){
    $("#view").load("views/home.html",[],function(){
        document.title='主页';
        $("ul li:eq(0)").addClass("active");
        $("ul li:eq(1)").removeClass("active");
    });
}