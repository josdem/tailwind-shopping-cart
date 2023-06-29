const fetch = require("node-fetch")
const properties = require("../properties/test.properties")

const products = async () => {
  await fetch(properties.productsUrl)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    })
    .catch((error) => console.error(error))
}

module.exports.products = products
