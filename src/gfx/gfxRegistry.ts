
enum FileType {
    PNG     = ".png",
    JPG     = ".jpg",
    JPEG    = ".jpeg",
    GIF     = ".gif"
}

/**
 * This class defines and loads all graphics resources accessible by the engine.
 */
export abstract class GfxRegistry {

    // Define graphics resources to be loaded HERE! This example shows how to load
    // three png frames from a folder called "a_folder".
    // public static readonly EXAMPLE_ANIMATION_FRAMES: Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("a_folder", FileType.PNG, 3);

    // PLAYER:
    public static readonly PLAYER_IDLE_SOUTH_FRAMES:    Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("./res/player/idle/south", FileType.PNG, 6);
    public static readonly PLAYER_IDLE_NORTH_FRAMES:    Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("./res/player/idle/north", FileType.PNG, 6);
    public static readonly PLAYER_IDLE_EAST_FRAMES:     Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("./res/player/idle/east",  FileType.PNG, 6);
    public static readonly PLAYER_WALK_SOUTH_FRAMES:    Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("./res/player/walk/south", FileType.PNG, 6);
    public static readonly PLAYER_WALK_NORTH_FRAMES:    Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("./res/player/walk/north", FileType.PNG, 6);
    public static readonly PLAYER_WALK_EAST_FRAMES:     Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("./res/player/walk/east",  FileType.PNG, 6);

    // ENEMIES:
    public static readonly SLIME_IDLE_FRAMES:           Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("./res/enemies/slime/idle",    FileType.PNG, 4);
    public static readonly SLIME_JUMP_FRAMES:           Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("./res/enemies/slime/jump",    FileType.PNG, 6);
    public static readonly SLIME_ATTACK_FRAMES:         Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("./res/enemies/slime/attack",  FileType.PNG, 7);
    public static readonly SLIME_DAMAGE_FRAMES:         Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("./res/enemies/slime/damage",  FileType.PNG, 3);
    public static readonly SLIME_DIE_FRAMES:            Array<HTMLImageElement> = GfxRegistry.loadAnimationArray("./res/enemies/slime/die",     FileType.PNG, 5);

    // VEGETATION:
    public static readonly VEGETATION_BIG_TREE:         HTMLImageElement = GfxRegistry.loadSingleImage("./res/scenery/vegetation/trees/bigTree.png");
    public static readonly VEGETATION_TREE_STUMP:       HTMLImageElement = GfxRegistry.loadSingleImage("./res/scenery/vegetation/trees/treeStump.png");
    public static readonly VEGETATION_SMALL_TREE:       HTMLImageElement = GfxRegistry.loadSingleImage("./res/scenery/vegetation/trees/smallTree.png");
    public static readonly VEGETATION_BUSH:             HTMLImageElement = GfxRegistry.loadSingleImage("./res/scenery/vegetation/bush.png");

    // TERRAIN:
    public static readonly TERRAIN_ROCK:                HTMLImageElement = GfxRegistry.loadSingleImage("./res/scenery/rock.png");

    // SIGNS:
    public static readonly SIGN_WOODEN:                 HTMLImageElement = GfxRegistry.loadSingleImage("./res/scenery/sign.png");

    /**
     * Loads an array of images / frames, which can be used to construct animations.
     * File names have to look like this: 0.png, 1.png, ..., n.png;
     * You need to specify the exact count of images you want to load.
     * @param folder A folder path.
     * @param type A file type. (Like ".png" or ".jpg")
     * @param count The number of files to load.
     * @returns An Array of HTMLImageElements.
     */
    private static loadAnimationArray(folder: string, type: string, count: number): Array<HTMLImageElement> {
        let gfxResource: Array<HTMLImageElement> = [];
        for (let i: number = 0; i < count; i++) {
            gfxResource.push(
                this.loadSingleImage(folder + "/" + i.toString() + type)
            );
        }
        return gfxResource;
    }

    private static loadSingleImage(path: string): HTMLImageElement {
        let tempResource: HTMLImageElement = new Image();
        tempResource.src = path;
        return tempResource;
    }

}
