   document.getElementById('confuse').addEventListener('click',(e) =>{
    e.preventDefault()
  
    const fName = document.getElementById('fname').value
    const lName = document.getElementById('lname').value
    const phone = document.getElementById('mobile').value
    const password = document.getElementById('password').value
    const eMail = document.getElementById('email').value
    const date = document.getElementById('date').value

    const user = {	
      email:eMail,
      fistName:fName,
      lastName:lName,
      phoneno:phone,
      pwd:password,
      dob:date
   }
  
   console.log(user)
  
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8082/users')
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)
            window.location.href= "login.html"
        }
    }
    xhr.send(JSON.stringify(user))
   });