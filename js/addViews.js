/**
 * Created by tyb on 16-1-28.
 */
$(document).ready(function(){
    $("#header").load("views/header.html",[],function(){
        loadViews('home');
        $("#list").click(function(){
                loadViews('list');
            }
        );
        $("#home").click(function(){
                loadViews('home');
            }
        )
        $("#cart").click(function(){
                loadViews('cart');
            }
        )
    });
});

function loadViews(view){
    if (view == 'list') loadList();
    if (view == 'home') loadHome();
    if (view == 'cart') loadCart();
    if (view == 'payment') loadPayment();
}


function loadHome(){
    $("#view").load("views/home.html",[],function(){
        document.title='欢迎光临';
        getActive(0);
        $(".btn-primary").click(function(){
            loadViews('list');
        })
    });
}

function loadList(){
    $("#view").load("views/goodlist.html",[],function(){
        document.title='商品列表';
        getActive(1);
        addGiftFly();
        var count = 0;
        $('.btn-primary').click(function(){
            count++;
            $('#cart-count').text(count);
        });
    });
}

function loadCart(){
    $("#view").load("views/cart.html",[],function(){
        document.title='购物车';
        getActive(2);
        $(".btn-primary").click(function(){
            loadViews('payment');
        })
    })
}

function loadPayment(){
    $("#view").load("views/payment.html",[],function(){
        document.title='付款页';
        removeActive();
    })
}

function getActive(num){
    removeActive();
    $("ul li:eq("+num+")").addClass("active");
}
function removeActive(){
    $("ul li").removeClass("active");
}

function addGiftFly(){
    var offset = $("#end").offset();
    $(".btn").click(function(event){
        var btn = $(this);
        var flight = $('<img class="flight" src="img/gift.png">');
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
}

function addToTable(){
    var Items = loadAllItems();
    var itemDom = $(itemLine);
    Items.forEach(function(item){
        var $tr = $("<tr></tr>");
        var $th = $("<th></th>");
        $th.append(item.name);
        $th.appendTo($tr);
        $tr.appendTo($('#item-table'));
    })
}


