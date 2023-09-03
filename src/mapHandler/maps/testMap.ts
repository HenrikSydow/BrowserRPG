
import { BaseMap } from "./../baseMap.js";
import { GameObjectConstants } from "../../gameObjects/gameObjectConstants.js";
import { GameObjectFactory } from "../../gameObjects/gameObjectFactory.js";
import { BasicWarp } from "../../gameObjects/customObjects/events/warp/basicWarp.js";
import { MapConstants } from "../mapConstants.js";
import { GameObjectHandler } from "../../gameObjects/gameObjectHandler.js";

export class TestMap extends BaseMap {

    protected override loadObjects() {
        this.spawnGameObject(GameObjectConstants.GameObjectName.SmallTree, 871.6279569892474, -529.2956989247305);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SmallTree, -514.3935483870968, -499.18817204301);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 261.87253886010376, -535.6191709844553);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 534.4113989637308, -496.2409326424863);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 391.40621761658053, -495.2046632124345);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SmallTree, 355.498924731183, -404.5645161290315);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SmallTree, 514.6387096774195, -395.96236559139714);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, -182.4797927461144, -458.83160621761664);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 638.0383419689122, -427.84715025906667);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, -305.7958549222802, -410.1269430051814);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Rock, 474.30777202072545, -157.38082901554333);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 677.416580310881, -342.87305699481794);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SimpleFarmHouse, -23.52658227848042, -477.78101265822744);
        this.spawnGameObject(GameObjectConstants.GameObjectName.TreeStump, 374.82590673575146, -140.80051813471425);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, -445.69222797927506, -303.3911917098446);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Rock, 633.8932642487048, -71.37046632124282);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SignWooden, 298.1419689119173, -50.64507772020647);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SmallTree, -612.2430107526882, -205.6397849462358);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Bush, -95.640414507772, -111.78497409326349);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 752.0279792746117, -244.42746113989563);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, -406, -170);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Slime, 375.9290322580646, 40.59677419354921);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 774.8259067357515, -96.24093264248631);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Slime, -277.83440860215046, 109.41397849462442);
        this.spawnGameObject(GameObjectConstants.GameObjectName.TreeStump, -95, 109);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, -488, -31);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SmallTree, -629.447311827957, 79.30645161290397);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 684.6704663212438, 28.11139896373129);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Slime, -205.79139784946233, 229.8440860215062);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Bush, -388, 207);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 559.2818652849742, 73.70725388601113);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SmallTree, 280, 170);
        this.spawnGameObject(GameObjectConstants.GameObjectName.Bush, -486, 273);
        this.spawnGameObject(GameObjectConstants.GameObjectName.SmallTree, -329.4473118279569, 294.36021505376425);
        this.spawnGameObject(GameObjectConstants.GameObjectName.BigTree, 461.87253886010376, 246.76424870466406);
        let warp: BasicWarp = GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.BasicWarp, 140, -130) as BasicWarp;
        warp.setWarpTarget(MapConstants.MapID.RoomTestMap, 160, 80);
        GameObjectHandler.add(warp);

    }

}
