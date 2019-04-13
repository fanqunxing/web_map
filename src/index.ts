class Shape {
    area: number;
    color: string;
    constructor ( name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " with an area of " + this.area + " cm squared.";
    }
}
var square = new Shape("square", 30, 30);
console.log(square);
console.log( square.shoutout() );
console.log( '1111Area of Shape:1 ' + square.area );
console.log( '1111Color of Shape: ' + square.color );