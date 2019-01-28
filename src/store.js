import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      itemsInCart: 0,
      inCart: [],

      items: [
         {
            id: 1,
            name: "Nike VaporFly",
            price: 139.99,
            img: "http://pluspng.com/img-png/nike-shoe-png--400.png",
            description:
               "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a"
         },
         {
            id: 2,
            name: "Nike Air Monarch",
            price: 120.59,
            img:
               "http://pluspng.com/img-png/nike-shoe-png-nike-shoes-png-transparent-image-512.png"
         },
         {
            id: 3,
            name: "Nike Zoom 2K",
            price: 116.0,
            img:
               "http://pluspng.com/img-png/nike-shoe-png-nike-running-shoes-png-image-1276.png"
         },
         {
            id: 4,
            name: "Nike Air Max Deluxe",
            price: 99.99,
            img:
               "http://pluspng.com/img-png/nike-shoe-png-nike-running-shoes-png-image-1277.png"
         },
         {
            id: 5,
            name: "Nike Air Force",
            price: 39.25,
            img:
               "http://pluspng.com/img-png/download-running-shoes-png-images-transparent-gallery-advertisement-500.png"
         },
         {
            id: 6,
            name: "Nike Free RN 2018",
            price: 81.09,
            img:
               "http://pluspng.com/img-png/nike-running-shoes-png-image-transparent-free-download-1200.png"
         },
         {
            id: 7,
            name: "Nike Metcon 4",
            price: 503.98,
            img: "http://pluspng.com/img-png/running-shoes-png-image-1200.png"
         },
         {
            id: 8,
            name: "Nike Downshifter 8",
            price: 43.99,
            img:
               "http://pluspng.com/img-png/download-running-shoes-png-images-transparent-gallery-advertisement-1240.png"
         },
         {
            id: 9,
            name: "Nike Air Max 270",
            price: 145.0,
            img: "http://pluspng.com/img-png/running-shoes-png-image-1500.png"
         },
         {
            id: 10,
            name: "Nike Air Max 270",
            price: 145.0,
            img:
               "http://pluspng.com/img-png/download-running-shoes-png-images-transparent-gallery-advertisement-500.png"
         }
      ]
   },

   getters: {
      getItems: state => state.items,
      numberOfItems: state => state.itemsInCart,
      searchItemById: state => id => {
         return state.items.find(item => item.id === id);
      }
   },

   mutations: {
      ADDTOCART: (state, item) => {
         state.itemsInCart++;
         state.inCart.push(item);
         console.log(state.inCart);
      }
   },

   actions: {}
});
