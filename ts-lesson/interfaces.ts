interface Rect {
    readonly id: string,
    size: {
        width: number,
        height: number,
    },
    color?: string,
}

const rect1: Rect = {
    id: '90_875%65',
    size: {
        width: 20,
        height: 30
    },
}

rect1.color = '#ff0000'

const rect2 = {} as Rect
// Old notation
const rect3 = <Rect>{}

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect4: RectWithArea = {
    id: '34343',
    size: {
        width: 20,
        height: 20,
    },
    getArea(): number {
        const { width, height } = this.size

        return width * height
    }
}

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

interface CSS {
    [key: string]: string
}

const css: CSS = {
    border: '1px solid #000',
    marginTop: '10px'
}

const css1: CSS = {
    transition: 'ease .3s'
}

let arr: number[] = [1, 2, 3]
const ro: ReadonlyArray<number> = a
// ro[0] = 2  // error