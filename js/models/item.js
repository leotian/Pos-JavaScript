/**
 * Created by tyb on 16-1-29.
 */

function Item(name, unit, price, type, count, promotion) {
    this.name = name;
    this.unit = unit;
    this.price = price;
    this.type = type;
    this.count = count || 0;
    this.promotion = promotion || false;
}

Item.prototype.save = function () {
    Order.save(this);
};

Item.prototype.getPromotion = function () {
    this.promotion = true;
    this.save();
};

Item.prototype.addCount = function() {
    this.count++;
    this.save();
    return this.count;
};