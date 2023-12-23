import HomeModule from '../home.js'
import ManageModule from '../manage.js'
import InsertModule from '../insert.js'

const routes = {
  '/': HomeModule,
  '/manage': ManageModule,
  '/insert': InsertModule
};
let currentModule = null

function handleRouteChange() {
  const path = window.location.hash.slice(1)
  const module = routes[path] || HomeModule
  if (currentModule)
    currentModule.unmount();
  currentModule = Vue.createApp(module)
  currentModule.mount('#app')
}

window.addEventListener('hashchange', handleRouteChange)
window.addEventListener('load', handleRouteChange)