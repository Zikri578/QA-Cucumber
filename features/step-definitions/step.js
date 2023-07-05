const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login.page');
const DashboardPage = require('../pages/dashboard.page');

Given('I am on the login page', () => {
    LoginPage.open();
    expect(browser).toHaveTitle('hai, kasirAja');
});

When('I input email as {string} and passwrod as {string}', (email, password) => {
    LoginPage.EmailTextField.setValue(email);
    LoginPage.PasswordTextField.setValue(password);
});

When('I click button login', () => {
    LoginPage.ButtonLogin.click();
});

Then('I must navigate to dashboard page', () => {
    expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    expect(DashboardPage.DashboardElement).toExist();
    expect(DashboardPage.DashboardElement).toHaveTextContaining('kasirAja');

});

Then('I must remain on login page displaying a message {string}', (ErrorMessage) => {
    // expect(LoginPage.TitleProduk).toExist();
    // expect(LoginPage.TitleProduk).toHaveTextContaining('hai, kasirAja');

    expect(LoginPage.ErrorMessage).toExist();
    expect(LoginPage.ErrorMessage).toHaveTextContaining(ErrorMessage);
});