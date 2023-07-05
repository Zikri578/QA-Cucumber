const BasePage = require('./base.page.js')
class DashboardPage extends BasePage {

    get DashboardElement() {
        return $('a[href="/dashboard"]');
    }

    open() {
        return super.open("https://kasirdemo.belajarqa.com/")
    }

}

module.exports = new DashboardPage();