;
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = this.products.length - 1; i >= 0; i--) {
            sum += this.products[i].getScale();
        }
        return Math.round(sum * 100) / 100;
    };
    Scales.prototype.getNameList = function () {
        return this.products.map(function (product) { return product.getName(); });
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(name, scale) {
        this.name = name;
        this.scale = scale;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(name, scale) {
        this.name = name;
        this.scale = scale;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var scales = new Scales(), tomat1 = new Tomato('Помидор 1', 0.5), tomat2 = new Tomato('Помидор 2', 0.1), apple1 = new Apple('Яблоко 1', 0.2), apple2 = new Apple('Яблоко 2', 0.4);
scales.addProduct(tomat1);
scales.addProduct(tomat2);
scales.addProduct(apple1);
scales.addProduct(apple2);
console.log(scales.getSumScale());
console.log(scales.getNameList());
//# sourceMappingURL=Scales.js.map