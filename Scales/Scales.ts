class Scales {
    private products: Array<{getScale(): number, getName(): string}> = [];

    constructor() {

    }

    public addProduct(product: {getScale(): number, getName(): string}) {
        this.products.push(product);
    }

    public getSumScale() {
        return this.products.reduce((accu, currentValue) => {
            return accu + currentValue.getScale();
        }, 0).toFixed(3);
    }

    public getNameList() {
        return this.products.map(product => product.getName());
    }

}

class Product {

    private scale: number;
    private name: string;

    constructor(name: string, scale: number) {
        this.name = name;
        this.scale = scale;
    }

    public getScale() {
        return this.scale;
    }

    public getName() {
        return this.name;
    }

}

class Apple extends Product {
    constructor(name: string, scale:number) {
        super(name, scale);
    }

    public getScale() {
        return super.getScale();
    }

    public getName() {
        return super.getName();
    }
}

class Tomato extends Product {
    constructor(name: string, scale:number) {
        super(name, scale);
    }

    public getScale() {
        return super.getScale();
    }

    public getName() {
        return super.getName();
    }
}

let scales = new Scales(),
    tomat1 = new Tomato('Помидор 1', 0.5),
    tomat2 = new Tomato('Помидор 2', 0.1),
    apple1 = new Apple('Яблоко 1', 0.2),
    apple2 = new Apple('Яблоко 2', 0.4);

scales.addProduct(tomat1);
scales.addProduct(tomat2);
scales.addProduct(apple1);
scales.addProduct(apple2);

console.log(scales.getSumScale());
console.log(scales.getNameList());