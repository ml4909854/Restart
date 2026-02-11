
        let data = JSON.parse(localStorage.getItem("data")) || []
        let container = document.getElementById("container")
        let input = document.getElementById("input")
        let btn = document.getElementById("btn")

        btn.addEventListener("click", () => {
            let note = input.value.trim()

            data.push({
                note: note
            })
            saveNotes()
            showNotes()

        })
        
        function showNotes() {
            container.innerText = ""
            data.forEach((ele, index) => {
                let div = document.createElement("div")

                let id = document.createElement("id")
                id.innerText = index + 1
                let p = document.createElement("p")
                p.innerText = ele.note

                let button = document.createElement("button")
                button.innerText = "delete"
                button.addEventListener("click", () => {
                    data.splice(index, 1)
                    showNotes()
                })

                div.append(id, p, button)
                container.append(div)
            });
        }
        function saveNotes() {
            localStorage.getItem("data", JSON.stringify(data))
        }