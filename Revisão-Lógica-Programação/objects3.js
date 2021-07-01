let produto={
    produto:"Caneta",
    quantidade:18,
    comprar: function(qtd){
        console.log(this)
        if (qtd > this.quantidade) {
            return "Quantidade Indiponivel!"
        }
        this.quantidade-=qtd
    },
    teste1: function() {
        console.log("teste1")
        console.log(this)
    },
    teste2: () => {
        console.log("teste2")
        console.log(this)
    }
}
;
produto.comprar(20)
// console.log(produto)
;
produto.teste1()
produto.teste2()