TRs = [];
alphabet = "abcdefgh";
figures = ["rook", "horse", "bishop", "queen", "king"];
figures = figures.concat(figures.slice(0, 3).reverse());


for(tr = 10; tr >= 1; tr--) {       //сделали такую запись, чтобы цифры на поле отбражались в обратном порядке 
    color = tr > 4 ? "black" : "white";
    TDs = [];

    for(td = 1; td<= 10; td++) {
        data = "";
        if ((tr === 1 || tr === 10) && td !== 1 && td !== 10) {
             data = alphabet[td - 2];
         }
         if ((td === 1 || td === 10) && tr !==1 && tr !==10) {
            data = tr - 1;
         }
         if ((tr === 3 || tr  === 8) && td !==1 && td !==10) {
            data = `<img src="images/chess/${color}/pawn.svg">`
         }
         if ((tr === 2 || tr === 9) && td !== 1 && td !== 10) {
            data = `<img src="images/chess/${color}/${figures[td - 2]}.svg">`
        }

        TDs.push(`<td>${data}</td>`)
    }
    TRs.push(`<tr>${TDs.join("")}</tr>`)
}

document.write(`<table class="chess">${TRs.join("")}</table>`);

