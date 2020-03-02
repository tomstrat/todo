//Importing Font awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

//Initial setup of the webpage
const DOM = (() => {

    const InitDom = () => {
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
        todoInput.id = "todoInput";
        todoInput.type = "text";
        const todoDate = document.createElement("span");
        todoDate.id = "todoDate";
        todoDate.innerHTML = "Date"
        //priority select
        const todoPriority = document.createElement("div");
        todoPriority.id = "todoPriority";
        todoPriority.tabIndex = "1";
        //Priority Holder
        const priorityChoice = document.createElement("div");
        const priorityChoiceI = document.createElement("i");
        priorityChoice.id = "priorityChoice";
        priorityChoiceI.classList = "fas fa-exclamation-triangle";
        priorityChoice.dataset.priority = "none";
        priorityChoice.appendChild(priorityChoiceI);
        //Priority Types
        const priorityList = document.createElement("ul");
        priorityList.id = "priorityList";
        //Priority Blue
        const priorityBlue = document.createElement("li");
        const priorityBlueI = document.createElement("i");
        priorityBlueI.classList = "fas fa-exclamation-triangle";
        priorityBlueI.style.color = "#3492eb";
        priorityBlue.classList += " priorityTab";
        priorityBlue.dataset.priority = "blue";
        priorityBlue.appendChild(priorityBlueI);
        priorityList.appendChild(priorityBlue);
        //Priority Amber
        const priorityAmber = document.createElement("li");
        const priorityAmberI = document.createElement("i");
        priorityAmberI.classList = "fas fa-exclamation-triangle";
        priorityAmberI.style.color = "#eb8f34";
        priorityAmber.classList += " priorityTab";
        priorityAmber.dataset.priority = "amber";
        priorityAmber.appendChild(priorityAmberI);
        priorityList.appendChild(priorityAmber);
        //Priority Red
        const priorityRed = document.createElement("li");
        const priorityRedI = document.createElement("i");
        priorityRedI.classList = "fas fa-exclamation-triangle";
        priorityRedI.style.color = "#e85346";
        priorityRed.classList += " priorityTab";
        priorityRed.dataset.priority = "red";
        priorityRed.appendChild(priorityRedI);
        priorityList.appendChild(priorityRed);

        todoPriority.appendChild(priorityChoice);
        todoPriority.appendChild(priorityList);

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
    const InitEvent = () => {

        //Priority Tabs
        const priorityTabs = document.querySelectorAll(".priorityTab");
        const priorityBox = document.getElementById("priorityChoice");
        priorityTabs.forEach(tab => {
            tab.addEventListener("click", (e) => {
                priorityBox.dataset.priority = e.currentTarget.dataset.priority;
                priorityBox.firstChild.style.color = e.currentTarget.firstChild.style.color;
                console.log(document.activeElement);
                window.focus();
                console.log(document.activeElement);
            });
        });
    };
    return {InitDom, InitEvent};
})();

export default DOM;