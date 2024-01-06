<template>
    <div class="container">
      <HeaderComponent
        :isAddNewProductVisible="isAddNewProductVisible"
        @add-product="toggleAddProductView"
      />
      <section>
        <div class="container my-5">
          <header class="mb-4">
            <h3>{{ isAddNewProductVisible ? "New Product" : "Products" }}</h3>
          </header>
          <div v-if="hasError">
            <h5>Could not retrieve all products. Please try later!</h5>
          </div>
          <div v-if="!isAddNewProductVisible" class="row">
            <ProductComponent @add-product="handleAddProduct"/>
          </div>
          <div v-else><AddProductComponent 
            :initialData = "editProductData"
            :isEditMode="isEditMode"
            @add-product="handleAddProduct"
            /></div>
        </div>
      </section>
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import ProductComponent from './ProductComponent.vue';
  import HeaderComponent from './HeaderComponent.vue';
  import FooterComponent from './FooterComponent.vue';
  import AddProductComponent from './AddProductComponent.vue';

  export default {
    name: 'HomeComponent',
    components: {
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    AddProductComponent
    },

    data() {
        return {
            isAddNewProductVisible: false,
            isEditMode: false,
            editProductData: {},
            hasError: false,
        };
    },

    methods: {
        toggleAddProductView() {
            this.isAddNewProductVisible = !this.isAddNewProductVisible;
            this.isEditMode = false;
        },
        handleAddProduct(productData) {
          this.editProductData = productData;
          this.isEditMode = true;
          this.isAddNewProductVisible = true;
        }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>