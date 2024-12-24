const {test,expect} = require('@playwright/test')

test('Handle js simple alert with playwright',async({page})=>
{
    await page.goto('https://www.redbus.in/#backHome')
    

    page.on('dialog',async simapleAlert =>{

    await simapleAlert.accept()

})
})