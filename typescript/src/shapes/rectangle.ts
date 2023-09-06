interface Rectangle {
    getWidth: () => number,
    getHeight: () => number,
    computeArea: () => number
}

function newRectangle(width: number, height: number): Rectangle {
    return {
        getWidth: () => width,
        getHeight: () => height,

        computeArea: function (): number {
            return width * height
        }
    }
}

export { Rectangle, newRectangle }
