<template>
  <div class="container">
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="products-container">
      <div class="product" 
      v-for="(product,index) in products"
      v-bind:item="product"
      v-bind:index="index"
      v-bind:key="product._id">
        <h2 class="Name">Name: {{ product.name }}</h2>
        <p class="Description">Description: {{ product.description }}</p>
        <p class="Numerals">Price: EUR {{ product.price }}</p>
        <p class="Numerals">Qty: {{ product.qty }}</p>
       <p class="id">Product ID: {{ product.id }}</p>

        <button @click="editProduct(product)">Edit</button>
        <button @click="deleteProduct(product.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '../ProductService';
export default {
  name: 'ProductComponent',
  data() {
    return {
      products: [],
      error: '',
      text: ''
    }
  },
  methods: {
    async fetchProducts() {
      try {
        this.products = await ProductService.getProducts();
      } catch (error) {
        this.error = 'Failed to load products';
      }
    },
    editProduct(product) {
      this.$emit("add-product",product);
    },
    async deleteProduct(productId) {
      try {
        await ProductService.deleteProduct(productId);
        this.fetchProducts();
      } catch (error) {
        console.error(`Error deleting product:`, error);
      }
    },
  },
  created() {
    this.fetchProducts();
  },
}
</script>

<style scoped>
div.container {
  max-width: 100%;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

div.product {
  max-width: 400px;
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px;
  margin-bottom: 15px;
}

h2.Name {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

p.Description {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0;
}
</style>
