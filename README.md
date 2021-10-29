# Chain of Responsability

Com o chain of responsability o seu código vai ficar mais estruturado e sólido, entretanto também irá aumentar a complexidade do mesmo.

Nesse exemplo enviamos um número fake de cartão de crédito que será validado pelas classes CardExists e CardNotExists.

O Fluxo começa no index com o comando.

    node index.js
    
Na primeira linha do index.js nós importamos a classe Card, logo em seguida instanciamos a classe card e depois retornamos no console o resultado do tratamento onde invocamos a função Treat a partir do card.

        card.Treat("555.555.555")
