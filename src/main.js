import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';

import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Image as VanImage } from 'vant';
import { Tab, Tabs } from 'vant';
import { Col, Row } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Sidebar, SidebarItem } from 'vant';

createApp(App).use(store).use(router)
.use(NavBar)
.use(Tabbar)
.use(TabbarItem)
.use(Swipe)
.use(SwipeItem)
.use(VanImage)
.use(Tab)
.use(Tabs)
.use(Col)
.use(Row)
.use(Collapse)
.use(CollapseItem)
.use(Sidebar)
.use(SidebarItem)
.mount('#app')