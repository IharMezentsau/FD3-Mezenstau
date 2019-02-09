var Scales = /** @class */ (function () {
    function Scales(StorageEngine) {
        this.storageEngine = StorageEngine;
    }
    Scales.prototype.addProduct = function (product) {
        this.storageEngine.addItem(product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = this.storageEngine.getCount() - 1; i >= 0; i--) {
            sum += this.storageEngine.getItem(i).getScale();
        }
        return Math.round(sum * 100) / 100;
    };
    Scales.prototype.getNameList = function () {
        var nameArray = [], arrayCount = this.storageEngine.getCount();
        for (var i = 0; i < arrayCount; i++) {
            nameArray.push(this.storageEngine.getItem(i).getName());
        }
        return nameArray;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.products = [];
        this.date = JSON.stringify(new Date());
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var productCount = this.getCount(), key = "product" + this.date + "_" + productCount;
        localStorage[key] = JSON.stringify(item);
        this.products.push(key);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        //return JSON.parse(localStorage[this.products[index]]);
        var product = JSON.parse(localStorage[this.products[index]]);
        return new Product(product.name, product.scale);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.products.length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
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
var scalesStorageEngineArray = new Scales(new ScalesStorageEngineArray()), scalesStorageEngineLocalStorage = new Scales(new ScalesStorageEngineLocalStorage()), apple = new Product('Apple', 0.5), tomato = new Product('Tomato', 0.2);
scalesStorageEngineArray.addProduct(apple);
scalesStorageEngineArray.addProduct(tomato);
scalesStorageEngineArray.addProduct(apple);
scalesStorageEngineLocalStorage.addProduct(apple);
scalesStorageEngineLocalStorage.addProduct(tomato);
scalesStorageEngineLocalStorage.addProduct(tomato);
console.log("Sum scalesStorageEngineArray = " + scalesStorageEngineArray.getSumScale());
console.log("Name list scalesStorageEngineArray = " + scalesStorageEngineArray.getNameList());
console.log("Sum scalesStorageEngineLocalStorage = " + scalesStorageEngineLocalStorage.getSumScale());
console.log("Name list scalesStorageEngineLocalStorage = " + scalesStorageEngineLocalStorage.getNameList());
//# sourceMappingURL=Scales.js.map