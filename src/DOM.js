//Initial setup of the webpage
const DOM = (() => {

    const Init = () => {
        const body = document.querySelector("body");

        const mainContainer = document.createElement("div");
        mainContainer.id = "mainContainer";
        const topBar = document.createElement("div");
        topBar.id = "topBar";
        const projectContainer = document.createElement("div");
        projectContainer.id = "projectContainer";
        const todoContainer = document.createElement("div");
        todoContainer.id = "todoContainer";

        mainContainer.appendChild(topBar);
        mainContainer.appendChild(projectContainer);
        mainContainer.appendChild(todoContainer);

        body.appendChild(mainContainer);

        console.log("Init complete");
    };
    return {Init};
})();

export default DOM;