// Classes
class InelasticCollision {
    constructor(m1, m2, v1i, v2i, vf) {
        // leave as string for empty detection
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
            this.m1 = this.m2 * (this.vf - this.v2i) / (this.v1i - this.vf);
            document.getElementById("i-m1").value = this.m1;
        }
        else if (empty == "m2") {
            this.m2 = this.m1 * (this.vf - this.v1i) / (this.v2i - this.vf);
            document.getElementById("i-m2").value = this.m2;
        }
        else if (empty == "v1i") {
            this.v1i = (this.m1 * this.vf + this.m2 * this.vf - this.m2 * this.v2i) / this.m1;
            document.getElementById("i-v1i").value = this.v1i;
        }
        else if (empty == "v2i") {
            this.v2i = (this.m1 * this.vf + this.m2 * this.vf - this.m1 * this.v1i) / this.m2;
            document.getElementById("i-v2i").value = this.v2i;
        }
        else if (empty == "vf") {
            this.vf = (this.m1 * this.v1i + this.m2 * this.v2i) / (this.m1 + this.m2);
            document.getElementById("i-vf").value = this.vf;
        }
        else {
            alert("Please leave one box empty.");
        }
    }
}

class ElasticCollision {
    constructor(m1, m2, v1i, v2i, v1f, v2f) {
        // leave as string for empty detection
        this.m1 = m1;
        this.m2 = m2;
        this.v1i = v1i;
        this.v2i = v2i;
        this.v1f = v1f;
        this.v2f = v2f;
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
        if (this.v1f == "") {
            empty.push("v1f");
        }
        if (this.v2f == "") {
            empty.push("v2f");
        }
        return empty;
    }

    calculate() {
        const empty = this.findEmpty();

        // convert to number for calculations
        this.m1 = Number(this.m1);
        this.m2 = Number(this.m2);
        this.v1i = Number(this.v1i);
        this.v2i = Number(this.v2i);
        this.v1f = Number(this.v1f);
        this.v2f = Number(this.v2f);

        // error cases
        if (this.v1i <= this.v2i && this.v1i != 0) {
            alert("v1i must be greater than v2i.");
        }

        // conditional calculations
        else if (empty.includes("v1f") && empty.includes("v2f")) {
            this.v1f = (this.m1 - this.m2) / (this.m1 + this.m2) * this.v1i + (2 * this.m2) / (this.m1 + this.m2) * this.v2i;
            this.v2f = (2 * this.m1) / (this.m1 + this.m2) * this.v1i + (this.m2 - this.m1) / (this.m1 + this.m2) * this.v2i;
            document.getElementById("e-v1f").value = this.v1f;
            document.getElementById("e-v2f").value = this.v2f;
        }
        else if (empty.includes("v1i") && empty.includes("v2i")) {
            this.v1i = (this.m1 - this.m2) / (this.m1 + this.m2) * this.v1f + (2 * this.m2) / (this.m1 + this.m2) * this.v2f;
            this.v2i = (2 * this.m1) / (this.m1 + this.m2) * this.v1f + (this.m2 - this.m1) / (this.m1 + this.m2) * this.v2f;
            document.getElementById("e-v1i").value = this.v1i;
            document.getElementById("e-v2i").value = this.v2i;
        }
        else if (empty.includes("m1")) {
            this.m1 = (this.m2 * (this.v1i - this.v2i)) / (this.v1f - this.v2f);
            document.getElementById("e-m1").value = this.m1;
        }
        else if (empty.includes("m2")) {
            this.m2 = (this.m1 * (this.v2i - this.v1i)) / (this.v2f - this.v1f);
            document.getElementById("e-m2").value = this.m2;
        }
        else if (empty.includes("v1i")) {
            this.v1i = (this.m1 * this.v1f + this.m2 * this.v2f - this.m2 * this.v2i) / this.m1;
            document.getElementById("e-v1i").value = this.v1i;
        }
        else if (empty.includes("v2i")) {
            this.v2i = (this.m1 * this.v1f + this.m2 * this.v2f - this.m1 * this.v1i) / this.m2;
            document.getElementById("e-v2i").value = this.v2i;
        }
        else if (empty.includes("v1f")) {
            this.v1f = (this.m1 * this.v1i + this.m2 * this.v2i - this.m2 * this.v2f) / this.m1;
            document.getElementById("e-v1f").value = this.v1f;
        }
        else if (empty.includes("v2f")) {
            this.v2f = (this.m1 * this.v1i + this.m2 * this.v2i - this.m1 * this.v1f) / this.m2;
            document.getElementById("e-v2f").value = this.v2f;
        }
        else {
            alert("Please leave one or two boxes empty.");
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

function calculateEC() {
    // set current variables
    let elasticCollision = new ElasticCollision(
        document.getElementById("e-m1").value,
        document.getElementById("e-m2").value,
        document.getElementById("e-v1i").value,
        document.getElementById("e-v2i").value,
        document.getElementById("e-v1f").value,
        document.getElementById("e-v2f").value
    );
    elasticCollision.calculate();
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

// Elastic Collision
document
    .querySelector("#calculate-ec")
    .addEventListener('click', calculateEC);

/*
Date
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = y + "-" + m + "-" + d;
*/