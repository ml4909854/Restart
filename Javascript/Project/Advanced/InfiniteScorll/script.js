const container = document.getElementById("container");
const loader = document.getElementById("loader");

// ---------- STATE ----------
const state = {
  page: 1,
  limit: 5,
  isLoading: false,
  hasMore: true
};

// ---------- FETCH DATA ----------
async function fetchPosts(){
  if(state.isLoading || !state.hasMore) return;

  state.isLoading = true;
  loader.style.display = "block";

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${state.page}&_limit=${state.limit}`
  );

  const data = await res.json();

  if(data.length === 0){
    state.hasMore = false;
    loader.textContent = "No more posts";
    observer.disconnect();
    return;
  }

  renderPosts(data);
  state.page++;
  state.isLoading = false;
  loader.style.display = "none";
}

// ---------- RENDER ----------
function renderPosts(posts){
  posts.forEach(post=>{
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h4>${post.title}</h4>
      <p>${post.body}</p>
    `;
    container.appendChild(div);
  });
}

// ---------- INTERSECTION OBSERVER ----------
const observer = new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    fetchPosts();
  }
});

// observe loader
observer.observe(loader);

// initial load
fetchPosts();
