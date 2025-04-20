document.addEventListener('DOMContentLoaded', function() {
    // Project data - easily add more projects here
    const projectsData = [
        {
            id: 1,
            title: "Greed Game",
            subtitle: "Fun and retro style console game",
            description: "A classic console game, with varying game modes and difficulty level, with colorful UI. The goal is to eat as many numbers as possible (greedily) without dying.",
            features: [
                "Generates random food points on the board for player to consume",
                "Tracks user score following object oriented design pattern",
                "2 game modes: Classic and Hardcore that disables the game move hints",
                "2 player modes: Human and AI (sit back and let computer win the game for you)",
                "Prevents player from making invalid moves withou interrupting the game flow",
            ],
            technologies: ["Java", "Maven", "JUnit", "Git", "Github"],
            githubLink: "#projects",
            demoLink: "#projects",
            media: [
                {
                    type: "image",
                    url: "./images/Greed4.jpeg",
                    alt: "Game over view"
                },
                {
                    type: "image",
                    url: "./images/Greed1.jpeg",
                    alt: "Main dashboard view"
                },
                {
                    type: "image",
                    url: "./images/Greed2.jpeg",
                    alt: "Game Play view"
                },
                {
                    type: "image",
                    url: "./images/Greed3.jpeg",
                    alt: "Invalid move view"
                },
            ]
        },
        {
            id: 2,
            title: "UM Active Minds Official Website",
            subtitle: "Active Minds chapter at University of Manitoba's official website",
            description: "A one stop place to learn about mental health at university of manitoba, plus learn about exciting events and the amazing team behind it. The website is designed to be user-friendly and informative, providing resources and support for students.",
            features: [
                "Mind relaxing UI/UX design after thorough market research ",
                "Responsive design for all devices",
                "Faster load time with lazy loading",
                "SEO friendly",
                "Interactive and engaging UI with animations",
            ],
            technologies: ["HTML", "Sass", "Javascript", "Vue", "Github", "Git", "Figma", "AWS"],
            githubLink: "https://github.com/Krish-Bhalala/Active-Minds-Website",
            demoLink: "https://activeminds-umanitoba.org/",
            media: [
                {
                    type: "image",
                    url: "./images/am1.jpeg",
                    alt: "Homepage"
                },
                {
                    type: "image",
                    url: "./images/am2.jpeg",
                    alt: "Event"
                },
                {
                    type: "image",
                    url: "./images/am3.jpeg",
                    alt: "Resources"
                }
            ]
        },
        {
            id: 3,
            title: "Hashtag Nasa",
            subtitle: "Solar Flare 2024 visualization - NASA Space App Challenge 2024",
            description: "A web application that visualizes solar flare data from NASA's API. Users can explore solar flare events, view detailed information, and view the 3D model.",
            features: [
                "Three.js 3D model of the solar flare",
                "Data Sonification of irradiance data",
                "Fun and interactive UI and 3D model",
                "Different clips of significant solar flare activities in the May 2024",
                "48hr hackathon project, with team of 4 students"
            ],
            technologies: ["HTML", "CSS", "Javascript", "Three.js", "Github", "Git", "NASA open data"],
            githubLink: "https://github.com/Krish-Bhalala/HashTag_NASA",
            demoLink: "https://tanpatel.github.io/HashTag_NASA/",
            media: [
                {
                    type: "image",
                    url: "./images/nasa1.jpeg",
                    alt: "Homepage"
                },
                {
                    type: "image",
                    url: "./images/nasa2.jpeg",
                    alt: "Event"
                },
                {
                    type: "image",
                    url: "./images/nasa3.jpeg",
                    alt: "Resources"
                },
                {
                    type: "image",
                    url: "./images/nasa4.jpeg",
                    alt: "Team"
                },
                {
                    type: "image",
                    url: "./images/nasa5.jpeg",
                    alt: "Citations"
                }
            ]
        },
        
        //Next row
        {
            id: 4,
            title: "Potato Clicker Game – Perry the Platypus Edition!",
            subtitle: "A Fun Mini browser based clicker game",
            description: "Another weird game on the internet, that is based on my favorite cartoon character Perry the Platypus from my childhood. The goal is to click on the potato as many times as possible and grow them, and build farms to buy upgrades.",
            features: [
                "Clicking on the big potato generates points",
                "Marketplace where you can buy upgrades for points",
                "Cheat code: console in the following keyword - counter.cheatCode() to get 5million points",
                "Interactive UI with bgm and sound effects make sure to turn on the sound and increase device volume",
                "Built in 12 hrs while following proper design patterns"
            ],
            technologies: ["HTML", "CSS", "Javascript", "Anime.js", "Github", "Git"],
            githubLink: "https://krish-bhalala.github.io/Platypus-Potat-inator-Game/",
            demoLink: "https://krish-bhalala.github.io/Platypus-Potat-inator-Game/",
            media: [
                {
                    type: "image",
                    url: "./images/clicker1.jpeg",
                    alt: "Homepage"
                },
                {
                    type: "image",
                    url: "./images/clicker2.jpeg",
                    alt: "Marketplace"
                },
                {
                    type: "image",
                    url: "./images/clicker3.jpeg",
                    alt: "Footer"
                }
            ]
        },
        {
            id: 5,
            title: "San Francisco’s Cycling Connections Analytics",
            subtitle: "A Data Analytics project on San Francisco’s Cycling Connections",
            description: "The project aims to analyze the cycling connections in San Francisco, providing insights into the cycling infrastructure and its usage.",
            features: [
                "Advance Graph theory analytics to analyze the cycling network",
                "Report on the most popular cycling hubs",
                "Detailed analysis on 20+ different metrics and parameters"
            ],
            technologies: ["R", "Jupyter Notebook", "Rmd" , "dplyr", "igraph", "ggplot2", "Github", "Git"],
            githubLink: "https://github.com/Krish-Bhalala/San-Francisco-Urban-Mobility-Analytics",
            demoLink: "https://krish-bhalala.github.io/San-Francisco-Urban-Mobility-Analytics/",
            media: [
                {
                    type: "image",
                    url: "./images/SF_Bike_Report.jpeg",
                    alt: "Report"
                }
            ]
        },
        {
            id: 6,
            title: "Cooperative Threads Library",
            subtitle: "A multithreading library for single core cooperative systems",
            description: "The project aims to recreate the popular pthreads library in C that can fully support concurrency with and without mutexes.",
            features: [
                "Supports upto 1000 threads for a process",
                "Enables premptive scheduling of threads",
                "Mutexes support includled with the library",
                "4 main scheduling policies: First in First Out, 2 threads, Round Robin, and Multi Level Feedback Queue",
                "With good design patterns and proper documentation",
                "NOTE: This project is published under a restrictive license, Hence live demo and source code will only be sent upon request.",
            ],
            technologies: ["C", "Make", "lldb" , "gdb", "atomics library", "valgring", "lima virtual machine", "Linux OS"],
            githubLink: "#contact",
            demoLink: "#contact",
            media: [
                {
                    type: "image",
                    url: "./images/thread1.jpeg",
                    alt: "scheduling start"
                },
                {
                    type: "image",
                    url: "./images/thread2.jpeg",
                    alt: "scheduling end"
                }
            ]
        },
        
    ];

    // Initialize projects grid
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Create project cards
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-project-id', project.id);
        
        // Use first media item or default image for card thumbnail
        const thumbnailUrl = project.media && project.media.length > 0 ? 
            project.media[0].url : 
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${thumbnailUrl}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description.substring(0, 100)}...</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="close-modal">
                <i class="fas fa-times"></i>
            </div>
            <div class="main-media">
                <!-- Main media will be inserted here -->
            </div>
            <div class="media-gallery" style="display: none;">
                <!-- Thumbnails will be inserted here -->
            </div>
            <div class="modal-body">
                <h2 class="modal-title"></h2>
                <p class="modal-subtitle"></p>
                <p class="modal-description"></p>
                
                <div class="modal-features">
                    <h4>Key Features</h4>
                    <ul class="features-list"></ul>
                </div>
                
                <div class="modal-tech">
                    <h4>Technologies Used</h4>
                    <div class="tech-tags"></div>
                </div>
                
                <div class="modal-links">
                    <a href="#" class="modal-link github" target="_blank">
                        <i class="fab fa-github"></i> View Code
                    </a>
                    <a href="#" class="modal-link demo" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Modal elements
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalSubtitle = document.querySelector('.modal-subtitle');
    const modalDescription = document.querySelector('.modal-description');
    const featuresList = document.querySelector('.features-list');
    const techTags = document.querySelector('.tech-tags');
    const githubLink = document.querySelector('.modal-link.github');
    const demoLink = document.querySelector('.modal-link.demo');
    const mediaGallery = document.querySelector('.media-gallery');

    // Function to display project media
    function displayProjectMedia(project) {
        const mainMedia = document.querySelector('.main-media');
        
        // Clear previous media
        mainMedia.innerHTML = '';
        mediaGallery.innerHTML = '';
        mediaGallery.style.display = 'none';
        
        if (project.media && project.media.length > 0) {
            // Display first media item as main
            const firstMedia = project.media[0];
            if (firstMedia.type === 'image') {
                mainMedia.innerHTML = `<img src="${firstMedia.url}" alt="${firstMedia.alt}">`;
            } else {
                mainMedia.innerHTML = `
                    <video controls>
                        <source src="${firstMedia.url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            }
            
            // Only show gallery if there are multiple media items
            if (project.media.length > 1) {
                mediaGallery.style.display = 'flex';
                
                // Create thumbnails for all media
                project.media.forEach((media, index) => {
                    const thumbnail = document.createElement('div');
                    thumbnail.className = `media-thumbnail ${index === 0 ? 'active' : ''}`;
                    
                    if (media.type === 'image') {
                        thumbnail.innerHTML = `<img src="${media.url}" alt="${media.alt}">`;
                    } else {
                        thumbnail.innerHTML = `
                            <div class="video-thumbnail">
                                <i class="fas fa-play"></i>
                            </div>
                        `;
                    }
                    
                    thumbnail.addEventListener('click', () => {
                        // Update main media
                        if (media.type === 'image') {
                            mainMedia.innerHTML = `<img src="${media.url}" alt="${media.alt}">`;
                        } else {
                            mainMedia.innerHTML = `
                                <video controls>
                                    <source src="${media.url}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            `;
                        }
                        
                        // Update active thumbnail
                        document.querySelectorAll('.media-thumbnail').forEach(t => t.classList.remove('active'));
                        thumbnail.classList.add('active');
                    });
                    
                    mediaGallery.appendChild(thumbnail);
                });
            }
        } else {
            // Fallback if no media provided
            mainMedia.innerHTML = `<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="${project.title}">`;
        }
    }

    // Open modal when project card is clicked
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-project-id'));
            const project = projectsData.find(p => p.id === projectId);
            
            if (project) {
                // Fill modal with project data
                modalTitle.textContent = project.title;
                modalSubtitle.textContent = project.subtitle;
                modalDescription.textContent = project.description;
                
                // Features list
                featuresList.innerHTML = '';
                project.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
                
                // Technologies tags
                techTags.innerHTML = '';
                project.technologies.forEach(tech => {
                    const tag = document.createElement('span');
                    tag.className = 'tech-tag';
                    tag.textContent = tech;
                    techTags.appendChild(tag);
                });
                
                // Links
                githubLink.href = project.githubLink;
                demoLink.href = project.demoLink;
                
                // Display media
                displayProjectMedia(project);
                
                // Show modal
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Pause any playing videos when closing
        document.querySelectorAll('.main-media video').forEach(video => {
            video.pause();
        });
    });

    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Pause any playing videos when closing
            document.querySelectorAll('.main-media video').forEach(video => {
                video.pause();
            });
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Pause any playing videos when closing
            document.querySelectorAll('.main-media video').forEach(video => {
                video.pause();
            });
        }
    });
});