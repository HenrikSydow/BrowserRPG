import { GameObjectHandler } from "../gameObjects/gameObjectHandler.js";
import { GameObjectFactory } from "../gameObjects/gameObjectFactory.js";
import { GameObjectConstants } from "../gameObjects/gameObjectConstants.js";


export abstract class BaseMap {

    protected name: String;

    constructor(name: String) {
        this.name = name;
        this.loadObjects();
    }

    protected abstract loadObjects(): void;

    protected spawnGameObject(gameObjectName: GameObjectConstants.GameObjectName, x: number, y: number): void {
        GameObjectHandler.add(GameObjectFactory.buildGameObject(gameObjectName, x, y));
    }

}
