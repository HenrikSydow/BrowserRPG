import { GameObject } from "../gameObjects/gameObject.js";
import { GameObjectHandler } from "../gameObjects/gameObjectHandler.js";
import { PhysicalGameObject } from "../gameObjects/physicalGameObject.js";
import { Camera, ITrackable } from "../gfx/camera.js";
import { KeyHandler } from "../keyHandler.js";
import { MouseHandler } from "../mouseHandler.js";
import { Hitbox } from "../physics/hitboxes/hitbox.js";
import { HitboxConstants } from "../physics/hitboxes/hitboxConstants.js";
import { ShapeBase } from "../physics/shapes/shapeBase.js";
import { Rectangle } from "../physics/shapes/rectangle.js";
import { MapEditorConstants } from "./mapEditorConstants.js";
import { GameObjectConstants } from "../gameObjects/gameObjectConstants.js";
import { GameObjectFactory } from "../gameObjects/gameObjectFactory.js";
import { GameTime } from "../gameTime.js";
import { Circle } from "../physics/shapes/circle.js";
import { MapExporter } from "./mapExporter.js";

export class MapEditor {

    private htmlCode: string = `
    <div id=${MapEditorConstants.ElementIDs.MapEditorWindow}>
        <h1>
            Map Editor
        </h1>
        <div class=${MapEditorConstants.ElementIDs.MapEditorWindowDiv}>
            <input type="text" placeholder="Map Name" id=${MapEditorConstants.ElementIDs.ExportMapNameInput} value="">
            <button type="button" id=${MapEditorConstants.ElementIDs.ExportMapButton}>export</button>
        </div>
        <div id=${MapEditorConstants.ElementIDs.InfoFlexContainer}>
            <div class=${MapEditorConstants.ElementIDs.MapEditorWindowDiv}>
                <h2>
                    Mouse-Info:
                </h2>
                <p>Mouse-X:</p><p id=${MapEditorConstants.ElementIDs.MouseInfoXPosition}></p>
                <p>Mouse-Y:</p><p id=${MapEditorConstants.ElementIDs.MouseInfoYPosition}></p>
            </div>
            <div class=${MapEditorConstants.ElementIDs.MapEditorWindowDiv}>
                <h2>
                    Keyboard-Info:
                </h2>
                <p>Pressed keys:</p><ul id=${MapEditorConstants.ElementIDs.KeyInfoPressedList}></ul>
            </div>
        </div>
        <div class=${MapEditorConstants.ElementIDs.MapEditorWindowDiv} id=${MapEditorConstants.ElementIDs.HitboxCheckBoxDiv}>
            <h2>
                Hitbox outlines:
            </h2>
        </div>
        <div class=${MapEditorConstants.ElementIDs.MapEditorWindowDiv}>
            <h2>
                Game Objects:
            </h2>
            <ul id=${MapEditorConstants.ElementIDs.GameObjectDropList}></ul>
        </div>
    </div>
    `

    private visible: boolean = false;
    private hitboxesToShow: Set<HitboxConstants.HitboxType> = new Set<HitboxConstants.HitboxType>();
    private camera: Camera;
    private initialCameraZoom: number;
    private initialCameraTrackable: ITrackable;
    private dropGameObjectId: GameObjectConstants.GameObjectName;
    private dropGameObject: PhysicalGameObject;

    constructor(mainCamera: Camera) {
        this.camera = mainCamera;
        document.getElementById(MapEditorConstants.ElementIDs.MapEditor).innerHTML = this.htmlCode;
        this.initGameObjectsList();
        this.initHitboxOutlineChecks();
        this.initButtons();
        document.oncontextmenu = event => { if (this.visible) event.preventDefault() };
        window.addEventListener("wheel", event => {
            if (this.visible) this.camera.setZoom(this.camera.getZoom() + event.deltaY * -0.0002)
        });
        this.printHelp();
        this.hide();
    }

    public update(): void {
        if (KeyHandler.isPressed("+")) {
            this.show();
        } else if (KeyHandler.isPressed("-")) {
            this.hide();
        }

        if (this.visible) {
            this.handleMouseEvents();
            this.handleKeyEvents();
            this.updateMouseInfo();
            this.updateKeyInfo();
            this.updateDropGameObject();
        }
    }

    public render(ctx: CanvasRenderingContext2D): void {
        if (this.visible) {
            this.renderDropGameObject(ctx);
            this.renderHitboxes(ctx);
        }
    }

