// Dapatkan container film yang ditampilkan
const featuredMoviesContainer = document.querySelector('.featured-movies .row');

// Tambahkan event listener untuk perubahan ukuran jendela
window.addEventListener('resize', () => {
  adjustFeaturedMoviesLayout();
});

// Fungsi untuk menyesuaikan tata letak film berdasarkan ukuran layar
function adjustFeaturedMoviesLayout() {
  const lebarLayar = window.innerWidth;

  // Atur jumlah kolom berdasarkan lebar layar
  if (lebarLayar >= 992) {
    featuredMoviesContainer.classList.remove('col-md-3', 'col-sm-1', 'col-lg-1');
    featuredMoviesContainer.classList.add('col-md-4', 'col-lg-3');
  } else if (lebarLayar >= 768) {
    featuredMoviesContainer.classList.remove('col-md-4', 'col-sm-1', 'col-lg-1');
    featuredMoviesContainer.classList.add('col-md-6', 'col-lg-4');
  } else if (lebarLayar >= 576) {
    featuredMoviesContainer.classList.remove('col-md-6', 'col-sm-1', 'col-lg-1');
    featuredMoviesContainer.classList.add('col-md-12', 'col-lg-6');
  } else {
    featuredMoviesContainer.classList.remove('col-md-12', 'col-lg-6', 'col-md-4', 'col-lg-4', 'col-md-6', 'col-lg-3');
    featuredMoviesContainer.classList.add('col-sm-1');
  }
}

// Panggil fungsi untuk menyesuaikan tata letak secara awal
adjustFeaturedMoviesLayout();
