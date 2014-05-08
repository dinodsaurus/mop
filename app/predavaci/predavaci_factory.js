'use strict';

angular.module('mop-predavaci')
    .factory("predavaciFac", function () {
        var gost = false;
        var gosti = [
            {
                id: 1,
                ime: "Tin Kadoić",
                img: "img/profile.jpg",
                bigImg: "img/profile.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur deleniti doloremque ea error et fugiat maiores modi molestias nam nesciunt, nobis nulla numquam obcaecati quae soluta, voluptatem voluptates!"
                ,links: ["www.dinodsaur.us","www.revolucija.hr"],
                predavanje: {
                    naslov: "Foraging for Creativity",
                    datum: "Petak 23.04 | 19.45 - 20.05 h",
                    opis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur deleniti doloremque ea error et fugiat maiores modi molestias nam nesciunt, nobis nulla numquam obcaecati quae soluta, voluptatem voluptates!"
                }
            },
            {
                id: 1,
                ime: "Tin Kadoić",
                img: "img/profile.jpg",
                bigImg: "img/profile.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur deleniti doloremque ea error et fugiat maiores modi molestias nam nesciunt, nobis nulla numquam obcaecati quae soluta, voluptatem voluptates!"
                ,links: ["www.dinodsaur.us","www.revolucija.hr"],
                predavanje: {
                    naslov: "Foraging for Creativity",
                    datum: "Petak 23.04 | 19.45 - 20.05 h",
                    opis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur deleniti doloremque ea error et fugiat maiores modi molestias nam nesciunt, nobis nulla numquam obcaecati quae soluta, voluptatem voluptates!"
                }
            }
        ]
        return {
            gosti: gosti,
            gost: gost
        };
    });
