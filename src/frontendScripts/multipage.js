// script.js
let currentPage = 1;

function nextPage() {
    if (currentPage < 3) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((pageElement) => {
        pageElement.classList.remove('active');
    });

    document.getElementById(`page${page}`).classList.add('active');
}

function submitForm() {
    // Perform form submission logic here
}
