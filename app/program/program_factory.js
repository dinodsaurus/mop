'use strict';

angular.module('mop-program')
    .factory("programFac", function () {
        var program = [
            {
                id: 1,
                prog: [
                    {
                        type: "predavanje",
                        ime: 'Windows Phone Development',
                        author: "Andrej Radinger",
                        time: "13.00 - 14.00h",
                        link: "#/gosti/1"
                    },
                    {
                        type: "predavanje",
                        ime: 'Mobile Gaming - Od ideje do uspjeha!',
                        author: "Nanovogroup",
                        time: "16.10 - 17.00h",
                        link: "#/gosti/2"
                    },
                    {
                        type: "predavanje",
                        ime: 'Music Production Academy',
                        author: "Andrej Lončarić",
                        time: "18.00 - 18.40h",
                        link: "#/gosti/3"
                    },
                    {
                        type: "predavanje",
                        ime: 'OTVORENJE',
                        author: "Mop",
                        time: "19.30 - 20.00h",
                        link: "#/gosti/4"
                    },
                    {
                        type: "predavanje",
                        ime: 'Interaktivni postav Ivanina kuća bajke',
                        author: "Vladimir Končar - Studio Revolucija",
                        time: "20.00 - 20.45h",
                        link: "#/gosti/5"
                    },
                    {
                        type: "predavanje",
                        ime: 'Dizajn na rubu',
                        author: "DAN D",
                        time: "20.45 - 21.15h",
                        link: "#/gosti/6"
                    }
                ]
            },
            {
                id:2,
                prog: [
                    {
                        type: "predavanje",
                        ime: 'In the box',
                        author: "SAE - Perica Šuran",
                        time: "17.00 - 17.50h",
                        link: "#/gosti/7"
                    },
                    {
                        type: "predavanje",
                        ime: 'Performans grada',
                        author: "Ivan mesek",
                        time: "18.25 - 18.45h",
                        link: "#/gosti/8"
                    },
                    {
                        type: "predavanje",
                        ime: 'Mireldy',
                        author: "Imelda Ramović i Mirel Hadžijusufović",
                        time: "18.50 - 19.10h",
                        link: "#/gosti/9"
                    },
                    {
                        type: "predavanje",
                        ime: 'Dizajniranje Illectricity Festivala',
                        author: "Dukić - Pavlović",
                        time: "19.20 - 19.40h",
                        link: "#/gosti/10"
                    },
                    {
                        type: "predavanje",
                        ime: 'Foraging for Creativity',
                        author: "Tin Kadoić",
                        time: "19.45 - 20.05h",
                        link: "#/gosti/11"
                    },
                    {
                        type: "predavanje",
                        ime: '(Dija)kritika u prostoru',
                        author: "Marko Hrastovec",
                        time: "20.10 - 20.30h",
                        link: "#/gosti/12"
                    },
                    {
                        type: "party",
                        ime: ' ŠALTER - PARTY, ROGOZ ',
                        author: "Mixel, Mae'n, Wuff, Presidente,  Kotam",
                        time: "22.30 - 04.00h",
                        link: "#/gosti/13"
                    }

                ]
            },
            {
                id: 3,
                prog: [
                    {
                        type: "meetup",
                        ime: 'XFO meetup',
                        author: "VUDU",
                        time: "17.00 - 17.50h",
                        link: "#/gosti/14"
                    },
                    {
                        type: "predavanje",
                        ime: 'One Code to Rule Them All',
                        author: "Gordon Cindrić",
                        time: "10.15 - 11.00h",
                        link: "#/gosti/15"
                    },
                    {
                        type: "predavanje",
                        ime: 'Razvoj iOS  app',
                        author: "Clover studio",
                        time: "11.00 - 11.45h",
                        link: "#/gosti/16"
                    },
                    {
                        type: "predavanje",
                        ime: '3D animacija',
                        author: "Bold-Studio",
                        time: "12.00 - 13.00h",
                        link: "#/gosti/17"
                    },
                    {
                        type: "predavanje",
                        ime: 'Augmented reality',
                        author: "Booqua creative studio",
                        time: "13.00 - 13.30h",
                        link: "#/gosti/18"
                    },
                    {
                        type: "predavanje",
                        ime: 'Design is a job!',
                        author: "Sandro Dujmenović",
                        time: "18.00 - 18.20h",
                        link: "#/gosti/19"
                    },
                    {
                        type: "predavanje",
                        ime: 'Nakonjusmo.net',
                        author: "Oleg Morović i Oleg Šuran",
                        time: "18.25 - 18.45h",
                        link: "#/gosti/20"
                    },
                    {
                        type: "predavanje",
                        ime: 'Good client made me do it',
                        author: "Gregor Žakelj",
                        time: "18.50 - 19.35h",
                        link: "#/gosti/21"
                    },
                    {
                        type: "predavanje",
                        ime: 'City | Data | Future – Dizajn interakcija u hibridnom urbanom prostoru',
                        author: "Ivica Mitrović",
                        time: "19.40 - 20.10h",
                        link: "#/gosti/22"
                    },
                    {
                        type: "predavanje",
                        ime: 'Vrli novi svijet interakcija',
                        author: "Vibor Cipan  - UX Passion",
                        time: "20.15 - 20.35h",
                        link: "#/gosti/23"
                    },
                    {
                        type: "predavanje",
                        ime: 'Projektor',
                        author: "404 Agency",
                        time: "20.40 - 21.00h",
                        link: "#/gosti/24"
                    },
                    {
                        type: "performans - TVRĐAVA STARI GRAD",
                        ime: 'Whatever Dance Toolbox by BADco.',
                        author: "BADco.",
                        time: "21.30 - 23.00h",
                        link: "#/gosti/25"
                    },
                    {
                        type: "party",
                        ime: 'PARTY - TVRĐAVA STARI GRAD.',
                        author: "CHEW THE FAT!, DMT,  Filip Motovunski, MC Big Oz,  Oblik 3",
                        time: "21.30 - 23.00h",
                        link: "#/gosti/26"
                    },
                ]
            }
        ];
        return {
            program: program
        };
    });
