function calcularPrecioConDescuento (precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;


    return precioConDescuento;
}

console.log(calcularPrecioConDescuento(300, 30));

function priceDiscountClick(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioCondescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento es: $" + precioCondescuento;
}