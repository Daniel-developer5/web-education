class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info = (name: string): string => `[${name}]: TypeScript varsion is ${this.version}`
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel                 // Can rewrite only in constructor

    }
}

// Short notation

class Car1 {
    readonly numberOfWheels: number = 4

    constructor(readonly model: string) {}       // TS will add model field in class Car1
}

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go = (): void => console.log('go')
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')

// Protected fields available in class and class, which extends from it
// Private available only in class where it defined

abstract class Component {
    abstract render(): object
    abstract info(): string
}

class AppComponent extends Component {
    render(): object {
        return document.createElement('div')
    }

    info(): string {
        return 'Info...'
    }
}