

 const allFAQs = [
            // Portfolio FAQs
            {
                category: 'Me',
                question: 'Do you mentor or teach others?',
                answer: 'Yes ! I enjoy sharing what I know — whether it’s helping beginners or collaborating with peers. I occasionally write tutorials, and I’m open to mentorship requests.'
            },
            {
                category: 'Me',
                question: 'How do you handle failure or mistakes?',
                answer: 'I treat mistakes as learning opportunities. Whether it\'s a failed project or a bad grade, I reflect, adjust, and bounce back with more clarity and resilience.'
            },
            {
                category: 'Me',
                question: 'Have you worked in a team environment?',
                answer: ' Yes. I’ve collaborated on group assignments, coding bootcamps, and competitions. Working in a team helps me learn how to communicate clearly and adapt to different working styles.'
            },
            {
                category: 'Me',
                question: 'Should I include personal projects in my portfolio?',
                answer: 'Absolutely! Personal projects show passion, creativity, and initiative. They often demonstrate skills better than client work and show your genuine interests.'
            },
            {
                category: 'Me',
                question: 'What are your biggest strengths?',
                answer: 'I’d say problem-solving, adaptability, and creative thinking. I enjoy working in teams and often take the lead on planning, organization, and tech decisions when needed.'
            },

            // Education FAQs
            {
                category: 'education',
                question: 'Is a computer science degree necessary for programming?',
                answer: 'While helpful, it\'s not absolutely necessary. Many successful developers are self-taught or have alternative education paths. Skills and portfolio matter more than formal education.'
            },
            {
                category: 'education',
                question: 'What are the best online learning platforms?',
                answer: 'Popular platforms include Coursera, Udemy, freeCodeCamp, Codecademy, and Khan Academy. Choose based on your learning style and specific goals.'
            },
            {
                category: 'education',
                question: 'How long does it take to become job-ready?',
                answer: 'With consistent effort, 6-12 months of focused learning can make you job-ready for entry-level positions. It depends on your starting point and dedication.'
            },
            {
                category: 'education',
                question: 'Should I get certifications or focus on projects?',
                answer: 'Both are valuable, but projects often carry more weight with employers. Certifications can help with fundamentals, while projects demonstrate practical skills.'
            },
            {
                category: 'education',
                question: 'What\'s the best way to stay updated with technology?',
                answer: 'Follow tech blogs, join developer communities, attend conferences, take online courses, and work on projects using new technologies regularly.'
            },

            // Programming FAQs
            {
                category: 'programming',
                question: 'Which programming language should I learn first?',
                answer: 'Python is great for beginners due to its simple syntax. JavaScript is essential for web development. Choose based on your career goals - web dev, data science, mobile apps, etc.'
            },
            {
                category: 'programming',
                question: 'How do I improve my coding skills?',
                answer: 'Practice regularly, work on projects, contribute to open source, read other people\'s code, participate in coding challenges, and seek feedback from experienced developers.'
            },
            {
                category: 'programming',
                question: 'What are the most important programming concepts to learn?',
                answer: 'Data structures, algorithms, object-oriented programming, version control (Git), debugging, testing, and understanding how to break down complex problems.'
            },
            {
                category: 'programming',
                question: 'How do I debug code effectively?',
                answer: 'Use debugging tools, add console logs, isolate the problem, check assumptions, read error messages carefully, and don\'t be afraid to step away and come back fresh.'
            },
            {
                category: 'programming',
                question: 'What\'s the difference between front-end and back-end development?',
                answer: 'Front-end focuses on user interface and user experience (HTML, CSS, JavaScript). Back-end handles server-side logic, databases, and APIs (Node.js, Python, Java, etc.).'
            }
        ];

        let currentCategory = 'Me';
        let currentlyDisplayed = [];
        let expandedFAQ = null;

        function getFilteredFAQs() {
            return allFAQs.filter(faq => faq.category === currentCategory);
        }

        function loadFAQs() {
            const filteredFAQs = getFilteredFAQs();
            
            filteredFAQs.forEach((faq, index) => {
                const faqElement = createFAQElement(faq, index);
                document.getElementById('faqContent').appendChild(faqElement);
                
                // Animate FAQs
                gsap.fromTo(faqElement, 
                    { opacity: 0, y: 30 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.3, 
                        delay: index * 0.1,
                        ease: "power2.out"
                    }
                );
            });

            currentlyDisplayed = [...filteredFAQs];
        }

        function createFAQElement(faq, index) {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.innerHTML = `
                <div class="faq-question" onclick="toggleFAQ(this)">
                    <h3> ${index+1} .</font> ${faq.question}</h3>
                    <div class="faq-toggle">+</div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            `;
            return faqItem;
        }

        function filterFAQs(category) {
            currentCategory = category;
            currentlyDisplayed = [];

            // Update active button
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Clear current FAQs with animation
            const currentFAQs = document.querySelectorAll('.faq-item');
            if (currentFAQs.length > 0) {
                gsap.to(currentFAQs, {
                    opacity: 0,
                    y: -20,
                    duration: 0.2,
                    stagger: 0.05,
                    ease: "power2.in",
                    onComplete: () => {
                        document.getElementById('faqContent').innerHTML = '';
                        loadFAQs();
                    }
                });
            } else {
                // loadFAQs();
            }
        }

        function toggleFAQ(element) {
            const faqItem = element.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const toggleIcon = element.querySelector('.faq-toggle');
            const answerContent = faqAnswer.querySelector('.faq-answer-content');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    const otherAnswer = item.querySelector('.faq-answer');
                    const otherToggle = item.querySelector('.faq-toggle');
                    
                    gsap.to(otherAnswer, {
                        height: 0,
                        duration: 0.4,
                        ease: "power2.inOut"
                    });
                    
                    gsap.to(otherToggle, {
                        rotation: 0,
                        duration: 0.3,
                        ease: "power2.inOut"
                    });
                    
                    otherToggle.textContent = '+';
                }
            });
            
            // Toggle current FAQ item
            if (toggleIcon.textContent === '+') {
                // Open
                expandedFAQ = faqItem;
                toggleIcon.textContent = '-';
                
                gsap.set(faqAnswer, { height: 'auto' });
                gsap.from(faqAnswer, { 
                    height: 0, 
                    duration: 0.3, 
                    ease: "power2.inOut" 
                });
                
                gsap.to(toggleIcon, {
                    rotation: 180,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
                
                gsap.fromTo(answerContent, 
                    { opacity: 0, y: -10 },
                    { opacity: 1, y: 0, duration: 0.4, delay: 0.2, ease: "power2.out" }
                );
                
            } else {
                // Close
                expandedFAQ = null;
                toggleIcon.textContent = '+';
                
                gsap.to(faqAnswer, {
                    height: 0,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
                
                gsap.to(toggleIcon, {
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
                
                gsap.to(answerContent, {
                    opacity: 0,
                    y: -10,
                    duration: 0.2,
                    ease: "power2.in"
                });
            }
        }

        // Initialize FAQs on page load
        document.addEventListener('DOMContentLoaded', function() {
            loadFAQs();
            
            // Initial header animation
            gsap.fromTo('.faq-header', 
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
            
            gsap.fromTo('.faq-controls', 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, delay: 0.2, ease: "power2.out" }
            );
        });