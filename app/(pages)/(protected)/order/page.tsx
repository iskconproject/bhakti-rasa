"use client";

import Menu from "@/components/menu";
import SearchBox from "@/components/search-box";
import { useEffect, useReducer } from "react";
import { MENU_ITEMS } from "@/data/menu-items";
import FooterCartInfo from "@/components/footer-cart-info";
import { useCartStore } from "@/store/cartStore";
import PlaceOrder from "@/components/place-order";

type State = {
  searchText: string;
  menuItems: { id: number; name: string }[];
  showPlaceOrder: boolean;
};

const OrderPage = () => {
  const { items, getSubTotal, clearCart } = useCartStore();

  const reducer = (state: State, action: { type: string; payload: any }) => {
    switch (action.type) {
      case "SET_SEARCH_TEXT":
        return { ...state, searchText: action.payload };
      case "SET_MENU_ITEMS":
        return { ...state, menuItems: action.payload };
      case "FILTER_MENU_ITEMS":
        return {
          ...state,
          menuItems: MENU_ITEMS.filter((item) =>
            item.name.toLowerCase().includes(state.searchText.toLowerCase())
          ),
        };
      case "SHOW_PLACE_ORDER":
        return { ...state, showPlaceOrder: true };
      case "HIDE_PLACE_ORDER":
        return { ...state, showPlaceOrder: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    searchText: "",
    menuItems: MENU_ITEMS || [],
    showPlaceOrder: false,
  });

  useEffect(() => {
    dispatch({ type: "FILTER_MENU_ITEMS", payload: state.searchText });
  }, [state.searchText]);

  return (
    <main className="bg-background min-h-screen">
      <div className="container py-8">
        <SearchBox
          onSearch={(value) =>
            dispatch({ type: "SET_SEARCH_TEXT", payload: value })
          }
        />
        <Menu className="mt-8" menuItems={state.menuItems} />
      </div>
      {items.length > 0 && (
        <FooterCartInfo
          subTotal={getSubTotal()}
          onClickPlaceOrder={() =>
            dispatch({ type: "SHOW_PLACE_ORDER", payload: null })
          }
        />
      )}

      <PlaceOrder
        open={state.showPlaceOrder}
        side="bottom"
        className="h-[80vh]"
        onOpenChange={() =>
          dispatch({ type: "HIDE_PLACE_ORDER", payload: null })
        }
        onPlaceOrder={() => {
          dispatch({ type: "HIDE_PLACE_ORDER", payload: null });
          clearCart();
        }}
      />
    </main>
  );
};

export default OrderPage;
