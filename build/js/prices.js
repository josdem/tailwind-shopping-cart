const getPriceBySku = (sku) => {
  const element = document.getElementById(sku)
  console.log("element: " + element)
  document.getElementById(sku).innerHTML = "$1259 MXN"
}
