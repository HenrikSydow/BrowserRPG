
/**
 * Contains constants to use with GameObjects.
 */
export namespace GameObjectConstants {

    /**
     * Contains the names / ids of GameObjects.
     */
    export enum GameObjectName {
        /*
        Example GameObject name / id:
        ExampleObject = "testObject",
        */
        Player                      = "player",
        BigTree                     = "bigTree",
        SmallTree                   = "smallTree",
        TreeStump                   = "treeStump",
        Bush                        = "bush",
        Slime                       = "slime",
        SignWooden                  = "signWooden",
        Rock                        = "rock",
        BasicWarp                   = "basicWarp",
        SimpleFarmHouse             = "simpleFarmHouse",
        StoneWall                   = "stoneWall",
        StoneWallEndRight           = "stoneWallEndRight",
        StoneWallEndLeft            = "stoneWallEndLeft",
        StoneWallVertical           = "stoneWallVertical",
        StoneWallLowerCornerLeft    = "stoneWallLowerCornerLeft",
        StoneWallLowerCornerRight   = "stoneWallLowerCornerRight",
        StoneWallUpperCornerLeft    = "stoneWallUpperCornerLeft",
        StoneWallUpperCornerRight   = "stoneWallUpperCornerRight",
        FloorWooden                 = "floorWooden",
    }

    export enum FaceDirection {
        North   = "north",
        East    = "east",
        South   = "south",
        West    = "west"
    }

    export enum ActionState {
        Idle    = "idle",
        Walk    = "walk",
        Attack  = "attack",
        Dead    = "dead"
    }

}
