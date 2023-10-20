function setDefaultBook(bookName) {
    const book = document.getElementById('book');
    book.textContent = bookName;
}

function placeOrder() {
    const book = document.getElementById('book').textContent;            
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;
    const comment = document.getElementById('comment').value;

    const orderConfirmation = document.getElementById('orderConfirmation');
    orderConfirmation.style.display = 'block';
    const outText = document.getElementById('outText');
    outText.innerHTML = `${name}, дякуємо за замовлення!<br><br> "${book}" буде доставлено ${quantity} екземпляр(ів) ${deliveryDate} за адресою: ${deliveryAddress}. Коментар: ${comment}`;
}
