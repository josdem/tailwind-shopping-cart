const main = require("../build/js/counter.js")

describe("validate item increment and decrement", () => {
  document.body.innerHTML = `
      <!DOCTYPE html>        
        <input id="sku100" type="number" value="0"/>
        <button id="sku100p">+</button>
        <button id="sku100m">-</button>
  `
  const input = document.querySelector("#sku100")

  test("should increment sku counter", () => {
    const button = document.querySelector("#sku100p")
    button.addEventListener("click", () => {
      main.incrementValue("sku100p")
    })
    button.click()

    expect(input.value).toBe("1")
  })

  test("should increment sku counter", () => {
    const button = document.querySelector("#sku100m")
    button.addEventListener("click", () => {
      main.decrementValue("sku100m")
    })
    button.click()

    expect(input.value).toBe("0")
  })
})
