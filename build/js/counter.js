const incrementValue = (id) => {
  let sku = document.getElementById(id.slice(0, -1))
  if (sku.value < 10) {
    sku.value = parseInt(sku.value) + 1
  }
}

const decrementValue = (id) => {
  let sku = document.getElementById(id.slice(0, -1))
  if (sku.value > 0) {
    sku.value = parseInt(sku.value) - 1
  }
}

module.exports = {
  incrementValue,
  decrementValue,
}
