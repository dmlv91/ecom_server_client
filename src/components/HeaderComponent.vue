<template>
    <header class="header-container">
      <span class="header-title">Warehouse Client Portal</span>
      <div class="header-buttons">
        <button
          type="button"
          class="custom-btn btn-success"
          @click="toggleAddProductView"
        >
          {{ isAddNewProductVisible ? "View products" : "Add product" }}
        </button>
      </div>
    </header>
  </template>
  
  <script>
  
  export default {
    name: "HeaderComponent",
    props: {
      isAddNewProductVisible: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {};
    },
    methods: {
      toggleAddProductView() {
        this.$emit("add-product");
      },
    },
  };
  </script>
  
  <style scoped>
  .header-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #dee2e6;
    background-color: #c9c1c1;
  }
  
  .header-title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-right: auto;
    color: #343a40;
    font-size: 1.5rem;
    font-family: 'Roboto',sans-serif;
  }
  
  .header-buttons {
    display: flex;
    align-items: center;
  }
  
  .custom-btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.75rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
  .btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}
  </style>
  