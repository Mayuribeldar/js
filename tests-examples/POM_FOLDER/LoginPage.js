exports.LoginPage = 
class LoginPage {
constructor(page){
this.page = page;
this.my_account = ".a--reset.footer__link.fs-18.ff-pr.light-grey"
this.username = "#customer-email";
this.password = "#customer-password";
this.submit =  ".row > .column.small-12 > .button.button--button"
this.feature_item = ".hover_oofers"
}

async GotoHomePage() 
{
await this.page.goto("https://shopnewage.com/")
}

async Login(username,password)
{
await this.page.locator(this.my_account).nth(10).click()
await this.page.pause()
await this.page.locator(this.username).fill(username)
await this.page.locator(this.password).fill(password)
await this.page.pause()

//await this.page.locator(this.submit).nth(2).click()
 
await this.page.pause()
}
async GotoHomePage1() 
{
await this.page.goto("https://shopnewage.com/")
await this.page.pause()
await this.page.locator(this.feature_item).nth(2).click()
await this.page.pause()

}}
 