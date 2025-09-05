document.addEventListener('DOMContentLoaded', function() {
    // Experience data with images
    const experienceData = {
        work: [
            {
                id: 0,
                title: "Grader COMP3030 Automata & Formal Languages",
                company: "University of Manitoba",
                date: "Jul 2025 - Aug 2025",
                description: [
                    "Responsible for grading assignments and providing detailed constructive feedback",
                    "Meeting with course faculty to discuss trends in Assignments",
                    "Assisting course faculty with assessing term tests"
                ],
                images: [
                ]
            },
            {
                id: 1,
                title: "Grader COMP3430 Operating Systems",
                company: "University of Manitoba",
                date: "May 2025 - Jul 2025",
                description: [
                    "Responsible for grading assignments and providing detailed constructive feedback",
                    "Meeting with course faculty to discuss trends in Assignments and flagging for plaigiarism",
                    "Assisting course faculty with assessing term tests"
                ],
                images: [
                ]
            },
            {
                id: 2,
                title: "Comp Help Centre Leader 1",
                company: "University of Manitoba",
                date: "May 2025 - Aug 2025",
                description: [
                    "Assist students with conceptual and technical issues in computer science and engineering courses",
                    "Hosting group study sessions and workshops for first year and second year computer science courses",
                    "Currently tutoring: COMP1010, COMP1012, COMP1020, COMP2140, COMP2160, COMP2280, COMP2080, COMP3430, COMP3030, COMP2150"
                ],
                images: []
            },
            {
                id: 3,
                title: "Content and Study Skills Tutor",
                company: "Academic Learning Centre, University of Manitoba",
                date: "Aug 2023 - Present",
                description: [
                    "Tutored 300+ hours in first and second-year courses, specializing in Comp Sci, Maths, Stats, and Economics",
                    "Led group exam review sessions for challenging undergrad courses and enhancing collaboration",
                    "Developed tailored study materials and facilitated workshops on study skills, empowering students to excel",
                    "Currently tutoring: 26 courses from computer science, mathematics, statistics, economics and enviormental science"
                ],
                images: []
            },
            {
                id: 4,
                title: "Associate",
                company: "Luis and Emma's Nofrills",
                date: "Mar 2023 - Present",
                description: [
                    "Monitored inventory, handled inventory counting and fulfillment according to the merchandising policies",
                    "Ensured product displays were neat, labeled correctly, and followed safety and sanitation rules.",
                    "Assisted customers professionally and helped resolve their concerns quickly"
                ],
                images: []
            },
            {
                id: 5,
                title: "Teaching Assistant COMP2280 - Intro to Computer Systems ",
                company: "University of Manitoba",
                date: "Jan 2025 - May 2025",
                description: [
                    "Organize weekly office hours for 310 students across 3 sections",
                    "Providing one-on-one and group assistance to students in understanding course material and LC3 assembly programming",
                    "Creating sample midterms and questions  for students to practice and boost their confidence",
                    "Monitoring and solving student queries on the course discussion board of all 3 sections",
                ],
                images: []
            },
            {
                id: 6,
                title: "Teaching Assistant COMP1012 - Intro to Python",
                company: "University of Manitoba",
                date: "Jan 2025 - May 2025",
                description: [
                    "Conduct weekly python tutorial labs for 20 first year students",
                    "Assist in creating and grading lab materials, while resolving any queries regarding the course content "
                ],
                images: []
            },
            {
                id: 7,
                title: "Supplemental Instructor COMP1012 - Intro to Python",
                company: "Academic Learning Centre, University of Manitoba",
                date: "Aug 2024 - Present",
                description: [
                    "Led engaging group study sessions to enhance study skills and promote active learning alongside faculty",
                    "Developed tailored instructional materials to support diverse learning styles and boost comprehension",
                    "Marketed the SI program to increase student participation and provided personalized consultations"
                ],
                images: []
            }
        ],
        leadership: [
            {
                id: 8,
                title: "Vice President - Membership Experience",
                company: "International Community Centre",
                date: "June 2024 - Present",
                description: [
                    "Launched the Community Builder Program, significantly enhancing international student involvement on campus",
                    "Led 122 volunteers team, streamlining onboarding and tracking hours to ensure operational efficiency.",
                    "Cultivated community through team-building activities and scholarships, while forging partnerships to expand resources for international students."
                ],
                images: []
            },
            {
                id: 9,
                title: "Web Developer Executive",
                company: "Active Minds Umanitoba",
                date: "Jan 2024 - Present",
                description: [
                    "Collaborated with a team of 3 student developers in redesigning the official student club website",
                    "Migrated the website form WordPress to a fully responsive static HTML,CSS, JavaScript site and Parcel",
                    "Maintaining web presence of the club and conducting thorough market research for user sentiment"
                ],
                images: []
            },
            {
                id: 10,
                title: "Computer Vision Lead",
                company: "Umanitoba Agricultural Robotics Team",
                date: "Sept 2024 - Present",
                description: [
                    "Implement computer vision algorithms for detecting and mapping eggs in agricultural settings",
                    "Optimize navigation and path planning for efficient egg collection and sorting with an autonomous rover",
                    "Collaborate with team members to integrate vision systems with robotic hardware"
                ],
                images: []
            },
            {
                id: 11,
                title: "International Student Advocacy Councillor",
                company: "Computer Science Student Association ",
                date: "Jan 2024 – May 2024",
                description: [
                    "Spearheaded initiatives to enhance international student representation in computer science",
                    "Advocated for international students by voicing concerns to VP Advocacy for inclusive policies",
                    "Developed First Year Guide to empower new computer science students with essential rights, resources, and tips for navigating campus life"
                ],
                images: []
            }
        ],
        volunteer: [
            {
                id: 13,
                title: "Highschool Workshop Facilitator",
                company: "Let's Talk Science",
                date: "Jul 2022 - May 2024",
                description: [
                    "Volunteered with Let's Talk Science to promote STEM education and engagement among young students",
                    "Demonstrated various science experiments and info sessions in elementary and high schools in Winnipeg",
                    "Collaborated with other Let's Talk Science volunteers to plan and execute the demonstrations",
                    "Engaged with young students and encouraged them to pursue STEM subjects",
                    "Provided guidance and support to students who showed interest in STEM subjects",
                    "Demonstrated strong communication and interpersonal skills, building positive relationships with students and teachers"
                ],
                images: []
            },
            {
                id: 14,
                title: "Student Volunteer (Various Roles)",
                company: "Science Rendezvous",
                date: "Summer 2022, Summer 2023, Summer 2024",
                description: [
                    "Summer 2022: Assisted as a member for the setup and organizing team, responsible for overseeing locations setup",
                    "Summer 2023: Served as booth captain for lets talk science coding with mice booth, engaging with kids and parents",
                    "Summer 2024: Served as school group leader for grade 5-8 students, leading them through various booths across the fort gary campus",
                    "Till now volunteered close to 30 hrs across 3 science rendezvous"
                ],
                images: []
            },
            {
                id: 15,
                title: "Tax clinic volunteer",
                company: "CRA - UMSU Tax Clinic",
                date: "Winter 2023",
                description: [
                    "Assisted students at the University of Manitoba with tax filing and provided guidance on tax-related matters through the UMSU Tax Clinic",
                    "Educated students about the importance of filing taxes and explained relevant tax documents required for the tax clinic",
                    "Collaborated with other volunteers to organize and manage the clinic, ensuring smooth event operations and effective support for participants"
                ],
                images: []
            },
            {
                id: 16,
                title: "Tutor and Mentor",
                company: "Science Student Association",
                date: "Aug 2022 - Present",
                description: [
                    "Tutored students for 15 hours in MATH 1500 and STAT 1000 courses at the University of Manitoba.",
                    "Helped students understand topics, solve problems, and get ready for exams.",
                    "Mentored 2 students one-on-one, helping them navigating to faculty of science computer science program.",
                    "NOTE: currently not tutoring and limiting to mentoring only 1 individual"
                ],
                images: []
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
