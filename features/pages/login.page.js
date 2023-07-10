// const BasePage = require('./base.page')

// class LoginPage extends BasePage {

//     get userNameTextBox() { return $('input[id="username"]') }
//     get passwordTextBox() { return $('input[id="password"]') }
//     get loginButton() { return $('button[type="submit"]') }

//     get loginPageElement() { return $('div[class="example"] h2') }
//     get messageElement() { return $('#flash') }

//     open() {
//         super.open('https://the-internet.herokuapp.com/login')
//     }
// }

// module.exports = new LoginPage();

import BasePage from "./base.page";
class LoginPage extends BasePage {

    get EmailTextFieldLogin() {
        return $('#email');
    }

    get PasswordTextFieldLogin() {
        return $('#password');
    }

    get ButtonLogin() {
        return $('button[type="submit"]')
    }

    get TitleProdukLogin() {
        return $('div[class="css-104g6p0"] h2');
    }

    get ErrorMessageLogin() {
        return $('div[role="alert"]');
    }

    open() {
        return super.open("https://kasirdemo.belajarqa.com/login")
    }

    async validLogin(email, password) {
        await this.open()
        await this.EmailTextField.setvalue(email)
        await this.PasswordTextField.setvalue(password)
        await this.ButtonLogin.click()
    }

}

export default new LoginPage();
