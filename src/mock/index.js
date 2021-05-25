// 首先引入Mock
const Mock = require('mockjs')

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600',
})

// 用户信息

const users = [
  {
    id: 0,
    username: 'kang',
    password: '123',
    token: 'kang_token',
    role: 'boss',
    right: [],
  },
  {
    id: 1,
    username: 'ding',
    password: '123',
    token: 'ding_token',
    role: 'commonUser',
    right: [],
  },
]

// 权限

const roles = {
  boss: [
    {
      id: 0,
      authName: '基本页面',
      icon: 'el-icon-connection',
      name: 'lyout-1',
      path: 'commonPage',
      components: 'fat',
      component: 'views/commonPage/index.vue',

      metas: { title: '基本页面' },
      children: [
        {
          id: 11,
          authName: '通知中心',
          name: 'notice',
          path: 'notice',
          component: 'views/notice/index',
          rights: ['view', 'add', 'eidt'],
          metas: {
            title: '通知中心',
            rights: ['view', 'add', 'eidt'],
          },
        },
        {
          id: 12,
          name: 'mail',
          authName: '邮寄中心',
          path: 'mail',
          component: 'views/mail/index.vue',
          rights: ['view', 'add', 'eidt'],
          metas: {
            title: '邮寄中心',
            rights: ['view', 'add', 'eidt'],
          },
        },
      ],
    },
    {
      id: 1,
      authName: '管理界面',
      icon: 'el-icon-set-up',
      name: 'lyout-2',
      components: 'fat',
      path: 'admPage',
      component: 'views/admPage/index.vue',

      metas: { title: '管理界面' },

      children: [
        {
          id: 13,
          authName: '修改权限',
          path: 'rightPage',
          name: 'rightPage',
          component: 'views/rightPage/index.vue',
          rights: ['view', 'add', 'eidt', 'delet'],
          metas: {
            title: '修改权限',
            rights: ['view', 'add', 'eidt', 'delet'],
          },
        },
      ],
    },
  ],

  commonUser: [
    {
      id: 0,
      authName: '基本页面',
      icon: 'el-icon-connection',
      name: 'lyout-1',
      path: 'commonPage',
      components: 'fat',

      component: 'views/commonPage/index.vue',
      metas: { title: '基本页面' },
      children: [
        {
          id: 21,
          authName: '通知中心',
          path: 'notice',
          name: 'notice',
          component: 'views/notice/index.vue',
          rights: ['view', 'add'],
          metas: { title: '通知中心', rights: ['view', 'add'] },
        },
        {
          id: 22,
          authName: '邮寄中心',
          path: 'mail',
          name: 'mail',
          component: 'views/mail/index.vue',
          rights: ['view', 'add'],
          metas: { title: '邮寄中心', rights: ['view', 'add'] },
        },
      ],
    },
  ],
}

// 用户登录
Mock.mock('/login', 'post', (option) => {
  const { username, password } = JSON.parse(option.body)
  const user = users.find((item) => {
    return item.username === username && item.password === password
  })
  return user
})

// 用户权限信息
Mock.mock('/roles', 'post', (option) => {
  console.log('option', option)

  return roles[option.body]
})
