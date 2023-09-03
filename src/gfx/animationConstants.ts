
/**
 * This namespace is reserved for all constants related to
 * the {@link Animation} and {@link AnimationHandler} classes.
 */
export namespace AnimationConstants {

    /**
     * The AnimationNames enum keeps track of all
     * the aliases / names of animations. These should be used to
     * identify {@link Animation} instances when adding them to an
     * instance of the {@link AnimationHandler}.
     */
    export enum AnimationNames {
        // example for adding an animation name:
        // PLAYER_IDLE = "player_idle",
        PLAYER_IDLE_SOUTH           = "player_idle_south",
        PLAYER_IDLE_NORTH           = "player_idle_north",
        PLAYER_IDLE_EAST            = "player_idle_east",
        PLAYER_WALK_SOUTH           = "player_walk_south",
        PLAYER_WALK_NORTH           = "player_walk_north",
        PLAYER_WALK_EAST            = "player_walk_east",

        ENEMY_SLIME_IDLE            = "enemy_slime_idle",
        ENEMY_SLIME_JUMP            = "enemy_slime_jump",
        ENEMY_SLIME_ATTACK          = "enemy_slime_attack",
        ENEMY_SLIME_DAMAGE          = "enemy_slime_damage",
        ENEMY_SLIME_DIE             = "enemy_slime_die",

        VEGETATION_BIG_TREE         = "vegetation_big_tree",
        VEGETATION_SMALL_TREE       = "vegetation_small_tree",
        VEGETATION_TREE_STUMP       = "vegetation_tree_stump",
        VEGETATION_BUSH             = "vegetation_bush",

        TERRAIN_ROCK                = "terrain_rock",

        SIGN_WOODEN                 = "sign_wooden",

        STRUCTURE_HOUSE_SIMPLE_FARM = "simple_farm_house",

        STONE_WALL                  = "stone_wall",
        STONE_WALL_END              = "stone_wall_end",
        STONE_WALL_VERTICAL         = "stone_wall_vertical",
        STONE_WALL_LOWER_CORNER     = "stone_wall_lower_corner",
        STONE_WALL_UPPER_CORNER     = "stone_wall_upper_corner",

        FLOOR_WOODEN                = "floor_wooden",
    }

    export enum AnimationTypes {
        IDLE        = "idle",
        MOVE        = "move",
        ATTACK      = "attack",
        DAMAGE      = "damage",
        DIE         = "die",
    }

}
