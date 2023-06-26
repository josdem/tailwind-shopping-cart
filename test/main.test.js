const main = require("../build/js/main.js") 

test("should increment sku counter", () => {
  document.body.innerHTML = `
      <!DOCTYPE html>        
        <input id="sku100" type="number" value="0"/>
        <button id="sku100p">+</button>
  `
  const input = document.querySelector("#sku100")
  const button = document.querySelector("#sku100p")
  button.addEventListener("click", () => {
    main.incrementValue("sku100p")
  })
  button.click()

  expect(input.value).toBe("1")
})
