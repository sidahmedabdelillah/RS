var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

R1 = document.getElementById("R1");
S1 = document.getElementById("S1");
R0 = document.getElementById("R0");
S0 = document.getElementById("S0");
Q1 = document.getElementById("Q");




var Rtab = [];
var Stab = [];
var Q = [];

Q1.addEventListener('click', () => {
    if (Rtab.length > Stab.length) I = Stab.length;
    else I = Rtab.length;
    Nor(Rtab, Stab, I);


    ctx.fillStyle = "#000";
    draw(Q, 80);
});

S0.addEventListener("click", () => {
    ctx.fillStyle = "#00FF00";
    Stab.push(0);
    draw(Stab, 50);
});

R0.addEventListener("click", () => {
    ctx.fillStyle = "#FF0000";
    Rtab.push(0);
    draw(Rtab, 20);
});
S1.addEventListener("click", () => {
    ctx.fillStyle = "#00FF00";
    Stab.push(1);
    draw(Stab, 50);
});

R1.addEventListener("click", () => {
    ctx.fillStyle = "#FF0000";
    Rtab.push(1);
    draw(Rtab, 20)
});

ctx.fillStyle = "#FF0000";
draw(Rtab, 20);

ctx.fillStyle = "#00FF00";
draw(Stab, 50);




function Nor(R, S, I) {
    for (var i = 0; i < I; i++) {
        if (R[i] == 1 && S[i] == 0) {
            Q.push(0);
            console.log(`R ${R[i]}  S${S[i]}  Q${Q[i]} i ${i} `)
        } else if (R[i] == 0 && S[i] == 1) {
            Q.push(1);
        } else if (R[i] == 0 && S[i] == 0) {
            if (i == 0) {
                Q.push(1);
            } else {
                Q.push(Q[i - 1]);
            }
        } else if (R[i] == 1 && S[i] == 1) {
            Q.push(0);
        }
    }

    return Q;
}

function draw(tab, y) {
    for (var i = 0; i < tab.length; i++) {
        var h;
        if (tab[i] == 1) {
            h = 10;
        } else {
            h = 0;
        }
        ctx.fillRect(i * 10, y - h, 10, 1);
    }
}