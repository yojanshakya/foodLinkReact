import React,{ createContext } from "react";
import { Outlet } from "react-router-dom";

export const ordersContext = createContext();
const { Provider: OrdersProvider } = ordersContext;

export function CustomerMain() {
  /**
   * orders type
   *  foodname
   *  description
   *  foodprice
   *  quantity
   */
	const [orders,setOrders] = React.useState([]);

	const updateOrders = (item)=>{
		if(orders.some((order)=> order.foodCode == item.foodCode)){
      const updatedOrders = [...orders]
      let itemIndex = updatedOrders.findIndex((order)=> order.foodCode == item.foodCode);

      updatedOrders[itemIndex] = {
        ...item
      }
      setOrders(updatedOrders);
      return;
    }

    setOrders((orders)=>{
      return [
        ...orders,
        {
          ...item
        }
      ]
    })
	}

	const deleteOrder = (item)=>{
		setOrders(orders.filter((order)=> order.foodCode !== item.foodCode))
	}

  const clearAllOrders = ()=>{
    setOrders([])
  }

	return <OrdersProvider value={{
		orders,
		updateOrders,
		deleteOrder,
    clearAllOrders
	}}>
		<Outlet />
	</OrdersProvider>
}