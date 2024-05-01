function inputValue(id) {
    let item_01 = document.getElementById(id)
    return Number(item_01.value)
}

document.getElementById('btn').addEventListener('click', () => {

    let item_01 = inputValue('item-1')
    let item_02 = inputValue('item-2')
    let item_03 = inputValue('item-3')
    let item_04 = inputValue('item-4')
    let taxValue = inputValue('tax')

    let totalPrice = item_01 + item_02 + item_03 + item_04;
    let totalCost = totalPrice + taxValue;

    document.getElementById('total_price').innerHTML = `<h2>Total Price: ${totalPrice}</h2>`
    document.getElementById('total_cost').innerHTML = `<h2>Total Cost: ${totalCost}</h2>`
})