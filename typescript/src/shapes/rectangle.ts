interface Rectangle {
    getWidth: () => number,
    getHeight: () => number,
    computeArea: () => number
}

function newRectangle(width: number, height: number): Rectangle {
    return {
        getWidth: function(): number {
            return width;
        },
        getHeight: function(): number {
            return height;
        },
        computeArea: function(): number {
            return width * height;
        }
    }
}

export { Rectangle, newRectangle }
