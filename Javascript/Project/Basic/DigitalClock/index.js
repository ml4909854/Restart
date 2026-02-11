 const container = document.getElementById("container")


        function updateTime() {

            const d = new Date()

            let hours = d.getHours()
            let minutes = d.getMinutes()
            let seconds = d.getSeconds()

            hours = hours < 10 ? "0" + hours : hours
            minutes = minutes < 10 ? "0" + seconds : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds

            container.innerText = `${hours}:${minutes}:${seconds}`
        }



        setInterval(() => {
            updateTime()
        }, 1000);
        updateTime()

