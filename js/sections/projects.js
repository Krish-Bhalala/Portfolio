document.addEventListener('DOMContentLoaded', function() {
    // Project data - easily add more projects here
    const projectsData = [
        {
            id: 1,
            title: "AI-Powered Study Assistant",
            subtitle: "Personalized learning platform",
            description: "A web application that uses machine learning algorithms to create customized study plans based on individual learning patterns and track academic progress over time. The system adapts to the user's strengths and weaknesses, optimizing study sessions for maximum efficiency.",
            features: [
                "Generates personalized study schedules",
                "Tracks progress with visual analytics",
                "Adapts to learning patterns using ML",
                "Provides study recommendations",
                "Mobile-friendly interface"
            ],
            technologies: ["Python", "Flask", "TensorFlow", "JavaScript", "MongoDB"],
            githubLink: "#",
            demoLink: "#",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                    alt: "Main dashboard view"
                },
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
                    alt: "Mobile view"
                }
            ]
        },
        {
            id: 2,
            title: "Smart Campus Navigation",
            subtitle: "Interactive university map",
            description: "An interactive map application designed to help students and visitors navigate the university campus with real-time updates on building locations, events, and points of interest. Includes accessibility features for users with disabilities.",
            features: [
                "Real-time location tracking",
                "Accessibility routes",
                "Event notifications",
                "Indoor navigation",
                "User-friendly interface"
            ],
            technologies: ["JavaScript", "React", "Google Maps API", "Node.js", "Firebase"],
            githubLink: "#",
            demoLink: "#",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                    alt: "Campus map view"
                }
            ]
        },
        {
            id: 3,
            title: "E-Commerce Analytics Dashboard",
            subtitle: "Data visualization tool",
            description: "A comprehensive data visualization tool that provides business owners with insights into sales trends, customer behavior, and inventory management. Helps identify opportunities for growth and optimization.",
            features: [
                "Sales performance analytics",
                "Customer segmentation",
                "Inventory tracking",
                "Real-time data updates",
                "Custom report generation"
            ],
            technologies: ["Python", "Django", "Chart.js", "PostgreSQL", "AWS"],
            githubLink: "#",
            demoLink: "#"
            // No media array - gallery won't be shown for this project
        }
        // Add more projects as needed
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