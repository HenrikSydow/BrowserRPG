import { GameObject } from "../gameObjects/gameObject.js";
import { GameObjectConstants } from "../gameObjects/gameObjectConstants.js";
import { GameObjectFactory } from "../gameObjects/gameObjectFactory.js";
import { GameObjectHandler } from "../gameObjects/gameObjectHandler.js";

export abstract class MapExporter {

    public static getMapCreationScript(mapName: String): string {
        this.getGameObjectCreationScript();
        let className = mapName.charAt(0).toUpperCase() + mapName.slice(1);
        let objectCreation: string = this.getGameObjectCreationScript();
        return `
import { BaseMap } from "./baseMap.js";
import { GameObjectConstants } from "../gameObjects/gameObjectConstants.js";

export class ${className} extends BaseMap {

    protected override loadObjects() {
${objectCreation}
    }

}
`;
    }

    public static downloadMap(mapName: String): void {
        let downloadLink: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.getMapCreationScript(mapName)));
        downloadLink.setAttribute('download', `${mapName}.ts`);
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    private static getGameObjectCreationScript(): string {
        let objectCreationScript: string = "";

        // create enum to class mapping:
        let gameObjectEnum: Array<string> = Object.keys(GameObjectConstants.GameObjectName).filter(name => {
            return isNaN(Number(name));
        });
        let typeEnumMap: Map<String, String> = new Map();  // class-name as string, the enum value as string
        gameObjectEnum.forEach(enumName => {
            let tempObject: GameObject = GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName[enumName], 0, 0);
            typeEnumMap.set(tempObject.constructor.name, GameObjectConstants.GameObjectName[enumName]);
        });

        // iterate all gameobjects and resolve their gameObjectName-enum key by filtering for matching values:
        GameObjectHandler.getAllObjects().forEach(gameObject => {
            typeEnumMap.forEach((enumValue, className) => {
                if (className == gameObject.constructor.name) {
                    let enumKey = Object.keys(GameObjectConstants.GameObjectName).filter(key => GameObjectConstants.GameObjectName[key] == enumValue);
                    objectCreationScript += `        this.spawnGameObject(GameObjectConstants.GameObjectName.${enumKey}, ${gameObject.getX()}, ${gameObject.getY()});\n`;
                    return;
                }
            });
        });
        return objectCreationScript;
    }

}
