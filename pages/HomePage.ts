import { Page, expect, Locator } from '@playwright/test';

export class Homepage{

    // locators
     private readonly page: Page;
     private readonly lnkMyAccount: Locator;
     private readonly lnkRegister: Locator;
     private readonly lnkLogin: Locator;
     private readonly txtSearchbox: Locator;
     private readonly btnSearch: Locator;
     
    // constructor
    constructor(page:Page)
    {
        this.page=page;
        this.lnkMyAccount=page.locator('span:has-text("My Account")');
        this.lnkRegister= page.locator('a:has-text("Register")');
        this.lnkLogin= page.locator('a:has-text("Login")');
        this.txtSearchbox=page.locator("input[placeholder='Search']");
        this.btnSearch=page.locator('button.btn.btn-default.btn-lg:visible');
    }
    // action methods

    async isHomePageExists(){
        let title:string= await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }
// click my account link
async ClickMyAccount(){
        try{
            await this.lnkMyAccount.click();
        }
        catch(error)
        {
            console.log(`Exception occured while clicking 'my account': ${error}`);
            throw error;
        }
    }

    async ClickRegister(){
        try{
            await this.lnkRegister.click();
        }
        catch(error)
        {
            console.log(`Exception occured while clicking 'register': ${error}`);
            throw error;
        }
    }

    async ClickLogin(){
        try{
            await this.lnkLogin.click();
        }
        catch(error)
        {
            console.log(`Exception occured while clicking 'Login': ${error}`);
            throw error;
        }
    }


    async Enterproductname(pname: string)
    {
        try{
            await this.txtSearchbox.fill(pname);
        }
        catch(error)
        {
            console.log(`Exception occured while entering product name: ${error}`);
            throw error;
        }
    }
   
    async ClickSearch(){
        try{
            await this.btnSearch.click();
        }
        catch(error)
        {
            console.log(`Exception occured while clicking 'Search': ${error}`);
            throw error;
        }
    }
}