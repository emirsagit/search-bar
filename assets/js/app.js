const modal = document.getElementById("modal");

document.getElementById("btn-open").addEventListener("click", function() {
    modal.style.display = "block";
});

document.getElementById("btn-close").addEventListener("click", function() {
    modal.style.display = "none";
});