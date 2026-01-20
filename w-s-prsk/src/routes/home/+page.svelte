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
    }
</script>

<h1>AHH AHHHHHHHHHHH AHHH AHH AHHHHHHHHHHHHHHH AHHHA HA HA AHHH</h1>
<img src={cards.S91PE02SPR.photo} alt="powerful-smile-hatsune-miku">

