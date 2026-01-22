<script>
    import {onMount} from "svelte";

    let vs_container;
    let ln_container;
    let mmj_container;
    let vbs_container;
    let wxs_container;
    let n25_container;

    let cards = {
        //VOCALOIDS
        S91PE02SPR: {
            name: "Powerful Smile",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-PE02SPR.png",
            rarity: "PR",
            rarityId: 1,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91PE01:{
            name: "The Big Debut",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-PE01PR.png",
            rarity: "PR",
            rarityId: 1,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E044:{
            name: "Stage Sekai",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E044.png",
            rarity: "C",
            rarityId: 2,
            character: "Kagamine Rin",
            characterId: 2,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E068:{
            name: "Street Sekai",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E068.png",
            rarity: "C",
            rarityId: 2,
            character: "Kagamine Len",
            characterId: 3,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E099:{
            name: "School Sekai",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E099.png",
            rarity: "C",
            rarityId: 2,
            character: "Megurine Luka",
            characterId: 4,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E073:{
            name: "Street Sekai",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E073.png",
            rarity: "C",
            rarityId: 2,
            character: "MEIKO",
            characterId: 5,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E019:{
            name: "Wonderland Sekai",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E019.png",
            rarity: "C",
            rarityId: 2,
            character: "KAITO",
            characterId: 6,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E040:{
            name: "All to See You Smile",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E040.png",
            rarity: "U",
            rarityId: 4,
            character: "Kagamine Rin",
            characterId: 2,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E065:{
            name: "Reluctant Reconciliation",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E065.png",
            rarity: "U",
            rarityId: 4,
            character: "Kagamine Len",
            characterId: 3,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E093:{
            name: "Wiping Away Twilight Rain",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E093.png",
            rarity: "U",
            rarityId: 4,
            character: "Megurine Luka",
            characterId: 4,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E067:{
            name: "A Quality Blend",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E067.png",
            rarity: "U",
            rarityId: 4,
            character: "MEIKO",
            characterId: 5,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E012:{
            name: "A Chat With the Lost",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E012.png",
            rarity: "U",
            rarityId: 4,
            character: "KAITO",
            characterId: 6,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E084:{
            name: "A View to Share With Someone Special",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E084R.png",
            rarity: "R",
            rarityId: 5,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E032:{
            name: "To the Stage!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E032R.png",
            rarity: "R",
            rarityId: 5,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E007:{
            name: "Snow, Sleigh, Reindeer, Santa!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E007R.png",
            rarity: "R",
            rarityId: 5,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E005:{
            name: "Go! Go! Go ♪",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E005R.png",
            rarity: "R",
            rarityId: 5,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E088:{
            name: "Discover More",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E088R.png",
            rarity: "R",
            rarityId: 5,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E033:{
            name: "Shining Rainbow ♪",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E033R.png",
            rarity: "R",
            rarityId: 5,
            character: "Kagamine Rin",
            characterId: 2,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E059:{
            name: "Absolute Strongest Duo",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E059R.png",
            rarity: "R",
            rarityId: 5,
            character: "Kagamine Len",
            characterId: 3,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E086:{
            name: "Tears for You",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E086R.png",
            rarity: "R",
            rarityId: 5,
            character: "Megurine Luka",
            characterId: 4,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E004:{
            name: "Wonderful Idea!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E004R.png",
            rarity: "R",
            rarityId: 5,
            character: "MEIKO",
            characterId: 5,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E008:{
            name: "A Guiding Hand",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E008R.png",
            rarity: "R",
            rarityId: 5,
            character: "KAITO",
            characterId: 6,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E055S:{
            name: "Be My Rival",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E055S.png",
            rarity: "RR",
            rarityId: 6,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E084S:{
            name: "A View to Share With Someone Special",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E084S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E032S:{
            name: "To The Stage!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E032S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E007S:{
            name: "Snow, Sleigh, Reindeer, Santa!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E007S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E005S:{
            name: "Go! Go! Go ♪",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E005S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E040S:{
            name: "All to See You Smile",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E040S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Kagamine Rin",
            characterId: 2,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E065S:{
            name: "Reluctant Reconciliation",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E065S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Kagamine Len",
            characterId: 3,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E093S:{
            name: "Wiping Away Twilight Rain",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E093S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Megurine Luka",
            characterId: 4,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E067S:{
            name: "A Quality Blend",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E067S.png",
            rarity: "SR",
            rarityId: 7,
            character: "MEIKO",
            characterId: 5,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E012S:{
            name: "A Chat With the Lost",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E012S.png",
            rarity: "SR",
            rarityId: 7,
            character: "KAITO",
            characterId: 6,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E088SSP:{
            name: "Discover More",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E088SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E033SSP:{
            name: "Shining Rainbow ♪",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E033SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Kagamine Rin",
            characterId: 2,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E059SSP:{
            name: "Absolute Strongest Duo",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E059SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Kagamine Len",
            characterId: 3,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E086SSP:{
            name: "Tears For You",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E086SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Megurine Luka",
            characterId: 4,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E004SSP:{
            name: "Wonderful Idea!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E004SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "MEIKO",
            characterId: 5,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E008SSP:{
            name: "A Guiding Hand",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E008SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "KAITO",
            characterId: 6,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E107:{
            name: "Severed Thread",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E107.png",
            rarity: "CC",
            rarityId: 3,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E107R:{
            name: "Severed Thread",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E107R.png",
            rarity: "RRR",
            rarityId: 8,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        //LN
        S91E098:{
            name: "Distant Yet Caring",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E098.png",
            rarity: "C",
            rarityId: 2,
            character: "Hoshino Ichika",
            characterId: 1,
            group: "Leo/need",
            groupId: 2
        },
        S91E017:{
            name: "The Ever Cheerful One",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E017.png",
            rarity: "C",
            rarityId: 2,
            character: "Tenma Saki",
            characterId: 2,
            group: "Leo/need",
            groupId: 2
        },
        S91E072:{
            name: "The Kind Honor Student",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E072.png",
            rarity: "C",
            rarityId: 2,
            character: "Mochizuki Honami",
            characterId: 3,
            group: "Leo/need",
            groupId: 2
        },
        S91E045:{
            name: "Distant Loner",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E045.png",
            rarity: "C",
            rarityId: 2,
            character: "Hinomori Shiho",
            characterId: 4,
            group: "Leo/need",
            groupId: 2
        },
        S91E108:{
            name: "Beyond the Sky",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E108.png",
            rarity: "CC",
            rarityId: 3,
            character: "Hoshino Ichika",
            characterId: 1,
            group: "Leo/need",
            groupId: 2
        },
        S91E029:{
            name: "100 Things I Want to Do",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E029.png",
            rarity: "CC",
            rarityId: 2,
            character: "Tenma Saki",
            characterId: 2,
            group: "Leo/need",
            groupId: 2
        },
        S91E080:{
            name: "Unchanging Flavor",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E080.png",
            rarity: "CC",
            rarityId: 3,
            character: "Mochizuki Honami",
            characterId: 3,
            group: "Leo/need",
            groupId: 2
        },
        S91E053:{
            name: "Lingering Melody",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E053.png",
            rarity: "CC",
            rarityId: 3,
            character: "Hinomori Shizuku",
            characterId: 4,
            group: "Leo/need",
            groupId: 2
        },
        S91E092:{
            name: "One Step Forward",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E092.png",
            rarity: "U",
            rarityId: 4,
            character: "Hoshino Ichika",
            characterId: 1,
            group: "Leo/need",
            groupId: 2
        },
        S91E015:{
            name: "Now and Forever",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E015.png",
            rarity: "U",
            rarityId: 4,
            character: "Tenma Saki",
            characterId: 2,
            group: "Leo/need",
            groupId: 2
        },
        S91E062:{
            name: "So Close Yet So Far",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E062.png",
            rarity: "U",
            rarityId: 4,
            character: "Mochizuki Honami",
            characterId: 3,
            group: "Leo/need",
            groupId: 2
        },
        S91E038:{
            name: "Fond Memories",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E038.png",
            rarity: "U",
            rarityId: 4,
            character: "Hinomori Shiho",
            characterId: 4,
            group: "Leo/need",
            groupId: 2
        },
        S91E081:{
            name: "Words Before Dawn",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E081.png",
            rarity: "RR",
            rarityId: 6,
            character: "Hoshino Ichika",
            characterId: 1,
            group: "Leo/need",
            groupId: 2
        },
        S91E002:{
            name: "Rainy Distance",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E002.png",
            rarity: "RR",
            rarityId: 6,
            character: "Tenma Saki",
            characterId: 2,
            group: "Leo/need",
            groupId: 2
        },
        S91E058:{
            name: "Grateful for Courage",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E058R.png",
            rarity: "R",
            rarityId: 5,
            character: "Mochizuki Honami",
            characterId: 3,
            group: "Leo/need",
            groupId: 2
        },
        S91E036:{
            name: "Recognizable Passion",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E036R.png",
            rarity: "R",
            rarityId: 5,
            character: "Hinomori Shiho",
            characterId: 4,
            group: "Leo/need",
            groupId: 2
        },
        S91E092S:{
            name: "One Step Forward",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E092S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Hoshino Ichika",
            characterId: 1,
            group: "Leo/need",
            groupId: 2
        },
        S91E015S:{
            name: "Now and Forever",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E015S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Tenma Saki",
            characterId: 2,
            group: "Leo/need",
            groupId: 2
        },
        S91E062S:{
            name: "So Close Yet So Far",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E062S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Mochizuki Honami",
            characterId: 3,
            group: "Leo/need",
            groupId: 2
        },
        S91E038S:{
            name: "Fond Memories",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E038S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Hinomori Shiho",
            characterId: 4,
            group: "Leo/need",
            groupId: 2
        },
        S91E108R:{
            name: "Beyond the Sky",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E108R.png",
            rarity: "RRR",
            rarityId: 8,
            character: "Hoshino Ichika",
            characterId: 1,
            group: "Leo/need",
            groupId: 2
        },
        S91E029R:{
            name: "100 Things I Want to Do",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E029R.png",
            rarity: "RRR",
            rarityId: 8,
            character: "Tenma Saki",
            characterId: 2,
            group: "Leo/need",
            groupId: 2
        },
        S91E080R:{
            name: "Unchanging Flavor",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E080R.png",
            rarity: "RRR",
            rarityId: 8,
            character: "Mochizuki Honami",
            characterId: 3,
            group: "Leo/need",
            groupId: 2
        },
        S91E053R:{
            name: "Lingering Melody",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E053R.png",
            rarity: "RRR",
            rarityId: 8,
            character: "Hinomori Shiho",
            characterId: 4,
            group: "Leo/need",
            groupId: 2
        },
        S91E081SSP:{
            name: "Words Before Dawn",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E081SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Hoshino Ichika",
            characterId: 1,
            group: "Leo/need",
            groupId: 2
        },
        S91E002SSP:{
            name: "Rainy Distance",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E002SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Tenma Saki",
            characterId: 2,
            group: "Leo/need",
            groupId: 2
        },
        S91E058SSP:{
            name: "Grateful for Courage",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E058SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Mochizuki Honami",
            characterId: 3,
            group: "Leo/need",
            groupId: 2
        },
        S91E036SSP:{
            name: "Recognizable Passion",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E036SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Hinomori Shiho",
            characterId: 4,
            group: "Leo/need",
            groupId: 2
        },
        //MMJ
        S91E046:{
            name:"Aiming to Be an Idol!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E046.png",
            rarity:"C",
            rarityId:1,
            character:"Hanasato Minori",
            characterId:1,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E043:{
            name:"Former National Idol",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E043.png",
            rarity:"C",
            rarityId:1,
            character:"Kiritani Haruka",
            characterId:2,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E048:{
            name:"Unyielding Idol Spirit",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E048.png",
            rarity:"C",
            rarityId:1,
            character:"Momoi Airi",
            characterId:3,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E047:{
            name:"Beautiful Active Idol",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E047.png",
            rarity:"C",
            rarityId:1,
            character:"Hinomori Shizuku",
            characterId:4,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E049:{
            name:"Pre-show Prep",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E049.png",
            rarity:"CC",
            rarityId:2,
            character:"Hanasato Minori",
            characterId:1,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E050:{
            name:"The Non-idol Me",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E050.png",
            rarity:"CC",
            rarityId:2,
            character:"Kiritani Haruka",
            characterId:2,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E051:{
            name:"Follow Your Dreams!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E051.png",
            rarity:"CC",
            rarityId:2,
            character:"Momoi Airi",
            characterId:3,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E052:{
            name:"On a Flashy Stage",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E052.png",
            rarity:"CC",
            rarityId:3,
            character:"Hinomori Shizuku",
            characterId:4,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E042:{
            name:"From My Heart to Yours!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E042.png",
            rarity:"U",
            rarityId:3,
            character:"Hanasato Minori",
            characterId:1,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E039:{
            name:"That View That I Loved So Much",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E039.png",
            rarity:"U",
            rarityId:3,
            character:"Kiritani Haruka",
            characterId:2,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E037:{
            name:"The Secret to Being an Idol!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E037.png",
            rarity:"U",
            rarityId:3,
            character:"Momoi Airi",
            characterId:3,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E041:{
            name:"The Idol I Want to Be",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E041.png",
            rarity:"U",
            rarityId:3,
            character:"Hinomori Shizuku",
            characterId:4,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E031:{
            name:"Wh-Wh-Wh-What?!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E031.png",
            rarity:"RR",
            rarityId:6,
            character:"Hanasato Minori",
            characterId:1,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E035:{
            name:"Blessings Abound",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E035R.png",
            rarity:"R",
            rarityId:5,
            character:"Kiritani Haruka",
            characterId:2,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E030:{
            name:"Always Looking Ahead",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E030.png",
            rarity:"RR",
            rarityId:6,
            character:"Momoi Airi",
            characterId:3,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E034:{
            name:`I'm Not Just Anyone, I'm "Me"`,
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E034R.png",
            rarity:"R",
            rarityId:5,
            character:"Hinomori Shizuku",
            characterId:4,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E042S:{
            name:"From My Heart to Yours!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E042S.png",
            rarity:"SR",
            rarityId:7,
            character:"Hanasato Minori",
            characterId:1,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E039S:{
            name:"That View That I Loved So Much",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E039S.png",
            rarity:"SR",
            rarityId:7,
            character:"Kiritani Haruka",
            characterId:2,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E037S:{
            name:"The Secret to Being an Idol!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E037S.png",
            rarity:"SR",
            rarityId:7,
            character:"Momoi Airi",
            characterId:3,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E041S:{
            name:"The Idol I Want to Be",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E041S.png",
            rarity:"SR",
            rarityId:7,
            character:"Hinomori Shizuku",
            characterId:4,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E049R:{
            name:"Pre-show Prep",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E049R.png",
            rarity:"RRR",
            rarityId:8,
            character:"Hanasato Minori",
            characterId:1,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E050R:{
            name:"The Non-idol Me",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E050R.png",
            rarity:"RRR",
            rarityId:8,
            character:"Kiritani Haruka",
            characterId:2,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E051R:{
            name:"Follow Your Dreams!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E051R.png",
            rarity:"RRR",
            rarityId:8,
            character:"Momoi Airi",
            characterId:3,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E052R:{
            name:"On a Flashy Stage",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E052R.png",
            rarity:"RRR",
            rarityId:8,
            character:"Hinomori Shizuku",
            characterId:4,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E031SSP:{
            name:"Wh-Wh-Wh-What?!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E031SSP.png",
            rarity:"SSP",
            rarityId:9,
            character:"Hanasato Minori",
            characterId:1,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E035SSP:{
            name:"Blessings Abound",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E035SSP.png",
            rarity:"SSP",
            rarityId:9,
            character:"Kiritani Haruka",
            characterId:2,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E030SSP:{
            name:"Always Looking Ahead",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E030SSP.png",
            rarity:"SSP",
            rarityId:9,
            character:"Momoi Airi",
            characterId:3,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        S91E034SSP:{
            name:`I'm Not Just Anyone, I'm "Me"`,
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E034SSP.png",
            rarity:"SSP",
            rarityId:9,
            character:"Hinomori Shizuku",
            characterId:4,
            group:"MORE MORE JUMP!",
            groupId:3
        },
        //VBS
        S91E069:{
            name:"Tiny Timid Creature",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E069.png",
            rarity: "C",
            rarityId: 1,
            character: "Azusawa Kohane",
            characterId: 1,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E070:{
            name:"Charismatic Singer",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E070.png",
            rarity: "C",
            rarityId: 1,
            character: "Shiraishi An",
            characterId: 2,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E074:{
            name:"Well-Known Big Shot",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E074.png",
            rarity: "C",
            rarityId: 1,
            character: "Shinonome Akito",
            characterId: 3,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E071:{
            name:"Classical Prodigy",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E071.png",
            rarity: "C",
            rarityId: 1,
            character: "Aoyagi Toya",
            characterId: 4,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E076:{
            name:"A Quick Breather",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E076.png",
            rarity: "CC",
            rarityId: 2,
            character: "Azusawa Kohane",
            characterId: 1,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E077:{
            name:"Top-Notch Server!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E077.png",
            rarity: "CC",
            rarityId: 2,
            character: "Shiraishi An",
            characterId: 2,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E078:{
            name:"Bristling Irritation",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E078.png",
            rarity: "CC",
            rarityId: 2,
            character: "Shinonome Akito",
            characterId: 3,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E079:{
            name:"Broken Bonds",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E079.png",
            rarity: "CC",
            rarityId: 2,
            character: "Aoyagi Toya",
            characterId: 4,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E063:{
            name:"Heart-Pounding Song",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E063.png",
            rarity: "U",
            rarityId: 3,
            character: "Azusawa Kohane",
            characterId: 1,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E061:{
            name:"Together We Can Do Anything!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E061.png",
            rarity: "U",
            rarityId: 3,
            character: "Shiraishi An",
            characterId: 2,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E064:{
            name:"In Order to Surpass RAD WEEKEND",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E064.png",
            rarity: "U",
            rarityId: 3,
            character: "Shinonome Akito",
            characterId: 3,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E066:{
            name:"Next to You",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E066.png",
            rarity: "U",
            rarityId: 3,
            character: "Aoyagi Toya",
            characterId: 4,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E056:{
            name:"Once More Together",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E056.png",
            rarity: "RR",
            rarityId: 6,
            character: "Azusawa Kohane",
            characterId: 1,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E060:{
            name:"Despite Being Partners",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E060R.png",
            rarity: "R",
            rarityId: 5,
            character: "Shiraishi An",
            characterId: 2,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E054:{
            name:"Because We're Partners",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E054.png",
            rarity: "RR",
            rarityId: 6,
            character: "Shinonome Akito",
            characterId: 3,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E057:{
            name:"Maybe Someday",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E057R.png",
            rarity: "R",
            rarityId: 5,
            character: "Aoyagi Toya",
            characterId: 4,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E063S:{
            name:"Heart-Pounding Song",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E063S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Azusawa Kohane",
            characterId: 1,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E061S:{
            name:"Together We Can Do Anything!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E061S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Shiraishi An",
            characterId: 2,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E064S:{
            name:"In Order to Surpass RAD WEEKEND",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E064S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Shinonome Akito",
            characterId: 3,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E066S:{
            name:"Next to You",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E066S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Aoyagi Toya",
            characterId: 4,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E076R:{
            name:"A Quick Breather",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E076R.png",
            rarity: "RRR",
            rarityId: 8,
            character: "Azusawa Kohane",
            characterId: 1,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E077R:{
            name:"Top-Notch Server!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E077R.png",
            rarity: "RRR",
            rarityId: 8,
            character: "Shiraishi An",
            characterId: 2,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E078R:{
            name:"Bristling Irritation",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E078R.png",
            rarity: "RRR",
            rarityId: 7,
            character: "Shinonome Akito",
            characterId: 3,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E079R:{
            name:"Broken Bonds",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E079R.png",
            rarity: "RRR",
            rarityId: 2,
            character: "Aoyagi Toya",
            characterId: 4,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E056SSP:{
            name:"Once More Together",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E056SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Azusawa Kohane",
            characterId: 1,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E060SSP:{
            name:"Despite Being Partners",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E060SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Shiraishi An",
            characterId: 2,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E054SSP:{
            name:"Because We're Partners",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E054SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Shinonome Akito",
            characterId: 3,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        S91E057SSP:{
            name:"Maybe Someday",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E057SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Aoyagi Toya",
            characterId: 4,
            group: "Vivid Bad Squad",
            groupId: 4
        },
        //WXS
        
        S91E018:{
            name:"Headed For Stardom!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E018.png",
            rarity: "C",
            rarityId: 1,
            character: "Tenma Tsukasa",
            characterId: 1,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E021:{
            name:"Hyper★Positive",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E021.png",
            rarity: "C",
            rarityId: 1,
            character: "Otori Emu",
            characterId: 2,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E020:{
            name:"Sharp-Tongued and Unsociable",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E020.png",
            rarity: "C",
            rarityId: 1,
            character: "Kusanagi Nene",
            characterId: 3,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E016:{
            name:"Carefree Prodigy",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E016.png",
            rarity: "C",
            rarityId: 1,
            character: "Kamishiro Rui",
            characterId: 4,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E025:{
            name:"Mascot Greeting",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E025.png",
            rarity: "CC",
            rarityId: 2,
            character: "Tenma Tsukasa",
            characterId: 1,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E026:{
            name:"Time for a Strategy Meeting!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E026.png",
            rarity: "CC",
            rarityId: 2,
            character: "Otori Emu",
            characterId: 2,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E027:{
            name:"Backstage Operator",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E027.png",
            rarity: "CC",
            rarityId: 2,
            character: "Kusanagi Nene",
            characterId: 3,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E028:{
            name:"Evasive Entertainer",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E028.png",
            rarity: "CC",
            rarityId: 2,
            character: "Kamishiro Rui",
            characterId: 4,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E010:{
            name:"Bring Smiles to Everyone",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E010.png",
            rarity: "U",
            rarityId: 3,
            character: "Tenma Tsukasa",
            characterId: 1,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E011:{
            name:"A Big Welcome!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E011.png",
            rarity: "U",
            rarityId: 3,
            character: "Otori Emu",
            characterId: 2,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E014:{
            name:"Delightfully Ridiculous",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E014.png",
            rarity: "U",
            rarityId: 3,
            character: "Kusanagi Nene",
            characterId: 3,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E013:{
            name:"Let's Give 'Em a Show",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E013.png",
            rarity: "U",
            rarityId: 3,
            character: "Kamishiro Rui",
            characterId: 4,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E003:{
            name:"Zombies?! Time to Panic!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E003.png",
            rarity: "RR",
            rarityId: 6,
            character: "Tenma Tsukasa",
            characterId: 1,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E009:{
            name:"Sprint! Relay Anchor☆",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E009R.png",
            rarity: "R",
            rarityId: 5,
            character: "Otori Emu",
            characterId: 2,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E001:{
            name:"Gift From Above",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E001.png",
            rarity: "RR",
            rarityId: 6,
            character: "Kusanagi Nene",
            characterId: 3,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E006:{
            name:"Unexpected Happenings",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E006R.png",
            rarity: "R",
            rarityId: 5,
            character: "Kamishiro Rui",
            characterId: 4,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E010S:{
            name:"Bring Smiles to Everyone",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E010S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Tenma Tsukasa",
            characterId: 1,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E011S:{
            name:"A Big Welcome!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E011S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Otori Emu",
            characterId: 2,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E014S:{
            name:"Delightfully Ridiculous",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E014S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Kusanagi Nene",
            characterId: 3,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E013S:{
            name:"Let's Give 'Em a Show",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E013S.png",
            rarity: "SR",
            rarityId: 7,
            character: "Kamishiro Rui",
            characterId: 4,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E025R:{
            name:"Mascot Greeting",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E025R.png",
            rarity: "RRR",
            rarityId: 8,
            character: "Tenma Tsukasa",
            characterId: 1,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E026R:{
            name:"Time for a Strategy Meeting!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E026R.png",
            rarity: "RRR",
            rarityId: 8,
            character: "Otori Emu",
            characterId: 2,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E027R:{
            name:"Backstage Operator",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E027R.png",
            rarity: "RRR",
            rarityId: 8,
            character: "Kusanagi Nene",
            characterId: 3,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E028R:{
            name:"Evasive Entertainer",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E028R.png",
            rarity: "RRR",
            rarityId: 8,
            character: "Kamishiro Rui",
            characterId: 4,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E003SSP:{
            name:"Zombies?! Time to Panic!",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E003SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Tenma Tsukasa",
            characterId: 1,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E009SSP:{
            name:"Sprint! Relay Anchor☆",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E009SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Otori Emu",
            characterId: 2,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E001SSP:{
            name:"Gift From Above",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E001SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Kusanagi Nene",
            characterId: 3,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        S91E006SSP:{
            name:"Unexpected Happenings",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E006SSP.png",
            rarity: "SSP",
            rarityId: 9,
            character: "Kamishiro Rui",
            characterId: 4,
            group: "Wonderlands X Showtime",
            groupId: 5
        },
        //N25
        S91E095:{
            name:"Loved by Music",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E095.png",
            rarity:"C",
            rarityId:1,
            character:"Yoisaki Kanade",
            characterId:1,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E096:{
            name:"The Honor Student",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E096.png",
            rarity:"C",
            rarityId:1,
            character:"Asahina Mafuyu",
            characterId:2,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E097:{
            name:"Social Media Obsessed Artist",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E097.png",
            rarity:"C",
            rarityId:1,
            character:"Shinonome Ena",
            characterId:3,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E100:{
            name:"Obsessed With Cuteness",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E100.png",
            rarity:"C",
            rarityId:1,
            character:"Akiyama Mizuki",
            characterId:4,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E103:{
            name:"Beyond the Screen...",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E103.png",
            rarity:"CC",
            rarityId:2,
            character:"Yoisaki Kanade",
            characterId:1,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E104:{
            name:`The "Good" Me`,
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E104.png",
            rarity:"CC",
            rarityId:2,
            character:"Asahina Mafuyu",
            characterId:2,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E105:{
            name:"The Best Angle",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E105.png",
            rarity:"CC",
            rarityId:2,
            character:"Shinonome Ena",
            characterId:3,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E106:{
            name:"Unyielding Obsession",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E106.png",
            rarity:"CC",
            rarityId:2,
            character:"Akiyama Mizuki",
            characterId:4,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E091:{
            name:"Why I Keep Composing",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E091.png",
            rarity:"U",
            rarityId:3,
            character:"Yoisaki Kanade",
            characterId:1,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E090:{
            name:"Where Is the Self?",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E090.png",
            rarity:"U",
            rarityId:3,
            character:"Asahina Mafuyu",
            characterId:2,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E094:{
            name:"I Just Want to Disappear Forever",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E094.png",
            rarity:"U",
            rarityId:3,
            character:"Shinonome Ena",
            characterId:3,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E089:{
            name:"It's So Stupid",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E089.png",
            rarity:"U",
            rarityId:3,
            character:"Akiyama Mizuki",
            characterId:4,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E082:{
            name:"Lifelike",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E082.png",
            rarity:"RR",
            rarityId:6,
            character:"Yoisaki Kanade",
            characterId:1,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E087:{
            name:"Captive Masquerade",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E087R.png",
            rarity:"R",
            rarityId:5,
            character:"Asahina Mafuyu",
            characterId:2,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E085:{
            name:"New Year's Together",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E085R.png",
            rarity:"R",
            rarityId:5,
            character:"Shinonome Ena",
            characterId:3,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E083:{
            name:"Rooftop Friendship",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E083.png",
            rarity:"RR",
            rarityId:6,
            character:"Akiyama Mizuki",
            characterId:4,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E091S:{
            name:"Why I Keep Composing",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E091S.png",
            rarity:"SR",
            rarityId:7,
            character:"Yoisaki Kanade",
            characterId:1,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E090S:{
            name:"Where Is the Self?",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E090S.png",
            rarity:"SR",
            rarityId:7,
            character:"Asahina Mafuyu",
            characterId:2,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E094S:{
            name:"I Just Want to Disappear Forever",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E094S.png",
            rarity:"SR",
            rarityId:7,
            character:"Shinonome Ena",
            characterId:3,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E089S:{
            name:"It's So Stupid",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E089S.png",
            rarity:"SR",
            rarityId:7,
            character:"Akiyama Mizuki",
            characterId:4,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E103R:{
            name:"Beyond the Screen...",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E103R.png",
            rarity:"RRR",
            rarityId:8,
            character:"Yoisaki Kanade",
            characterId:1,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E104R:{
            name:`The "Good" Me`,
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E104R.png",
            rarity:"RRR",
            rarityId:8,
            character:"Asahina Mafuyu",
            characterId:2,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E105R:{
            name:"The Best Angle",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E105R.png",
            rarity:"RRR",
            rarityId:8,
            character:"Shinonome Ena",
            characterId:3,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E106R:{
            name:"Unyielding Obsession",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E106R.png",
            rarity:"RRR",
            rarityId:8,
            character:"Akiyama Mizuki",
            characterId:4,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E082SSP:{
            name:"Lifelike",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E082SSP.png",
            rarity:"SSP",
            rarityId:9,
            character:"Yoisaki Kanade",
            characterId:1,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E087SSP:{
            name:"Captive Masquerade",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E087SSP.png",
            rarity:"SSP",
            rarityId:9,
            character:"Asahina Mafuyu",
            characterId:2,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E085SSP:{
            name:"New Year's Together",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E085SSP.png",
            rarity:"SSP",
            rarityId:9,
            character:"Shinonome Ena",
            characterId:3,
            group: "Nightcord at 25:00",
            groupId: 6
        },
        S91E083SSP:{
            name:"Rooftop Friendship",
            photo:"https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E083SSP.png",
            rarity:"SSP",
            rarityId:9,
            character:"Akiyama Mizuki",
            characterId:4,
            group: "Nightcord at 25:00",
            groupId: 6
        }
    }

    onMount(()=>{
        for(let i in cards){
            let img = document.createElement("img");
            img.src=cards[i].photo;
            img.alt=cards[i].name;
            img.className = "card";
            if(cards[i].group=="Virtual Singer"){
                vs_container.appendChild(img);
            }else if(cards[i].group=="Leo/need"){
                ln_container.appendChild(img);
            }else if(cards[i].group=="MORE MORE JUMP!"){
                mmj_container.appendChild(img);
            }else if(cards[i].group=="Vivid Bad Squad"){
                vbs_container.appendChild(img);
            }else if(cards[i].group=="Wonderlands X Showtime"){
                wxs_container.appendChild(img);
            }else{
                n25_container.appendChild(img);
            }
        }
    });

</script>

<h1>AHH AHHHHHHHHHHH AHHH AHH AHHHHHHHHHHHHHHH AHHHA HA HA AHHH</h1>

<div class="grid-container">
    <div bind:this={vs_container} class="grid vs-grid">
    </div>
    <div bind:this={ln_container} id="Leo/need" class="grid ln-grid">
    </div>
    <div bind:this={mmj_container} id="MORE MORE JUMP!" class="grid mmj-grid">
    </div>
    <div bind:this={vbs_container} id="Vivid Bad Squad" class="grid vbs-grid">
    </div>
    <div bind:this={wxs_container} id="Wonderlands x Showtime" class="grid wxs-grid">
    </div>
    <div bind:this={n25_container} id="Nightcord at 25:00" class="grid n25-grid">
    </div>
</div>

<style>
    :global(.card){
        width: 18vw;
    }
    .grid{
        display: grid;
        width: 100%;
        background-color: rgb(152, 152, 227);
        grid-template-columns: auto auto auto auto;
        row-gap: 50px;
        box-sizing: border-box;
        padding: 50px;
    }

    .grid-container{
        overflow-y: auto;
        height: 90vh;
        display: grid;
    }
</style>
