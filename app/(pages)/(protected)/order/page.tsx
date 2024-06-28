"use client";

import Menu from "@/components/menu";
import SearchBox from "@/components/search-box";
import { useEffect, useReducer } from "react";
import { MENU_ITEMS } from "@/data/menu-items";
import FooterCartInfo from "@/components/footer-cart-info";
import { useCartStore } from "@/store/cartStore";

type State = {
  searchText: string;
  menuItems: { id: number; name: string }[];
};

const OrderPage = () => {
  const { items, getSubTotal } = useCartStore();

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
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    searchText: "",
    menuItems: MENU_ITEMS || [],
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
      {items.length > 0 && <FooterCartInfo subTotal={getSubTotal()} />}
    </main>
  );
};

export default OrderPage;
