 const input = document.getElementById("input")
   const container = document.getElementById("container")
   
   const Items = ["apples" , "Grapes" , "Orange" , "Papaya" , "Santra"]
   // first step to list data
function showList(data){
    container.innerHTML = ""
    data.forEach(element => {
        let p = document.createElement("p")
        p.innerHTML = element
        
        container.append(p)
    });
}

input.addEventListener("input" , ()=>{
     let val = input.value.toLowerCase()

   const filtered = Items.filter((item)=>{
    return item.toLowerCase().includes(val)
})

     showList(filtered)
})
   showList(Items)