const componentName = document.getElementById("componentName");
const componentInfo = document.getElementById("componentInfo");
const componentCount = document.getElementById("componentCount");
const interactiveParts = document.querySelectorAll(".component, .node");

const setActivePart = (part) => {
    interactiveParts.forEach((item) => item.classList.remove("active"));
    part.classList.add("active");
    componentName.textContent = part.dataset.name;
    componentInfo.textContent = part.dataset.info;
};

componentCount.textContent = String(interactiveParts.length);

interactiveParts.forEach((part) => {
    part.addEventListener("click", () => {
        setActivePart(part);
    });
});