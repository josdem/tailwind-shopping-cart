const client = require("../build/client/product.client.js")

test("should get all products", async () => {
  await client.products()
})
