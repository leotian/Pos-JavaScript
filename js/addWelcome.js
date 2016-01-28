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