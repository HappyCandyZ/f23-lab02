import { Shape } from "./shapes/shape.js";

function newRenderer(rectangle: Shape) {
    return {
        draw() {
            const area: number = rectangle.computeArea() //draw方法内定义area常量，值通过调用rectangle的computeArea方法来得到
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }