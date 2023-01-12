
 const produto = document.getElementById('inpProduto').value;
 const quantidade = document.getElementById('inpQuantidade').value;
 const preco = document.getElementById('inpPreco').value;
 const btnSalvar = document.getElementById('btnSalvar').value;

/*function carregarDados() {
    //função envia dados para o banco
   



    return false; //impedir recarregar
}*/
const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []

btnSalvar.onclick = e => {
    if (produto.value == '' || quantidade.value == '' || preco.value == '') {
        return
      }

    
function carregarDados() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.foreach((item, index) => {
        insertItem(item, index)
        alert(item,index)
    }) 

}

}