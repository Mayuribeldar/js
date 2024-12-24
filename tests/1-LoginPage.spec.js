const {test,expect}  = require("@playwright/test")

test("to check login Page Functionality and to do end to end testing",async({page})=>{

    await page.goto(" https://demoqa.com/menu")
  
 await page.getByText('Main Item 2').hover()
 await page.pause()
await page.goto("https://shopnewage.com/account/login")

await page.locator('input[id="customer-email"]').fill("mbeldar@newageproducts.com")

await page.locator("#customer-password").fill("MAYURIbeldar")

await page.pause()
//await page.locator('.row > .column.small-12 > .button.button--button').nth(1).click()

await expect(page).toHaveURL("https://shopnewage.com/account/login")

await page.pause()
await expect(page).toHaveTitle("Account - NewAge Products")
await page.pause()
await expect(page.locator('input[id="customer-email"]')).toBeVisible()
await page.pause()

await username.screenshot({path: "submit.png"})

await expect(page.locator('.full-width').nth(1)).toHaveClass('full-width')

await page.pause()
await expect(page.locator('input[id="customer-email"]')).toHaveCount(1)

await page.pause()
await expect(page.locator('input[id="customer-email"]')).toBeEnabled()
await page.pause()
})


