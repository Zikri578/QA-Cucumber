const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login.page');
const DashboardPage = require('../pages/dashboard.page');
const KategoriPage = require('../pages/kategori.page');

Given('I input login with email {string} and password {string}', async (email, password) => {
    await LoginPage.open();
    await LoginPage.EmailTextField.setValue(email);
    await LoginPage.PasswordTextField.setValue(password);
})

When('I redirect to the dashboard page', async () => {
    expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    await expect(DashboardPage.DashboardElement).toExist();
    await expect(DashboardPage.DashboardElement).toHaveTextContaining('kasirAja');
});

When('I click button Kategori', async () => {
    await KategoriPage.KategoriElement.click();
});

When('I click button tambah', async () => {
    await KategoriPage.TambahKategoriElement.click();
});

When('I input name as {string} and deskripsi {string}', async (nama, deskripsi) => {
    await KategoriPage.NamaKategori.setValue(nama);
    await KategoriPage.DeskripsiKategori.setValue(deskripsi);
});

When('I click button simpan', async () => {
    await KategoriPage.ButtonSimpan.click();
});

Then('I must see successfull message {string} ditambah  ', async () => {
    await expect(KategoriPage.SuksesMessage).toExist();
});

Then('I must see errormessage message {string} ditambah ', () => {
    expect(KategoriPage.ErrorMessage).toExist();
});