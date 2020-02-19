//Initial setup of the webpage
const DOM = (() => {

    const Init = () => {
        const body = document.querySelector("body");

        const mainContainer = document.createElement("div");
        mainContainer.id = "mainContainer";
        const topBar = document.createElement("div");
        topBar.id = "topBar";
        topBar.innerHTML = "ToDoToDayToMorrow";
        const dataContainer = document.createElement("div");
        dataContainer.id = "dataContainer";
        const projectContainer = document.createElement("div");
        projectContainer.id = "projectContainer";
        const todoContainer = document.createElement("div");
        todoContainer.id = "todoContainer";

        const todayTab = document.createElement("p");
        todayTab.id = "todayTab";
        todayTab.innerHTML = "Today";

        projectContainer.appendChild(todayTab);

        dataContainer.appendChild(projectContainer);
        dataContainer.appendChild(todoContainer);

        mainContainer.appendChild(topBar);
        mainContainer.appendChild(dataContainer);

        body.appendChild(mainContainer);

        console.log("Init complete");
    };
    return {Init};
})();

export default DOM;