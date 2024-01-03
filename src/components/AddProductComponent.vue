<template>
    <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
      <div class="card w-100 my-2 shadow-2-strong">
        <div class="card-body d-flex flex-column">
          <div class="form-group">
            <h6 v-if="hasError" style="color: red">
              Could not save product info
            </h6>
            <label for="productName">Product Name</label>
            <input
              type="text"
              class="form-control"
              id="productName"
              placeholder="Enter name"
              v-model="product.name"
            />
          </div>
          <div class="form-group">
            <label for="productDescription">Product Description</label>
            <input
              type="text"
              class="form-control"
              id="productDescription"
              placeholder="Enter description"
              v-model="product.description"
            />
          </div>
          <div class="form-group">
            <label for="productAmount">Product Qty</label>
            <input
              type="text"
              class="form-control"
              id="productQty"
              placeholder="Enter qty"
              v-model="product.amount"
            />
          </div>
          <div class="form-group">
            <label for="productPrice">Product Price</label>
            <input
              type="text"
              class="form-control"
              id="productPrice"
              placeholder="Enter price"
              v-model="product.price"
            />
          </div>
          <div class="card-footer align-items-end">
            <div class="col-12 pt-2">
              <button type="button" class="btn btn-success" @click="addProduct">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProductService from '@/ProductService';
  
  export default {
    name: "AddProduct",
    data() {
      return {
        product: {
          name: "",
          description: "",
          amount: null,
          price: null,
        },
        hasError: false,
      };
    },
    methods: {
      async addProduct() {
        const response = await ProductService.addProduct(this.product);
  
        if (response.data.success) {
          this.hasError = false;
          location.reload();
        } else {
          this.hasError = true;
        }
      },
    },
  };
  </script>