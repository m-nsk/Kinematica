// Classes
class InelasticCollision {
    constructor(m1, m2, v1i, v2i) {
        this._m1 = m1;
        this._m2 = m2;
        this._v1i = v1i;
        this._v2i = v2i;
    }

    calculate() {
    }

}

// Dark mode toggle
document
    .querySelector("#dark-mode-toggle")
    .addEventListener('click', () => {
        document.body.classList.toggle("latex-dark");
    });
// Inelastic Collision m1
document
    .querySelector("i-m1")
    .addEventListener('input', (event) => {

    });
/*
Date
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = y + "-" + m + "-" + d;
*/