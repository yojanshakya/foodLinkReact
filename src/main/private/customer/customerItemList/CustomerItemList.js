import React, { useContext } from "react"
import { FoodCart } from "../../../../components/FoodCard/FoodCart"
import { useGetAllMenuItem,useGetRecommendation } from "./queries"
import { ordersContext } from "../CustomerMain"


const TabOptions = {
  menu: "menu",
  recommendation: "recommendation"
}
export function CustomerMenuItemList() {

  const [tab,setTab] = React.useState(TabOptions.recommendation)
  const changeTab = (tab) => {
    setTab(tab)
  }

  const { data: allMenuItem,isError: isMenuItemsError,isFetching: isMenuItemsFetching } = useGetAllMenuItem();
  const { data: recommendationItems,isError: isRecommendationError,isFetching: isRecommendationFetching } = useGetRecommendation();

  const {orders, updatedOrders} = useContext(ordersContext)

  console.log({orders})

  const onAddToCart = (item, quantity)=>{
    updatedOrders({...item, quantity})
  }

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
                <button
                  class={`nav-link ${tab == TabOptions.recommendation && 'active'}`}
                  id="custom-tabs-four-home-tab"
                  href="#custom-tabs-four-home"
                  role="tab"
                  aria-controls="custom-tabs-four-home"
                  aria-selected="true"
                  onClick={() => {
                    changeTab(TabOptions.recommendation)
                  }}
                >Recommended for you</button>
              </li>
              <li class="nav-item">
                <button
                  class={`nav-link ${tab == TabOptions.menu && 'active'}`}
                  id="custom-tabs-four-profile-tab"
                  href="#custom-tabs-four-profile"
                  role="tab"
                  onClick={() => {
                    changeTab(TabOptions.menu)
                  }}
                  aria-selected="false">Menu</button>
              </li>
            </ul>
          </div>
          <div class="card-body pb-0">
            <div class="row">
              {
                tab == TabOptions.menu
                ? (
                  allMenuItem?.map((item) =>
                    <FoodCart
                      item={item}
                      imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg"}
                      onAddToCart={onAddToCart}
                    />
                  )
                ) : recommendationItems?.map((item) =>
                <FoodCart
                  item={item}
                  onAddToCart={onAddToCart}
                />)
              }

            </div>
          </div>
        </div>
      </section>
    </div>
  </>
}