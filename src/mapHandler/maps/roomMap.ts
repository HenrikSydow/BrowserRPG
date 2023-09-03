
import { BaseMap } from "../baseMap.js";
import { GameObjectConstants } from "../../gameObjects/gameObjectConstants.js";
import { BasicWarp } from "../../gameObjects/customObjects/events/warp/basicWarp.js";
import { GameObjectFactory } from "../../gameObjects/gameObjectFactory.js";
import { MapConstants } from "../mapConstants.js";
import { GameObjectHandler } from "../../gameObjects/gameObjectHandler.js";

export class RoomMap extends BaseMap {

    protected override loadObjects() {
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 515.1855072463763, 151.42463768115942);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 516.1516908212554, -7.029468599033805);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 40.789371980675696, -164.51739130434783);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, -118.63091787439669, -165.48357487922706);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, -118.63091787439669, -7.029468599033805);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 356.73140096618295, 152.39082125603863);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 360.5961352657, 152.39082125603863);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 359.6299516908207, -7.029468599033805);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 200.2096618357482, -7.029468599033805);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 40.789371980675696, 152.39082125603863);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 200.2096618357482, 152.39082125603863);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 40.789371980675696, -7.029468599033805);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, -118.63091787439669, 153.3570048309179);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 201.1758454106274, -163.55120772946862);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 355.76521739130385, -162.58502415458938);
        this.spawnGameObject(GameObjectConstants.GameObjectName.FloorWooden, 514.219323671497, -162.58502415458938);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWall, 99.74975845410665, -349.7946859903382);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWall, 319.0734299516911, -349.7946859903382);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWall, 453.37294685990366, -349.7946859903382);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWall, -117.64154589371947, -348.82850241545896);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWall, -120.54009661835721, 118.29806763285029);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWall, -39.38067632850209, 119.2642512077295);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWall, 375.1120772946864, 122.16280193236719);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWall, 455.3053140096621, 123.1289855072464);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWallUpperCornerLeft, -155, -348.75);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWallVertical, -155, -138.75);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWallLowerCornerLeft, -155, 98.25);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWallEndRight, 109, 119.25);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWallUpperCornerRight, 666.7333333333315, -350.2777777777777);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWallVertical, 671.1777777777759, -135.46296296296282);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWallLowerCornerRight, 620.8074074074057, 103.05555555555588);
        this.spawnGameObject(GameObjectConstants.GameObjectName.StoneWallEndLeft, 331.1777777777758, 122.31481481481512);
        let warp: BasicWarp = GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.BasicWarp, 230, 310) as BasicWarp;
        warp.setWarpTarget(MapConstants.MapID.ExampleMap, 70, -220);
        GameObjectHandler.add(warp);
    }

}
