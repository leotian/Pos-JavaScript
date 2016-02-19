/**
 * Created by tyb on 16-2-17.
 */

$(document).ready(function(){
    paymentInitiate();
})

function paymentInitiate () {
    cartCountUpdate();
    addTable();
    sumPriceUpdate();
    addPaymentListener();
}

function sumPriceUpdate () {
    $('#cart-fare').text(Order.fare().toFixed(2));
    $('#cart-saving').text(Order.saving().toFixed(2));
}

function addTable () {
    var cartItems = Order.all();
    _(cartItems).each(function (item) {
        var boughtItem = boutghtItemHelper(item);
        $('#list-table').append(boughtItem);
    });
    var freeItems = _(cartItems).filter(function (item) {
        return item.free() > 0;
    });
    _(freeItems).each(function (item) {
        var freeItem = freeItemHelper(item);
        $('#free-table').append(freeItem);
    });
    $('#dateTime').text(moment().format('YYYY年MM月DD日 HH:mm:ss'));
}

function addPaymentListener () {
    $('#confirm').on('click', function () {
        Order.clear();
    })
}

function boutghtItemHelper (item) {
    var itemLine = '<tr class="bought-item"><td class="item-type"></td><td class="item-name"></td><td class="item-price"></td><td class="item-unit"></td><td class="item-count"></td><td class="item-sum"></td></tr>';
    var itemDom = $(itemLine);
    itemDom.find('.item-type').text(item.type);
    itemDom.find('.item-name').text(item.name);
    itemDom.find('.item-price').text(item.price);
    itemDom.find('.item-unit').text(item.unit);
    itemDom.find('.item-count').text(item.count);
    itemDom.find('.item-sum').text(sumPriceHelper(item));
    return itemDom;
}

function sumPriceHelper (item) {
    var extra = item.free() > 0? ' (原价：' + item.total() + '元)': '';
    return item.fare() + '元' + extra;
}

function cartCountUpdate () {
    var count = Order.getCartCount();
    $('#cart-count').text(count);
}

function freeItemHelper (item) {
    var itemLine = '<tr class="free-item"><td class="item-type"></td><td class="item-name"></td><td class="item-free"></td></tr>';
    var itemDom = $(itemLine);
    itemDom.find('.item-type').text(item.type);
    itemDom.find('.item-name').text(item.name);
    itemDom.find('.item-free').text(item.free());
    return itemDom;
}