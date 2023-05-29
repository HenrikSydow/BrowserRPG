import { HitboxHandler } from "../../../../physics/hitboxes/hitboxHandler.js";
import { Hitbox } from "../../../../physics/hitboxes/hitbox.js";
import { HitboxConstants } from "../../../../physics/hitboxes/hitboxConstants.js";
import { GameObject } from "../../../gameObject.js";
import { GameObjectHandler } from "../../../gameObjectHandler.js";
import { Player } from "../../characters/player.js";

export class BasicWarp extends GameObject {

    protected warpId: number;
    protected connectedWarp: BasicWarp;
    protected hitboxHandler: HitboxHandler;

    constructor(hitboxHandler: HitboxHandler, x: number, y: number) {
        super(x, y);
        this.hitboxHandler = hitboxHandler;
    }

    public override update(): void {
        let player: Player = GameObjectHandler.getObjectsByType(Player)[0] as Player;
        if (player != undefined) {
            let playerGroundHBox: Hitbox = player.getHitboxHandler().getHitbox(HitboxConstants.HitboxType.GroundHitbox);
            let thisWarpHBox: Hitbox = this.hitboxHandler.getHitbox(HitboxConstants.HitboxType.WarpHitbox);
            if (thisWarpHBox.contains(playerGroundHBox)) {
                console.log("warping...");
            }
        }
    }

    public setConnectedWarp(warp: BasicWarp): void {
        this.connectedWarp = warp;
    }

    public setWarpId(id: number): void {
        this.warpId = id;
    }

    public getConnectedWarp(): BasicWarp {
        return this.connectedWarp;
    }

    public getWarpId(): number {
        return this.warpId;
    }

    public override render(ctx: CanvasRenderingContext2D): void { }
    
}
