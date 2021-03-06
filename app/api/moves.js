const moves = [
{"id": "0", "name": "MOVE_UNSET", "dps": "0"},
{"id": "1", "name": "THUNDER_SHOCK", "dps": "?"},
{"id": "2", "name": "QUICK_ATTACK", "dps": "?"},
{"id": "3", "name": "SCRATCH", "dps": "?"},
{"id": "4", "name": "EMBER", "dps": "?"},
{"id": "5", "name": "VINE_WHIP", "dps": "?"},
{"id": "6", "name": "TACKLE", "dps": "?"},
{"id": "7", "name": "RAZOR_LEAF", "dps": "?"},
{"id": "8", "name": "TAKE_DOWN", "dps": "?"},
{"id": "9", "name": "WATER_GUN", "dps": "?"},
{"id": "10", "name": "BITE", "dps": "?"},
{"id": "11", "name": "POUND", "dps": "?"},
{"id": "12", "name": "DOUBLE_SLAP", "dps": "?"},
{"id": "13", "name": "WRAP", "dps": "6.25"},
{"id": "14", "name": "HYPER_BEAM", "dps": "24.0"},
{"id": "15", "name": "LICK", "dps": "?"},
{"id": "16", "name": "DARK_PULSE", "dps": "12.86"},
{"id": "17", "name": "SMOG", "dps": "?"},
{"id": "18", "name": "SLUDGE", "dps": "11.54"},
{"id": "19", "name": "METAL_CLAW", "dps": "?"},
{"id": "20", "name": "VICE_GRIP", "dps": "11.90"},
{"id": "21", "name": "FLAME_WHEEL", "dps": "8.7"},
{"id": "22", "name": "MEGAHORN", "dps": "25.0"},
{"id": "23", "name": "WING_ATTACK", "dps": "?"},
{"id": "24", "name": "FLAMETHROWER", "dps": "18.97"},
{"id": "25", "name": "SUCKER_PUNCH", "dps": "?"},
{"id": "26", "name": "DIG", "dps": "12.07"},
{"id": "27", "name": "LOW_KICK", "dps": "?"},
{"id": "28", "name": "CROSS_CHOP", "dps": "30"},
{"id": "29", "name": "PSYCHO_CUT", "dps": "?"},
{"id": "30", "name": "PSYBEAM", "dps": "10.53"},
{"id": "31", "name": "EARTHQUAKE", "dps": "23.81"},
{"id": "32", "name": "STONE_EDGE", "dps": "25.81"},
{"id": "33", "name": "ICE_PUNCH", "dps": "12.86"},
{"id": "34", "name": "HEART_STAMP", "dps": "9.8"},
{"id": "35", "name": "DISCHARGE", "dps": "14.0"},
{"id": "36", "name": "FLASH_CANNON", "dps": "15.38"},
{"id": "37", "name": "PECK", "dps": "?"},
{"id": "38", "name": "DRILL_PECK", "dps": "14.81"},
{"id": "39", "name": "ICE_BEAM", "dps": "17.81"},
{"id": "40", "name": "BLIZZARD", "dps": "25.64"},
{"id": "41", "name": "AIR_SLASH", "dps": "?"},
{"id": "42", "name": "HEAT_WAVE", "dps": "21.05"},
{"id": "43", "name": "TWINEEDLE", "dps": "?"},
{"id": "44", "name": "POISON_JAB", "dps": "?"},
{"id": "45", "name": "AERIAL_ACE", "dps": "10.34"},
{"id": "46", "name": "DRILL_RUN", "dps": "14.71"},
{"id": "47", "name": "PETAL_BLIZZARD", "dps": "20.31"},
{"id": "48", "name": "MEGA_DRAIN", "dps": "7.81"},
{"id": "49", "name": "BUG_BUZZ", "dps": "17.65"},
{"id": "50", "name": "POISON_FANG", "dps": "10.42"},
{"id": "51", "name": "NIGHT_SLASH", "dps": "11.11"},
{"id": "52", "name": "SLASH", "dps": "?"},
{"id": "53", "name": "BUBBLE_BEAM", "dps": "10.34"},
{"id": "54", "name": "SUBMISSION", "dps": "14.29"},
{"id": "55", "name": "KARATE_CHOP", "dps": "?"},
{"id": "56", "name": "LOW_SWEEP", "dps": "13.33"},
{"id": "57", "name": "AQUA_JET", "dps": "10.64"},
{"id": "58", "name": "AQUA_TAIL", "dps": "19.15"},
{"id": "59", "name": "SEED_BOMB", "dps": "16.67"},
{"id": "60", "name": "PSYSHOCK", "dps": "14.81"},
{"id": "61", "name": "ROCK_THROW", "dps": "?"},
{"id": "62", "name": "ANCIENT_POWER", "dps": "9.72"},
{"id": "63", "name": "ROCK_TOMB", "dps": "8.82"},
{"id": "64", "name": "ROCK_SLIDE", "dps": "15.63"},
{"id": "65", "name": "POWER_GEM", "dps": "13.79"},
{"id": "66", "name": "SHADOW_SNEAK", "dps": "8.06"},
{"id": "67", "name": "SHADOW_PUNCH", "dps": "11.9"},
{"id": "68", "name": "SHADOW_CLAW", "dps": "?"},
{"id": "69", "name": "OMINOUS_WIND", "dps": "9.68"},
{"id": "70", "name": "SHADOW_BALL", "dps": "14.61"},
{"id": "71", "name": "BULLET_PUNCH", "dps": "?"},
{"id": "72", "name": "MAGNET_BOMB", "dps": "10.71"},
{"id": "73", "name": "STEEL_WING", "dps": "?"},
{"id": "74", "name": "IRON_HEAD", "dps": "15.0"},
{"id": "75", "name": "PARABOLIC_CHARGE", "dps": "11.9"},
{"id": "76", "name": "SPARK", "dps": "?"},
{"id": "77", "name": "THUNDER_PUNCH", "dps": "16.67"},
{"id": "78", "name": "THUNDER", "dps": "23.26"},
{"id": "79", "name": "THUNDERBOLT", "dps": "20.37"},
{"id": "80", "name": "TWISTER", "dps": "9.26"},
{"id": "81", "name": "DRAGON_BREATH", "dps": "?"},
{"id": "82", "name": "DRAGON_PULSE", "dps": "18.06"},
{"id": "83", "name": "DRAGON_CLAW", "dps": "23.33"},
{"id": "84", "name": "DISARMING_VOICE", "dps": "6.41"},
{"id": "85", "name": "DRAINING_KISS", "dps": "8.93"},
{"id": "86", "name": "DAZZLING_GLEAM", "dps": "13.10"},
{"id": "87", "name": "MOONBLAST", "dps": "20.73"},
{"id": "88", "name": "PLAY_ROUGH", "dps": "18.97"},
{"id": "89", "name": "CROSS_POISON", "dps": "16.67"},
{"id": "90", "name": "SLUDGE_BOMB", "dps": "21.15"},
{"id": "91", "name": "SLUDGE_WAVE", "dps": "20.59"},
{"id": "92", "name": "GUNK_SHOT", "dps": "21.67"},
{"id": "93", "name": "MUD_SHOT", "dps": "?"},
{"id": "94", "name": "BONE_CLUB", "dps": "15.63"},
{"id": "95", "name": "BULLDOZE", "dps": "10.29"},
{"id": "96", "name": "MUD_BOMB", "dps": "11.54"},
{"id": "97", "name": "FURY_CUTTER", "dps": "?"},
{"id": "98", "name": "BUG_BITE", "dps": "?"},
{"id": "99", "name": "SIGNAL_BEAM", "dps": "14.52"},
{"id": "100", "name": "X_SCISSOR", "dps": "16.67"},
{"id": "101", "name": "FLAME_CHARGE", "dps": "8.06"},
{"id": "102", "name": "FLAME_BURST", "dps": "14.29"},
{"id": "103", "name": "FIRE_BLAST", "dps": "24.39"},
{"id": "104", "name": "BRINE", "dps": "10.42"},
{"id": "105", "name": "WATER_PULSE", "dps": "10.61"},
{"id": "106", "name": "SCALD", "dps": "13.75"},
{"id": "107", "name": "HYDRO_PUMP", "dps": "23.68"},
{"id": "108", "name": "PSYCHIC", "dps": "19.64"},
{"id": "109", "name": "PSYSTRIKE", "dps": "19.61"},
{"id": "110", "name": "ICE_SHARD", "dps": "?"},
{"id": "111", "name": "ICY_WIND", "dps": "6.58"},
{"id": "112", "name": "FROST_BREATH", "dps": "?"},
{"id": "113", "name": "ABSORB", "dps": "?"},
{"id": "114", "name": "GIGA_DRAIN", "dps": "13.89"},
{"id": "115", "name": "FIRE_PUNCH", "dps": "14.29"},
{"id": "116", "name": "SOLAR_BEAM", "dps": "24.49"},
{"id": "117", "name": "LEAF_BLADE", "dps": "19.64"},
{"id": "118", "name": "POWER_WHIP", "dps": "25.0"},
{"id": "119", "name": "SPLASH", "dps": "?"},
{"id": "120", "name": "ACID", "dps": "?"},
{"id": "121", "name": "AIR_CUTTER", "dps": "9.09"},
{"id": "122", "name": "HURRICANE", "dps": "25.0"},
{"id": "123", "name": "BRICK_BREAK", "dps": "18.75"},
{"id": "124", "name": "CUT", "dps": "?"},
{"id": "125", "name": "SWIFT", "dps": "10.0"},
{"id": "126", "name": "HORN_ATTACK", "dps": "11.36"},
{"id": "127", "name": "STOMP", "dps": "14.29"},
{"id": "128", "name": "HEADBUTT", "dps": "?"},
{"id": "129", "name": "HYPER_FANG", "dps": "16.67"},
{"id": "130", "name": "SLAM", "dps": "?"},
{"id": "131", "name": "BODY_SLAM", "dps": "25.64"},
{"id": "132", "name": "REST", "dps": "16.13"},
{"id": "133", "name": "STRUGGLE", "dps": "8.85"},
{"id": "134", "name": "SCALD_BLASTOISE", "dps": "?"},
{"id": "135", "name": "HYDRO_PUMP_BLASTOISE", "dps": "?"},
{"id": "136", "name": "WRAP_GREEN", "dps": "?"},
{"id": "137", "name": "WRAP_PINK", "dps": "?"},
{"id": "200", "name": "FURY_CUTTER_FAST", "dps": "7.5"},
{"id": "201", "name": "BUG_BITE_FAST", "dps": "11.11"},
{"id": "202", "name": "BITE_FAST", "dps": "12"},
{"id": "203", "name": "SUCKER_PUNCH_FAST", "dps": "10"},
{"id": "204", "name": "DRAGON_BREATH_FAST", "dps": "12"},
{"id": "205", "name": "THUNDER_SHOCK_FAST", "dps": "8.33"},
{"id": "206", "name": "SPARK_FAST", "dps": "10"},
{"id": "207", "name": "LOW_KICK_FAST", "dps": "8.33"},
{"id": "208", "name": "KARATE_CHOP_FAST", "dps": "7.5"},
{"id": "209", "name": "EMBER_FAST", "dps": "9.52"},
{"id": "210", "name": "WING_ATTACK_FAST", "dps": "12"},
{"id": "211", "name": "PECK_FAST", "dps": "8.7"},
{"id": "212", "name": "LICK_FAST", "dps": "10"},
{"id": "213", "name": "SHADOW_CLAW_FAST", "dps": "11.58"},
{"id": "214", "name": "VINE_WHIP_FAST", "dps": "10.77"},
{"id": "215", "name": "RAZOR_LEAF_FAST", "dps": "10.34"},
{"id": "216", "name": "MUD_SHOT_FAST", "dps": "10.91"},
{"id": "217", "name": "ICE_SHARD_FAST", "dps": "10.7"},
{"id": "218", "name": "FROST_BREATH_FAST", "dps": "11.11"},
{"id": "219", "name": "QUICK_ATTACK_FAST", "dps": "7.52"},
{"id": "220", "name": "SCRATCH_FAST", "dps": "12"},
{"id": "221", "name": "TACKLE_FAST", "dps": "10.91"},
{"id": "222", "name": "POUND_FAST", "dps": "12.96"},
{"id": "223", "name": "CUT_FAST", "dps": "10.62"},
{"id": "224", "name": "POISON_JAB_FAST", "dps": "11.43"},
{"id": "225", "name": "ACID_FAST", "dps": "9.52"},
{"id": "226", "name": "PSYCHO_CUT_FAST", "dps": "12.28"},
{"id": "227", "name": "ROCK_THROW_FAST", "dps": "8.82"},
{"id": "228", "name": "METAL_CLAW_FAST", "dps": "12.7"},
{"id": "229", "name": "BULLET_PUNCH_FAST", "dps": "8.33"},
{"id": "230", "name": "WATER_GUN_FAST", "dps": "12"},
{"id": "231", "name": "SPLASH_FAST", "dps": "0"},
{"id": "232", "name": "WATER_GUN_FAST_BLASTOISE", "dps": "12"},
{"id": "233", "name": "MUD_SLAP_FAST", "dps": "11.11"},
{"id": "234", "name": "ZEN_HEADBUTT_FAST", "dps": "11.43"},
{"id": "235", "name": "CONFUSION_FAST", "dps": "9.93"},
{"id": "236", "name": "POISON_STING_FAST", "dps": "10.43"},
{"id": "237", "name": "BUBBLE_FAST", "dps": "10.87"},
{"id": "238", "name": "FEINT_ATTACK_FAST", "dps": "11.54"},
{"id": "239", "name": "STEEL_WING_FAST", "dps": "11.28"},
{"id": "240", "name": "FIRE_FANG_FAST", "dps": "11.9"},
{"id": "241", "name": "ROCK_SMASH_FAST", "dps": "10.64"}
];

export function getMoveName(id) {
  for(var i = 0; i < moves.length; i++) {
    if( moves[i].id == id )
      return moves[i].name.split('_FAST').join('+').split('_').join('').concat('(' + moves[i].dps + ')');
  }

  return "N/A";
}
