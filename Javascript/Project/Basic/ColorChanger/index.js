 const container = document.getElementById("container")
 const btn = document.getElementById("btn")
 let arr = ["blue" , "orange" , "red" , "green" , "pink" , "aqua" , "black"]
 
 btn.addEventListener("click" , ()=>{
   
        let randomIndex = Math.floor(Math.random() * arr.length);
        container.style.backgroundColor = arr[randomIndex]
 })