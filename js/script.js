const items = document.querySelectorAll('.item');
let currentIndex = 0;

function showNextItem() {
    if (currentIndex < items.length) {
        items[currentIndex].style.display = 'block';
        setTimeout(() => {
            items[currentIndex].style.opacity = '1';
            currentIndex++;
            showNextItem();
        }, 1000); // Cambia 1000 por el tiempo que desees entre la aparición de cada div (en milisegundos).
    }
}

showNextItem();
