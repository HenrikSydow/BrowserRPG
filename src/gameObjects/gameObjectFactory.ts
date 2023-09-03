import { Animation } from "../gfx/animation.js";
import { AnimationConstants } from "../gfx/animationConstants.js";
import { AnimationFactory } from "../gfx/animationFactory.js";
import { AnimationHandler } from "../gfx/animationHandler.js";
import { HitboxConstants } from "../physics/hitboxes/hitboxConstants.js";
import { HitboxFactory } from "../physics/hitboxes/hitboxFactory.js";
import { HitboxHandler } from "../physics/hitboxes/hitboxHandler.js";
import { Slime } from "./customObjects/characters/enemies/slime.js";
import { Player } from "./customObjects/characters/player.js";
import { BasicWarp } from "./customObjects/events/warp/basicWarp.js";
import { WoodenSign } from "./customObjects/scenery/signs/woodenSign.js";
import { Rock } from "./customObjects/scenery/terrain/rock.js";
import { Bush } from "./customObjects/scenery/vegetation/bush.js";
import { BigTree } from "./customObjects/scenery/vegetation/trees/bigTree.js";
import { SmallTree } from "./customObjects/scenery/vegetation/trees/smallTree.js";
import { TreeStump } from "./customObjects/scenery/vegetation/trees/treeStump.js";
import { Floor } from "./customObjects/structures/houses/floor.js";
import { SimpleFarmHouse } from "./customObjects/structures/houses/simpleFarmHouse.js";
import { StoneWall } from "./customObjects/structures/stoneWalls/stoneWall.js";
import { StoneWallEndLeft } from "./customObjects/structures/stoneWalls/stoneWallEndLeft.js";
import { StoneWallEndRight } from "./customObjects/structures/stoneWalls/stoneWallEndRight.js";
import { StoneWallLowerCornerLeft } from "./customObjects/structures/stoneWalls/stoneWallLowerCornerLeft.js";
import { StoneWallLowerCornerRight } from "./customObjects/structures/stoneWalls/stoneWallLowerCornerRight.js";
import { StoneWallUpperCornerLeft } from "./customObjects/structures/stoneWalls/stoneWallUpperCornerLeft.js";
import { StoneWallUpperCornerRight } from "./customObjects/structures/stoneWalls/stoneWallUpperCornerRight.js";
import { StoneWallVertical } from "./customObjects/structures/stoneWalls/stoneWallVertical.js";
import { GameObject } from "./gameObject.js";
import { GameObjectConstants } from "./gameObjectConstants.js";

export abstract class GameObjectFactory {

