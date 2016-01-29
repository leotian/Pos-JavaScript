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
    $("#header").load("views/header.html");
    $("#view").load("views/home.html");
});


$(document).ready(function() {
    if(document.title=="主页") $("ul li:eq(0)").addClass("active");
    if(document.title=="商品列表页") $("ul li:eq(1)").addClass("active");
})