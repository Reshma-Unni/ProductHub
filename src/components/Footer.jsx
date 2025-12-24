export default function Footer() {
  return (
    <footer
      className="text-white py-4 mt-auto"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/src/assets/Image-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container d-flex justify-content-center align-items-center">
        <span className="fw-semibold fs-5">
          © 2025 <span className="text-warning">ProductHub</span>.
        </span>
      </div>
    </footer>
  );
}
