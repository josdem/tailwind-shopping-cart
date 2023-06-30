const client = require("../build/client/product.client.js")

test("should get a specific product", async () => {
  const product = await client.getProduct(100)
  expect(product).toEqual({ sku: "100", name: "Nike Air Max", price: 1259 })
})
