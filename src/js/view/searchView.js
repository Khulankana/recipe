import { elements } from "./base";

// export hiigdeegui uxhir private function yumaaa
const renderRecipe = (recipe) => {
  const markup = `
      <li>
            <a class="results__link " href="#${recipe.recipe_id}">
                  <figure class="results__fig">
                        <img src="${recipe.image_url}" alt="Test">
                  </figure>
                  <div class="results__data">
                        <h4 class="results__name">${recipe.title}</h4>
                        <p class="results__author">${recipe.publisher}</p>
                  </div>
            </a>
      </li>`;

  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};

export const clearSearch = () => {
  elements.searchInput.value = "";
};

export const clearSearchResult = () => {
  elements.searchResultList.innerHTML = "";
};

export const getInput = () => elements.searchInput.value;

export const renderRecipes = (recipes) => {
  recipes.forEach(renderRecipe); // (el) => renderRecipe(el) ene bichigleliig tdhoi gej uzej haylbarchlah ni ====> (renderRecipe)
};
