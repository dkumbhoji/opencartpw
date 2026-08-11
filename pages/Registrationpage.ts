import { Page, expect, Locator } from '@playwright/test';

export class Registrationpage{

    // locators
     private readonly page: Page;
     private readonly txtFirstname: Locator;
     private readonly txtLastname: Locator;
     private readonly txtEmail: Locator;
     private readonly txtTelephone: Locator;
     private readonly txtPassword: Locator;
     private readonly txtConfirmPassword: Locator;
     private readonly SubscribeRadio: Locator;
     private readonly ChkPolicy: Locator;
     private readonly btnContinue: Locator;
     private readonly MsgConfirmation: Locator;

    // constructor
    constructor(page:Page)
    {
       
        this.page=page;
        this.txtFirstname=page.locator('#input-firstname');
        this.txtLastname= page.locator('#input-lastname');
        this.txtEmail= page.locator('#input-email');
        this.txtTelephone= page.locator('#input-telephone');
        this.txtPassword=page.locator('#input-password');
        this.txtConfirmPassword=page.locator('#input-confirm');
        this.SubscribeRadio= page.locator('input[name="newsletter"][value="1"]');
        this.ChkPolicy= page.locator('input[name="agree"]');
        this.btnContinue= page.locator('input[value="Continue"]');
        this.MsgConfirmation= page.locator('h1:has-text("Your Account Has Been Created!")');
    }
    // action methods

    async setFirstName(fname: string): Promise<void>
    {
   await this.txtFirstname.fill(fname);
    }

async setLastName(lname: string): Promise<void>
    {
   await this.txtLastname.fill(lname);
    }

async setEmail(email: string): Promise<void>
    {
   await this.txtEmail.fill(email);
    }

    async settele(tel: string): Promise<void>
    {
   await this.txtTelephone.fill(tel);
    }

async setpwd(pwd: string): Promise<void>
    {
   await this.txtPassword.fill(pwd);
    }
async setCpwd(cpwd: string): Promise<void>
    {
   await this.txtConfirmPassword.fill(cpwd);
    }
async setradiobtn(): Promise<void>
    {
   await this.SubscribeRadio.check();
    }
async setcheck(): Promise<void>
    {
   await this.ChkPolicy.check();
    }
async clickcontinue(): Promise<void>
    {
   await this.btnContinue.click();
    }

async getConfirmationMsg(): Promise<string> {
        return await this.MsgConfirmation.textContent() ?? '';
}

/* // click my account link
async Completeregistration(userData: {

    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    password:string;


}): Promise<void> {

    await this.setFirstName(userData.firstName);
    await this.setLastName(userData.lastName);
    await this.setEmail(userData.firstName);
    await this.settele(userData.firstName);
    await this.setpwd(userData.firstName);
    await this.setCpwd(userData.firstName);
    await this.SubscribeRadio();
    await this.ChkPolicy();
    await this.btnContinue();
    await expect(this.MsgConfirmation).toBeVisible();
        }
    } */
}