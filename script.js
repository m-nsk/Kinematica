// Classes
class InelasticCollision {
    constructor(m1, m2, v1i, v2i, vf) {
        // Leave as string for empty detection
        this.m1 = m1;
        this.m2 = m2;
        this.v1i = v1i;
        this.v2i = v2i;
        this.vf = vf;
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
        if (empty.length != 1) {
            return 0;
        }
        return empty[0];
    }

    calculate() {
        const empty = this.findEmpty();
        
        // convert to number for calculations
        this.m1 = Number(this.m1);
        this.m2 = Number(this.m2);
        this.v1i = Number(this.v1i);
        this.v2i = Number(this.v2i);
        this.vf = Number(this.vf);

        // conditional calculations
        if (empty == "m1") {
            // m1v1i + m2v2i = m1vf + m2vf
            // m1v1i - m1vf = m2vf - m2v2i
            // m1 = m2(vf - v2i) / (v1i - vf)
            this.m1 = this.m2 * (this.vf - this.v2i) / (this.v1i - this.vf);
            document.getElementById("i-m1").value = this.m1;
        } else if (empty == "m2") {
            // m1v1i + m2v2i = m1vf + m2vf
            // m2v2i - m2vf = m1vf - m1v1i
            // m2 = m1(vf - v1i) / (v2i - vf)
            this.m2 = this.m1 * (this.vf - this.v1i) / (this.v2i - this.vf);
            document.getElementById("i-m2").value = this.m2;
        } else if (empty == "v1i") {
            // m1v1i + m2v2i = m1vf + m2vf
            // m1v1i = m1vf + m2vf - m2v2i
            // v1i = (m1vf + m2vf - m2v2i) / m1
            this.v1i = (this.m1 * this.vf + this.m2 * this.vf - this.m2 * this.v2i) / this.m1;
            document.getElementById("i-v1i").value = this.v1i;
        } else if (empty == "v2i") {
            // m1v1i + m2v2i = m1vf + m2vf
            // m2v2i = m1vf + m2vf - m1v1i
            // v2i = (m1vf + m2vf - m1v1i) / m2
            this.v2i = (this.m1 * this.vf + this.m2 * this.vf - this.m1 * this.v1i) / this.m2;
            document.getElementById("i-v2i").value = this.v2i;
        } else if (empty == "vf") {
            // m1v1i + m2v2i = (m1 + m2)vf
            // vf = (m1v1i + m2v2i) / (m1 + m2)
            this.vf = (this.m1 * this.v1i + this.m2 * this.v2i) / (this.m1 + this.m2);
            document.getElementById("i-vf").value = this.vf;
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
    // alert(inelasticCollision.m1 + " " + inelasticCollision.m2 + " " + inelasticCollision.v1i + " " + inelasticCollision.v2i + " " + inelasticCollision.vf);
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