    private handleKeyEvents(): void {
        let cameraSpeed: number = GameTime.normalize(4);
        if (KeyHandler.isPressed("ArrowUp")) {
            this.camera.shiftLocation(0, -cameraSpeed);
        }
        if (KeyHandler.isPressed("ArrowDown")) {
            this.camera.shiftLocation(0, cameraSpeed);
        }
        if (KeyHandler.isPressed("ArrowLeft")) {
            this.camera.shiftLocation(-cameraSpeed, 0);
        }
        if (KeyHandler.isPressed("ArrowRight")) {
            this.camera.shiftLocation(cameraSpeed, 0);
        }
    }

    private renderDropGameObject(ctx: CanvasRenderingContext2D): void {
        let initialAlpha: number = ctx.globalAlpha;
        if (this.dropGameObject != undefined) {
            ctx.globalAlpha = 0.5;
            this.dropGameObject.render(ctx);
            ctx.globalAlpha = initialAlpha;
        }
    }

    private renderHitboxes(ctx: CanvasRenderingContext2D): void {
        this.hitboxesToShow.forEach(hBoxEnum => {
            GameObjectHandler.getObjectsByType(PhysicalGameObject).forEach(object => {
                let hBox: Hitbox = (object as PhysicalGameObject).getHitboxHandler().getHitbox(hBoxEnum);
                if (hBox == undefined) {
                    return;
                }
                ctx.strokeStyle = "red";
                hBox.getShapes().forEach(shape => {
                    if (shape instanceof Rectangle) {
                        let rectShape: Rectangle = shape as Rectangle;
                        let xCor: number = hBox.getX() + rectShape.getLocalX();
                        let yCor: number = hBox.getY() + rectShape.getLocalY();
                        ctx.strokeRect(xCor, yCor, rectShape.getWidth(), rectShape.getHeight());
                    } else if (shape instanceof Circle) {
                        throw Error("Not implemented.");
                    }
                })
            });
        });
    }

    private hide(): void {
        this.visible = false;
        document.getElementById(MapEditorConstants.ElementIDs.MapEditor).style.display = "none";
        if (this.initialCameraZoom != undefined) {
            this.camera.setZoom(this.initialCameraZoom);
        }
        if (this.initialCameraTrackable != undefined) {
            this.camera.trackObject(this.initialCameraTrackable);
        }
    }

    private show(): void {
        if (!this.visible) {
            this.visible = true;
            this.initialCameraZoom = this.camera.getZoom();
            this.initialCameraTrackable = this.camera.releaseTrackable();
            document.getElementById(MapEditorConstants.ElementIDs.MapEditor).style.display = "block";
        }
    }

    private updateDropGameObject(): void {
        if (this.dropGameObject != undefined) {
            this.dropGameObject.setX(this.getGlobalMouseX());
            this.dropGameObject.setY(this.getGlobalMouseY());
            this.dropGameObject.getAnimationhandler().update(
                this.dropGameObject.getX(),
                this.dropGameObject.getY()
            )
        }
    }

    private handleMouseEvents(): void {
        if (MouseHandler.isPressed(MouseHandler.MouseButton.Middle)) {
            GameObjectHandler.remove(
                this.getInterceptingObject(
                    new Hitbox(this.getGlobalMouseX(), this.getGlobalMouseY(), new Array<ShapeBase>(new Rectangle(0, 0, 1, 1)))
                )
            );
        } else if (MouseHandler.isPressed(MouseHandler.MouseButton.Left)) {
            if (this.dropGameObject != undefined) {
                GameObjectHandler.add(
                    GameObjectFactory.buildGameObject(this.dropGameObjectId, this.dropGameObject.getX(), this.dropGameObject.getY())
                );
                this.dropGameObject = undefined;
            }
        } else if (MouseHandler.isPressed(MouseHandler.MouseButton.Right)) {
            if (this.dropGameObjectId != undefined) {
                this.dropNewGameObject(this.dropGameObjectId);
            }
        }
    }

    private getGlobalMouseX(): number {
        return MouseHandler.getX() * (1 / this.camera.getZoom()) + this.camera.getX();
    }

    private getGlobalMouseY(): number {
        return MouseHandler.getY() * (1 / this.camera.getZoom()) + this.camera.getY();
    }

    private updateMouseInfo(): void {
        let mouseXCorLabel: HTMLParagraphElement = document.getElementById(MapEditorConstants.ElementIDs.MouseInfoXPosition) as HTMLParagraphElement;
        let mouseYCorLabel: HTMLParagraphElement = document.getElementById(MapEditorConstants.ElementIDs.MouseInfoYPosition) as HTMLParagraphElement;
        mouseXCorLabel.textContent = `${Math.round(this.getGlobalMouseX())}`;
        mouseYCorLabel.textContent = `${Math.round(this.getGlobalMouseY())}`;
    }

