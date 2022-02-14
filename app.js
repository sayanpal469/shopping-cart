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
    
}

