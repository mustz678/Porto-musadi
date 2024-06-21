const nama = "musadi";
let usia =18;

let biodata = document.getElementById('biodata');

function generatedata() {
    let generasi;

     if (usia >= 8 && usia < 18) {
        generasi = "generasi remaja";
    }
    else if (usia >= 18 && usia < 30) {
        generasi = "generasi dewasa";
    }
    else if (usia >= 30) {
        generasi = "generasi lansia"
    }
    else if (usia < 8 && usia > 2) {
        generasi = "generasi anak anak"
    }
    else {
        generasi = "generasi balita"
    }
    return biodata.innerHTML = generasi;

}

console.log(nama);
console.log(usia);

generatedata();