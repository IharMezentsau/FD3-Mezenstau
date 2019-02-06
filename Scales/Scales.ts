class Scales {
    private products: Array<Product> = [];

    constructor() {

    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public getSumScale(): number {
        // let a:number = 0;
        //  this.products.forEach(product => {
        //     a += product.getScale();
        // });
        // return a;
        let sum: number = 0;
        for (let i = this.products.length - 1; i >= 0; i--) {
            sum += this.products[i].getScale();
        }
        //return sum.toFixed(3); //Почему ошибка с toFixed?
        return sum;
        //Почему ошибка в этом варианте с reduce?
        //return this.products.reduce((accu: number, currentValue: Product): number =>  {
        //    return accu + currentValue.getScale();
        //}, 0).toFixed(3);
    }

    public getNameList(): Array<string> {
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

    public getScale(): number {
        return this.scale;
    }

    public getName(): string {
        return this.name;
    }

}

class Apple extends Product {
    constructor(name: string, scale:number) {
        super(name, scale);
    }

    public getScale(): number {
        return super.getScale();
    }

    public getName(): string {
        return super.getName();
    }
}

class Tomato extends Product {
    constructor(name: string, scale:number) {
        super(name, scale);
    }

    public getScale(): number {
        return super.getScale();
    }

    public getName(): string {
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