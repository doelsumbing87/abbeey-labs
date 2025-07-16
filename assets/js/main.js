// File: assets/js/main.js
// Tujuan: Menambahkan fungsionalitas interaktif ke situs web.

document.addEventListener('DOMContentLoaded', function () {

    // --- Fungsionalitas Menu Mobile ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Fungsionalitas Form Kontak dengan Web3Forms ---
    const contactForm = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    // Pastikan elemen form ada di halaman sebelum menambahkan event listener
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
                formResult.classList.remove('text-green-500', 'text-red-500');
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
                            formResult.innerHTML = "Message sent successfully!";
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
                           formResult.innerHTML = ""; // Clear the message after 5 seconds
                        }
                    }, 5000);
                });
        });
    }
});
