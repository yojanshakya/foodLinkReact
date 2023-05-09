

import { useNavigate } from "react-router-dom";
import { Loading } from "../../../../components/Loading/Loading";
import { useGetAllMenuItem } from "../../customer/customerItemList/queries"
import { useDeleteMenuItem,useGetSubCategoryWithFood } from "./queries";
import React,{ useContext } from "react"


export function MenuItemList() {

  const [tab,setTab] = React.useState()
  const navigate = useNavigate();

  const changeTab = (tab) => {
    setTab(tab)
  }

  const { data: subCatWithFood,isFetching,isError } = useGetSubCategoryWithFood();
  const subCats = subCatWithFood?.map((item) => item.category) || [];
  const { data: deleteData,mutate: deleteItem } = useDeleteMenuItem()

  React.useEffect(() => {
    if (subCats.length > 0 && !tab) {
      setTab(subCats[0])
    }
  },[subCats])

  const onAddNew = () => {
    navigate('/manager/item-details');
  }

  const onDelete = (id) => {
    deleteItem(id);
  }

  const onEdit = (item) => {
    navigate('/manager/item-details',{
      state: {
        item
      }
    })
  }

  console.log({ subCatWithFood })

  return <>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-12">
              <h1 className="text-center">Menu</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="content">

        {
          (subCatWithFood?.length === 0 && !isFetching) ?
            <p className="card card-solid p-4">There are no food items. Please Add</p> : <div class="card card-solid">
              <div class="card-header p-0 border-bottom-0">
                <ul class="nav nav-tabs" id="custom-tabs-four-tab" role="tablist">
                  {
                    subCats?.map((cat) => {
                      return <li class="nav-item">
                        <button
                          class={`nav-link ${tab == cat && 'active'}`}
                          id="custom-tabs-four-profile-tab"
                          href="#custom-tabs-four-profile"
                          role="tab"
                          onClick={() => {
                            changeTab(cat)
                          }}
                          aria-selected="false">{cat}</button>
                      </li>
                    })
                  }

                </ul>
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  {
                    isFetching ? <Loading /> : subCatWithFood?.find((subCat) => subCat.category === tab)?.items.map((item) => {
                      return <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                        <div class="card bg-light d-flex flex-fill">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-7">
                                <h2 class="lead"><b>{item.foodName}</b></h2>
                                <p class="text-muted text-sm"><b>Description: </b>{item.foodDescription} </p>
                              </div>
                              <div class="col-5 text-center">
                                {/** todo image */}
                                <img src={"data:image/png;base64," + item.foodImage} alt="user-avatar" class="img-circle img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div class="card-footer">
                            <div class="text-right">
                              <button onClick={() => onEdit(item)} class="btn btn-sm btn-primary">
                                Edit
                              </button>
                              <button onClick={() => onDelete(item.foodId)} type="button" class="btn ml-2 btn-sm btn-danger">
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    })
                  }

                </div>
              </div>
            </div>
        }

      </section>
      <div class="row mb-3">
        <div class="col-12">
          <button type="submit" onClick={() => onAddNew()} class="btn btn-success float-right" >Add new item</button>
        </div>
      </div>
    </div>
  </>
}
