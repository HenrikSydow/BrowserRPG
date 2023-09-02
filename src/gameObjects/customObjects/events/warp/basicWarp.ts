import { HitboxHandler, ICollider } from "../../../../physics/hitboxes/hitboxHandler.js";
import { Hitbox } from "../../../../physics/hitboxes/hitbox.js";
import { HitboxConstants } from "../../../../physics/hitboxes/hitboxConstants.js";
import { GameObject } from "../../../gameObject.js";
import { GameObjectHandler } from "../../../gameObjectHandler.js";
import { Player } from "../../characters/player.js";
import { MapConstants } from "../../../../mapHandler/mapConstants.js";
import { MapHandler } from "../../../../mapHandler/mapHandler.js";

export class BasicWarp extends GameObject implements ICollider {

    protected hitboxHandler: HitboxHandler;
    protected targetMapId: MapConstants.MapID;
    protected targetX: number;
    protected targetY: number;

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
                this.warp(player);
            }
        }
    }

    public setWarpTarget(targetMapId: MapConstants.MapID, targetX: number, targetY: number) {
        this.targetMapId = targetMapId;
        this.targetX = targetX;
        this.targetY = targetY;
    }

    private isWarpTargetDefined(): boolean {
        return (
            this.targetMapId != undefined &&
            this.targetX != undefined &&
            this.targetY != undefined
        )
    }

    protected warp(player: Player): void {
        if (this.isWarpTargetDefined()) {
            MapHandler.loadMap(this.targetMapId);
            player.setX(this.targetX);
            player.setY(this.targetY);
            GameObjectHandler.add(player);
        }
    }

    public getHitboxHandler(): HitboxHandler {
        return this.hitboxHandler;
    }

    public override render(ctx: CanvasRenderingContext2D): void { }
    
}
