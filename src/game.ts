import { FpsCounter } from "./fpsCounter.js";
import { GameObjectHandler } from "./gameObjects/gameObjectHandler.js";
import { GameTime } from "./gameTime.js";
import { KeyHandler } from "./keyHandler.js";
import { MouseHandler } from "./mouseHandler.js";
import { HudMessageDisplay } from "./hud/hudMessageDisplay.js";
import { GameObjectFactory } from "./gameObjects/gameObjectFactory.js";
import { GameObjectConstants } from "./gameObjects/gameObjectConstants.js";
import { Camera } from "./gfx/camera.js";
import { Player } from "./gameObjects/customObjects/characters/player.js";
import { MapEditor } from "./mapEditor/mapEditor.js";

/**
 * Main class of the engine.
 * Initializes all game components / gameObjects.
 */
export class Game {
    private readonly canvas: HTMLCanvasElement = document.getElementById("gameCanvas") as HTMLCanvasElement;
    private readonly ctx2d: CanvasRenderingContext2D = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    private readonly mainCamera: Camera = new Camera();
    private readonly mapEditor: MapEditor = new MapEditor(this.mainCamera);

    /**
     * The constructor for the Game class.
     */
    constructor() {
        //Reset static classes
        this.reset();

        // Bind mousehandler:
        document.onmousedown    = MouseHandler.handlePressed;
        document.onmouseup      = MouseHandler.handleReleased;
        document.onmouseleave   = MouseHandler.handleReleased;
        document.onmousemove    = MouseHandler.handleMoved;

        // Bind keyhandler:
        globalThis.addEventListener("keydown", KeyHandler.handleKeyDown);
        globalThis.addEventListener("keyup", KeyHandler.handleKeyUp);

        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.BigTree, 96, -279));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.BigTree, -116, -249));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.Rock, 82, -27));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.SmallTree, -203, -127));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.BigTree, -406, -170));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.SmallTree, 232, -80));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.TreeStump, -95, 109));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.BigTree, 358, -41));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.BigTree, -488, -31));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.SignWooden, 8, 197));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.Bush, -388, 207));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.Slime, 48, 246));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.Slime, 140, 273));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.SmallTree, 280, 170));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.Bush, -486, 273));
        GameObjectHandler.add(GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.Slime, 58, 317));

        let player: Player = GameObjectFactory.buildGameObject(GameObjectConstants.GameObjectName.Player, 0, 0) as Player;
        GameObjectHandler.add(player);
        this.mainCamera.trackObject(player);

        globalThis.requestAnimationFrame(this.gameloop.bind(this));
    }

    /**
     * The gameloop, which calls update and render methods.
     */
    public gameloop(): void {
        this.update();
        this.render();

        globalThis.requestAnimationFrame(this.gameloop.bind(this));
    }

    /**
     * The main update method of the entire game engine.
     * Called by the gameloop.
     */
    private update(): void {
        GameTime.update();
        GameObjectHandler.update();
        this.mainCamera.update();
        HudMessageDisplay.update();
        this.mapEditor.update();
    }

    /**
     * The main render method of the entire game engine.
     * Called by the gameloop.
     */
    private render(): void {
        let ctx: CanvasRenderingContext2D = this.ctx2d;
        ctx.canvas.width = globalThis.innerWidth;
        ctx.canvas.height = globalThis.innerHeight;

        // Options:
        ctx.imageSmoothingEnabled = false; // <-- disables anti aliasing, necessary for pixelart

        // Background:
        ctx.fillStyle = "#111111";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // HUD:
        HudMessageDisplay.render(ctx);
        FpsCounter.render(ctx);

        // Camera:
        this.mainCamera.render(ctx);

        // Foreground:
        GameObjectHandler.render(ctx);

        // Map Editor:
        this.mapEditor.render(ctx);

        // Cleanup:
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    private reset(): void {
        GameObjectHandler.clear();
    }

}

// ENTRY POINT & Composition root: ===========================================
/**
 * Entry point for the application / game engine and composition root.
 */
globalThis.onload = () => {
    new Game();
}
// ===========================================================================
