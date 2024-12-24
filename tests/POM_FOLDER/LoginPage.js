 exports.LoginPage =
class LoginPage{
constructor(page)
{
 this.page = page
 this.my_account = ".a--reset.footer__link.fs-18.ff-pr.light-grey"
 this.username = "#customer-email";
 this.password = "#customer-password";
}

   async Myaccount(username,password){
        await this.page.goto("https://shopnewage.com/")
        await this.page.locator(this.my_account).nth(10).click()
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(username)
        await this.page.pause()
    }

}

await 