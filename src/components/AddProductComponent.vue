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
              v-model="product.qty"
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
          qty: null,
          price: null,
        },
        hasError: false,
      };
    },
    methods: {
      async addProduct() {
        const response = await ProductService.createProduct(this.product);

        if (response.data['message'] == 'Product added successfully!') {
          this.hasError = false;
          location.reload();
        } else {
          this.hasError = true;
        }
      },
    },
  };
  </script>

<style scoped>
  .card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .card-footer {
    background-color: #f8f9fa;
    border-top: 1px solid #ccc;
    padding: 10px 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .btn-success {
    background-color: #28a745;
    color: #fff;
    border: 1px solid #218838;
    border-radius: 4px;
    padding: 8px 15px;
    cursor: pointer;
  }

  .btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }

  .has-error {
    color: red;
  }
</style>
