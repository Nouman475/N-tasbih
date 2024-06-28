function Navbar(props) {
  return (
    <>
      <nav
        className="navbar bg-success border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
