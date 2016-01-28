$(document).ready(function(){
    $("#header").load("header.html",[],function(){
        var offset = $("#end").offset();
        $(".btn").click(function(event){
            var btn = $(this);
            var flight = $('<img class="flight" src="../img/gift.png">');
            flight.fly({
                start: {
                    left: event.pageX,
                    top: event.pageY
                },
                end: {
                    left: offset.left+10,
                    top: offset.top+10,
                    width: 0,
                    height: 0
                },
                onEnd: function(){
                    $("#msg").show().animate({width: '220px'}, 200).fadeOut(1000);
                    this.destory();
                }
            });
        });
    });
});
/**
 * Created by tyb on 16-1-25.
 */