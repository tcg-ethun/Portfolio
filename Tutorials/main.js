

        // Content management
        function showContent(contentId) {
            // Hide all content sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected content
            const targetContent = document.getElementById(contentId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Update breadcrumb
            const breadcrumb = document.getElementById('breadcrumb-text');
            const activeItem = document.querySelector('.sidebar-item.active');
            if (activeItem && breadcrumb) {
                breadcrumb.textContent = activeItem.textContent;
            }
            
            // Scroll to top of content
            document.querySelector('.main-content').scrollTop = 0;
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('overlay');
            
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        function closeSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('overlay');
            
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }

        function toggleSection(element) {
            const content = element.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            // Close all sections
            document.querySelectorAll('.section-content').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.section-title').forEach(title => {
                title.classList.remove('active');
            });
            
            // Open clicked section if it wasn't active
            if (!isActive) {
                content.classList.add('active');
                element.classList.add('active');
            }
        }

        // Handle sidebar item clicks
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all items
                document.querySelectorAll('.sidebar-item').forEach(i => {
                    i.classList.remove('active');
                });
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Get content ID from data attribute
                const contentId = this.getAttribute('data-content');
                if (contentId) {
                    showContent(contentId);
                } else {
                    // Fallback to home if no content ID
                    showContent('home');
                }
                
                // Close sidebar on mobile after selection
                if (window.innerWidth <= 768) {
                    closeSidebar();
                }
            });
        });

        // Initialize - open first section by default
        document.addEventListener('DOMContentLoaded', function() {
            const firstSection = document.querySelector('.section-title');
            if (firstSection) {
                firstSection.click();
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeSidebar();
            }
        });

        // Handle browser back/forward buttons (optional)
        window.addEventListener('popstate', function(e) {
            if (e.state && e.state.contentId) {
                showContent(e.state.contentId);
                
                // Update active sidebar item
                document.querySelectorAll('.sidebar-item').forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('data-content') === e.state.contentId) {
                        item.classList.add('active');
                    }
                });
            }
        });

        // Optional: Update URL when content changes (for bookmarking)
        function updateURL(contentId) {
            const newURL = window.location.pathname + '#' + contentId;
            history.pushState({contentId: contentId}, '', newURL);
        }

        // Check URL hash on page load
        window.addEventListener('load', function() {
            const hash = window.location.hash.substring(1);
            if (hash) {
                showContent(hash);
                // Update active sidebar item
                document.querySelectorAll('.sidebar-item').forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('data-content') === hash) {
                        item.classList.add('active');
                    }
                });
            }
        });


        