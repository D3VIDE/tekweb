// Mengambil semua gambar
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

// Fungsi untuk memindahkan gambar ke kanan
function shiftRight() {
  let tempSrc = img1.src;   // Simpan gambar kiri
  img1.src = img3.src;      // Kanan ke kiri
  img3.src = img2.src;      // Tengah ke kanan
  img2.src = tempSrc;       // Kiri ke tengah
}


function shiftLeft() {
  let tempSrc = img3.src;  
  img3.src = img1.src;     
  img1.src = img2.src;      
  img2.src = tempSrc;       
}
function toggleFullScreen() {
  img2.classList.toggle('fullscreen'); 
}
// Event listener saat gambar diklik
img1.addEventListener('click', shiftRight); 
img3.addEventListener('click', shiftLeft);  
img2.addEventListener('click', toggleFullScreen);