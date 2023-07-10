module.exports = class BasePage {
    open(path) {
        return browser.url('https://kasirdemo.belajarqa.com')
    }
}
