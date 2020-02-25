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

        const todayTab = document.createElement("span");
        todayTab.id = "todayTab";
        todayTab.innerHTML = "Today";
        const addProjectContainer = document.createElement("div");
        addProjectContainer.id = "addProjectContainer";
        const addProject = document.createElement("a");
        addProject.id = "addProject";
        addProject.innerHTML = "+";
        const addProjectText = document.createElement("span");
        addProjectText.id = "addProjectText";
        addProjectText.innerHTML = "Projects";
        const innerProjectContainer = document.createElement("div");
        innerProjectContainer.id = "innerProjectContainer";

        projectContainer.appendChild(todayTab);
        addProjectContainer.appendChild(addProject);
        addProjectContainer.appendChild(addProjectText);
        projectContainer.appendChild(addProjectContainer);
        projectContainer.appendChild(innerProjectContainer);

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