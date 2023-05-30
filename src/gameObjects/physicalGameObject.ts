import { AnimationHandler } from "../gfx/animationHandler.js";
import { HitboxHandler, ICollider } from "../physics/hitboxes/hitboxHandler.js";
import { GameObject } from "./gameObject.js";

export abstract class PhysicalGameObject extends GameObject implements ICollider {

    protected animationHandler: AnimationHandler;
    protected hitboxHandler: HitboxHandler;

    constructor(x: number, y: number, animationHandler: AnimationHandler, hitboxHandler: HitboxHandler) {
        super(x, y);
        this.animationHandler = animationHandler;
        this.hitboxHandler = hitboxHandler;
    }

    public override update(): void {
        this.animationHandler.update(this.x, this.y);
    }

    public getHitboxHandler(): HitboxHandler {
        return this.hitboxHandler;
    }

    public getAnimationhandler(): AnimationHandler {
        return this.animationHandler;
    }

}
