import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  // TODO:
  // Que no se persistan las variables de entorno
  // const app = store.app.store.state.app
  // app.env = null

  new VuexPersistence({
    key: '__nuxt_asea_join', // The key to store the state on in the storage provider.
    storage: window.sessionStorage, // localStorage or window.sessionStorage or localForage
    reducer: state => ({
      app: state.app
    })
  /* your options */
  }).plugin(store)
}
