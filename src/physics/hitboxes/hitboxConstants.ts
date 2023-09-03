
/**
 * Contains constants to use with hitboxes and shapes.
 */
export namespace HitboxConstants {

    /**
     * Contains identifiers for different hitboxes.
     */
    export enum HitboxName {
        /*
        Add hitbox identifiers like this:
        ExampleHitboxId = "ChooseWhateverYouWant",
        */
        PlayerGround                = "player_ground",
        BigTreeGround               = "tree_ground",
        SmallTreeGround             = "small_tree_ground",
        TreeStumpGround             = "tree_stump_ground",
        BushGround                  = "bush_ground",
        SlimeGround                 = "slime_ground",
        SignWoodenGround            = "wooden_sign_ground",
        SignWoodenReadRange         = "wooden_sign_read_range",
        RockGround                  = "rock_ground",
        BasicWarp                   = "basic_warp",
        SimpleFarmHouse             = "simple_farm_house",
        StoneWall                   = "stone_wall",
        StoneWallEnd                = "stone_wall_end",
        StoneWallVertical           = "stone_wall_vertical",
        StoneWallLowerCornerLeft    = "stone_wall_lower_corner_left",
        StoneWallLowerCornerRight   = "stone_wall_lower_corner_right",
        StoneWallUpperCornerLeft    = "stone_wall_upper_corner_left",
        StoneWallUpperCornerRight   = "stone_wall_upper_corner_right",
    }

    export enum HitboxType {
        GroundHitbox        = "ground_hitbox",
        WarpHitbox          = "warp_hitbox",
    }

}
