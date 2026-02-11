 const textArea = document.getElementById("textArea")
        const count = document.getElementById("count")

        textArea.addEventListener("input" , (e)=>{
            let len = e.target.value
            count.innerText = `Total Count ${len.length}`
        })