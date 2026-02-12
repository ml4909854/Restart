   // https://jsonplaceholder.typicode.com/posts'
        const posts = document.getElementById("posts")
        const pagination = document.getElementById("pagination")

        // first step to create a pages how many pages 
        // how many items per pages . and code start from which pages
        // 
        let state = {
            data: [],
            currentPage: 1,
            postsPerPage: 5
        }

        // Now the third step to fetch the data from api

        async function fetchData() {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts")
            state.data = await response.json()
            // we stored a data into our object 
            // where a data variable already present
            // Now move on a some other topic which is very 
            /// calling a render funtion who is 
            // call some antoher funder render in ui

            render()
        }
        function render() {
            renderPosts()
            renderPagination()
        }
        function renderPosts() {
            // console.log(state.data)
            // Now in post data 
            // first of all we have to clarified that
            // what is the starting index of the post 
            // what is ending index of the posts in this page
            // after that i have to clarify that how many 
            // posts in one page by after that i have to fetch 
            // the data between the posts

            // find start Index of the page
            let start = (state.currentPage - 1) * state.postsPerPage
            // console.log(start)
            // find last Index
            let end = start + state.postsPerPage
            //  console.log(end)
            // when you write the code console each and every thing 
            // clearly 
            let totalPostPerPage = state.data.slice(start, end)
            // console.log(totalPostPerPage)

            // I have to show the posts in ui
            posts.innerText = ""
            totalPostPerPage.forEach((ele, index) => {
                let h1 = document.createElement("h1")
                h1.innerText = ele.title
                let p = document.createElement("p")
                p.innerText = ele.body

                posts.append(h1, p)
            })

        }
        function renderPagination() {
            pagination.innerText = ""
            // empty the pagination container
            // Now ok i created a posts Its time to 
            // create a button of pagination

            // first of all i have to find out totalbuttton
            // how many button i have need in this code
            // then I go on some other topics

            let totalButtons = Math.ceil(state.data.length / state.postsPerPage)
            //   console.log(totalButtons)


            // after that create a prev button
            let prevBtn = document.createElement("button")
            prevBtn.innerText = "prev"
            // Now i write a code for prev diableed
            // when i reached at first page 
            // then prev button should not work.
            prevBtn.disabled = state.currentPage === 1

            // In onclick funtion when i click a onclick funtion
            // i can see that what is the behaviour
            // of that function.
            // to go to previous page
            prevBtn.onclick = () => {
                state.currentPage--
                render()
            }
            pagination.appendChild(prevBtn)

            // Now adding a Number of button In that
            /// we can't use foreach because it in not array

            for (let i = 1; i <= totalButtons; i++) {
                let button = document.createElement("button")
                button.innerText = i

                // It is used for color purposes
                if (state.currentPage === i) {
                    button.classList.add("active")
                }

                // when i click on a page a same page open
                button.onclick = () => {
                    state.currentPage = i
                    render()
                }
                // Now add buttons in a page
                pagination.append(button)

            }


            // Now create a next button 
            let nextBtn = document.createElement("button")
            nextBtn.innerText = "next"
            nextBtn.disabled = state.currentPage === totalButtons

            nextBtn.onclick = () => {
                state.currentPage++
                render()
            }
            pagination.appendChild(nextBtn)
            


        }

        fetchData()