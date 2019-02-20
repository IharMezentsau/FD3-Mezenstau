var Scales = /** @class */ (function () {
    function Scales(sE) {
        this.storageEngine = sE;
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
        this.key = 'scalesStorageEngineLocalStorage';
        var array = [];
        localStorage.setItem(this.key, JSON.stringify(array));
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var arrayStorage = JSON.parse(localStorage[this.key]);
        arrayStorage.push(item);
        localStorage[this.key] = JSON.stringify(arrayStorage);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var product = JSON.parse(localStorage[this.key])[index];
        return new Product(product.name, product.scale);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var arrayStorage = JSON.parse(localStorage[this.key]);
        return arrayStorage.length;
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