    public static buildGameObject(gameObjectName: GameObjectConstants.GameObjectName, x: number, y: number): GameObject {
        let gameObject: GameObject;

        let animationHandler: AnimationHandler = new AnimationHandler();
        let hitboxHandler: HitboxHandler = new HitboxHandler();

        switch (gameObjectName) {
            /*
            Create cases for each GameObject here.
            Example:
            ========================================
            case GameObjectConstants.GameObjectName.ExampleObject:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.ExampleAnimation,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.ExampleAnimation)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxName.ExampleHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.ExampleHitbox, x, y)
                );
                gameObject = new ExampleGameObject(x, y, animationHandler, hitboxHandler);
                break;
            */
            case GameObjectConstants.GameObjectName.Player:
                animationHandler.addAnimations(new Map([
                    [
                        AnimationConstants.AnimationNames.PLAYER_IDLE_SOUTH,
                        AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.PLAYER_IDLE_SOUTH)
                    ],
                    [
                        AnimationConstants.AnimationNames.PLAYER_IDLE_NORTH,
                        AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.PLAYER_IDLE_NORTH)
                    ],
                    [
                        AnimationConstants.AnimationNames.PLAYER_IDLE_EAST,
                        AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.PLAYER_IDLE_EAST)
                    ],
                    [
                        AnimationConstants.AnimationNames.PLAYER_WALK_SOUTH,
                        AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.PLAYER_WALK_SOUTH)
                    ],
                    [
                        AnimationConstants.AnimationNames.PLAYER_WALK_NORTH,
                        AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.PLAYER_WALK_NORTH)
                    ],
                    [
                        AnimationConstants.AnimationNames.PLAYER_WALK_EAST,
                        AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.PLAYER_WALK_EAST)
                    ],
                ]));
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.PlayerGround, x, y)
                );
                gameObject = new Player(x, y, animationHandler, hitboxHandler);
                break;

            case GameObjectConstants.GameObjectName.Slime:
                animationHandler.addAnimations(new Map([
                    [
                        AnimationConstants.AnimationTypes.IDLE,
                        AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.ENEMY_SLIME_IDLE)
                    ],
                    [
                        AnimationConstants.AnimationTypes.MOVE,
                        AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.ENEMY_SLIME_JUMP)
                    ],
                    [
                        AnimationConstants.AnimationTypes.ATTACK,
                        AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.ENEMY_SLIME_ATTACK)
                    ],
                    [
                        AnimationConstants.AnimationTypes.DAMAGE,
                        AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.ENEMY_SLIME_DAMAGE)
                    ],
                    [
                        AnimationConstants.AnimationTypes.DIE,
                        AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.ENEMY_SLIME_DIE)
                    ],
                ]));
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.SlimeGround, x, y)
                );
                gameObject = new Slime(x, y, animationHandler, hitboxHandler);
                break;

            case GameObjectConstants.GameObjectName.BigTree:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.VEGETATION_BIG_TREE,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.VEGETATION_BIG_TREE)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.BigTreeGround, x, y)
                );
                gameObject = new BigTree(x, y, animationHandler, hitboxHandler);
                break;

            case GameObjectConstants.GameObjectName.SmallTree:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.VEGETATION_SMALL_TREE,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.VEGETATION_SMALL_TREE)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.SmallTreeGround, x, y)
                );
                gameObject = new SmallTree(x, y, animationHandler, hitboxHandler);
                break;

            case GameObjectConstants.GameObjectName.TreeStump:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.VEGETATION_TREE_STUMP,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.VEGETATION_TREE_STUMP)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.TreeStumpGround, x, y)
                );
                gameObject = new TreeStump(x, y, animationHandler, hitboxHandler);
                break;

            case GameObjectConstants.GameObjectName.Bush:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.VEGETATION_BUSH,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.VEGETATION_BUSH)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.BushGround, x, y)
                );
                gameObject = new Bush(x, y, animationHandler, hitboxHandler);
                break;

            case GameObjectConstants.GameObjectName.SignWooden:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.SIGN_WOODEN,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.SIGN_WOODEN)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.SignWoodenGround, x, y)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxName.SignWoodenReadRange,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.SignWoodenReadRange, x, y)
                );
                gameObject = new WoodenSign(x, y, animationHandler, hitboxHandler);
                break;

            case GameObjectConstants.GameObjectName.Rock:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.TERRAIN_ROCK,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.TERRAIN_ROCK)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.RockGround, x, y)
                );
                gameObject = new Rock(x, y, animationHandler, hitboxHandler);
                break;

            case GameObjectConstants.GameObjectName.BasicWarp:
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.WarpHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.BasicWarp, x, y)
                );
                gameObject = new BasicWarp(hitboxHandler, x, y);
                break;

            case GameObjectConstants.GameObjectName.SimpleFarmHouse:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.STRUCTURE_HOUSE_SIMPLE_FARM,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.STRUCTURE_HOUSE_SIMPLE_FARM)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.SimpleFarmHouse, x, y)
                );
                gameObject = new SimpleFarmHouse(x, y, animationHandler, hitboxHandler);
                break;

            case GameObjectConstants.GameObjectName.StoneWall:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.STONE_WALL,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.STONE_WALL)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.StoneWall, x, y)
                );
                gameObject = new StoneWall(x, y, animationHandler, hitboxHandler);
                break;
            case GameObjectConstants.GameObjectName.StoneWallEndRight:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.STONE_WALL_END,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.STONE_WALL_END)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.StoneWallEnd, x, y)
                );
                gameObject = new StoneWallEndLeft(x, y, animationHandler, hitboxHandler);
                break;
            case GameObjectConstants.GameObjectName.StoneWallEndLeft:
                let wallEndAnimation: Animation = AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.STONE_WALL_END);
                wallEndAnimation.setFlipOnY(true);
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.STONE_WALL_END,
                    wallEndAnimation
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.StoneWallEnd, x, y)
                );
                gameObject = new StoneWallEndRight(x, y, animationHandler, hitboxHandler);
                break;
            case GameObjectConstants.GameObjectName.StoneWallVertical:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.STONE_WALL_VERTICAL,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.STONE_WALL_VERTICAL)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.StoneWallVertical, x, y)
                );
                gameObject = new StoneWallVertical(x, y, animationHandler, hitboxHandler);
                break;
            case GameObjectConstants.GameObjectName.StoneWallLowerCornerLeft:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.STONE_WALL_LOWER_CORNER,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.STONE_WALL_LOWER_CORNER)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.StoneWallLowerCornerLeft, x, y)
                );
                gameObject = new StoneWallLowerCornerLeft(x, y, animationHandler, hitboxHandler);
                break;
            case GameObjectConstants.GameObjectName.StoneWallLowerCornerRight:
                let lowerCornerAnimation: Animation = AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.STONE_WALL_LOWER_CORNER);
                lowerCornerAnimation.setFlipOnY(true);
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.STONE_WALL_LOWER_CORNER,
                    lowerCornerAnimation
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.StoneWallLowerCornerRight, x, y)
                );
                gameObject = new StoneWallLowerCornerRight(x, y, animationHandler, hitboxHandler);
                break;
            case GameObjectConstants.GameObjectName.StoneWallUpperCornerLeft:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.STONE_WALL_UPPER_CORNER,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.STONE_WALL_UPPER_CORNER)
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.StoneWallUpperCornerLeft, x, y)
                );
                gameObject = new StoneWallUpperCornerLeft(x, y, animationHandler, hitboxHandler);
                break;
            case GameObjectConstants.GameObjectName.StoneWallUpperCornerRight:
                let upperCornerAnimation: Animation = AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.STONE_WALL_UPPER_CORNER);
                upperCornerAnimation.setFlipOnY(true);
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.STONE_WALL_UPPER_CORNER,
                    upperCornerAnimation
                );
                hitboxHandler.addHitbox(
                    HitboxConstants.HitboxType.GroundHitbox,
                    HitboxFactory.buildHitbox(HitboxConstants.HitboxName.StoneWallUpperCornerRight, x, y)
                );
                gameObject = new StoneWallUpperCornerRight(x, y, animationHandler, hitboxHandler);
                break;
            
            case GameObjectConstants.GameObjectName.FloorWooden:
                animationHandler.addAnimation(
                    AnimationConstants.AnimationNames.FLOOR_WOODEN,
                    AnimationFactory.buildAnimation(AnimationConstants.AnimationNames.FLOOR_WOODEN)
                );
                gameObject = new Floor(x, y, animationHandler);
                break;
        }

        return gameObject;
    }

}
