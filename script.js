// Dark mode toggle
document
    .querySelector("#dark-mode-toggle")
    .addEventListener('click', () => {
        document.body.classList.toggle("latex-dark");
    });

// Date
// n = new Date();
// y = n.getFullYear();
// m = n.getMonth() + 1;
// d = n.getDate();
// document.getElementById("date").innerHTML = y + "-" + m + "-" + d;