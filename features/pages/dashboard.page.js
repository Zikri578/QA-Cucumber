import BasePage from "./base.page";

class DashboardPage extends BasePage {

    get TitleDashboard() {
        return $('//h3[contains(text(),"kasirAja")]');
    }

    get MenuKategori() {
        return $('a[href="/categories"]');
    }

    get MenuPelanggan() {
        return $('a[href="/customers"]');
    }

}

export default new DashboardPage();
