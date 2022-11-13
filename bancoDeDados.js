const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id //add ID
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || { aviso: 'Este ID está vazio' }
}

function getProdutos() {
    return Object.values(produtos)
}

function deleteProdutos(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, deleteProdutos }
