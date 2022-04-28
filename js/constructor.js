// class Color {
//     constructor(r,g,b,name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }

//     innerRGB() {
//         const { r, g, b } = this;
//         return `${r}, ${g}, ${b}`
//     }

//     rgb() {
//         return `rgb( ${ this.innerRGB()} )`;
//     }
// }

class Item {
    constructor( name, quantity ) {
        this.name = name;
        this.quant = quantity;
    }

    add() {
        return `${this.name} has been added to the list`
    }

    remove() {
        return `${this.name} has been removed to the list`
    }
}

class Recipe extends Item {
    make() {
        return `You will need these items: ${this.quant}`
    }
}