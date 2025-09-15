const Produtos = () => {

    // Objeto de produtos da lista
    const pizzas = [
        'Pizza de Muçarela',
        'Pizza de Calabresa',
        'Pizza de Baiana',
        'Pizza de Portuguesa',
        'Pizza de Frango'
    ]
    // Iteração da lista de pizzas
    const listaPizza = pizzas.map(pizza => <li>(pizza)</li>);

    return (
        <div>
            <h3>Listagem de Produtos</h3>

            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos