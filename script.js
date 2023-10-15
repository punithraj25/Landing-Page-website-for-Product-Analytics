document.getElementById('btnProduct').onclick = function() {
    calcCost();
};


function calcCost () {
    let sP = document.getElementById('selectProduct').value;
    let qP = document.getElementById('quantityProduct').value;
    let total = sP * qP * 5350;
    document.getElementById('priceProduct').innerHTML = total;
    document.getElementById('infoProduct').style.display = 'block';

    if (sP == 0 || qP == 0) {
        document.getElementById('infoProduct').style.display = 'none';
        alert('Please, enter details');
        return;
    }

}
