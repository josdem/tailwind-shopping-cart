const jsdom = require("jsdom")
const main = require('../main.js')

test('should increment sku counter', () => {
    
    //TODO dom and document should be the same thing
    const dom = new jsdom.JSDOM(`
      <!DOCTYPE html>        
        <input id="sku100" type="number" value="0"/>
        <button id="sku100p">+</button>
    `)
    
    dom.window.document.querySelector('#sku100p').addEventListener('click', main.incrementValue('sku100p'))
    

    const input = dom.window.document.querySelector('#sku100')
    expect(input.value).toBe(1)
})