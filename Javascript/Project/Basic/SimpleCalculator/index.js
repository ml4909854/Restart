  function calculate(operator) {
            const num1 = Number(document.getElementById("num1").value);
            const num2 = Number(document.getElementById("num2").value);
            const result = document.getElementById("result");

            if (operator === '/' && num2 === 0) {
                result.innerText = "Result: Cannot divide by 0";
                return;
            }

            let output;

            if (operator === '+') {
                output = num1 + num2;
            } else if (operator === '-') {
                output = num1 - num2;
            } else if (operator === '*') {
                output = num1 * num2;
            } else if (operator === '/') {
                output = num1 / num2;
            }

            result.innerText = "Result: " + output;
        }