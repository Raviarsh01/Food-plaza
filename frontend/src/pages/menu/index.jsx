import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../../components/loader";
import AppsForOrder from "../../components/apps-for-order";
import ItemCard from "../../components/ItemCard";
import { toast } from "react-toastify";
import { useGetMenuDataQuery } from "../../redux/redux-toolkit-query/menu";
import { addToCart } from "../../redux/slices/cart";

const Menu = () => {
  const dispatch = useDispatch();
  const [Items, SetItems] = useState([]);
  const [tabs, setTabs] = useState("");
  const [tabsArray, setTabsArray] = useState([]);

  const { data, isLoading } = useGetMenuDataQuery();

  useEffect(() => {
    if (data?.response) {
      const filterTabs = data?.response?.map((i) => i.category);
      setTabsArray([...new Set(filterTabs)]);
    }
  }, [data?.response]);

  useEffect(() => {
    if (tabsArray.length > 0) {
      const tab = localStorage.getItem("menuTab");
      if (tabsArray.includes(tab)) {
        setTabs(tab);
        localStorage.removeItem("menuTab");
        return;
      } else {
        setTabs("All");
      }
    }
  }, [tabsArray]);

  useEffect(() => {
    if (data?.response) {
      const filterData = data?.response?.filter((i) => i.category === tabs);
      if (filterData?.length !== 0) {
        SetItems(filterData);
        return;
      }
      SetItems(data?.response);
    }
  }, [tabs, data?.response]);

  const handleadd = (item) => {
    dispatch(addToCart(item));
    toast.success("Item added to cart");
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="main-container pt-[50px] py-[90px]">
        <p className="max-w-[560px] mx-auto text-base text-center text-third leading-7">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>

        {tabsArray?.length > 0 && (
          <div className="flex gap-6 flex-wrap justify-center my-[40px]">
            <button
              className={`transition min-w-[120px] border-[1px] h-[48px] rounded rounded-tl-2xl rounded-br-2xl font-semibold ${
                tabs === "All"
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-third text-third"
              }`}
              onClick={() => setTabs("All")}
            >
              All
            </button>
            {tabsArray?.map((value, i) => (
              <button
                key={i}
                className={`transition min-w-[120px] border-[1px] h-[48px] rounded rounded-tl-2xl rounded-br-2xl font-semibold ${
                  tabs === value
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-third text-third"
                }`}
                onClick={() => setTabs(value)}
              >
                {value}
              </button>
            ))}
          </div>
        )}

        {Items.length === 0 && (
          <p className="text-base mt-[30px] text-center text-third leading-7">
            No item available
          </p>
        )}

        <div className="grid px-4 gap-12 md:gap-6 grid-cols-1 md:grid-cols-4">
          {Items?.map((item, i) => (
            <ItemCard item={item} handleadd={handleadd} />
          ))}
        </div>
      </div>
      <AppsForOrder />
    </>
  );
};
export default Menu;
