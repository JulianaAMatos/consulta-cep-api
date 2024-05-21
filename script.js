function consultaCEP(cep){
cep= cep.replace(/\D/g,'') //Expressão regular, expressão de substituição de caractere(regex)



const requisicao = new Request(`https://viacep.com.br/ws/${cep}/json/` , {
    "method": "GET",
    "headers":{
        "Content-type": "aplication/json"
    }
});//Endereço

fetch(requisicao)
.then(resposta =>  resposta.json())
.then(resposta => {
   document.querySelector('#logradouro').value = resposta.logradouro; //buscar dados atualizados
   document.querySelector('#bairro').value = resposta.bairro;
   document.querySelector('#cidade').value = resposta.localidade;
   document.querySelector('#uf').value = resposta.uf;
}); //buscar dados atualizados

}