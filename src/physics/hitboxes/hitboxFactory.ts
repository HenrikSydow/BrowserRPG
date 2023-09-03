import { Rectangle } from "../shapes/rectangle.js";
import { ShapeBase } from "../shapes/shapeBase.js";
import { Hitbox } from "./hitbox.js";
import { HitboxConstants } from "./hitboxConstants.js";


/**
 * Factory class for all hitboxes in the game.
 */
export abstract class HitboxFactory {

    /**
     * Creates a new hitbox instance of the specified
     * Hitbox type at the given global x and y coordinates.
     * @param hitboxName The identifier of the hitbox to be built.
     * @param x The x coordinate of the hitbox.
     * @param y The y coordinate of the hitbox.
     * @returns A new Hitbox.
     */
    public static buildHitbox(hitboxName: HitboxConstants.HitboxName, x: number, y: number): Hitbox {
        let shapes: Array<ShapeBase> = new Array();

        switch(hitboxName) {
            /*
            Define cases for all the different hitboxes in here.
            Example:
            ===================================================
            case HitboxConstants.HitboxName.example:
                shapes.push(new Rectangle(10, 10, 100, 100));
                shapes.push(new Circle(20, 20, 50));
                shapes.push(new Rectangle(1, 1, 1000, 10));
                break;
            */
            case HitboxConstants.HitboxName.PlayerGround:
                shapes.push(new Rectangle(100, 180, 45, 30));
                break;
            case HitboxConstants.HitboxName.SlimeGround:
                shapes.push(new Rectangle(50, 80, 65, 35));
                break;
            case HitboxConstants.HitboxName.BigTreeGround:
                shapes.push(new Rectangle(65, 235, 90, 40));
                shapes.push(new Rectangle(90, 275, 75, 15));
                shapes.push(new Rectangle(155, 250, 20, 25));
                break;
            case HitboxConstants.HitboxName.SmallTreeGround:
                shapes.push(new Rectangle(40, 180, 80, 45));
                break;
            case HitboxConstants.HitboxName.TreeStumpGround:
                shapes.push(new Rectangle(25, 70, 90, 40));
                shapes.push(new Rectangle(50, 110, 75, 15));
                shapes.push(new Rectangle(115, 85, 20, 25));
                break;
            case HitboxConstants.HitboxName.BushGround:
                shapes.push(new Rectangle(10, 95, 140, 45));
                shapes.push(new Rectangle(25, 140, 110, 10));
                shapes.push(new Rectangle(25, 85, 110, 10));
                break;
            case HitboxConstants.HitboxName.SignWoodenGround:
                shapes.push(new Rectangle(10, 50, 60, 15));
                break;
            case HitboxConstants.HitboxName.SignWoodenReadRange:
                shapes.push(new Rectangle(10, 50, 60, 25));
                break;
            case HitboxConstants.HitboxName.RockGround:
                shapes.push(new Rectangle(20, 30, 45, 10));
                shapes.push(new Rectangle(0, 40, 75, 20));
                shapes.push(new Rectangle(25, 60, 40, 10));
                shapes.push(new Rectangle(35, 70, 20, 5));
                break;
            case HitboxConstants.HitboxName.BasicWarp:
                shapes.push(new Rectangle(0, 0, 100, 100));
                break;
            case HitboxConstants.HitboxName.SimpleFarmHouse:
                shapes.push(new Rectangle(25, 200, 145, 250));
                shapes.push(new Rectangle(170, 200, 90, 150)); 
                shapes.push(new Rectangle(260, 200, 145, 250));
                break;
            case HitboxConstants.HitboxName.StoneWall:
                shapes.push(new Rectangle(0, 120, 220, 70));
                break;
            case HitboxConstants.HitboxName.StoneWallEnd:
                shapes.push(new Rectangle(0, 120, 120, 70));
                break;
            case HitboxConstants.HitboxName.StoneWallVertical:
                shapes.push(new Rectangle(0, 0, 45, 240));
                break;
            case HitboxConstants.HitboxName.StoneWallLowerCornerLeft:
                shapes.push(new Rectangle(0, 0, 45, 150));
                shapes.push(new Rectangle(0, 140, 95, 70));
                break;
            case HitboxConstants.HitboxName.StoneWallLowerCornerRight:
                shapes.push(new Rectangle(50, 0, 45, 150));
                shapes.push(new Rectangle(0, 140, 95, 70));
                break;
            case HitboxConstants.HitboxName.StoneWallUpperCornerLeft:
                shapes.push(new Rectangle(0, 120, 45, 160));
                shapes.push(new Rectangle(45, 120, 5, 70));
                break;
            case HitboxConstants.HitboxName.StoneWallUpperCornerRight:
                shapes.push(new Rectangle(5, 120, 45, 160));
                shapes.push(new Rectangle(0, 120, 5, 70));
                break;
        }

        return new Hitbox(x, y, shapes);
    }

}
