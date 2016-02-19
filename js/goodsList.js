/**
 * Created by tyb on 16-1-28.
 */

$(document).ready(function(){
    listInitiate();
})

function listInitiate(){
    cartCountUpdate();
    addTable();
    addListListener();
    addGiftFly();
}

function addTable(){
    var items = loadAllItems();
    items.forEach(function (item) {
        var rowItem = itemRowHelper(item);
        $(".table").append(rowItem);
    });
}

function addListListener () {
    $('.list-item').on('click', 'button', function () {
        var itemName = $(this).closest('.list-item').find('.item-name').text();
        var item = Order.findByName(itemName);
        item.addCount();
        cartCountUpdate();
    });
}

function cartCountUpdate () {
    var count = Order.getCartCount();
    $('#cart-count').text(count);
}

function itemRowHelper(item){
    var itemRow = '<tr class="list-item"><td class="item-type"></td><td class="item-name"></td><td class="item-price"></td><td class="item-unit"></td><td class="item-buy"></td></tr>';
    var itemDom = $(itemRow);
    itemDom.find('.item-type').text(item.type);
    itemDom.find('.item-name').text(item.name);
    itemDom.find('.item-price').text(item.price);
    itemDom.find('.item-unit').text(item.unit);
    itemDom.find('.item-buy').html(buyButtonHelper());
    return itemDom;
}

function buyButtonHelper () {
    return '<button class="btn btn-primary btm-sm">加入购物车</button>';
}

function addGiftFly(){
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
}