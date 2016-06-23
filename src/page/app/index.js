/**
 * Created by tcstory on 6/23/16.
 */

require('./index.scss');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import MyHeader from '../../components/header/index.vue';


const App = Vue.extend({
    components: {
        'my-header': MyHeader
    }
});

const router = new VueRouter();
router.map({
});
router.start(App,'#app');
