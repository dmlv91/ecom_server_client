<template>
  <div class="container">
    <h1>Products</h1>

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
        <div class="created-at">
           <p>Product added: {{ formatDate(product.createdAt) }}</p>
        </div>
       <p class="id">Product ID: {{ product.id }}</p>

        <button @click="editProduct(product.id)">Edit</button>
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
        console.log(this.products)
      } catch (error) {
        this.error = 'Failed to load products';
      }
    },
    // async editProduct(productId) {
    //   try {
    //     // Replace the following line with your actual edit logic
    //     const editedProduct = await ProductService.editProduct(productId, { /* edited data */ });
    //     console.log(`Edited product:`, editedProduct);
    //   } catch (error) {
    //     console.error(`Error editing product:`, error);
    //   }
    // },
    // async deleteProduct(productId) {
    //   try {
    //     // Replace the following line with your actual delete logic
    //     await ProductService.deleteProduct(productId);
    //     console.log(`Deleted product with ID: ${productId}`);
    //     this.fetchProducts(); // Refresh the product list after deletion
    //   } catch (error) {
    //     console.error(`Error deleting product:`, error);
    //   }
    // },
    formatDate(date) {
      return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    },
  },
  created() {
    this.fetchProducts();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 100;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}

div.product {
  max-width: 400px;
  position: relative;
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

h2.Name {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

p.Description {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
