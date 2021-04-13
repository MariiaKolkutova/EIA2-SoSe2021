namespace L02_Load {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);

        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);

        document.addEventListener("click", setInfoBox);
        document.body.addEventListener("keyup", logInfo);

        document.querySelector("#div0").addEventListener("click", logInfo);
        document.querySelector("#div0").addEventListener("keyup", logInfo);

        document.querySelector("#div1").addEventListener("click", logInfo);
        document.querySelector("#div1").addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let coordinates: string = "X coords: " + x + ", Y coords: " + y;

        let theTarget = _event.target;
        let span: HTMLSpanElement = document.querySelector("span");
        span.innerHTML = coordinates + theTarget;

        span.style.left = x + "px";
        span.style.top = y + "px";
    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }
}