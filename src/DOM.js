//Initial setup of the webpage
const DOM = (() => {

    const Init = () => {
        const body = document.querySelector("body");

        //Main Containers
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

        //Projects Inner Container
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

        //Create Todo Bar
        const createTodoContainer = document.createElement("div");
        createTodoContainer.id = "createTodoContainer";
        const todoBarContainer = document.createElement("div");
        todoBarContainer.id = "todoBarContainer";
        const todoSubmitContainer = document.createElement("div");
        todoSubmitContainer.id = "todoSubmitContainer";
        const todoInput = document.createElement("input");
        todoInput.type = "text";
        const todoDate = document.createElement("span");
        todoDate.id = "todoDate";
        todoDate.innerHTML = "Date"
        const todoPriority = document.createElement("span");
        todoPriority.id = "todoPriority";
        const todoProject = document.createElement("span");
        todoProject.id = "todoProject";
        const todoSubmit = document.createElement("span");
        todoSubmit.id = "todoSubmit";
        todoSubmit.innerHTML = "ToDo";

        projectContainer.appendChild(todayTab);
        addProjectContainer.appendChild(addProject);
        addProjectContainer.appendChild(addProjectText);
        projectContainer.appendChild(addProjectContainer);
        projectContainer.appendChild(innerProjectContainer);

        todoBarContainer.appendChild(todoInput);
        todoBarContainer.appendChild(todoDate);
        todoBarContainer.appendChild(todoPriority);
        todoBarContainer.appendChild(todoProject);
        todoSubmitContainer.appendChild(todoSubmit);
        createTodoContainer.appendChild(todoBarContainer);
        createTodoContainer.appendChild(todoSubmitContainer);
        todoContainer.appendChild(createTodoContainer);

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