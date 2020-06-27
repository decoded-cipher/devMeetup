import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import CreateMeetup from '../components/Meetup/CreateMeetup'
import Meetups from '../components/Meetup/Meetups'
import Profile from '../components/User/Profile'
import Signin from '../components/User/Signin'
import Signup from '../components/User/Signup'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },{
            path: '/meetups',
            name: 'Meetups',
            component: Meetups
        },{
            path: '/meetup/new',
            name: 'CreateMeetup',
            component: CreateMeetup
        },{
            path: '/profile',
            name: 'Profile',
            component: Profile
        },{
            path: '/signin',
            name: 'Signin',
            component: Signin
        },{
            path: '/signup',
            name: 'Signup',
            component: Signup
        }
    ],
    mode: 'history'
})