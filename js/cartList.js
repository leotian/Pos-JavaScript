/**
 * Created by tyb on 16-2-16.
 */

$(document).ready(function(){
    cartInitiate();
})

function cartInitiate () {
    cartCountInitiate();
    addTable();
    addCartListener();
}

function addTable () {
    Order.getPromotion(loadPromotions());
    var cartItems = Order.all();
    _(cartItems).each(function (item) {
        var cartItem = cartItemHelper(item);
        $('#cart-table').append(cartItem);
    });
    sumPriceInitiate ();
}

function addCartListener () {
    $('.item-count').on('click', 'button', function () {
        var itemName = $(this).closest('.cart-item').find('.item-name').text();
        var item = Order.findByName(itemName);
        if($(this).data('operation') == 'add') {
            item.addCount();
        }
        else {
            item.minusCount();
        }
        $(this).closest('.btn-group').find('.number').text(item.count);
        $(this).closest('.cart-item').find('.item-sum').text(sumPriceHelper(item));
        cartCountInitiate();
        sumPriceInitiate();
    })
}

function sumPriceInitiate () {
    $('#cart-fare').text(Order.fare().toFixed(2));
    $('#cart-saving').text(Order.saving().toFixed(2));
}

function cartCountInitiate () {
    var count = Order.getCartCount();
    $('#cart-count').text(count);
}

function cartItemHelper (item) {
    var itemLine = '<tr class="cart-item"><td class="item-type"></td><td class="item-name"></td><td class="item-price"></td><td class="item-unit"></td><td class="item-count"></td><td class="item-sum"></td></tr>';
    var itemDom = $(itemLine);
    itemDom.find('.item-type').text(item.type);
    itemDom.find('.item-name').text(item.name);
    itemDom.find('.item-price').text(item.price);
    itemDom.find('.item-unit').text(item.unit);
    itemDom.find('.item-count').html(countButtonGroupHelper(item.count));
    itemDom.find('.item-sum').text(sumPriceHelper(item));
    return itemDom;
}

function countButtonGroupHelper (count) {
    return '<div class="btn-group">\
                <button class="btn btn-default" data-operation="minus">-</button>\
                <button class="btn btn-default number" disabled="disabled">' + count + '</button>\
                <button class="btn btn-default" data-operation="add">+</button>\
            </div>'
}

function sumPriceHelper (item) {
    var extra = item.free() > 0? ' (原价：' + item.total() + '元)': '';
    return item.fare() + '元' + extra;
}
