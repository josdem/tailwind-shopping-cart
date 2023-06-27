const main = require("../build/js/counter.js")

const MAX_VALUE = "10"
const MIN_VALUE = "0"

describe("validate maximum item increment", () => {
  document.body.innerHTML = `
      <!DOCTYPE html>        
        <input id="sku100" type="number" value="0"/>
        <button id="sku100p">+</button>
        <button id="sku100m">-</button>
  `
  const input = document.querySelector("#sku100")

  test("should increment sku to the max value", () => {
    const button = document.querySelector("#sku100p")
    button.addEventListener("click", () => {
      main.incrementValue("sku100p")
    })

    Array.from(Array(20).keys()).forEach(() => {
      button.click()
    })

    expect(input.value).toBe(MAX_VALUE)
  })

  test("should decrement sku counter to the minimum", () => {
    const button = document.querySelector("#sku100m")
    button.addEventListener("click", () => {
      main.decrementValue("sku100m")
    })
    
    Array.from(Array(20).keys()).forEach(() => {
      button.click()
    })

    expect(input.value).toBe(MIN_VALUE)
  })
})
