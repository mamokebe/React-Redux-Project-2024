import React from "react";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BiShoppingBag } from "react-icons/bi";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import { IoClose } from "react-icons/io5";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { deliveryOptions } from "../../utils/deliveryOptions";
import dayjs from "dayjs";
import { formatCurrency } from "../../utils/money";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.priceCents * item.quantity,
    0
  );

  const isDay = deliveryOptions.map((deliveryDay) => deliveryDay.deliveryDays);
  let isChecked = true;
  // console.log(isDay);
  const deliveryHandling = (Day) => {
    const today = dayjs();
    const deliveryDate = today.add(Day, "day");
    const dateString = deliveryDate.format("dddd,  MMMM D");
    return dateString;
  };

  return (
    <>
      <Header />
      <div className={classes.cart__container}>
        <div className={classes.cart_title_container}>
          <BiShoppingBag size={30} />
          <h2 className={classes.cart__title}>Shopping Cart</h2>
        </div>
        {cartItems.length === 0 ? (
          <p> Opps! Your Cart is empty</p>
        ) : (
          <div className={classes.cart__content}>
            <div className={classes.cart_items_section}>
              {cartItems.map((item, i) => (
                <div key={i} className={classes.cart_delivery_container}>
                  <div className={classes.delivery__date}>
                    Delivery date:{" "}
                    {deliveryHandling(isDay[0] || isDay[1] || isDay[2])}{" "}
                  </div>
                  <div className={classes.cart_item_delivery}>
                    <div className={classes.cart__item}>
                      <div className={classes.cart__product}>
                        <div className={classes.cart_product_img}>
                          <img src={item.image} alt="" />
                        </div>
                        <div>
                          <p>{item.name}</p>
                          <div className={classes.cart_price_container}>
                            <div className={classes.cart__price}>
                              single price: ${formatCurrency(item.priceCents)}
                            </div>
                            <div className={classes.cart__quantity}>
                              <button
                                onClick={() => dispatch(decreaseQuantity(item))}
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() => dispatch(increaseQuantity(item))}
                              >
                                +
                              </button>
                            </div>
                            <div className={classes.cart__total}>
                              Total price: $
                              {/* {parseFloat(
                                (item.priceCents / 100) * item.quantity
                              ).toFixed(2)} */}
                              {formatCurrency(item.priceCents * item.quantity)}
                            </div>
                            <div>
                              <button
                                className={classes.remove__btn}
                                onClick={() => dispatch(removeFromCart(item))}
                              >
                                <IoClose size={30} /> Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* // delivery option */}
                    <div className={classes.delivery__options}>
                      <div className={classes.delivery_option_title}>
                        Choose a delivery option:
                      </div>
                      <div className={classes.delivery__option}>
                        {deliveryOptions.map((delivery) => (
                          <>
                            <input
                              type="radio"
                              checked={
                                isChecked ? delivery.priceCents === 0 : false
                              }
                            />
                            <div>
                              <div className={classes.delivery_option_date}>
                                {deliveryHandling(delivery.deliveryDays)}
                              </div>
                              <div className={classes.delivery_option_price}>
                                {delivery.priceCents === 0
                                  ? "FREE"
                                  : `$${formatCurrency(
                                      delivery.priceCents
                                    )}`}{" "}
                                - shipping
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.cart__summary}>
              <h3>Order Summary</h3>
              <div className={classes.summary__details}>
                <div className={classes.summary__item}>
                  <span>Price:</span>
                  <span>${`${(totalPrice / 100).toFixed(2)}`}</span>
                </div>
                <div className={classes.summary__item}>
                  <span>Delivery:</span>
                  <span>Free</span>
                </div>
                <div className={classes.summary__item}>
                  <span>Total:</span>
                  <span>${(totalPrice / 100).toFixed(2)}</span>
                </div>
              </div>
              <button className={classes.checkout__btn}>
                Proceed to checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
