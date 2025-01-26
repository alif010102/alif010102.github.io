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