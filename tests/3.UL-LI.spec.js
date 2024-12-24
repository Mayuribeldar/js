const {test,expect} = require("@playwright/test")

test("to check elements for UL and li",async({page})=>{
await page.goto("https://demoqa.com/menu")

  // Select all <li> elements inside the <ul>
 const list = await page.waitForSelector('ul li:nth-child(4)')

 await page.$('ul li:nth-child(2)')
expect(list).toBe()
  
  // Log the text content of each <li> element
  console.log(list)
  for (const item of list) 
  {
    const text = await item.textContent()
    console.log(text);
  }
await page.$('ul li:nth-child(2)')



})

