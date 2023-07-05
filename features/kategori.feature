Feature: Kategori Flow

    Background: 
        Before, as a user i want to add category

    Scenario: As a user I can add kategori
        Given I input login with email "alex@gmail.com" and password "alex"
        When I redirect to the dashboard page
        When I click button kategori
        When I click button tambah
        When I input name as "#nama" and deskripsi "#deskripsi"
        When I click button simpan
        Then I must see successfull message "<sukses>" ditambah  

        Examples:
            | nama          | deskripsi     | suksesMessage
            | Doritos       | Makanan Ringan| data berhasil ditambahkan

    Scenario Outline: user can't add category
        When I click button Kategori
        And I click button add
        Then I input name as "#nama" and deskripsi as "#deskripsi"
        And I click button simpan
        Then I must see errormessage message "<errormessage>" ditambah  

        Examples = 
            | nama          | deskripsi        | errorMessage
            | empty         | makanan  ringan  | "name" is not allowed to be empty