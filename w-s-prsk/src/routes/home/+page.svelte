<script>
    let cards = {
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
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E084.png",
            rarity: "R",
            rarityId: 5,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E032:{
            name: "To the Stage!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E032.png",
            rarity: "R",
            rarityId: 5,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E007:{
            name: "Snow, Sleigh, Reindeer, Santa!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E007.png",
            rarity: "R",
            rarityId: 5,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E005:{
            name: "Go! Go! Go ♪",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E005.png",
            rarity: "R",
            rarityId: 5,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E088:{
            name: "Discover More",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E088.png",
            rarity: "R",
            rarityId: 5,
            character: "Hatsune Miku",
            characterId: 1,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E033:{
            name: "Shining Rainbow ♪",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E033.png",
            rarity: "R",
            rarityId: 5,
            character: "Kagamine Rin",
            characterId: 2,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E059:{
            name: "Absolute Strongest Duo",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E059.png",
            rarity: "R",
            rarityId: 5,
            character: "Kagamine Len",
            characterId: 3,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E086:{
            name: "Tears for You",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E086.png",
            rarity: "R",
            rarityId: 5,
            character: "Megurine Luka",
            characterId: 4,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E004:{
            name: "Wonderful Idea!",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E004.png",
            rarity: "R",
            rarityId: 5,
            character: "MEIKO",
            characterId: 5,
            group: "Virtual Singer",
            groupId: 1
        },
        S91E008:{
            name: "A Guiding Hand",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E008.png",
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
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E058.png",
            rarity: "R",
            rarityId: 5,
            character: "Mochizuki Honami",
            characterId: 3,
            group: "Leo/need",
            groupId: 2
        },
        S91E036:{
            name: "Recognizable Passion",
            photo: "https://en.ws-tcg.com/wordpress/wp-content/images/cardimages/PJS/S91-E036.png",
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
    }
</script>

<h1>AHH AHHHHHHHHHHH AHHH AHH AHHHHHHHHHHHHHHH AHHHA HA HA AHHH</h1>
<img src={cards.S91PE02SPR.photo} alt="powerful-smile-hatsune-miku">