    private updateKeyInfo(): void {
        let keysPressedList: HTMLUListElement = document.getElementById(MapEditorConstants.ElementIDs.KeyInfoPressedList) as HTMLUListElement;
        keysPressedList.innerHTML = "";
        KeyHandler.getKeys().forEach( key => {
            let keyListItem: HTMLLIElement = document.createElement("li");
            keyListItem.textContent = key;
            keysPressedList.appendChild(keyListItem);
        });
    }

    private getInterceptingObject(hBox: Hitbox) {
        let interceptingObject: GameObject;
        GameObjectHandler.getObjectsByType(PhysicalGameObject).forEach((object: PhysicalGameObject) => {
            if (interceptingObject != undefined) {
                return;
            }
            let groundHBox: Hitbox = object.getHitboxHandler().getHitbox(HitboxConstants.HitboxType.GroundHitbox);
            if (groundHBox != null && groundHBox.intersects(hBox)) {
                interceptingObject = object;
            }
        });
        return interceptingObject;
    }

    private initButtons(): void {
        (document.getElementById(MapEditorConstants.ElementIDs.ExportMapButton) as HTMLButtonElement).onclick = () => {
            MapExporter.downloadMap((document.getElementById(MapEditorConstants.ElementIDs.ExportMapNameInput) as HTMLInputElement).value);
            console.log("download");
        };
    }

    private initGameObjectsList(): void {
        let objectIds: Array<string> = Object.keys(GameObjectConstants.GameObjectName).filter(id => {
            return isNaN(Number(id));
        });
        let gameObjectList: HTMLUListElement = document.getElementById(MapEditorConstants.ElementIDs.GameObjectDropList) as HTMLUListElement;
        objectIds.forEach(id => {
            let tempListItem: HTMLLIElement = document.createElement("li");
            let tempButton: HTMLButtonElement = document.createElement("button");
            let actualId: GameObjectConstants.GameObjectName = GameObjectConstants.GameObjectName[id];

            tempButton.textContent = id;
            tempButton.onclick = () => { this.dropNewGameObject(actualId) };

            tempListItem.appendChild(tempButton);
            gameObjectList.appendChild(tempListItem);
        });
    }

    private initHitboxOutlineChecks(): void {
        let hitboxTypes: Array<string> = Object.keys(HitboxConstants.HitboxType).filter(id => {
            return isNaN(Number(id));
        });
        let checkboxDiv: HTMLDivElement = document.getElementById(MapEditorConstants.ElementIDs.HitboxCheckBoxDiv) as HTMLDivElement;
        hitboxTypes.forEach(type => {
            let theEnum: HitboxConstants.HitboxType = HitboxConstants.HitboxType[type];
            let tempCheckBox: HTMLInputElement = document.createElement("input");
            tempCheckBox.type = "checkbox";
            tempCheckBox.id = `hitboxCheckbox_${type}`;
            tempCheckBox.addEventListener("change", () => {
                if (this.hitboxesToShow.has(theEnum)) {
                    this.hitboxesToShow.delete(theEnum);
                } else {
                    this.hitboxesToShow.add(theEnum);
                }
            });
            let tempLabel: HTMLLabelElement = document.createElement("label");
            tempLabel.textContent = `${type}`;
            tempLabel.htmlFor = tempCheckBox.id;
            checkboxDiv.appendChild(tempCheckBox);
            checkboxDiv.appendChild(tempLabel);
        });
    }

    private dropNewGameObject(id: GameObjectConstants.GameObjectName): void {
        this.dropGameObjectId = id;
        this.dropGameObject = GameObjectFactory.buildGameObject(id, this.getGlobalMouseX(), this.getGlobalMouseY()) as PhysicalGameObject;
    }

    private printHelp(): void {
        console.log(`
        *************************************************************************
        *                       M A P   E D I T O R                             *
        *                       ===================                             *
        *                                                                       *
        *                                                                       *
        *   Controls:                                                           *
        *   ¯¯¯¯¯¯¯¯¯                                                           *
        *                                                                       *
        *     - Open / close:                                                   *
        *           Use the "+"-Key to open the map editor.                     *
        *           Use the "-"-Key to close the map editor again.              *
        *                                                                       *
        *     - Left Mouse Button:                                              *
        *           Place a selected GameObject.                                *
        *                                                                       *
        *     - Middle Mouse Button:                                            *
        *           Deletes a GameObject with an intersecting ground-hitbox.    *
        *                                                                       *
        *     - Right Mouse Button:                                             *
        *           Get a copy of the last selected GameObject.                 *
        *                                                                       *
        *     - Moving the camera:                                              *
        *           Use the arrow keys to move. The camera will reset to the    *
        *           initially tracked object after leaving the map editor.      *
        *                                                                       *
        *                                                                       *
        *************************************************************************
        `);
    }

}
