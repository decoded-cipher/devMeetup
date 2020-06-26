<template>
  <v-app>

    <v-toolbar dark class="red darken-2">
      <v-app-bar-nav-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat dark class="red darken-2" style="box-shadow: none;" v-for="item in menuItems" :key="item.title">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="sideNav">
      <v-list style="padding: 80px 40px;">
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon left>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content><br><br>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <main></main>
    
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld';

  export default {
    name: 'App',

    // components: {
    //   HelloWorld,
    // },

    data: () => ({
      sideNav: false,
      menuItems: [
        {icon: 'mdi-library', title: 'View MeetUps'},
        {icon: 'mdi-account-multiple', title: 'Organize MeetUps'},
        {icon: 'mdi-account', title: 'Profile'},
        {icon: 'mdi-face', title: 'Sign Up'},
        {icon: 'mdi-lock-open', title: 'Sign In'}
      ]
    }),
  };
</script>