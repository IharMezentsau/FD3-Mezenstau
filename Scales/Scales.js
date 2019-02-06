var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        // let a:number = 0;
        //  this.products.forEach(product => {
        //     a += product.getScale();
        // });
        // return a;
        var sum = 0;
        for (var i = this.products.length - 1; i >= 0; i--) {
            sum += this.products[i].getScale();
        }
        return sum;
        //return this.products.reduce((accu: number, currentValue: Product): number =>  {
        //    return accu + currentValue.getScale();
        //}, 0).toFixed(3);
    };
    Scales.prototype.getNameList = function () {
        return this.products.map(function (product) { return product.getName(); });
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(name, scale) {
        this.name = name;
        this.scale = scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, scale) {
        return _super.call(this, name, scale) || this;
    }
    Apple.prototype.getScale = function () {
        return _super.prototype.getScale.call(this);
    };
    Apple.prototype.getName = function () {
        return _super.prototype.getName.call(this);
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(name, scale) {
        return _super.call(this, name, scale) || this;
    }
    Tomato.prototype.getScale = function () {
        return _super.prototype.getScale.call(this);
    };
    Tomato.prototype.getName = function () {
        return _super.prototype.getName.call(this);
    };
    return Tomato;
}(Product));
var scales = new Scales(), tomat1 = new Tomato('Помидор 1', 0.5), tomat2 = new Tomato('Помидор 2', 0.1), apple1 = new Apple('Яблоко 1', 0.2), apple2 = new Apple('Яблоко 2', 0.4);
scales.addProduct(tomat1);
scales.addProduct(tomat2);
scales.addProduct(apple1);
scales.addProduct(apple2);
console.log(scales.getSumScale());
console.log(scales.getNameList());
//# sourceMappingURL=Scales.js.map