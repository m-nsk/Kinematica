// Classes
class InelasticCollision {
    constructor(m1, m2, v1i, v2i, vf) {
        this._m1 = m1;
        this._m2 = m2;
        this._v1i = v1i;
        this._v2i = v2i;
        this._vf = vf;
    }
    // Getters
    get m1() {
        return this._m1;
    }
    get m2() {
        return this._m2;
    }
    get v1i() {
        return this._v1i;
    }
    get v2i() {
        return this._v2i;
    }

    // Methods
    findEmpty() {
        if (this.m1 == null) {
            return "m1";
        } else if (this.m2 == null) {
            return "m2";
        } else if (this.v1i == null) {
            return "v1i";
        } else if (this.v2i == null) {
            return "v2i";
        } else if (this.vf == null) {
            return "vf";
        } else {
            return "none";
        }
    }
    // calculate() {

}
/* (this.m1 == null && this.m2 != null && this.v1i != null && this.v2i != null && this.vf != null) ||
(this.m1 != null && this.m2 == null && this.v1i != null && this.v2i != null && this.vf != null) ||
(this.m1 != null && this.m2 != null && this.v1i == null && this.v2i != null && this.vf != null) ||
(this.m1 != null && this.m2 != null && this.v1i != null && this.v2i == null && this.vf != null) ||
(this.m1 != null && this.m2 != null && this.v1i != null && this.v2i != null && this.vf == null)*/

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