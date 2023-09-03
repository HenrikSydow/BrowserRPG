import { AnimationHandler } from "../../../../gfx/animationHandler.js";
import { HitboxHandler } from "../../../../physics/hitboxes/hitboxHandler.js";
import { PhysicalGameObject } from "../../../physicalGameObject.js";

export class Floor extends PhysicalGameObject {

    constructor(x: number, y: number, animationHandler: AnimationHandler) {
        super(x, y, animationHandler, new HitboxHandler());
        this.hitboxHandler.setEnabled(false);
    }

    public override render(ctx: CanvasRenderingContext2D): void {
        this.animationHandler.render(ctx);
    }

}
