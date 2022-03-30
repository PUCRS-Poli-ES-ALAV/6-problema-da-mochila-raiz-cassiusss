const itens = [
    { peso: 5, valor: 2 },
    { peso: 2, valor: 4 },
    { peso: 2, valor: 2 },
    { peso: 1, valor: 3 }
]

const BACKPACK_CAPACITY = 7 

const max = (a, b) => { 
    const res = a > b ? a : b
    console.log(a,b,'res', res)
    return res
}

const backpackPD = (productsQuantity, backpackCapacity, itens) => { 
    const columns = new Array(backpackCapacity).fill(0)
    let MAX_TAB= new Array(productsQuantity).fill(columns)
    for(let i = 1; i < productsQuantity; i++) { 
        for(let j = 1; j < backpackCapacity; i++) { 
            console.log(MAX_TAB[i][j], i, j)
            if(itens[i-1].peso <= j) MAX_TAB[i][j] = max(MAX_TAB[i-1][j], itens[i-1].valor + MAX_TAB[i-1][j-itens[i-1].peso])
            else MAX_TAB[i][j] = MAX_TAB[i-1][j];
        }
    } 

    return MAX_TAB[productsQuantity, backpackCapacity]
}
