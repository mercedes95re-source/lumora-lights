/* =========================================
   LUMORA LIGHTS
   JAVASCRIPT
========================================= */


// =========================================
// PRODUCT FILTER
// =========================================

const filterButtons = document.querySelectorAll(".filter");

const products = document.querySelectorAll(".product-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;


        // Active button

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Filter products

        products.forEach(product => {

            const category = product.dataset.category;


            if (filter === "all" || category === filter) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});


// =========================================
// PRODUCT ENQUIRY
// =========================================

function orderProduct(productName) {

    const phoneNumber = "919999999999";

    const message =
        `Hi Lumora Lights!%0A%0AI am interested in:%0A${productName}%0A%0APlease share more details.`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(
        whatsappURL,
        "_blank"
    );

}


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(
    ".category-card, .product-card, .about-content, .about-visual"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});