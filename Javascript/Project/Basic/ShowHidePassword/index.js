  const password = document.getElementById("password")
        const btn = document.getElementById("btn")

        let pass;
        password.addEventListener("input", (e) => {
            pass = e.target.value

        })
        btn.addEventListener("click", () => {
            if (password.type === "password" && pass.length>0) {
                password.type = "text"
                btn.innerText = "Hide"
            } else {
                password.type = "password"
                btn.innerText = "Show"
            }
        })