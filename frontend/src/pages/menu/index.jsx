import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MenuDataAction, addCart } from "../../redux/actions/cart-actions";
import { FaCartPlus } from "react-icons/fa6";
import Loader from "../../components/loader";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { paths } from "../../utils/paths";

const Menu = () => {
  const dispatch = useDispatch();
  const [Items, SetItems] = useState([]);
  const [tabs, setTabs] = useState("");
  const [tabsArray, setTabsArray] = useState([]);

  const { MenuData, loading } = useSelector((state) => state.MenuReducer);

  useEffect(() => {
    dispatch(MenuDataAction());
    window.scroll(0, 0);
  }, [dispatch]);

  useEffect(() => {
    if (MenuData) {
      const filterTabs = MenuData?.map((i) => i.category);
      setTabsArray([...new Set(filterTabs)]);
    }
  }, [MenuData]);

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
    if (MenuData) {
      const filterData = MenuData?.filter((i) => i.category === tabs);
      if (filterData?.length !== 0) {
        SetItems(filterData);
        return;
      }
      SetItems(MenuData);
    }
  }, [tabs, MenuData]);

  const handleadd = (item) => {
    dispatch(addCart(item));
  };
  const imagesData = [
    "/Images/deliveroo.png",
    "/Images/justEat.png",
    "/Images/foodpanda.png",
    "/Images/didiFood.png",
    "/Images/instacart.png",
    "/Images/doordash.png",
    "/Images/uberEats.png",
    "/Images/grubhub.png",
  ];
  return loading ? (
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
            <div key={i} className="rounded-t-xl overflow-hidden">
              <img src={item.image} alt="menu" className="w-full h-[230px]" />
              <div className=" px-[30px] py-[30px] border border-t-0 border-[#DBDFD0] rounded-b-xl">
                <p className=" text-lg font-medium text-third text-center leading-7 ">
                  ${item.price}
                </p>
                <p className="my-[22px]  text-lg font-medium text-third text-center">
                  {item.name}
                </p>
                <div className="flex gap-3 justify-center text-xl text-primary font-semibold">
                  <Link to={`${paths.itemDetail}${item._id}`}>
                    <MdOutlineRemoveRedEye />
                  </Link>
                  <button onClick={() => handleadd(item)}>
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#e9e9e947]">
        <div className="main-container py-[90px] flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[40%] flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-secondary leading-tight">
              You can order through apps
            </h2>
            <p className="text-base text-third leading-7 mt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>
          <div className="w-full md:w-[60%] flex flex-wrap gap-10 justify-center">
            {imagesData?.map((value, i) => (
              <div
                key={i}
                className={`bg-white h-[90px] flex justify-center items-center rounded-xl ${
                  i + 1 === (4 || 5 || 6) ? "w-[280px]" : "w-[230px]"
                }`}
              >
                <img src={value} alt="menu" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
