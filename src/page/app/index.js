/**
 * Created by tcstory on 6/23/16.
 */

require('./index.scss');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import MyHeader from '../../components/header/index.vue';
import Overview from '../../components/overview/index.vue';
import Stage from '../../components/stage/index.vue';

const App = Vue.extend({
    components: {
        'my-header': MyHeader
    }
});

const router = new VueRouter();
router.map({
    '/': {
        component: Overview
    },
    '/stage': {
        component: Stage
    }
});
router.start(App,'#app');
