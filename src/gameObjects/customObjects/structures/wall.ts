import { PhysicalGameObject } from "../../physicalGameObject.js";

export abstract class Wall extends PhysicalGameObject {

    public override render(ctx: CanvasRenderingContext2D): void {
        this.animationHandler.render(ctx);
    }

}

