const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        currentPage++;
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].style.transform = 'rotateY(0deg)';
    }
});
