Feature: To test the login functionality in "The Internet Herokuapp"

    Background:
        Given I am on the login page

    Scenario: As User I can successfully login in sauce-demo
        When I input email as "<email>" and passwrod as "<password>"
        And I click button login
        Then I must navigate to dashboard page

        Examples:
            | email             | password  |
            | alex@gmail.com    | alex      |

    Scenario Outline:  must navigate to dashboard page
        When I input email as "<email>" and passwrod as "<password>"
        And I click button login
        Then I must remain on login page displaying a message "<errorMessage>"

        Examples:
            | email             | password             | errorMessage                        |
            | alex@gmail.com    |                      | password is not allowed to be empty |