namespace randompoem {
    
    //3 Arrays
    let subjects: string[] = [" Harry ", " Hermine ", " Ron ", " Hagrid ", " Snape ", " Dumbledore "];
    let predicates: string[] = [" braut ", " liebt ", " studiert ", " hasst ", " zaubert ", " zerstört "];
    let objects: string[] = [" Zaubertränke", " den Grimm", " Lupin", " Hogwarts", " die Karte des Rumtreibers", " Dementoren"];
    
    //Kosnolenausgaben ausklammern 
    //console.log(subjects);
    //console.log(predicates);
    //console.log(objects);

    for (let x: number = 6; x > 0; x--) {
        let werte: string = getVerse(subjects, predicates, objects);
        //console.log(x);
        console.log(werte);
    }
    //Funktion
    function getVerse (_subjects: string[], _predicates: string[], _objects: string[]): string {
        
        let vers: string = "";
        let randomNumberSubjects: number = Math.floor(Math.random() * Math.floor(_subjects.length));
        let randomNumberPredicates: number = Math.floor(Math.random() * Math.floor(_predicates.length));
        let randomNumberObjects: number = Math.floor(Math.random() * Math.floor(_objects.length));

        vers = _subjects[randomNumberSubjects] + _predicates[randomNumberPredicates] + _objects[randomNumberObjects];

        _subjects.splice(randomNumberSubjects, 1);
        _predicates.splice(randomNumberPredicates, 1);
        _objects.splice(randomNumberObjects, 1);

        return vers;
    } 
}