import { fetchData } from "./fetchData.js";

export function setupEvents() {
    const searchBtn = document.querySelector(".main__poke-btn");
    searchBtn.addEventListener("click", fetchData);
}