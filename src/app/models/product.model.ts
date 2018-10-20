export class Product {
    name: string;
    description: string;
    value: number;
    code: string;

    constructor(
        name: string,
        description: string,
        value: number,
        code: string
    ){
        this.name = name;
        this.description = description;
        this.value = value;
        this.code = code; 
    }
}