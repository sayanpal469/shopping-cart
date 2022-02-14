function updateProductNumber(product, isIncreasing, price) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if(productNumber > 0) {
        productNumber = parseInt(productNumber) - 1
    }
    productInput.value = productNumber

    // update product quantity
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price


    // update total bill
    calculateTotal();
    
}


function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    // update total
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total').innerText = total;
}