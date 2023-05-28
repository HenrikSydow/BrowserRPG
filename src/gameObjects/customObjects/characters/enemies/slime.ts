import { Rectangle } from "../../../../physics/shapes/rectangle.js";
import { Enemy } from "./enemy.js";

export class Slime extends Enemy {

    public override defend(damage: number): void {
        throw new Error("Method not implemented.");
    }

    public override render(ctx) {
        super.render(ctx);
    }

}
