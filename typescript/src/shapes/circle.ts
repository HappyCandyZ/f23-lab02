interface Circle {
    getRadius: () => number;
    computeArea: () => number;
}

function createCircle(radius: number): Circle {
    return {
        getRadius: function(): number {
            return radius;
        },
        computeArea: function(): number {
            return Math.PI * radius * radius;
        }
    }
}

export { Circle, createCircle };
