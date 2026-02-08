 let mainContainer = document.getElementById("mainContainer")
        // console.log(mainContainer

        const getData = async () => {
            try {
                let response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json()
                showData(data)
            } catch (error) {
                console.log(error.name)
            }



        }
        getData()

  async function showData(data){
    mainContainer.innerHTML = ""
    data.forEach((element , index , arr) => {
         console.log(element)
         let div = document.createElement("div")
         let img = document.createElement("img")
         img.src = element.image
         let p1 = document.createElement("p")
         p1.innerText = element.title
         let p2 = document.createElement("p")
         p2.innerText = element.rating.rate
         let p3 = document.createElement("p")
         p3.innerText = element.category
    
         let p4 = document.createElement("p")
         p4.innerText = element.price

         div.append(img , p1 , p2 , p3 , p4)
         mainContainer.append(div)
    });
  }

  