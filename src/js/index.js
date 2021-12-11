require("@babel/polyfill");
import Search from "./model/Search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";

const state = {};

const controlSearch = async () => {
  // Webees hailtiin tulhuur ugiig gargaj avna
  const query = searchView.getInput();

  if (query) {
    // Shineer hailtiin objectiig uusgej ugnu
    state.search = new Search(query);
    // Hailt hiihed zoriulj ui-g beltgene
    searchView.clearSearch();
    searchView.clearSearchResult();
    renderLoader(elements.searchResDiv);
    //Hailtiig guitsetgene
    await state.search.doSearch();

    //Hailtiin ur dung delgetsend uzuulne
    clearLoader();
    if (state.search.result === undefined) alert(" Hailt ilertsgui");
    else searchView.renderRecipes(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); //defualt uil ajillagaag ni boliul . submit tovch maani daragdaad l alga bolood bsan uchir uuniig zogsooj bna
  controlSearch();
});
