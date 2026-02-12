 const container = document.getElementById("container")
        const result = document.getElementById("result")
        let data = JSON.parse(localStorage.getItem("data")) || []
        let form = document.querySelector("form")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            let text = e.target[0].value.toLowerCase()
            let amount = Number(e.target[1].value)

            if (text !== "salary") {
                amount = Number(`-${amount}`)
            }

            let obj = {
                text: text,
                amount: amount
            }

            data.push(obj)
            showExpenses()
            saveExpenses()
            // showResult(data)


            e.target[0].value = ""
            e.target[1].value = ""
        })

        function showExpenses() {
            container.innerText = ""
            data.forEach((element, index) => {
                let id = document.createElement("p")
                id.innerText = index + 1
                let text = document.createElement("p")
                text.innerText = element.text

                let amount = document.createElement("p")
                amount.innerText = element.amount

                let deleteBtn = document.createElement("button")
                deleteBtn.innerText = "delete"
                deleteBtn.addEventListener("click", () => {
                    data.splice(index, 1)
                    showExpenses()
                    showResult()
                })

                container.append(id, text, amount, deleteBtn)

            });
        }

        function showResult() {
           
                result.innerText = ""

                let income = 0
                let expense = 0

                data.forEach(ele => {
                    if (ele.amount > 0) {
                        income += ele.amount
                    } else {
                        expense += ele.amount
                    }
                })

                let balance = income + expense

                let incomeEl = document.createElement("p")
                incomeEl.innerText = `Total Income : ${income}`

                let expenseEl = document.createElement("p")
                expenseEl.innerText = `Total Expense : ${Math.abs(expense)}`

                let balanceEl = document.createElement("h3")
                balanceEl.innerText = `Remaining Balance : ${balance}`

                result.append(incomeEl, expenseEl, balanceEl)
            

        }

        function saveExpenses() {
            localStorage.setItem("data", JSON.stringify(data))
        }
        showResult()
        showExpenses()