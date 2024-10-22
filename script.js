function calculateTotal() {
    const menuItems = document.querySelectorAll('input[name="menu"]:checked');
    let total = 0;

    menuItems.forEach((item) => {
        total += parseInt(item.value);
    });

    document.getElementById('total-price').textContent = `$${total}`;
}
