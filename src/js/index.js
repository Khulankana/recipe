require("@babel/polyfill");
import Search from "./model/Search";

const state = {};

const controlSearch = async () => {
  // Webees hailtiin tulhuur ugiig gargaj avna
  const query = "pizza";

  if (query) {
    // Shineer hailtiin objectiig uusgej ugnu
    state.search = new Search(query);
    // Hailt hiihed zoriulj ui-g beltgene
    //Hailtiig guitsetgene
    await state.search.doSearch();

    //Hailtiin ur dung delgetsend uzuulne
    console.log(state.search.result);
  }
};

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault(); //defualt uil ajillagaag ni boliul . submit tovch maani daragdaad l alga bolood bsan uchir uuniig zogsooj bna
  controlSearch();
});
