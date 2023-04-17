import React from "react"
import { useLocation } from "react-router-dom"
import { useGetSpecificItem } from "./queries";

export function MenuItemDetails(){
  const {state} = useLocation();

  const {mutate: getSpecificItem, isLoading, isSuccess, data} = useGetSpecificItem()
  const [] = React.useState({
    foodCode: '',

  });

  React.useState(()=>{
    if(state.id){
      getSpecificItem(state.id)
    }
  }, [state.id])

	return <>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Menu Item Details</h1>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="container-fluid">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div class="card card-secondary">
                      <div class="card-header">
                        <h3 class="card-title">General</h3>

                        <div class="card-tools">
                          <button
                            type="button"
                            class="btn btn-tool"
                            data-card-widget="collapse"
                            title="Collapse"
                          >
                            <i class="fas fa-minus"></i>
                          </button>
                        </div>
                      </div>
                      <div class="card-body" style={{display: "block"}}>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Item Name</label>
                          <input
                            class="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter name"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Description</label>
                          <textarea
                            type="number"
                            class="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter quantity"
                          ></textarea>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputFile">Image</label>

                          <div
                            class="product-image-thumb active mb-2"
                            style={{maxWidth: "20rem"}}
                          >
                            <img
                              src="https://jslight.com.np/wp-content/uploads/2022/06/foodie-buff-momo.jpg"
                              alt="Product Image"
                            />
                          </div>
                          <div class="input-group">
                            <div class="custom-file">
                              <input
                                type="file"
                                class="custom-file-input"
                                id="exampleInputFile"
                              />
                              <label
                                class="custom-file-label"
                                for="exampleInputFile"
                                >Choose file</label
                              >
                            </div>
                            <div class="input-group-append">
                              <span class="input-group-text">Upload</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="card card-secondary">
                      <div class="card-header">
                        <h3 class="card-title">Ingridients</h3>

                        <div class="card-tools">
                          <button
                            type="button"
                            class="btn btn-tool"
                            data-card-widget="collapse"
                            title="Collapse"
                          >
                            <i class="fas fa-minus"></i>
                          </button>
                        </div>
                      </div>
                      <div class="card-body p-0">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Quantity</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input
                                  type="text"
                                  id="inputName"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  id="inputName"
                                  class="form-control"
                                />
                              </td>
                              <td class="text-right py-0 align-middle">
                                <a href="#" class="btn btn-sm btn-danger"
                                  ><i class="fas fa-trash"></i
                                ></a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="text"
                                  id="inputName"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  id="inputName"
                                  class="form-control"
                                />
                              </td>
                              <td class="text-right py-0 align-middle">
                                <a href="#" class="btn btn-sm btn-danger"
                                  ><i class="fas fa-trash"></i
                                ></a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input
                                  type="text"
                                  id="inputName"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  id="inputName"
                                  class="form-control"
                                />
                              </td>
                              <td class="text-right py-0 align-middle">
                                <a href="#" class="btn btn-sm btn-danger"
                                  ><i class="fas fa-trash"></i
                                ></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="ml-4 mb-3">
                          <button class="btn btn-info">Add More +</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <a href="#" class="btn btn-secondary">Cancel</a>
                    <input
                      type="submit"
                      value="Save Changes"
                      class="btn btn-success float-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <aside class="control-sidebar control-sidebar-dark">
      </aside>
	</>

}