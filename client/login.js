document.getElementById('login').addEventListener('click',(e) =>{
    e.preventDefault()
    const id = document.getElementById("email").value
    const pwd = document.getElementById("password").value
    const url = `http://localhost:8082/user/${id}`
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText)
            const userDetail = JSON.parse(xhr.responseText)
            console.log(userDetail)   
            localStorage.setItem("fName", userDetail.fistName)
            localStorage.setItem("lName", userDetail.lastName)
            localStorage.setItem("Email", userDetail.email)
            localStorage.setItem("Phone", userDetail.phoneno)
            localStorage.setItem("Date", userDetail.dob)
            if(pwd==userDetail.pwd)
            {
                window.location.href= "index.html"
            }
        }
        else{
            const output = "Enter valid details."
            document.getElementById("warning").innerHTML= output
        }
    }
    xhr.send()
})