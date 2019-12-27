const routes = [{
        path: '/',
        name: 'landing',
        component: () => import('../views/Landing')
    },
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/profile/Dashboard'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/profiles',
        name: 'profiles',
        component: () => import('../views/profile/Profiles'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/profile/:handle',
        name: 'profile',
        component: () => import('../views/profile/Profile'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/createProfile',
        name: 'createProfile',
        component: () => import('../views/profile/CreateProfile'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/editProfile',
        name: 'editProfile',
        component: () => import('../views/profile/EditProfile'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/addExperience',
        name: 'addExperience',
        component: () => import('../views/profile/AddExperience'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/addEducation',
        name: 'addEducation',
        component: () => import('../views/profile/AddEducation'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/feed',
        name: 'feed',
        component: () => import('../views/posts/Feed'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/feed/:id',
        name: 'post',
        component: () => import('../views/posts/Post'),
        meta: {
            requireAuth: true
        }
    }
]

export default routes
//
