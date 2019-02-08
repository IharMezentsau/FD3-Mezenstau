interface IScalable {
    getScale(): number;
    getName(): string;
};

class Scales {
    private products: Array<IScalable> = [];

    constructor() {

    }

    public addProduct(product: IScalable): void {
        this.products.push(product);
    }

    public getSumScale(): number {
        let sum: number = 0;
        for (let i = this.products.length - 1; i >= 0; i--) {
            sum += this.products[i].getScale();
        }
        return Math.round(sum * 100) / 100;
    }

    public getNameList(): Array<string> {
        return this.products.map(product => product.getName());
    }

}

class Apple implements IScalable{
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

class Tomato implements IScalable{
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

let scales = new Scales(),
    tomat1: IScalable = new Tomato('Помидор 1', 0.5),
    tomat2: IScalable = new Tomato('Помидор 2', 0.1),
    apple1: IScalable = new Apple('Яблоко 1', 0.2),
    apple2: IScalable = new Apple('Яблоко 2', 0.4);

scales.addProduct(tomat1);
scales.addProduct(tomat2);
scales.addProduct(apple1);
scales.addProduct(apple2);

console.log(scales.getSumScale());
console.log(scales.getNameList());