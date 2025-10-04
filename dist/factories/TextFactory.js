import { Text } from "../components/Text.js";
export class TextFactory {
    static DeathSorceryTitle() {
        return new Text()
            .setNormalText()
            .setSharedPosition({ x: 100, y: 100 })
            .setSharedSize({ width: 0, height: 10 })
            .setText("Death  Sorcery");
    }
}
//# sourceMappingURL=TextFactory.js.map