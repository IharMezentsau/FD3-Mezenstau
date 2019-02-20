interface IStorageEngine {
    addItem(item: Product): void;
    getItem(index: number): Product;
    getCount(): number;
}

class Scales<StorageEngine extends IStorageEngine> {
    private storageEngine: StorageEngine;

    constructor(sE: StorageEngine) {
        this.storageEngine = sE;
    }

    public addProduct(product: Product): void {
        this.storageEngine.addItem(product);
    }

    public getSumScale(): number {
        let sum: number = 0;
        for (let i = this.storageEngine.getCount() - 1; i >= 0; i--) {
            sum += this.storageEngine.getItem(i).getScale();
        }
        return Math.round(sum * 100) / 100;
    }

    public getNameList(): Array<string> {
        let nameArray: Array<string> = [],
            arrayCount = this.storageEngine.getCount();
        for (let i = 0; i < arrayCount; i++) {
            nameArray.push(this.storageEngine.getItem(i).getName());
        }
        return nameArray;
    }

}

class ScalesStorageEngineArray implements IStorageEngine {
    private products: Array<Product> = [];

    constructor() {

    }

    addItem(item: Product): void {
        this.products.push(item);
    };

    getItem(index: number): Product {
        return this.products[index];
    };

    getCount(): number {
        return this.products.length;
    };
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    private key: string = 'scalesStorageEngineLocalStorage';

    constructor() {
        let array: Array<Product> = [];
        localStorage.setItem(this.key, JSON.stringify(array));
    }

    addItem(item: Product): void {
        let arrayStorage: Array<Product> = JSON.parse(localStorage[this.key]);
        arrayStorage.push(item);
        localStorage[this.key] = JSON.stringify(arrayStorage);
    };

    getItem(index: number): Product {
        let product: {name: string, scale: number} = JSON.parse(localStorage[this.key])[index];
        return new Product(product.name, product.scale);
    };

    getCount(): number {
        let arrayStorage: Array<Product> = JSON.parse(localStorage[this.key]);
        return arrayStorage.length;
    };
}

class Product {
    private name: string;
    private scale: number;

    constructor(name: string, scale: number) {
        this.name = name;
        this.scale = scale;
    }

    public getScale(): number {
        return this.scale;
    }

    public getName(): string {
        return this.name;
    }
}

let scalesStorageEngineArray = new Scales(new ScalesStorageEngineArray()),
    scalesStorageEngineLocalStorage = new Scales(new ScalesStorageEngineLocalStorage()),
    apple = new Product('Apple', 0.5),
    tomato = new Product('Tomato', 0.2);

scalesStorageEngineArray.addProduct(apple);
scalesStorageEngineArray.addProduct(tomato);
scalesStorageEngineArray.addProduct(apple);

scalesStorageEngineLocalStorage.addProduct(apple);
scalesStorageEngineLocalStorage.addProduct(tomato);
scalesStorageEngineLocalStorage.addProduct(tomato);

console.log(`Sum scalesStorageEngineArray = ${scalesStorageEngineArray.getSumScale()}`);
console.log(`Name list scalesStorageEngineArray = ${scalesStorageEngineArray.getNameList()}`);

console.log(`Sum scalesStorageEngineLocalStorage = ${scalesStorageEngineLocalStorage.getSumScale()}`);
console.log(`Name list scalesStorageEngineLocalStorage = ${scalesStorageEngineLocalStorage.getNameList()}`);
