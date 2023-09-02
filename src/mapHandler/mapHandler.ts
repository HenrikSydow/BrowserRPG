import { GameObjectHandler } from "../gameObjects/gameObjectHandler.js";
import { BaseMap } from "./baseMap.js";
import { MapConstants } from "./mapConstants.js";
import { RockyTestMap } from "./maps/rockyTestMap.js";
import { TestMap } from "./maps/testMap.js";


export abstract class MapHandler {

    private static maps: Map<MapConstants.MapID, typeof BaseMap> = new Map<MapConstants.MapID, typeof BaseMap>([
        [MapConstants.MapID.ExampleMap, TestMap],
        [MapConstants.MapID.RockyTestMap, RockyTestMap]
    ]);

    public static loadMap(mapID: MapConstants.MapID): BaseMap {
        GameObjectHandler.clear();
        let tempMap: any = MapHandler.maps.get(mapID);
        return new tempMap(mapID);
    }

}
