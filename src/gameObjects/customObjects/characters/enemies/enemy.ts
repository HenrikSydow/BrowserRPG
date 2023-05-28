import { PhysicalGameObject } from "../../../physicalGameObject.js";

export abstract class Enemy extends PhysicalGameObject {

    public abstract defend(damage: number): void;

    public override render(ctx: CanvasRenderingContext2D): void {
        this.animationHandler.render(ctx);
    }

}
