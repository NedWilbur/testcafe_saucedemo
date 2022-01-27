export class Item {
    name: string;
    description: string;
    price: string;

    constructor(title: string, description: string, price: string)
    {
        this.name = title;
        this.description = description;
        this.price = price;
    }
}