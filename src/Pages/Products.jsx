import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditProduct from "./EditProd";

export default function Products() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [show, setShow] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=8&skip=${skip}`)
      .then((res) => res.json())
      .then((result) => setData(result.products));
  }, [skip]);

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShow(true);
    setDeleteSuccess(false); // reset success message
  };
  const handleDelete = () => {
    fetch(`https://dummyjson.com/products/${deleteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setDeleteSuccess(true); // show success msg
        setTimeout(() => setShow(false), 1500); // auto close after 1.5 sec
      });
  };

  const handleSearch = () => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result.products); // only searched items
      });
  };

  return (
    <div
      className="container "
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1564866657311-33b2a52cdd5c?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        color: "white",
      }}
    >
      <h2 className="text-center mb-3">Product List</h2>

      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-primary mb-3"
          onClick={() => navigate("/product/add")}
        >
          Add Product
        </button>
      </div>

      <div className="d-flex justify-content-end mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ borderWidth: "2px", width: "250px" }}
        />

        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      <table className="table table-dark table-striped table-bordered text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td className="text-center">
                <div className="d-flex gap-2 justify-content-center">
                  <Link to={`/product/${item.id}`}>
                    <Button variant="primary">View</Button>
                  </Link>

                  <button
                    className="btn btn-danger"
                    onClick={() => confirmDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end gap-2 mt-3">
        <button
          className="btn btn-primary"
          onClick={() => setSkip(skip - 10)}
          disabled={skip === 0}
        >
          Previous
        </button>
        <button className="btn btn-primary" onClick={() => setSkip(skip + 10)}>
          Next
        </button>
      </div>
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
          {!deleteSuccess && (
            <>
              <Button variant="secondary" onClick={() => setShow(false)}>
                No
              </Button>

              <Button variant="danger" onClick={handleDelete}>
                Yes, Delete
              </Button>
            </>
          )}

          {deleteSuccess && (
            <Button variant="success" onClick={() => setShow(false)}>
              OK
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
