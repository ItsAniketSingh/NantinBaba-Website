const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

testimonials[index].classList.add("active");

setInterval(() => {
    testimonials[index].classList.remove("active");
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add("active");
}, 5000);
