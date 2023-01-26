const form = document.querySelector('.inputBox')
const campos = document.getElementsByClassName('inputUser')
const span = document.querySelectorAll('.span-required')
const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const telRegex = /^\(\d{2}\)\s\d{4,5}-?\d{4}/g
const cepRegex = /^[0-9]{8}$/
// const radio = document.getElementById('radio')
// const job = document.getElementsByClassName('job')
// const genero = document.querySelectorAll('input[name="genero"]:checked')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    nameValidate()
    validate()
    emailValidate()
    telRegex()
    validateCEP()

    form.submit()
})
    


function setError(index){
   span[index].style.display = "block"
}
function removeError(index){
    span[index].style.display = 'none'
}

function nameValidate(){
    if(campos[0].value.length < 3 || campos[0].value === ""){
        setError(0)
    } else {
        removeError(0)
    }
}

function validate(){
    if(campos[1].value.length < 3 || campos[1].value === ""){
        setError(1)
    } else {
        removeError(1)
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[2].value || campos[2].value === "")){
        setError(2)
    } else{
        removeError(2)
    }
}

function telValidate(){
    if(!telRegex.test(campos[3].value || campos[3].value === "")){
        setError(3)
    } else {
        removeError(3)
    }
}

function validateCEP(){
    if(!cepRegex.test(campos[4].value || campos[4].value === "")){
        setError(4)
    } else {
        removeError(4)
    }
}