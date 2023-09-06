import { Shape } from "./shapes/shape.js";

function newRenderer(rectangle: Shape) {
    return {
        draw() {
            const area: number = rectangle.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }