<template>
   <article class="item">
      <div class="item__image" :style="style" @click="checkDetails"> 
         <div class="item__price"> {{ price }} </div>
      </div>
      <p class="item__name" @click="checkDetails"> {{ name }} </p>
      <button class="item__buy" @click="addToCart">ADD TO CART</button>
   </article>
</template> 

<script>
export default {
   name: `Item`,

   props: {
      item: {
         type: Object,
         required: true
      }
   },

   data() {
      return {
         img: this.item.img,
         name: this.item.name,
         price: this.item.price
      }
   },

   methods: {
      addToCart() {
         this.$store.commit('ADDTOCART', this.item)
      },

      checkDetails() {
         this.$router.push( {name:'Details', params: {id: this.item.id}} );
      }
   },

   computed: {
    style() {
      return `background-image: url("${this.img}")`;
    },
   }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.item {
   background: #ffffff;
   color: $primary-blue;
   width: 100%;
   text-align: center;
   margin: 0 0 2em 0;

   &:hover {
      background-color: rgba($primary-gray,.1);
   }

   &__buy {
      background-color: transparent;
      font-weight: 500;
      text-transform: uppercase;
      cursor: pointer;
      padding: 1em 3em;
      border: 1px solid $primary-gray;
      @include border-radius(10em);
      outline: none;
      transition: .3s;

      &:hover {
         background: $primary-gradient;
         color: #ffffff;
         border: 0;
      }
   }

   &__image {
      @include border-radius(1em);
      position: relative;
      background-color: #eaeaea;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 85%;
      margin: 0 auto;
      height: 20em;
      cursor: pointer;
   }

   &__name {
      padding-top: 0.5em;
      font-family: 'Bebas Neue';
      font-size: 2em;
      cursor: pointer;
   }

   &__price {
      z-index: 1000;
      position: absolute;
      right: 1em;
      top: 1em;
      height: 3em;
      width: 6em;
      display: flex;
      align-items: center;
      justify-content: center;
      @include border-radius(3em);
      font-family: 'Roboto';
      color: #ffffff;
      background: $primary-blue;
      font-size: 1.3em;

      &::after {
         content: ' $'
      }
   }
}
</style>