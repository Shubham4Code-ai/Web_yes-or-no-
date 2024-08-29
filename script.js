document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'secondpage.html';
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    this.style.left = Math.random() * (window.innerWidth - 100) + 'px';
});
