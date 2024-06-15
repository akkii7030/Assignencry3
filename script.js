fetch('projects.json')
   .then(response => response.json())
   .then(data => {
        const projectList = document.getElementById('project-list');
        data.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';
            projectElement.innerHTML = `
                <h2>${project.name}</h2>
                <p>${project.description}</p>
            `;
            projectList.appendChild(projectElement);
        });
    });