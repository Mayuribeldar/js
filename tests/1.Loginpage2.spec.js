const {test,expect} = require("@playwright/test")

test("to check SFCC Loginpage",async({page})=>{
try 
 {
    await  page.goto('https://shopnewage.com/account/login');
    
    
 

await page.locator('input[id="customer-email"]').fill("mbeldar@newageproducts.com")
await page.locator("#customer-password").fill("MAYURIbeldar")
await page.locator("#customer-password").fill("MAYURIbeldar")

await page.locator('input[value="Sign In"]').click()


// Starts navigation but does not wait for it to complete
    console.log("Navigation done");   
 }
    catch(error){

console.error("error detected:", error.message)
    }

    finally {
        
        console.log('Test completed, browser closed.');
    }
})  
 
 



 