 let data = JSON.parse(localStorage.getItem("data")) || []
const users = document.getElementById("users")
const form = document.getElementById("form")

form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    
    let name = e.target[0].value
    let email = e.target[1].value
    let password = e.target[2].value
    
   data.push({
    name:name,
    email:email,
    password:password
   })
    
   saveData()
   showData()
   form.reset()
})

function showData(){
     users.innerHTML = ""
    data.forEach((ele , index)=>{
         let div = document.createElement("div")
     
         let id = document.createElement("p")
         id.innerText= index + 1
         
         let name = document.createElement("p")
         name.innerText = ele.name

         let email = document.createElement("p")
         email.innerText = ele.email

         let password = document.createElement("p")
         password.innerText = "••••••"
         
         let button  = document.createElement("button")
         button.innerHTML = "delete"
         button.addEventListener("click" , ()=>{
            data.splice(index , 1)
            showData()
         })

         div.append(id, name , email , password , button)
         users.append(div)
        
    })
}

function saveData(){
    localStorage.setItem("data" , JSON.stringify(data))
}

showData()