<template>
   <div class="container">
      <Item v-for="item in items" :item="item" :key="item.id" />
   </div>
</template>

<script>
import Item from '@/components/Items/Item.vue';

export default {
   name: `Items`,
   components: { Item },

   data() {
      return {
         
      }
   },

   computed: {
      items() {
         return this.$store.getters.getItems
      }
   },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.container {
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 2em;
   background: #ffffff;
   margin-top: 3em;
   margin-bottom: 3em;
   padding: 2em 0;
   @include border-radius(0.3em);
}


@media all and (max-width: $m-screen) {
   .container {
      grid-template-columns: 1fr;
   }
}

</style>