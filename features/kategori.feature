Feature: Kategori Flow

    Scenario: As a user, I can add kategori
        Given I already login with email "alex@gmail.com" and password "alex"
        Then I redirect to the dashboard page
        When I click menu kategori
        When I click button tambah
        When I input name as "#nama" and deskripsi "#deskripsi"
        When I click button simpan
        Then I must see successfull message "<sukses>" "<ditambahkan>"   

        Examples:
            | nama          | deskripsi     | suksesMessage
            | Doritos       | Makanan Ringan| data berhasil ditambahkan

    Scenario Outline: As a user, I can't add kategori
        Given I already login with email "alex@gmail.com" and password "alex"
        Then I redirect to the dashboard page
        When I click menu Kategori
        When I click button tambah
        When I input name as "#nama"
        When I click button simpan
        Then I must see errormessage message "<errormessage>" ditambah  

        Examples = 
            | nama          | deskripsi        | errorMessage
            | Doritos       |                  | "name" is not allowed to be empty
