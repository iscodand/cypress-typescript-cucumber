Feature: Realizar o teste dos cenários da tela de login

    Background: Visitar página de Login
        Given acesso ao site

    Scenario Outline: Realizar login com sucesso
        When preencher o campo e-mail corretamente
        When preencher o campo senha corretamente
        When clicar no botão entrar
        Then deve ser apresentado o texto <text>

        Examples:
            | text     |
            | Settings |

    Scenario Outline: Tentar realizar login com e-mail inválido
        When preencher o campo e-mail incorretamente
        When preencher o campo senha corretamente
        When clicar no botão entrar
        Then deve ser apresentada uma mensagem de erro <errorMessage>

        Examples:
            | errorMessage                 |
            | email or password is invalid |

    Scenario Outline: Tentar realizar login com uma senha inválida
        When preencher o campo e-mail corretamente
        When preencher o campo senha incorretamente
        When clicar no botão entrar
        Then deve ser apresentada uma mensagem de erro <errorMessage>

        Examples:
            | errorMessage                 |
            | email or password is invalid |

    Scenario Outline: Tentar realizar login sem preencher a senha
        When preencher o campo e-mail corretamente
        When clicar no botão entrar
        Then deve ser apresentada uma mensagem de erro <errorMessage>

        Examples:
            | errorMessage            |
            | password can't be blank |

    Scenario Outline: Tentar realizar login sem preencher o e-mail
        When preencher o campo senha corretamente
        When clicar no botão entrar
        Then deve ser apresentada uma mensagem de erro <errorMessage>

        Examples:
            | errorMessage         |
            | email can't be blank |

    Scenario: Verificar o redirecionamento para a tela de Cadastro
        When clicar no botão 'Need an Account?'
        Then deve ser apresentado o texto <text>

        Examples:
            | text             |
            | Have an account? |