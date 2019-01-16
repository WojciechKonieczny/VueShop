<template>
   <nav class="main-menu container">
      <ul class="main-menu__list">
         <li class="main-menu__list__item">
            <router-link to="/">
               <i class="icon-home-circled"></i>
               Home
            </router-link>
         </li>
         <li class="main-menu__list__item">
            <router-link to="/about">
               <i class="icon-quote-circled"></i>
               About
            </router-link>
         </li>
         <li class="main-menu__list__item">
            <router-link to="/contact">
               <i class="icon-mail-circled"></i>   
               Contact
            </router-link>
         </li>
         <li class="main-menu__list__item">
            <router-link to="/login">
               <i class="icon-user-circle"></i>
               Login
            </router-link>
         </li>
         <li class="main-menu__list__item">
            <router-link to="/cart">
               <i class="icon-basket-circled"></i>
               Cart
            </router-link>
         </li>

         <li class="main-menu__list__item hidden" @click="showMenu">
               <i class="icon-menu-outline"></i>
         </li>
      </ul>
   </nav>
</template>

<script>
const menuItems = document.querySelectorAll(`.main-menu__list__item`);
   export default {
      name: `Menu`,
      
      methods: {
         showMenu() {
            menuItems.forEach(item => {
              console.log(`dziala`)
            });
         }
      }
   }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.main-menu {
   height: 12em;
   background-color: #ffffff;
   border-radius: 0.3em;
   box-shadow: 0 1em 0.6em -0.5em #5a64d6;

   .hidden {
      display: none;
   }

   &__list {
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(6,12em);
      grid-column-gap: 1em;
      grid-auto-rows: 8em;
      padding: 2em 0.5em;

      &__item {
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: row;
         border-radius: 0.3em;
         text-align: center;
         font-family: "Roboto";
         font-weight: 600;
         font-size: 1.3em;
         text-transform: uppercase;
         color: #9499CC;

         a {
            display: block;
            width: 100%;
            transition: .3s;
         }

         i {
            display: block;
            font-size: 2.5em;
            margin-bottom: 0.2em;
            color: #B8BEFF;
         }

         &:hover {
            transition: .3s;
            background: $primary-gradient;
            color: #ffffff;
            cursor: pointer;

            a, i {
               color: #eeeaea;
            }
         }
      }
   }
}

@media all and(max-width: $m-screen) {     
   .visible {
      display: block;
   }

   .main-menu {

      &__list { 
         background: #ffffff;
         grid-template-columns: 1fr;

         &__item {
            display: none;
         }
      }

      .hidden {
         display: flex;
         i {
            float: right;
         }

         &:focus .main-menu__list__item {
            display: block;
         }
      }
   }
}

</style>