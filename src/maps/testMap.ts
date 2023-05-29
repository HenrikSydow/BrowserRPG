
import { BaseMap } from "./baseMap.js";
import { GameObjectConstants } from "../gameObjects/gameObjectConstants.js";

export class TestMap extends BaseMap {

    protected override loadObjects() {
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 96, -279);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, -116, -249);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Rock, 82, -27);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SmallTree, -203, -127);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, -406, -170);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SmallTree, 232, -80);
        this.spawnGameObject(GameObjectConstants.GameObjectName.TreeStump, -95, 109);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 358, -41);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, -488, -31);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SignWooden, 8, 197);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Bush, -388, 207);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Slime, 48, 246);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Slime, 140, 273);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SmallTree, 280, 170);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Bush, -486, 273);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Slime, 58, 317);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BasicWarp, 218, 164);
    }

}
