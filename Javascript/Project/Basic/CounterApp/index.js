 const count = document.getElementById("count")
        const increment = document.getElementById("increment")
        const decrement = document.getElementById("decrement")
        let num = 0
        count.textContent = num
       
        increment.addEventListener("click", () => {
            count.innerHTML = ++num
            console.log(count.textContent)
        })
        decrement.addEventListener("click" , ()=>{
            count.innerHTML = --num
        })