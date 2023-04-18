import React from "react"
import { useLocation,useNavigate } from "react-router-dom"
import { useCreateFood,useGetAllSubCategories,useGetSpecificItem } from "./queries";
import { Form,Formik } from "formik";
import Select from 'react-select';
import { toast } from "react-toastify";
import axios from "axios";


export function MenuItemDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutate: getSpecificItem,isLoading,isSuccess,data } = useGetSpecificItem()
  const { data: subCategories,isLoading: subCatLoading,} = useGetAllSubCategories()
  const { mutate: createFoodItem,isLoading: isCreateFoodLoading } = useCreateFood(() => {
    toast.success("Successfully Created Food Item.")
    navigate("/manager/item-list")
  })

  React.useState(() => {
    // if (state?.data) {
    //   getSpecificItem(state?.id)
    // }
  },[state?.data])

  const [formState,setFormState] = React.useState({
    foodCode: '',
    foodName: "",
    price: 0,
    // todo remove 
    quantity: 100,
    description: "",
    file: null,
    subCategoryId: null,
    hasDiscount: false,
    discount: 0
  });

  const onCancel = () => {
    navigate("/manager/item-list")
  }

  const onSubmit = (values) => {
    createFoodItem(axios.toFormData(values));
  }

  console.log({subCategories})
  const subCatOptions = subCategories?.map((item) => ({
    label: item.name,
    value: item.id
  })) || [];

  // todo validations
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
            <Formik
              initialValues={formState}
              onSubmit={onSubmit}
              enableReinitialize
            >
              {
                ({ values,handleChange,handleBlur,setFieldValue,setFieldTouched }) => {
                  return (
                    <Form>
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
                              <div class="card-body" style={{ display: "block" }}>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">Item Code</label>
                                  <input
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter name"
                                    name="foodCode"
                                    value={values.foodCode}
                                    onChange={handleChange}
                                    handleBlur={handleBlur}
                                  />
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">Item Name</label>
                                  <input
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter name"
                                    name="foodName"
                                    value={values.foodName}
                                    onChange={handleChange}
                                    handleBlur={handleBlur}
                                  />
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">Item Price</label>
                                  <input
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter Price"
                                    type="number"
                                    name="price"
                                    value={values.price}
                                    onChange={handleChange}
                                    handleBlur={handleBlur}
                                  />
                                </div>

                                <div class="form-group">
                                  <label for="exampleInputEmail1">Description</label>
                                  <textarea
                                    type="number"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter quantity"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    handleBlur={handleBlur}
                                  ></textarea>
                                </div>

                                <div class="form-group">
                                  <label for="exampleInputFile">Image</label>
                                  <div
                                    class="product-image-thumb active mb-2"
                                    style={{ maxWidth: "20rem" }}
                                  >
                                    {
                                      values.file ?
                                        <img
                                          src={URL.createObjectURL(values.file)}
                                        /> :
                                        "No image selected"
                                    }
                                  </div>
                                  <div class="input-group">
                                    <div class="custom-file">
                                      <input
                                        type="file"
                                        class="custom-file-input"
                                        id="exampleInputFile"
                                        value={""}
                                        onChange={(e) => {
                                          setFieldValue("file",e.target.files[0])
                                        }}
                                      />
                                      <label
                                        class="custom-file-label"
                                        for="exampleInputFile"
                                      >{values.file?.name || "Choose file"}</label>
                                    </div>
                                    <button onClick={() => {
                                      setFieldValue("file",null)
                                    }} className="btn btn-secondary">Cancel</button>
                                  </div>
                                </div>

                                <div class="form-group">
                                  <label for="exampleInputEmail1">Category</label>

                                  <Select
                                    classNamePrefix="select"
                                    name="subCategoryId"
                                    value={subCatOptions.find((item) => item.value == values.subCategoryId)}
                                    options={
                                      subCatOptions || []
                                    }
                                    onChange={(e) => {
                                      if (e?.value) {
                                        setFieldValue("subCategoryId",e.value)
                                      } else {
                                        setFieldValue("subCategoryId",null);
                                      }
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div class="col-6">
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
                      </div> */}
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <button class="btn btn-secondary" onClick={() => onCancel()}>Cancel</button>
                            <input
                              type="submit"
                              value="Save Changes"
                              class="btn btn-success float-right"
                            />
                          </div>
                        </div>
                      </div>
                    </Form>
                  )
                }
              }
            </Formik>

          </div>
        </div>
      </section>
    </div>
  </>

}