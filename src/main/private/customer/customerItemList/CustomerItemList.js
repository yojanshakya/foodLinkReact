import React,{ useContext } from "react"
import { FoodCart } from "../../../../components/FoodCard/FoodCart"
import { useGetAllMenuItem,useGetRecommendation } from "./queries"
import { ordersContext } from "../CustomerMain"
import { useGetSubCategoryWithFood } from "../../manager/MenuItemList/queries"
import { toast } from "react-toastify"


const TabOptions = {
  recommendation: "recommendation"
}
export function CustomerMenuItemList() {

  const { orders,updateOrders } = useContext(ordersContext)
  const [tab,setTab] = React.useState(TabOptions.recommendation)

  const changeTab = (tab) => {
    setTab(tab)
  }

  const { data: recommendationItems,isError: isRecommendationError,isFetching: isRecommendationFetching } = useGetRecommendation();
  const { data: subCatWithFood,isFetching,isError } = useGetSubCategoryWithFood();
  const subCats = subCatWithFood?.map((item) => item.category) || [];

  const onAddToCart = (item,quantity) => {
    updateOrders({ ...item,quantity })

    toast.success("Added to orders. Please confirm through the orders page.")
  }

  console.log({ subCatWithFood })

  const initialRecommendation = subCatWithFood?.map(({ items }) => {
    return items[0];
  }) || []

  console.log({initialRecommendation, recommendationItems})


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

        <div class="card card-solid">
          <div class="card-header p-0 border-bottom-0">
            <ul class="nav nav-tabs" id="custom-tabs-four-tab" role="tablist">
              <li class="nav-item">
                <button
                  class={`nav-link ${tab == TabOptions.recommendation && 'active'}`}
                  id="custom-tabs-four-home-tab"
                  role="tab"
                  aria-controls="custom-tabs-four-home"
                  aria-selected="true"
                  onClick={() => {
                    changeTab(TabOptions.recommendation)
                  }}
                >Recommended for you</button>
              </li>
              {
                subCats?.map((cat) => {
                  return <li class="nav-item">
                    <button
                      class={`nav-link ${tab == cat && 'active'}`}
                      id="custom-tabs-four-profile-tab"
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
                tab === TabOptions.recommendation ? recommendationItems?.length == 0 ?
                initialRecommendation?.map((item) =>
                  <FoodCart
                    item={item}
                    onAddToCart={onAddToCart}
                  />
                ) :
                recommendationItems?.map((item) =>
                  <FoodCart
                    item={item}
                    onAddToCart={onAddToCart}
                  />
                ) : subCatWithFood?.find((subCat) => subCat.category === tab)?.items.map(
                  (item) => <FoodCart item={{
                    ...item,
                    foodPrice: item.price
                  }} onAddToCart={onAddToCart} />
                )
              }
              {/* {
                (tab === TabOptions.recommendation && recommendationItems?.length == 0) ?
                  initialRecommendation?.map((item) =>
                    <FoodCart
                      item={item}
                      onAddToCart={onAddToCart}
                    />
                  ) :
                  recommendationItems?.map((item) =>
                    <FoodCart
                      item={item}
                      onAddToCart={onAddToCart}
                    />
                  )
              }

              {
                subCatWithFood?.find((subCat) => subCat.category === tab)?.items.map(
                  (item) => <FoodCart item={{
                    ...item,
                    foodPrice: item.price
                  }} onAddToCart={onAddToCart} />
                )
              } */}
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
}