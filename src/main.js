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
import { Checkbox, CheckboxGroup } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Stepper } from 'vant';
import { Button } from 'vant';
import { Icon } from 'vant';
import { Divider } from 'vant';
import { Grid, GridItem } from 'vant';
import { Switch } from 'vant';
import { Field } from 'vant';
import { List } from 'vant';

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
.use(Checkbox)
.use(CheckboxGroup)
.use(Cell)
.use(CellGroup)
.use(Stepper)
.use(Button)
.use(Icon)
.use(Divider)
.use(Grid)
.use(GridItem)
.use(Switch)
.use(Field)
.use(List)
.mount('#app')