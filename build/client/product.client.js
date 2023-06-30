const fetch = require("node-fetch")
const properties = require("../properties/test.properties")

const getProduct = async (id) => {
  return await fetch(`${properties.productsUrl}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      return json
    })
    .catch((error) => console.error(error))
}

module.exports = {
  getProduct,
}
