Feature: Realizar o teste dos cenários da tela de login

    Background: Visitar página de Login
        Given acesso ao site

    Scenario Outline: Realizar login com sucesso
        When preencher o campo e-mail <email>
        When preencher o campo senha <password>
        When clicar no botão entrar
        Then deve ser apresentado o username <username>

        Examples:
            | email               | senha  | username         |
            | usuario@deteste.com | 123456 | usuario_de_teste |

    Scenario Outline: Realizar login com e-mail inexistente
        When preencher o campo e-mail <email>
        When preencher o campo senha <password>
        When clicar no botão entrar
        Then deve ser apresentada uma mensagem de erro <errorMessage>

        Examples:
            | email                   | senha  |
            | usuario@inexistente.com | 123456 |