// 项目列表
const projects = [
    { name: "Project 1", description: "This is a description of Project 1" },
    { name: "Project 2", description: "This is a description of Project 2" },
    { name: "Project 3", description: "This is a description of Project 3" }
];

// 动态添加项目列表
function addProjects() {
    const projectList = document.getElementById("project-list");
    // 清空现有的项目列表
    projectList.innerHTML = '';
    
    projects.forEach(project => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectList.appendChild(li);
    });
}

// 处理表单提交
function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    event.target.reset();
}

// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", () => {
    addProjects();
    document.getElementById("contact-form").addEventListener("submit", handleSubmit);

    // 添加滚动事件监听器
    window.addEventListener('scroll', handleBlurEffect);
    // 初始调用一次,确保页面加载时就有正确的状态
    handleBlurEffect();
});

