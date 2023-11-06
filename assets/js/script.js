// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //Variables
  const criteriaNames = ['lowercase characters', 'uppercase characters', 'numeric', 'special characters']
  const criteria = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789', ' !"#$%&()*+,-./:;<=>?@[\]^_{|}~'] 

  let char = ''
  let charLength = 0
  let passLength = []
  let passRequirements = []
  let password = []
  let engine = true
  let checked = []


  //Collects the password length
  passLength = prompt('How many characters you want your password to contain? (8 Min - 128 Max)')
  if(passLength === null){
    engine = false 
  }
  
  //Collects character requirements and generates password

  while (engine){
    
    //Validates length input
    
    if(passLength <= 128 && passLength >= 8){  

      let run = true

      //Collects requirements

      while(run){
        for(let i = 0; i < criteria.length; i++){
          passRequirements.push(confirm('Should your password contain ' + criteriaNames[i] + '?')) 
        }

        if(passRequirements.includes(true)){
          for(let i = 0; i < criteria.length; i++){
            if(passRequirements[i] === true){
                char += criteria[i]
            }
          }

          run = false
        }else{
          run = confirm('Select at least one type of character for your password')
        }
        
      }
      
      charLength = char.length

      //Generates password

      for(let i = 0; i < passLength; i++){
        password+= char.charAt(Math.floor(Math.random() * charLength));
      }

      for(let i = 0; i < criteria.length; i++){
        let criteriaContent = criteria[i]
        let checker = criteriaContent.split('')
        for (let x = 0; x < checker.length; x++){
          if(password.includes(checker[x])){
            checked += true
            break
          }
        }

        if(checked.length === i){
          checked += false
        }
      }
      
       
      
      engine = false
    } else{
      passLength = prompt('Please select a valid number of characters for your password (8 Min - 128 Max)') //fail-safe in case password lenght input is invalid
      if(passLength === null){
        engine = false 
      }
    }
  }




  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
