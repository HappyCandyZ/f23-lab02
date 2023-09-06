import { newRectangle } from "./rectangle";

// Since a Square is a special type of Rectangle where width = height, 
// we don't need to define a new interface. We can use the Rectangle interface for Square as well.

function newSquare(sideLen: number) {
    return newRectangle(sideLen, sideLen);
}

export { newSquare };
