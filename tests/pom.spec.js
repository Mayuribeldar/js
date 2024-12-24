const {test,expect}  = require("@playwright/test")

import {LoginPage} from "../tests-examples/POM_FOLDER/LoginPage"
import{Collection} from "../tests-examples/POM_FOLDER/Collction"

test("to check Page Object Model of playwright",async({page})=>{
    const login = new LoginPage(page)
     
     await login.GotoHomePage()
     await login.Login("mbeldar@newageproducts.com","MAYURIbeldar")
     await login.GotoHomePage1()
     await page.waitForTimeout(3000)
     await page.pause()

     const Collction = new Collection(page)

     await Collction.add_product_to_cart('Rhodes 4 Seater Chat Set')

     await page.pause()
    const status =  await  Collction.cart("Rhodes 4 Seater Chat Set")
     await expect (status).toBe(true)

     await page.pause()

    })








