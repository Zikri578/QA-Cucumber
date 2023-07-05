module.exports = class BasePage {
    open (path) {
        browser.url(path);
    }
}

