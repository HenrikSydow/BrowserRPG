import { BaseMap } from "./baseMap.js";
import { MapConstants } from "./mapConstants.js";
import { TestMap } from "./testMap.js";


export abstract class MapHandler {

    private static maps: Map<MapConstants.MapID, typeof BaseMap> = new Map([
        [MapConstants.MapID.ExampleMap, TestMap]
    ]);

    public static loadMap(mapID: MapConstants.MapID): BaseMap {
        let tempMap: any = MapHandler.maps.get(mapID);
        return new tempMap(mapID);
    }

}
