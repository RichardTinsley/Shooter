export class Singleton {
    constructor() { }
    static createInstance() {
        if (!Singleton.INSTANCE) {
            Singleton.INSTANCE = new Singleton();
        }
        return Singleton.INSTANCE;
    }
}
//# sourceMappingURL=Singleton.js.map