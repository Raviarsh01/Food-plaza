import React from "react";
import { useGetOrdersDataQuery } from "../../../redux/redux-toolkit-query/orders";
import { extractDate } from "../../../utils/date-time";
import Button from "../../../components/button";

const Orders = () => {
  const { data } = useGetOrdersDataQuery();

  return (
    <div className="main-container py-[50px]">
      <h2 className="text-3xl font-semibold text-center">Your orders</h2>

      <div className="mt-8 flex flex-col gap-6">
        {data?.data.length === 0 ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-secondary text-lg font-medium">
              No order history, Placed an order.
            </p>
            <Button
              href="/menu"
              text="Go to Menu"
              variant="outlined"
              background="primary"
            />
          </div>
        ) : null}
        {data?.data?.map((item) => {
          return (
            <div className="shadow hover:shadow-md border border-[#ebebebe6] rounded-md p-6">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold ">
                    Ordered Date:{" "}
                    <span className="font-normal">
                      {extractDate(item?.createdAt)}
                    </span>
                  </p>

                  <p className="font-semibold mt-2">
                    Delivered at:{" "}
                    <span className="font-normal">{`${
                      item?.deliveryAddress?.addressLine1
                    }, ${
                      item?.deliveryAddress?.addressLine2
                        ? `${item?.deliveryAddress?.addressLine2},`
                        : ""
                    } ${item?.deliveryAddress?.city}, ${
                      item?.deliveryAddress?.postalCode
                    }, ${item?.deliveryAddress?.state}`}</span>
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-right">
                    Order Delivered:{" "}
                    <span className="font-normal">{item?.orderDelivered}</span>
                  </p>
                  <p className="font-semibold text-right">
                    Payment:{" "}
                    <span className="font-normal">{item?.payment}</span>
                  </p>
                  <p className="font-semibold text-right">
                    Amount Paid:{" "}
                    <span className="font-normal">{item?.totalAmount}</span>
                  </p>
                </div>
              </div>

              <h3 className="font-semibold mt-2">Menu Items</h3>
              {item?.cartData?.map((vl) => (
                <div className="grid grid-cols-4 items-center mt-2">
                  <img
                    className="w-[44px] h-[44px] rounded-full"
                    src={vl?.itemID?.image}
                    alt={vl?.itemID?.category}
                  />
                  <p>{vl?.itemID?.name}</p>
                  <p>{vl?.itemID?.price}</p>
                  <p>{vl?.quantity}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
