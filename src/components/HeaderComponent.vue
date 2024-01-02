<template>
    <header class="header-container">
      <span class="header-title">Warehouse Client Portal</span>
      <div class="header-buttons">
        <button
          type="button"
          class="btn btn-success"
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
        console.log("Toggle product view!");
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
  }
  
  .header-buttons {
    display: flex;
    align-items: center;
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
  