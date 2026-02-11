  const btn = document.getElementById("btn")
        const body = document.getElementById("body")
        btn.addEventListener("click", () => {
            if (body.style.backgroundColor === "white") {
                body.style.backgroundColor = "black"
                btn.innerText = "light"
            }else{
                body.style.backgroundColor = "white"
                btn.innerText = "Dark"
            }



        })