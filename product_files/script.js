// Header
const HeaderEL = document.querySelector('.header')
const SidebarEL = document.querySelector('.sidebar')

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        HeaderEL.classList.add('header-scrolled');
        SidebarEL.classList.add('sidebar-scrolled');
    } else if (window.scrollY <= 10) {
        HeaderEL.classList.remove('header-scrolled');
        SidebarEL.classList.remove('sidebar-scrolled');
    }
})
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none"
}
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}
//Header Selesai
// Card Product
const fileName = "product_files/product.json";
let allData = [];

fetch(fileName)
    .then(response => response.json())
    .then(data => {
        allData = data; // Simpan data lengkap untuk pencarian
        displayData(data.products);
    })
    .catch(error => console.error('Error:', error));

function searchData() {
    let searchQuery = document.getElementById("search").value.toLowerCase();

    // Filter data berdasarkan query pencarian
    let filteredData = allData.products.filter(item => item.title.toLowerCase().includes(searchQuery));

    // Menampilkan data yang sudah difilter
    displayData(filteredData);
}
function displayData(data) {
    let produkHTML = '';
    const kotakContainer = document.getElementById('main');
    data.forEach(product => {
        produkHTML += `
                <a onclick=(showPopup(${product.id}))>
                    <img src="product_files/images/product/${product.image}" alt="box-panel">
                    <h5>${product.title}</h5>
                    <p>${product.summary}</p>
                </a>
                            `;
    });
    kotakContainer.innerHTML = produkHTML;
}
// End of Card Product 
// Popup Product
function closePopup() {
    const popupProduct = document.querySelector('.popupProduct');
    popupProduct.style.display = "none"
}
function showPopup(productId) {
    const fileName = 'product_files/product.json';
    fetch(fileName)
        .then(response => response.json())
        .then(data => {
            const product = data.products.find(p => p.id === productId);
            const productDetailsDiv = document.getElementById("deskripsiPopup");
            const productGambarDiv = document.getElementById("gambarPopup");
            productDetailsDiv.innerHTML = `
                <h4>${product.title}</h4><br>
                <p>${product.description}</p><br>
                <p>Harga: <span style="font-weight: bold;">Rp. ${product.harga}</span></p>
            `;
            productGambarDiv.innerHTML = `
            <img src="/product_files/images/product/${product.image}" alt="" srcset="">
            `
        })
        .catch(error => {
            console.error("Terjadi kesalahan:", error);
            document.getElementById("productDetails").innerHTML = "Gagal memuat data.";
        })
    const popupProduct = document.querySelector('.popupProduct');
    popupProduct.style.display = "flex"
}
// Menangani klik di luar popupContent untuk menutup popup
window.addEventListener('click', function (event) {
    const popup = document.querySelector('.popupProduct');
    const popupContent = document.querySelector('.popupProductContent');

    // Jika klik di luar popupContent dan di dalam popupProduct, maka tutup popup
    if (popup.contains(event.target) && !popupContent.contains(event.target)) {
        closePopup();
    }
});