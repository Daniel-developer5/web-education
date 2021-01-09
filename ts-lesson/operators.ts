interface Person {
    name: string,
    age: number,
}

type PersonKeys = keyof Person

const key: PersonKeys = 'name'
//const key2: PersonKeys = 'ageage'  // error, can be only name or age

type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>

type UserKeysNoMeta1 = Pick<User, 'name' | 'email'>

const u: UserKeysNoMeta = 'name'