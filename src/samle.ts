function Required(target: any, propertyName: string){

}

function Positive(){

}

function validate(obj: object) {

}


class Course {
    @Required
    title: string;
    @Positive
    price: number;
    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}