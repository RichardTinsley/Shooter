export class Singleton {
  private static INSTANCE: any;

  private constructor() {}

  static createInstance() {
    if (!Singleton.INSTANCE) {
      Singleton.INSTANCE = new Singleton();
    }
    return Singleton.INSTANCE;
  }
}
