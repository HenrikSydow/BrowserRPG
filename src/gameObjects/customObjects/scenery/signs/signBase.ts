import { GameConstants } from "../../../../gameConstants.js";
import { KeyHandler } from "../../../../keyHandler.js";
import { Hitbox } from "../../../../physics/hitboxes/hitbox.js";
import { HitboxConstants } from "../../../../physics/hitboxes/hitboxConstants.js";
import { GameObjectConstants } from "../../../gameObjectConstants.js";
import { GameObjectHandler } from "../../../gameObjectHandler.js";
import { PhysicalGameObject } from "../../../physicalGameObject.js";
import { Player } from "../../characters/player.js";

export abstract class SignBase extends PhysicalGameObject {

    private currentlyRead: boolean = false;

    public override render(ctx: CanvasRenderingContext2D): void {
        this.animationHandler.render(ctx);
    }

    public override update(): void {
        super.update();
        if (KeyHandler.isPressed(GameConstants.Controls.Interact)) {
            let player: Player = GameObjectHandler.getObjectsByType(Player)[0] as Player;
            if (player != undefined) {
                let playerGroundHitbox: Hitbox = player.getHitboxHandler().getHitbox(HitboxConstants.HitboxType.GroundHitbox);
                let thisTalkRangeHBox: Hitbox = this.hitboxHandler.getHitbox(HitboxConstants.HitboxName.SignWoodenReadRange);
                if (
                        !this.currentlyRead &&
                        player.getFaceDirection() == GameObjectConstants.FaceDirection.North &&
                        playerGroundHitbox.intersects(thisTalkRangeHBox)
                    ) {
                        this.currentlyRead = true;
                        alert("reading sign");
                    }
            }
        } else {
            this.currentlyRead = false;
        }
    }
    
}
