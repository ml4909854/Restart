 const container = document.getElementById("container");
        const crossBtn = document.getElementById("crossBtn");
        const btn = document.getElementById("btn");

        btn.addEventListener("click", () => {
            container.style.display = "flex";
        });

        crossBtn.addEventListener("click", () => {
            container.style.display = "none";
        });



        container.addEventListener("click", () => {
            container.style.display = "none";
        });

        // Click inside modal → do nothing
        overlayContent.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                container.style.display = "none";
            }
        });

