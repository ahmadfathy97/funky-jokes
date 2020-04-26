const state = () => ({
  favjokes: JSON.parse(localStorage.getItem("fav-jokes")) || []
});
const getters = {
  favjokes:state => state.favjokes
};
const actions = {
  addFavJoke({commit},joke){
    let jokes = [...this.state.favjokes, joke];
    window.localStorage.setItem('fav-jokes', JSON.stringify(jokes));
    commit('addJoke', joke)
  },
  removeFavJoke({commit}, id){
    let jokes = this.state.favjokes.filter( joke => joke.id != id);
    window.localStorage.setItem('fav-jokes', JSON.stringify(jokes));
    commit('removeJoke', id)
  }
};

const mutations = {
  addJoke: (state, joke) => state.favjokes = [joke, ...state.favjokes],
  removeJoke: (state, id) => state.favjokes = state.favjokes.filter( joke => joke.id != id)
};
export default {
  state,
  getters,
  actions,
  mutations
};
