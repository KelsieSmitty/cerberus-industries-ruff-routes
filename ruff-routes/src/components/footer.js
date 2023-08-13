import ruffRoutesWhiteLogo from "../images/paw.png"

export default function Footer() {
  return (

<div class="my-5 mb-0">
  {/* <!-- Footer --> */}
  <footer class="text-center text-white" style={{ backgroundColor: "#646464" }}>
    {/* <!-- Grid container --> */}
    <div class="container">
      <hr class="my-5" />

      {/* <!-- Section: Text --> */}
      <section class="mb-1">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>Made with love, coffee and Gavin's Mum's homemade cookies. 🍪</p>
          </div>
        </div>
      </section>
      {/* <!-- Section: Text -->

      <!-- Section: Social --> */}
      <section class="text-center mb-3">
        <img
          src={ruffRoutesWhiteLogo}
          alt="Logo"
          style={{
            width: "2rem",
            height: "2rem",
          }}
        />
      </section>
      {/* <!-- Section: Social --> */}
    </div>
    {/* <!-- Grid container -->

    <!-- Copyright --> */}
    <div
      class="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      2023 All rights reserved I think?
    </div>
    {/* <!-- Copyright --> */}
  </footer>
</div>

  /* <!-- End of .container --> */
  )}
