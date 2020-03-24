
<template>
  <v-footer
    dark
    padless
    absolute="true"
  >
    <v-card
      flat
      tile
      class="white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text text-center"
          icon
        >
          <v-icon size="24px" color="#fff">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
    <p class="text">All rights reserved</p>
  </v-footer>
</template>




<script>
  export default {
      name:'Footer',
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
      links:[
        ''
      ]
    }),
  }
</script>

<style scoped>
 .text {
   text-align:center;
 }
</style>