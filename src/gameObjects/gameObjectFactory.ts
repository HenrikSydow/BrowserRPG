import { AnimationConstants } from "../gfx/animationConstants.js";
import { AnimationFactory } from "../gfx/animationFactory.js";
import { AnimationHandler } from "../gfx/animationHandler.js";
import { HitboxConstants } from "../physics/hitboxes/hitboxConstants.js";
import { HitboxFactory } from "../physics/hitboxes/hitboxFactory.js";
import { HitboxHandler } from "../physics/hitboxes/hitboxHandler.js";
import { Slime } from "./customObjects/characters/enemies/slime.js";
import { Player } from "./customObjects/characters/player.js";
import { WoodenSign } from "./customObjects/scenery/signs/woodenSign.js";
import { Rock } from "./customObjects/scenery/terrain/rock.js";
import { Bush } from "./customObjects/scenery/vegetation/bush.js";
import { BigTree } from "./customObjects/scenery/vegetation/trees/bigTree.js";
import { SmallTree } from "./customObjects/scenery/vegetation/trees/smallTree.js";
import { TreeStump } from "./customObjects/scenery/vegetation/trees/treeStump.js";
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
        }

        return gameObject;
    }

}
