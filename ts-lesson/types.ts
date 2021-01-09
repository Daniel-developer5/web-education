const isDone: boolean = true

const int: number = 42

const message: string = 'Hello, TS!'

const intArr: Array<number> = [1, 2, 3]
const charArr: string[] = ['1', '2', '3']

// Tuple
const contact: [string, number] = ['Daniel', 123]

// Any
let variable: any = 42
variable = 'str'

const sayName = (name: string): void => console.log(name)
sayName('John')

// Never
const trowError = (message: string): never => {
    throw new Error(message)
}

// Type
type Login = string
const login: Login = 'admin'

type ID = number | string
const id: ID = 155

type someType = string | null | undefined

let a: any = 4
a.toFixed(2)
// a.toUpperCase()  // yeah, it is working...

let b: unknown = 4
// b.toFixed(2)  // error

const fixedN: string = (b as number).toFixed(2)
console.log(fixedN)
const fixedN1: string = (<number>b).toFixed(2)