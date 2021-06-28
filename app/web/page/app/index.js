import App from 'framework/app'
import createI18n from 'framework/i18n/app'
import createStore from './store'
import router from './router'
import index from './index.vue'

new App({ index, createI18n, router, createStore }).bootstrap()