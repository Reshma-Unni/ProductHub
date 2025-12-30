// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { getAllProducts, deleteProduct, searchProduct } from "../utils/api";

// export default function Products() {
//   const [data, setData] = useState([]);
//   const [skip, setSkip] = useState(0);
//   // const navigate = useNavigate();
//   const [search, setSearch] = useState("");
//   const [deleteId, setDeleteId] = useState(null);
//   const [show, setShow] = useState(false);
//   const [deleteSuccess, setDeleteSuccess] = useState(false);

//   // useEffect(() => {
//   //   fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
//   //     .then((res) => res.json())
//   //     .then((result) => setData(result.products));
//   // }, [skip]);

//   useEffect(() => {
//     getAllProducts(10, skip).then((result) => {
//       setData(result.products);
//     });
//   }, [skip]);

//   const confirmDelete = (id) => {
//     setDeleteId(id);
//     setShow(true);
//     setDeleteSuccess(false); // reset success message
//   };
//   // const handleDelete = () => {
//   //   fetch(`https://dummyjson.com/products/${deleteId}`, {
//   //     method: "DELETE",
//   //   })
//   //     .then((res) => res.json())
//   //     .then(() => {
//   //       setDeleteSuccess(true); // show success msg
//   //       setTimeout(() => setShow(false), 1500); // auto close after 1.5 sec
//   //     });
//   // };

//   const handleDelete = () => {
//     deleteProduct(deleteId)
//       .then(() => {
//         setDeleteSuccess(true); // show success msg
//         setTimeout(() => setShow(false), 1500); // auto close after 1.5 sec
//       })
//       .catch((err) => console.error(err));
//   };

//   // const handleSearch = () => {
//   //   fetch(`https://dummyjson.com/products/search?q=${search}`)
//   //     .then((res) => res.json())
//   //     .then((result) => {
//   //       setData(result.products); // only searched items
//   //     });
//   // };

//   const handleSearch = async () => {
//     try {
//       const result = await searchProduct(search);
//       setData(result.products);
//     } catch (error) {
//       console.error("Search failed:", error);
//     }
//   };

//   return (
//     <div
//       className="container "
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1564866657311-33b2a52cdd5c?auto=format&fit=crop&w=1470&q=80')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         padding: "20px",
//         color: "white",
//       }}
//     >
//       <h2 className="text-center mb-3">Product List</h2>

//       {/* <div className="d-flex justify-content-end mb-3">
//         <button
//           className="btn btn-primary mb-3"
//           onClick={() => navigate("/addproduct")}
//         >
//           Add Product
//         </button>
//       </div> */}

//       <div className="d-flex justify-content-end mb-3">
//         <input
//           type="text"
//           className="form-control me-2"
//           placeholder="Search product..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{ borderWidth: "2px", width: "250px" }}
//         />

//         <button className="btn btn-primary" onClick={handleSearch}>
//           Search
//         </button>
//       </div>

//       <table className="table table-dark table-striped table-bordered text-center">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.title}</td>
//               <td>{item.description}</td>
//               <td className="text-center">
//                 <div className="d-flex gap-2 justify-content-center">
//                   <Link to={`${item.id}`}>
//                     <Button variant="primary">View</Button>
//                   </Link>

//                   <button
//                     className="btn btn-danger"
//                     onClick={() => confirmDelete(item.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="d-flex justify-content-end gap-2 mt-3">
//         <button
//           className="btn btn-primary"
//           onClick={() => setSkip(skip - 10)}
//           disabled={skip === 0}
//         >
//           Previous
//         </button>
//         <button className="btn btn-primary" onClick={() => setSkip(skip + 10)}>
//           Next
//         </button>
//       </div>
//       <Modal show={show} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {deleteSuccess ? "Deleted!" : "Confirm Delete"}
//           </Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           {deleteSuccess
//             ? "Product has been deleted successfully."
//             : "Are you sure you want to delete this product?"}
//         </Modal.Body>

//         <Modal.Footer>
//           {!deleteSuccess && (
//             <>
//               <Button variant="secondary" onClick={() => setShow(false)}>
//                 No
//               </Button>

//               <Button variant="danger" onClick={handleDelete}>
//                 Yes, Delete
//               </Button>
//             </>
//           )}

//           {deleteSuccess && (
//             <Button variant="success" onClick={() => setShow(false)}>
//               OK
//             </Button>
//           )}
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Card, Row, Col, Badge } from "react-bootstrap";
import { getAllProducts, deleteProduct, searchProduct } from "../utils/api";

export default function Products() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [show, setShow] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    getAllProducts(12, skip).then((result) => {
      setData(result.products);
    });
  }, [skip]);

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShow(true);
    setDeleteSuccess(false);
  };

  const handleDelete = () => {
    deleteProduct(deleteId)
      .then(() => {
        setDeleteSuccess(true);
        setTimeout(() => setShow(false), 1500);
      })
      .catch((err) => console.error(err));
  };

  const handleSearch = async () => {
    try {
      const result = await searchProduct(search);
      setData(result.products);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div
      className="container py-3"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1564866657311-33b2a52cdd5c?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-center text-white mb-4">Product List</h2>

      {/* Search */}
      <div className="d-flex justify-content-end mb-4">
        <input
          type="text"
          className="form-control me-2 w-25"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* Product Cards */}
      <Row className="g-4">
        {data.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={item.thumbnail}
                style={{
                  height: "200px",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa",
                }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-6 fw-bold">{item.title}</Card.Title>

                <Card.Text className="text-muted small">
                  {item.description.slice(0, 70)}...
                </Card.Text>

                <Badge bg="success" className="mb-2 align-self-start">
                  ⭐ {item.rating}
                </Badge>

                <h5 className="mt-auto text-primary">₹{item.price}</h5>

                <div className="d-flex gap-2 mt-2">
                  <Link to={`${item.id}`} className="w-100">
                    <Button variant="primary" className="w-100">
                      View
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    className="w-100"
                    onClick={() => confirmDelete(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-end gap-2 mt-4">
        <Button onClick={() => setSkip(skip - 10)} disabled={skip === 0}>
          Previous
        </Button>
        <Button onClick={() => setSkip(skip + 10)}>Next</Button>
      </div>

      {/* Delete Modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {deleteSuccess ? "Deleted!" : "Confirm Delete"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {deleteSuccess
            ? "Product has been deleted successfully."
            : "Are you sure you want to delete this product?"}
        </Modal.Body>

        <Modal.Footer>
          {!deleteSuccess ? (
            <>
              <Button variant="secondary" onClick={() => setShow(false)}>
                No
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Yes, Delete
              </Button>
            </>
          ) : (
            <Button variant="success" onClick={() => setShow(false)}>
              OK
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
