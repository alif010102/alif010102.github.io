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
function kirimWA(){
    let namaOrang = document.getElementById('namaOrang');
    let emailOrang = document.getElementById('emailOrang');
    let pesan = document.getElementById('message');

    let encodeNama = encodeURIComponent(namaOrang.value);
    let encodeEmail = encodeURIComponent(emailOrang.value);
    let encodePesan = encodeURIComponent(pesan.value);
    let urlWA = "https://wa.me/628122072109?text="

    let urlFull = urlWA + "Nama:%20%20" + encodeNama + "%0A%0A" + "Email:%20%20" + encodeEmail + "%0A%0A" + "Pesan:%20%20" + encodePesan;
    window.open(urlFull, '_blank');
}