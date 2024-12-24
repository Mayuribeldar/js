exports.Collection =
class Collection
 
{
constructor(page){
    this.page = page;
    this.productlist =  ".product-title"
    this.add_to_cart = ".column.small-12.add-to-cart_main.ff-pr"
    this.zipcode = ".addReplaceZipcode"
    this.product12 = ".product_title"
}
   async add_product_to_cart(Productname){
   const Product_List =  await this.page.$$(this.productlist)
    console.log(Product_List)
    for(const keys of Product_List)
    {  
    if(Productname  === await keys.textContent())
        {
     await keys.click()
    await this.page.locator(".regional_input").nth(2).fill("33133")
    await this.page.pause()
    await this.page.locator(".button.regionButton.ff-pl").nth(2).click()
    await this.page.locator(this.add_to_cart).click()
    await this.page.pause()
    await this.page.locator(".button.button--14.button--checkout.pro_to_check").click()
}
    }
}
async cart(product){
    const list = await this.page.$$(this.product12)
    for (keys of list)
    {
    if(product === await list.textContent())
    {
    return true
    }
   await this.page.locator(this.zipcode).nth(2).click()
   await this.page.pause()
    }
    }
}