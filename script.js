class PHANSO{
    constructor(tuSo, mauSo){
        this.tuSo = tuSo;
        this.mauSo = mauSo;
    }
}

const phanSo = new PHANSO (2,4);
document.getElementById("demo").innerHTML = phanSo.tuSo + "/" + phanSo.mauSo;