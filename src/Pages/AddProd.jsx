// import { useState } from "react";

// export default function AddProduct() {
//   const [product, setProduct] = useState({
//     title: "",
//     brand: "",
//     category: "",
//     price: "",
//     weight: "",
//     stock: "",
//     warranty: "",
//     rating: "",
//     shipping: "",
//     returnPolicy: "",
//   });

//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleSubmit = () => {
//     fetch("https://dummyjson.com/products/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(product),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data); // API response
//         setShowSuccess(true); // Show success popup
//       });
//   };

//   return (
//   )
// }
