<template>
  <div class="container details">
    <div class="details__image" :style="style"></div>
    <h1 class="details__name">{{ myItem.name }}</h1>
    <div class="details__info">
      <div class="details__info__price"> {{ myItem.price }} </div>
      <div class="details__info__buy"> <button @click="addToCart">ADD TO CARD</button> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `Details`,

  data() {
    return {
      image: this.$store.getters.searchItemById(this.$route.params.id).img
    };
  },

  computed: {
    getId() {
      return this.$route.params.id;
    },


    myItem() {
      return this.$store.getters.searchItemById(this.getId)
    },

    style() {
      return `background-image: url("${this.image}")`
    }
  },

  methods: {
    addToCart() {
      return this.$store.commit('ADDTOCART',this.myItem);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.container {
  margin-top: 3em;
  margin-bottom: 3em;
  padding: 2em 1em;
  @include border-radius(0.3em);
}

.details {
  &__name {
    color: $primary-blue;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.5em;
    padding-top: 1em;
  }

  &__image {
    width: 80%;
    height: 30em;
    margin: 0 auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: rgba($primary-gray, .1);
    @include border-radius(0.3em);
  }

  &__info {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>