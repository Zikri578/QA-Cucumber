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

const BasePage = require('./base.page')
class LoginPage extends BasePage {

    get EmailTextField() {
        return $('#email');
    }

    get PasswordTextField() {
        return $('#password');
    }

    get ButtonLogin() {
        return $('button[type="submit"]')
    }

    get TitleProduk() {
        return $('div[class="css-104g6p0"] h2');
    }

    get ErrorMessage() {
        return $('div[role="alert"]');
    }

    open() {
        return super.open("https://kasirdemo.belajarqa.com/")
    }
}

module.exports = new LoginPage();