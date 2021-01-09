const add = (a: number, b: number): number => a + b

// Override

interface Position {
    x: number | undefined,
    y: number | undefined,
}

interface DefaultPosition extends Position {
    default: string,
}

function position(): Position
function position(a: number): DefaultPosition
function position(a: number, b: number): Position

function position(a?: number, b?: number) {
    if (!a && !b) {
        return { x: undefined, y: undefined, }
    }

    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() }
    }

    return { x: a, y: b }
}

console.log('Empty: ', position())
console.log('One param', position(42))
console.log('Two param', position(10, 15))