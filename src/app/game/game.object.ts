const CELL_WH = 20;

class Dot {
    constructor(private _x: number, private _y: number) {
    }

    get x() {
        return this._x * CELL_WH;
    }

    get y() {
        return this._y * CELL_WH;
    }

    get width() {
        return CELL_WH;
    }

    get height() {
        return CELL_WH;
    }
}

export class Snake {
    x: number = 0;
    y: number = 2;
    dots: Array<Dot> = [
        new Dot(0, 2),
        new Dot(0, 1),
        new Dot(0, 0),
    ];

    update(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
        const nd = new Dot(this.x, this.y);
        this.dots.unshift(nd);
        this.dots.pop();
    }

}
