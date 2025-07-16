// File: assets/js/main.js
// Purpose: To handle all interactive functionalities for the website.

document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Light/Dark Mode Theme Functionality ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Function to update the theme and icons
    function applyTheme(isDarkMode) {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        if (themeToggleDarkIcon && themeToggleLightIcon) {
            themeToggleDarkIcon.classList.toggle('hidden', !isDarkMode);
            themeToggleLightIcon.classList.toggle('hidden', isDarkMode);
        }
    }

    // Check for saved theme in localStorage or system preference on page load
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
                       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    applyTheme(isDarkMode);

    // Add click listener to the theme toggle button
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function() {
            const newIsDarkMode = !document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', newIsDarkMode ? 'dark' : 'light');
            applyTheme(newIsDarkMode);
        });
    }


    // --- 2. Mobile Menu Functionality ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }


    // --- 3. Contact Form Functionality (Web3Forms) ---
    const contactForm = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            const json = JSON.stringify(object);
            
            if(formResult) {
                formResult.innerHTML = "Please wait...";
                formResult.classList.remove('hidden', 'text-green-500', 'text-red-500');
                formResult.classList.add('text-slate-400');
            }

            fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                })
                .then(async (response) => {
                    let jsonResponse = await response.json();
                    if (formResult) {
                        if (response.status == 200) {
                            formResult.innerHTML = jsonResponse.message || "Message sent successfully!";
                            formResult.classList.remove('text-slate-400', 'text-red-500');
                            formResult.classList.add('text-green-500');
                        } else {
                            console.log(response);
                            formResult.innerHTML = jsonResponse.message;
                            formResult.classList.remove('text-slate-400', 'text-green-500');
                            formResult.classList.add('text-red-500');
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (formResult) {
                        formResult.innerHTML = "Something went wrong!";
                        formResult.classList.remove('text-slate-400', 'text-green-500');
                        formResult.classList.add('text-red-500');
                    }
                })
                .then(function () {
                    contactForm.reset();
                    setTimeout(() => {
                        if (formResult) {
                           formResult.innerHTML = "";
                        }
                    }, 5000);
                });
        });
    }


    // --- 4. Blog Search Functionality (Filter Method) ---
    const searchInput = document.getElementById('search-input');
    const articleCards = document.querySelectorAll('.article-card');
    const noResultsMessage = document.getElementById('no-results');

    if (searchInput && articleCards.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            let visibleArticles = 0;

            articleCards.forEach(card => {
                const title = card.querySelector('.article-title').textContent.toLowerCase();
                const summary = card.querySelector('.article-summary').textContent.toLowerCase();
                const tag = card.querySelector('.article-tag').textContent.toLowerCase();

                const isVisible = title.includes(searchTerm) || 
                                summary.includes(searchTerm) || 
                                tag.includes(searchTerm);
                
                if (isVisible) {
                    card.style.display = '';
                    visibleArticles++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (noResultsMessage) {
                if (visibleArticles === 0) {
                    noResultsMessage.classList.remove('hidden');
                } else {
                    noResultsMessage.classList.add('hidden');
                }
            }
        });
    }
});
