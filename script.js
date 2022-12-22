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
        // find empty box; return alert if more than one empty box
        let empty = [];
        if (this.m1 == "") {
            empty.push("m1");
        }
        if (this.m2 == "") {
            empty.push("m2");
        }
        if (this.v1i == "") {
            empty.push("v1i");
        }
        if (this.v2i == "") {
            empty.push("v2i");
        }
        if (this.vf == "") {
            empty.push("vf");
        }
        if (empty.length == 0) {
            alert("Please leave one box empty.");
            return false;
        }
        if (empty.length > 1) {
            return "error"
        }
        return empty[0];

    }

    calculate() {
        const empty = this.findEmpty();
        if (empty == "m1") {
            // m1v1i + m2v2i = m1vf + m2vf
            // m1v1i - m1vf = m2vf - m2v2i
            // m1 = m2(vf - v2i) / (v1i - vf)
            this.m1 = this.m2 * (this.vf - this.v2i) / (this.v1i - this.vf);
            document.getElementById("i-m1").value = this.m1;
        } else if (empty == "m2") {
            
        } else if (empty == "v1i") {

        } else if (empty == "v2i") {

        } else if (empty == "vf") {

        } else {
            alert("Please leave one box empty.");
        }
    }

}

function calculateIC() {
    // set current variables
    let inelasticCollision = new InelasticCollision(
        document.getElementById("i-m1").value,
        document.getElementById("i-m2").value,
        document.getElementById("i-v1i").value,
        document.getElementById("i-v2i").value,
        document.getElementById("i-vf").value
    );
    inelasticCollision.calculate();
}

// Dark mode toggle
document
    .querySelector("#dark-mode-toggle")
    .addEventListener('click', () => {
        document.body.classList.toggle("latex-dark");
    });

// Inelastic Collision
document
    .querySelector("#calculate-ic")
    .addEventListener('click', calculateIC);

/*
Date
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = y + "-" + m + "-" + d;
*/