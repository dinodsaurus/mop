angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("main/main.html","<div class=\"mainPage\" ng-class=\"{ \'bck1\' : class == \'bck1\', \'bck2\' : class == \'bck2\', \'bck3\' : class == \'bck3\', \'bck4\' : class == \'bck4\', \'bck5\' : class == \'bck5\'}\"></div>");
$templateCache.put("predavaci/gost.html","<div class=\"gostSingle\">\n    <a class=\"bck\" href=\"#/gosti\"></a>\n    <div class=\"img\">\n        <img src=\"img/profile.jpg\" alt=\"\"/>\n    </div>\n    <div class=\"gost group\">\n        <h2>Dino Trojak</h2>\n        <p class=\"small\">Biografija</p>\n        <p class=\"desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eius harum incidunt laborum porro, provident tempora. Animi assumenda dolorem ipsa nemo obcaecati perferendis perspiciatis velit veniam! Doloribus pariatur tenetur voluptatibus.</p>\n        <p class=\"small\">Poveznice</p>\n        <a href=\"#\">dino.car</a>\n        <a href=\"#\">Kralj lavova 1990</a>\n    </div>\n    <div class=\"pred\">\n        <p class=\"small\">Predavanje</p>\n        <h2>Cudo predavanje</h2>\n        <p class=\"date\">petam dan za metak</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid minima quam rem reprehenderit voluptates. Assumenda distinctio eligendi eum maiores, nihil non nulla, odit pariatur praesentium, sunt totam voluptate voluptatibus!</p>\n    </div>\n</div>");
$templateCache.put("predavaci/predavaci.html","<ul class=\"predavaci group\">\n    <li class=\"profile\" ng-repeat=\"gost in gosti\">\n        <a href=\"#/gosti/{{gost.id}}\" class=\"\">\n        <div class=\"img\">\n            <div class=\"hover\"></div>\n            <img ng-src=\"{{gost.img}}\" alt=\"\"/>\n        </div>\n        <h2>{{gost.ime}}</h2>\n        </a>\n    </li>\n</ul>");
$templateCache.put("program/program.html","<h1>Program</h1>");}]);