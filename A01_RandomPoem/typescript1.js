"use strict";
var randompoem;
(function (randompoem) {
    //3 Arrays
    let subjects = [" Harry ", " Hermine ", " Ron ", " Hagrid ", " Snape ", " Dumbledore "];
    let predicates = [" braut ", " liebt ", " studiert ", " hasst ", " zaubert ", " zerstört "];
    let objects = [" Zaubertränke", " den Grimm", " Lupin", " Hogwarts", " die Karte des Rumtreibers", " Dementoren"];
    //Kosnolenausgaben ausklammern 
    //console.log(subjects);
    //console.log(predicates);
    //console.log(objects);
    for (let x = 6; x > 0; x--) {
        let werte = getVerse(subjects, predicates, objects);
        //console.log(x);
        console.log(werte);
    }
    //Funktion
    function getVerse(_subjects, _predicates, _objects) {
        let vers = "";
        let randomNumberSubjects = Math.floor(Math.random() * Math.floor(_subjects.length));
        let randomNumberPredicates = Math.floor(Math.random() * Math.floor(_predicates.length));
        let randomNumberObjects = Math.floor(Math.random() * Math.floor(_objects.length));
        vers = _subjects[randomNumberSubjects] + _predicates[randomNumberPredicates] + _objects[randomNumberObjects];
        _subjects.splice(randomNumberSubjects, 1);
        _predicates.splice(randomNumberPredicates, 1);
        _objects.splice(randomNumberObjects, 1);
        return vers;
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=typescript1.js.map