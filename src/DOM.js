//Importing Font awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'

//Initial setup of the webpage
const DOM = (() => {

    const InitDom = () => {
        const body = document.querySelector("body");

        //Main Containers
        const mainContainer = document.createElement("div");
        mainContainer.id = "mainContainer";
        const topBar = document.createElement("div");
        topBar.id = "topBar";
        const topTitle = document.createElement("span");
        topTitle.id = "topTitle";
        topTitle.innerHTML = "ToDoToDayToMorrow";
        const burgerMenu = document.createElement("div");
        burgerMenu.id = "burgerMenu";
        const burgerMenuIcon = document.createElement("i");
        burgerMenuIcon.id = "burgerMenuIcon";
        burgerMenuIcon.classList = "fas fa-bars";
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
        priorityList.style.display = "none";
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

        burgerMenu.appendChild(burgerMenuIcon);
        topBar.appendChild(burgerMenu);
        topBar.appendChild(topTitle);

        mainContainer.appendChild(topBar);
        mainContainer.appendChild(dataContainer);

        body.appendChild(mainContainer);

        console.log("Init complete");
    };
    const InitEvent = () => {

        //Priority Tabs
        const priorityTabs = document.querySelectorAll(".priorityTab");
        const priorityBox = document.getElementById("priorityChoice");
        const priorityList = document.getElementById("priorityList");
        priorityTabs.forEach(tab => {
            tab.addEventListener("click", (e) => {
                priorityBox.dataset.priority = e.currentTarget.dataset.priority;
                priorityBox.firstChild.style.color = e.currentTarget.firstChild.style.color;
            });
        });
        const todoPriority = document.getElementById("todoPriority");
        todoPriority.addEventListener("click", (e) => {
            priorityList.style.display = priorityList.style.display == "none" ? "flex" : "none";
        });

        //Burger Menu (mobile function)
        const burgerMenu = document.getElementById("burgerMenu");
        const projectContainer = document.getElementById("projectContainer");
        burgerMenu.addEventListener("click", (e) => {

            if(getComputedStyle(projectContainer).width == "0px"){
                projectContainer.style.width = "400px";
                burgerMenu.style.transform = "rotate(90deg)";
            } else {
                projectContainer.style.width = "0px";
                burgerMenu.style.transform = "rotate(0deg)";
            }
            
        });
        //resize fix if burger is stuck at 0
        window.addEventListener("resize", (e) => {
            if (window.innerWidth > 1200){
                projectContainer.style.width = "400px";
            } else if (window.innerWidth < 1200){
                projectContainer.style.width = "0px";
            }
        });
    };
    return {InitDom, InitEvent};
})();

export default DOM;