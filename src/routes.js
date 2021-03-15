const APP_NAME = process.env.VUE_APP_NAME
const App = () => import('./App.vue')
const List = () => import('./views/List.vue')

export default [
  {
    path: `${APP_NAME}`,
    name: APP_NAME,
    component: App,
    children: [
      {
        path: '',
        redirect: 'list',
      },
      {
        path: 'list',
        name: `${APP_NAME}.list`,
        component: List,
      },
    ],
  },
]
