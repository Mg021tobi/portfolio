document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('#projects div');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            const projectId = project.getAttribute('data-id');
            window.location.href = `project.html?id=${projectId}`;
        });
    });

    const projectDetails = {
        1: {
            title: 'Ecomerse',
            image: 'project1.jpg',
            description: 'This project is about creating an e-commerce website...',
            technologies: 'HTML, CSS, JavaScript, React',
            additionalInfo: 'Additional information about the e-commerce project...'
        },
        2: {
            title: 'Project 2',
            image: 'project2.jpg',
            description: 'This project is about...',
            technologies: 'HTML, CSS, JavaScript, Vue',
            additionalInfo: 'Additional information about project 2...'
        },
        3: {
            title: 'Project 3',
            image: 'project3.jpg',
            description: 'This project is about...',
            technologies: 'HTML, CSS, JavaScript, Angular',
            additionalInfo: 'Additional information about project 3...'
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    if (projectId && projectDetails[projectId]) {
        const project = projectDetails[projectId];
        document.querySelector('#project-details h2').textContent = project.title;
        document.querySelector('#project-details img').src = project.image;
        document.querySelector('#project-details p:nth-of-type(1)').textContent = project.description;
        document.querySelector('#project-details p:nth-of-type(2)').textContent = `Technologies used: ${project.technologies}`;
        document.querySelector('#project-details p:nth-of-type(3)').textContent = project.additionalInfo;
    }
});
