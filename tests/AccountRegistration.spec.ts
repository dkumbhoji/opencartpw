import { test, expect } from '@playwright/test';

import { Homepage } from '../pages/HomePage';
import { Registrationpage } from '../pages/Registrationpage';
import { RandomDataUtil } from '../utils/RandomDataGenerator';
import { TestConfig } from '../test.config';

let homepage:Homepage;
let registration:Registrationpage;
let config:TestConfig;

test.beforeEach(async({page})=> 
    {
    config=new TestConfig();
    await page.goto(config.appUrl); //application url 
    homepage=new Homepage(page); //click on my account & register
    registration = new Registrationpage(page); 

    
})


test.afterEach(async({page})=> 
    {
    await page.waitForTimeout(3000);
 await page.close();
    })



test ('User registration test @master @sanity @regression', async()=>
{
    await homepage.ClickMyAccount();
    await homepage.ClickRegister();

    
    
   await registration.setFirstName(RandomDataUtil.getFirstName());
    await registration.setLastName(RandomDataUtil.getlastName());
    await registration.setEmail(RandomDataUtil.getEmail());
    await registration.settele(RandomDataUtil.getPhoneNumber());
    
   const password=RandomDataUtil.getPassword();
   await registration.setpwd(password);
   await registration.setCpwd(password);
   await registration.setradiobtn();
   await registration.setcheck();
   await registration.clickcontinue();


   // validate the confirmation message

    const confirmationmsg=await registration.getConfirmationMsg();
    expect(confirmationmsg).toContain('Your Account Has Been Created!');

}) 