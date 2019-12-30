import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/views/page-not-found';

Vue.use(Router);

const parseProps = r => ({ id: parseInt(r.params.id) });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/eventloggings',
    },
    {
      path: '/eventloggings',
      name: 'eventloggings',
      component: () =>
        import(/* webpackChunkName: "bundle.events" */ './views/eventloggings.vue'),
    },
    {
      path: '/eventloggings/:id',
      name: 'event-detail',
      // props: true,
      props: parseProps,
      component: () =>
        import(/* webpackChunkName: "bundle.events" */ './views/event-detail.vue'),
    },
    {
      path: '/serviceproviders',
      name: 'serviceproviders',
      component: () =>
        import(/* webpackChunkName: "bundle.serviceproviders" */ './views/serviceproviders.vue'),
    },
    {
      path: '/serviceproviders/:id',
      name: 'serviceprovider-detail',
      // props: true,
      props: parseProps,
      component: () =>
        import(/* webpackChunkName: "bundle.serviceproviders" */ './views/serviceprovider-detail.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "bundle.about" */ './views/about.vue'),
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
