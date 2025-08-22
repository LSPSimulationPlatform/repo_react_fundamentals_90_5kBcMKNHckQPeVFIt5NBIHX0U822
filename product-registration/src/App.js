import { useState } from "react"; // Import the useState hook from React for state management
import ProductCreate from "./components/ProductCreate"; // Import the ProductCreate component from the components folder

function App() {
  // Declare a state variable 'products' with an initial empty array
  // 'setProducts' is a function to update the 'products' state
  const [products, setProducts] = useState([]);

  // Define a function to add a new product to the list
  const addProduct = (newProduct) => {
    console.log("New Product", newProduct); // Log the new product to the console
    setProducts((prev) => [...prev, newProduct]); // Add the new product to the existing list using spread operator
  };

  // Render the ProductCreate component and pass the addProduct function as a prop
  return (
    <div>
      <ProductCreate onAddProduct={addProduct} />
    </div>
  );
}

export default App; // Export the App component as the default export