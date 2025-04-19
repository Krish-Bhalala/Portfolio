document.addEventListener('DOMContentLoaded', function() {
    // Experience data with images
    const experienceData = {
        work: [
            {
                id: 1,
                title: "Software Developer Intern",
                company: "Tech Company Inc.",
                date: "May 2023 - August 2023",
                description: [
                    "Developed and maintained web applications using React and Node.js",
                    "Collaborated with team members to implement new features and fix bugs",
                    "Optimized application performance, reducing load time by 30%",
                    "Participated in code reviews and agile development processes"
                ],
                images: [
                    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                    "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                ]
            },
            {
                id: 2,
                title: "Web Development Assistant",
                company: "University IT Department",
                date: "January 2023 - April 2023",
                description: [
                    "Redesigned department website improving user engagement by 40%",
                    "Implemented responsive design for mobile compatibility",
                    "Maintained and updated website content using CMS"
                ],
                images: [
                    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                ]
            }
        ],
        leadership: [
            {
                id: 3,
                title: "Computer Science Club President",
                company: "University CS Club",
                date: "September 2022 - Present",
                description: [
                    "Organize weekly meetings, workshops, and hackathons",
                    "Manage a team of 10 officers and represent the club to faculty",
                    "Increased club membership by 40% through outreach programs"
                ],
                images: [
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
                    "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                ]
            }
        ],
        volunteer: [
            {
                id: 4,
                title: "Coding Instructor",
                company: "Youth Coding Camp",
                date: "Summer 2022",
                description: [
                    "Taught basic programming concepts to middle school students using Scratch and Python",
                    "Developed curriculum for beginner coders",
                    "Mentored students in building their first projects"
                ],
                images: [
                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                ]
            }
        ]
    };

    // Initialize experience tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Create experience cards
    function renderExperience(tab) {
        const tabContent = document.getElementById(tab);
        
        // Clear existing content first
        tabContent.innerHTML = '';
        
        experienceData[tab].forEach(exp => {
            const expCard = document.createElement('div');
            expCard.className = 'experience-card';
            expCard.setAttribute('data-exp-id', exp.id);
            
            // Build gallery HTML if images exist
            let galleryHTML = '';
            if (exp.images && exp.images.length > 0) {
                galleryHTML = `
                    <div class="exp-gallery">
                        ${exp.images.map(img => `
                            <div class="exp-gallery-item">
                                <img src="${img}" alt="Experience image">
                            </div>
                        `).join('')}
                    </div>
                `;
            }
            
            expCard.innerHTML = `
                <div class="experience-header">
                    <div>
                        <h3 class="experience-title">${exp.title}   <span class="toggle-icon">▾</span></h3>
                        <p class="experience-company">${exp.company}</p>
                    </div>
                    <p class="experience-date">${exp.date}</p>
                </div>
                <div class="experience-description">
                    <ul>
                        ${exp.description.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    ${galleryHTML}
                </div>
            `;
            tabContent.appendChild(expCard);
        });
        
        // Initialize interactions for this tab's content
        initTabInteractions(tabContent);
    }

    // Initialize tab interactions (expand/collapse and gallery)
    function initTabInteractions(tabContent) {
        // Add click event to headers for expand/collapse
        tabContent.querySelectorAll('.experience-header').forEach(header => {
            header.addEventListener('click', function() {
                const card = this.parentElement;
                const description = this.nextElementSibling;
                const icon = this.querySelector('.toggle-icon');
                
                description.classList.toggle('active');
                icon.classList.toggle('active');
                
                // Smooth scroll to keep the expanded content in view
                if (description.classList.contains('active')) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        });
        
        // Initialize image gallery functionality for this tab
        initImageGallery(tabContent);
    }

    // Initialize image gallery and modal for a specific tab
    function initImageGallery(tabContent) {
        // Create modal element if it doesn't exist
        let modal = document.querySelector('.exp-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.className = 'exp-modal';
            modal.innerHTML = `
                <span class="exp-modal-close">&times;</span>
                <img class="exp-modal-content" src="" alt="">
            `;
            document.body.appendChild(modal);
            
            // Set up modal close events (only once)
            modal.querySelector('.exp-modal-close').addEventListener('click', () => {
                modal.classList.remove('active');
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        }
        
        // Add click events to gallery items in this tab
        tabContent.querySelectorAll('.exp-gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const modalImg = modal.querySelector('.exp-modal-content');
                
                modal.classList.add('active');
                modalImg.src = imgSrc;
            });
        });
    }

    // Initialize all tabs at once (better performance than lazy loading)
    function initializeAllTabs() {
        tabContents.forEach(tab => {
            const tabId = tab.id;
            if (experienceData[tabId]) {
                renderExperience(tabId);
                // Hide all tabs except the first one initially
                if (tabId !== 'work') {
                    tab.style.display = 'none';
                }
            }
        });
    }

    // Initialize all tabs
    initializeAllTabs();
    
    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab buttons
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Hide all tab contents first
            tabContents.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('active');
            });
            
            // Show the selected tab content
            const activeTab = document.getElementById(tabId);
            activeTab.style.display = 'block';
            
            // Use setTimeout to ensure display:block is applied before adding active class
            setTimeout(() => {
                activeTab.classList.add('active');
            }, 10);
        });
    });
});