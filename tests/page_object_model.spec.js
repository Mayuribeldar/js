const {test,expect} = require("@playwright/test")

import { LoginPage} from "../tests/POM_FOLDER/LoginPage"

const {data} = require("../tests/data.json" ) 

data.forEach(element => {
    
    test(`to test Page Object Model ${element.username}`,async({page})=> {

        const login = new LoginPage(page)
        
        await login.Myaccount(element.username,element.password)
        
        await page.pause()
        
        })
});
