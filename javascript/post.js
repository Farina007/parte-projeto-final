const params = new URLSearchParams(window.location.search)

const id = params.get("id")
const nome = params.get("nome")
const email = params.get("email")
const tel = params.get("tel")
const cpf = params.get("cpf")
const endereco = params.get("endereco")

var nono = nome;
var mai = email;
var telef = tel;
var cepefi = cpf;
var ende = endereco


if(id!=null && nome!=null && email!=null && tel!=null && cpf!=null && endereco!=null){
    document.querySelector("#edit").addEventListener("click",()=>{
        fetch(`http://192.168.1.51:3000/produtos/alterar/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },            
            body: JSON.stringify({
                "nome" : document.querySelector("#nome").value,
                "email": document.querySelector("#email").value,
                "tel": document.querySelector("#tel").value,
                "cpf": document.querySelector("#cpf").value,
                "endereco": document.querySelector("#endereco").value
            })
            }).then((resposta)=>{
                if(resposta.status != 200){
                    console.log(resposta.json())
            }
        })
    })
}
else{
    document.querySelector("#btnsend").addEventListener("click",()=>{
        fetch("http://192.168.1.51:3000/produtos/novo",{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },            
            body: JSON.stringify({
                "nome" : document.querySelector("#nome").value,
                "email": document.querySelector("#email").value,
                "tel": document.querySelector("#tel").value,
                "cpf": document.querySelector("#cpf").value,
                "endereco": document.querySelector("#endereco").value
            })
            }).then((resposta)=>{
                if(resposta.status != 200){
                    console.log(resposta.json())
            }
        })
    })
}

console.log(nome)


// pegando os inputs
const seletornome = document.querySelector('.name') // input q aparece
// passando o valor de dtInicio para o dtFim
seletornome.value = nono;
// pegando os inputs
const seletoremail = document.querySelector('.mail') // input q aparece
// passando o valor de dtInicio para o dtFim
seletoremail.value = mai;
// pegando os inputs
const seletortelefone = document.querySelector('.tele') // input q aparece
// passando o valor de dtInicio para o dtFim
seletortelefone.value = telef;
// pegando os inputs
const seletorcpf = document.querySelector('.cepef') // input q aparece
// passando o valor de dtInicio para o dtFim
seletorcpf.value = cepefi
// pegando os inputs
const seletorendereco = document.querySelector('.ender') // input q aparece
// passando o valor de dtInicio para o dtFim
seletorendereco.value = ende