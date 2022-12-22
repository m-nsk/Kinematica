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

    // find empty box
    findEmpty() {
        if (this.m1 == 0) {
            return "m1";
        } else if (this.m2 == 0) {
            return "m2";
        } else if (this.v1i == 0) {
            return "v1i";
        } else if (this.v2i == 0) {
            return "v2i";
        } else if (this.vf == 0) {
            return "vf";
        } else {
            return "none";
        }
    }

    calculate(empty) {
        if (empty == "m1") {
            // m1v1i + m2v2i = m1vf + m2vf
            // m1v1i - m1vf = m2vf - m2v2i
            // m1 = m2(vf - v2i) / (v1i - vf)
            this.m1 = this.m2 * (this.vf - this.v2i) / (this.v1i - this.vf);
            document.getElementById("i-m1").value = this.m1;
        }
    }

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

// Inelastic Collision
document
    .querySelector("#calculate-ic")
    .addEventListener('click', () => {
        // // set current variables
        // const inelasticCollision = new InelasticCollision(
        //     document.getElementById("i-m1").value,
        //     document.getElementById("i-m2").value,
        //     document.getElementById("i-v1i").value,
        //     document.getElementById("i-v2i").value,
        //     document.getElementById("i-vf").value
        // );
        // // calculate with current variables
        // inelasticCollision.calculate(inelasticCollision.findEmpty());
        alert("Bruh")
    });


function calculateIC()  {
    let inelasticCollision = new InelasticCollision(
        document.getElementById("i-m1").value,
        document.getElementById("i-m2").value,
        document.getElementById("i-v1i").value,
        document.getElementById("i-v2i").value,
        document.getElementById("i-vf").value
    );
    // calculate with current variables
    inelasticCollision.calculate(inelasticCollision.findEmpty());
    console.log("Bruh")
}
/*
Date
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = y + "-" + m + "-" + d;
*/