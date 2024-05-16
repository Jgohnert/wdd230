const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h2Container = document.querySelector('h2');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');

    if (navigation.classList.contains('open')) {
        h2Container.style.marginTop = '350px'; 
    } else {
        h2Container.style.marginTop = '90px';
    }
});