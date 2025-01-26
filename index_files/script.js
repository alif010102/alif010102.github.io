// Header
const HeaderEL = document.querySelector('.header')
const SidebarEL = document.querySelector('.sidebar')

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        HeaderEL.classList.add('header-scrolled');
        SidebarEL.classList.add('sidebar-scrolled');
        } else if (window.scrollY <=10) {
            HeaderEL.classList.remove('header-scrolled');
            SidebarEL.classList.remove('sidebar-scrolled');
        }
})
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none"
}
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}
//Header Selesai
// Image Slider
let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    
    index += step;
    
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }
    
    document.querySelector(".slider").style.transform = `translateX(-${index * 100}%)`;
}

// Auto Slide mili detik (Opsional)
setInterval(() => moveSlide(1), 8000);
// Image Slider Selesai