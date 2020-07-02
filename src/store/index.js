import Vue from'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 export const store = new Vuex.Store({
     state: {
         loadedMeetups: [
            {
                imageURL: 'https://cdn.hipwallpaper.com/i/35/22/1bJFvT.jpg', 
                id: 'bkdf7yw687kfsbf37rwer4t8gctr64gr64', title: 'Meeting in Paris',
                date: '2020-07-17'
            },
            {
                imageURL: 'https://wallpaperaccess.com/full/493923.jpg', 
                id: 'tqyf7yw687kvhusgdfjsv4t8gctr64gpot', title: 'Meeting in Moscow',
                date: '2022-07-19'
            }
         ],
         users: {
             id: 'vzfgdhgfhxfgh',
             registeredUsers: ['bkdf7yw687kfsbf37rwer4t8gctr64gr64']
         }
     },
     mutations: {
         createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
         }
     },
     actions: {
         createMeetup({commit}, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageURL: payload.imageURL,
                description: payload.description,
                date: payload.date,
                id: 'kjdfsbbdvzfmnkvnkjxzjk'
            }
            commit('createMeetup', meetup)
         }
     },
     getters: {
          loadedMeetups (state) {
              return state.loadedMeetups.sort((meetupA, meetupB) => {
                  return meetupA.date > meetupB.date
              })
          },
          featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0, 5)
          },
          loadedMeetup (state) {
              return (meetupId) => {
                  return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                  })
              }
          }
     }
 })