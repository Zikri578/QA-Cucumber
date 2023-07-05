const BasePage = require('./base.page.js')

class KategoriPage extends BasePage {

    get KategoriElement() {
        return $('a[href="/categories"]');
    }

    get TambahKategoriElement() {
        return $('a[href="/categories/create"]');
    }

    get NamaKategori() {
        return $('#nama');
    }

    get DeskripsiKategori() {
        return $('#deskripsi');
    }

    get ButtonSimpan() {
        return $('button[type="button"]');
    }

    get SuksesMessage() {
        return $('div[role="alert"]');
    }

    get ErrorMessage() {
        return $('div[role="alert"');
    }

    open() {
        return super.open("https://kasirdemo.belajarqa.com/")
    }
}

module.exports = new KategoriPage();