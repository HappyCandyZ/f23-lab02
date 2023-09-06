import { Shape } from "./shape";

// Since a Square is a special type of Rectangle where width = height, 
// we don't need to define a new interface. We can use the Rectangle interface for Square as well.

function newCircle(radius: number): Shape {
    return {
        computeArea: function(): number {
            return Math.PI * radius * radius;
        }
    }
}

export { newCircle };


