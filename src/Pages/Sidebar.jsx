// import { Button } from "react-bootstrap";

// export default function Sidebar() {
//   return (
//     <div
//       className="text-white p-3 min-vh-100 d-flex flex-column align-items-center"
//       style={{ width: "250px", backgroundColor: "#0A1D37" }}
//     >
//       <Button
//         variant="light"
//         style={{ width: "80%", textAlign: "center", marginTop: "20px" }}
//       >
//         Products
//       </Button>
//     </div>
//   );
// }

export default function Sidebar() {
  return (
    <div
      className="text-white p-3 d-flex flex-column align-items-center"
      style={{
        width: "250px",
        backgroundColor: "#020d35ff",
        minHeight: "100vh", // Correct way
      }}
    >
      <button className="btn btn-light" style={{ width: "80%", marginTop: 20 }}>
        Products
      </button>
    </div>
  );
}
