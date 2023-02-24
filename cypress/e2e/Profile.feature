Feature: Realizar o teste dos cenários da tela de Perfil

    Background: Realizar login
        Given realizar login com sucesso
        When navegar até o perfil do usuário

    Scenario Outline: Alterar conteúdo da Bio corretamente
        When alterar conteúdo da Bio corretamente
        When salvar a atualização
        Then a nova bio deve ser apresentada no perfil do usuário

    Scenario Outline: Alterar nome de usuário corretamente
        When alterar nome de usuário corretamente
        When salvar a atualização
        Then o novo nome de usuário deve ser apresentado no perfil do usuário
