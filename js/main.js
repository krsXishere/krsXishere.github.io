//  const mntoggle = document.querySelector('.menu-toggle input');
//  const nav = document.querySelector('nav ul');

// mntoggle.addEventListener('click',function(){
//     nav.classList.toggle('menushow');
// })

// main.js
document.getElementById('nav-toggle').addEventListener('change', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show', this.checked);
});
