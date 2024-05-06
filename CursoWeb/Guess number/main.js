let randomNumber = Math.floor(Math.random() * 100)
let tries = 0 

function checkGuss(){
  let number = document.getElementById('guess').value 
  let message = document.getElementById('menssage')
  tries ++ 

  if(number == randomNumber){
    message.innerHTML = 'Congratulations, you found the number' + randomNumber + '!'+ 'number of attempts' + tries
  }
  else if(number < randomNumber){
    message.innerHTML = 'Too low, try again'
  }
  else{
    message.innerHTML = ' Too high, try again'
  }


}