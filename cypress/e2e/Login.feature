Feature: Realizar o teste dos cenários da tela de login

    Background: Visitar página de Login
        Given acesso ao site

    Scenario Outline: Realizar login com sucesso
        When preencher o campo e-mail <email>
        When preencher o campo senha <password>
        When clicar no botão entrar
        Then deve ser apresentado o texto <text>

        Examples:
            | email               | password | text             |
            | usuario@deteste.com | 123456   | usuario_de_teste |

    Scenario Outline: Tentar realizar login com e-mail inválido
        When preencher o campo e-mail <email>
        When preencher o campo senha <password>
        When clicar no botão entrar
        Then deve ser apresentada uma mensagem de erro <errorMessage>

        Examples:
            | email                   | password | errorMessage                 |
            | usuario@inexistente.com | 123456   | email or password is invalid |

    Scenario Outline: Tentar realizar login com uma senha inválida
        When preencher o campo e-mail <email>
        When preencher o campo senha <password>
        When clicar no botão entrar
        Then deve ser apresentada uma mensagem de erro <errorMessage>

        Examples:
            | email               | password | errorMessage                 |
            | usuario@deteste.com | invalida | email or password is invalid |

    Scenario Outline: Tentar realizar login sem preencher a senha
        When preencher o campo e-mail <email>
        When clicar no botão entrar
        Then deve ser apresentada uma mensagem de erro <errorMessage>

        Examples:
            | email               | errorMessage            |
            | usuario@deteste.com | password can't be blank |

    Scenario Outline: Tentar realizar login sem preencher o e-mail
        When preencher o campo senha <password>
        When clicar no botão entrar
        Then deve ser apresentada uma mensagem de erro <errorMessage>

        Examples:
            | password | errorMessage         |
            | 123456   | email can't be blank |

    Scenario: Verificar o redirecionamento para a tela de Cadastro
        When clicar no botão 'Need an Account?'
        Then deve ser apresentado o texto <text>

        Examples:
            | text             |
            | Have an account? |