import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Products() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
      .then((res) => res.json())
      .then((result) => setData(result.products));
  }, [skip]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Product List</h2>

      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary mb-3">Add Product</button>
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
                  {/* <button className="btn btn-sm btn-info">View</button> */}
                  <button className="btn btn-sm btn-warning">Edit</button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => navigate(`/delete/${item.id}`)}
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
    </div>
  );
}
