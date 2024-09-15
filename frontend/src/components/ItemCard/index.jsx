import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { paths } from "../../utils/paths";
import { FaCartPlus } from "react-icons/fa6";

const ItemCard = ({ image, price, name, id, item, handleadd }) => {
  return (
    <div className="rounded-t-xl overflow-hidden">
      <img src={image} alt="menu" className="w-full h-[230px]" />
      <div className=" px-[30px] py-[30px] border border-t-0 border-[#DBDFD0] rounded-b-xl">
        <p className=" text-lg font-medium text-third text-center leading-7 ">
          ${price}
        </p>
        <p className="my-[22px]  text-lg font-medium text-third text-center">
          {name}
        </p>
        <div className="flex gap-3 justify-center text-xl text-primary font-semibold">
          <Link to={`${paths.itemDetail}${id}`}>
            <MdOutlineRemoveRedEye />
          </Link>
          <button onClick={() => handleadd(item)}>
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
