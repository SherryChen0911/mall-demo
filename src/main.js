import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';

import { NavBar } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Image as VanImage } from 'vant';

createApp(App).use(store).use(router)
.use(NavBar)
.use(Swipe)
.use(SwipeItem)
.use(VanImage)
.mount('#app')