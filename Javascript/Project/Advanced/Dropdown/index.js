const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownList = document.getElementById("dropdownList");
const dropdown = document.getElementById("dropdown");

const state = {
  isOpen: false,
  selected: null,
  highlightedIndex: 0,
  options: ["Apple", "Banana", "Mango", "Orange"]
};

// render dropdown
function render() {
  dropdownBtn.textContent = state.selected || "Select option";

  dropdownList.innerHTML = "";
  state.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;

    if (index === state.highlightedIndex) {
      li.classList.add("active");
    }

    li.addEventListener("click", () => {
      state.selected = option;
      state.isOpen = false;
      render();
    });

    dropdownList.appendChild(li);
  });

  dropdownList.classList.toggle("open", state.isOpen);
}

// toggle dropdown
dropdownBtn.addEventListener("click", () => {
  state.isOpen = !state.isOpen;
  render();
});

// outside click close
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    state.isOpen = false;
    render();
  }
});

// keyboard handling
document.addEventListener("keydown", (e) => {
  if (!state.isOpen) return;

  if (e.key === "ArrowDown") {
    state.highlightedIndex =
      (state.highlightedIndex + 1) % state.options.length;
    render();
  }

  if (e.key === "ArrowUp") {
    state.highlightedIndex =
      (state.highlightedIndex - 1 + state.options.length) %
      state.options.length;
    render();
  }

  if (e.key === "Enter") {
    state.selected = state.options[state.highlightedIndex];
    state.isOpen = false;
    render();
  }

  if (e.key === "Escape") {
    state.isOpen = false;
    render();
  }
});

// initial render
render();
