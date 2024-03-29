export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
      <div className="container-xl ">
        <div className="navbar-brand">
          <h3>Rajasthan Ujala</h3>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Latest News
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Business
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bollywood
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                E-Paper
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button type="button" className="btn btn-danger">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
}
