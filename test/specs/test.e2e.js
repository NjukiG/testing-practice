const { expect, browser, $ } = require("@wdio/globals");

describe("My birthday reminders app", () => {
  it("should look correctly", async () => {
    await browser.url(``);
    await browser.execute("/*@visual.init*/", "Birthday Reminder App");
    await browser.execute("/*@visual.snapshot*/", "Default State");

    await $('[data-testid="clear"]').click();
    await browser.execute("/*@visual.snapshot*/", "Clear State");

    const result = await browser.execute("/*@visual.end*/");
    expect(result.message).toBeNull();
  });
});

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await browser.url(`https://the-internet.herokuapp.com/login`)

//         await $('#username').setValue('tomsmith')
//         await $('#password').setValue('SuperSecretPassword!')
//         await $('button[type="submit"]').click()

//         await expect($('#flash')).toBeExisting()
//         await expect($('#flash')).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })
