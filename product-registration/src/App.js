// Import React and useState hook for managing state in functional components
import React, { useState } from "react";

// Import custom components from local files
import MainPage from "./components/MainPage";         // Main menu page component
import ProductCreate from "./components/ProductCreate"; // Page for creating a new product
import ProductList from "./components/ProductList";     // Page for listing all products

// Define the main App component
function App() {
  // useState to keep track of the current page being displayed (default is "main")
  const [currentPage, setCurrentPage] = useState("main");

  // useState to store a list of all products created
  const [products, setProducts] = useState([]);

  // Function to add a new product to the products array
  const addProduct = (newProduct) => {
    // Append the new product to the previous state array
    setProducts((prev) => [...prev, newProduct]);
  };

  // Define a variable to hold the content of the current page
  let pageContent;

  // Use a switch statement to render the appropriate page based on currentPage value
  switch (currentPage) {
    // If the page is "create", show the ProductCreate component
    case "create":
      pageContent = (
        // Pass addProduct function as onAddProduct, and setCurrentPage as onNavigate
        <ProductCreate onAddProduct={addProduct} onNavigate={setCurrentPage} />
      );
      break;

    // If the page is "list", show the ProductList component
    case "list":
      pageContent = (
        // Pass the products data and the navigation function as props
        <ProductList products={products} onNavigate={setCurrentPage} />
      );
      break;

    // For any other value (including "main"), show the MainPage component
    default:
      pageContent = <MainPage onSelectPage={setCurrentPage} />;
  }

  // Render the selected page component inside a <div>
  return (<div>{pageContent}</div>);
}

// Export the App component as the default export
export default App;