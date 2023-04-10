export function CustomerMenuItemList() {
  return <>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Menu</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="content">

        <div class="card card-solid">
          <div class="card-header p-0 border-bottom-0">
            <ul class="nav nav-tabs" id="custom-tabs-four-tab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="custom-tabs-four-home-tab"
                  data-toggle="pill"
                  href="#custom-tabs-four-home"
                  role="tab"
                  aria-controls="custom-tabs-four-home"
                  aria-selected="true">Recommended for you</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="custom-tabs-four-profile-tab"
                  data-toggle="pill"
                  href="#custom-tabs-four-profile"
                  role="tab"
                  aria-controls="custom-tabs-four-profile"
                  aria-selected="false">Appetizer</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="custom-tabs-four-messages-tab" data-toggle="pill" href="#custom-tabs-four-messages" role="tab" aria-controls="custom-tabs-four-messages" aria-selected="false">Salads</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="custom-tabs-four-settings-tab" data-toggle="pill" href="#custom-tabs-four-settings" role="tab" aria-controls="custom-tabs-four-settings" aria-selected="false">Soups</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="custom-tabs-four-settings-tab" data-toggle="pill" href="#custom-tabs-four-settings" role="tab" aria-controls="custom-tabs-four-settings" aria-selected="false">Main Course</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="custom-tabs-four-settings-tab" data-toggle="pill" href="#custom-tabs-four-settings" role="tab" aria-controls="custom-tabs-four-settings" aria-selected="false"> Deserts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="custom-tabs-four-settings-tab" data-toggle="pill" href="#custom-tabs-four-settings" role="tab" aria-controls="custom-tabs-four-settings" aria-selected="false"> Beverages</a>
              </li>
            </ul>
          </div>
          <div class="card-body pb-0">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div class="card d-flex flex-fill">

                  <div class="card-body">
                    <div class="row">
                      <div class="col-7">
                        <h2 class="lead"><b>Pizza</b></h2>
                        <p class="text-muted text-sm"><b>Description: </b>Momo is a dumpling </p>
                      </div>
                      <div class="col-5 text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" alt="user-avatar" class="img-circle img-fluid" />                        </div>
                    </div>
                  </div>
                  <div class="card-footer bg-white d-flex">
                    <div class="input-group input-group-sm ml-auto" style={{ "maxWidth": "120px" }}>
                      <span class="input-group-btn">
                        <button type="button" class="quantity-left-minus btn btn-sm btn-number btn-light" data-type="minus" data-field="">
                          <span class="">-</span>
                        </button>
                      </span>
                      <input type="text" id="quantity" name="quantity" class="form-control input-number" style={{ "max-width": "50px" }} value="10" min="1" max="100" />
                      <span class="input-group-btn">
                        <button type="button" class="quantity-right-plus btn btn-sm btn-light btn-number" data-type="plus" data-field="">
                          <span class="">+</span>
                        </button>
                      </span>
                    </div>
                    <a href="#" class="btn btn-sm btn-light">
                      Add to My Orders
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div class="card d-flex flex-fill">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-7">
                        <h2 class="lead"><b>Pizza</b></h2>
                        <p class="text-muted text-sm"><b>Description: </b>Momo is a dumpling </p>
                      </div>
                      <div class="col-5 text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" alt="user-avatar" class="img-circle img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="card-footer bg-white d-flex">
                    <div class="input-group input-group-sm ml-auto" style={{ "max-width": "120px" }}>
                      <span class="input-group-btn">
                        <button type="button" class="quantity-left-minus btn btn-sm btn-number btn-light" data-type="minus" data-field="">
                          <span class="">-</span>
                        </button>
                      </span>
                      <input type="text" id="quantity" name="quantity" class="form-control input-number" style={{ "max-width": "50px" }} value="10" min="1" max="100" />
                      <span class="input-group-btn">
                        <button type="button" class="quantity-right-plus btn btn-sm btn-light btn-number" data-type="plus" data-field="">
                          <span class="">+</span>
                        </button>
                      </span>
                    </div>
                    <a href="#" class="btn btn-sm btn-light">
                      Add to My Orders
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
}