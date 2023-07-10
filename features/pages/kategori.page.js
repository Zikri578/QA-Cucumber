import BasePage from "./base.page";
class KategoriPage extends BasePage {

    get ButtonTambahKategori() {
        return $('a[href="/categories/create"]');
    }

    get NamaTextFieldKategori() {
        return $('#nama');
    }

    get DeskripsiTextFieldKategori() {
        return $('#deskripsi');
    }

    get ButtonSimpanKategori() {
        return $('button[type="button"]');
    }

    get SuksesMessageKategori() {
        return $('//*[contains(text(),"simpan")]');
    }

    get ErrorMessageKategori() {
        return $('div[role="alert"]');
    }

}

export default new KategoriPage();
