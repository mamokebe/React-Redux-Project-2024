import React, { useState } from "react";
import classes from "./ProductDetail.module.css";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { allProducts } from "../../assets/products";
import Footer from "../../components/Footer/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts?.find((product) => product.id === id);

  const colors = ["red", "purple", "teal", "green", "black"];
  const sizes = ["XS", "S", "M", "L", "XL"];

  const [selectColor, setSelectColor] = useState(null);
  const [selectSize, setSelectSize] = useState(null);

  const colorHandling = (color) => {
    setSelectColor(color);
  };

  const sizeHandling = (size) => {
    setSelectSize(size);
  };

  return (
    <div className={classes.product__container}>
      {" "}
      <Header />
      <div className={classes.product__wrapper}>
        <div className={classes.product__imageSection}>
          <img src={product?.image} alt="" />
        </div>
        <div className={classes.product__infoSection}>
          <h2>{product?.name}</h2>
          <p className={classes.parOne}>${product?.priceCents / 100}</p>
          <h4>Description</h4>
          <p className={classes.parTwo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            ipsum! Cupiditate ullam unde expedita rem cum, iste quaerat nostrum
            ipsam recusandae, consequatur doloremque, mollitia nobis quo aliquam
            provident saepe aspernatur!
          </p>
          <div className={classes.product__options}>
            <div className={classes.colors__section}>
              <h4>Colors</h4>
              <div className={classes.colors}>
                {colors.map((color) => (
                  <div
                    key={color}
                    className={classes.color__circle}
                    style={{
                      backgroundColor: color,
                      outline:
                        selectColor === color ? `3px solid ${color}` : "",
                    }}
                    onClick={() => colorHandling(color)}
                  ></div>
                ))}
              </div>
            </div>
            <div className={classes.sizes__section}>
              <h4>Size</h4>
              <div className={classes.size}>
                {sizes.map((size) => (
                  <span
                    key={size}
                    style={{
                      border: selectSize === size ? "1px solid #ccc" : "",
                    }}
                    onClick={() => sizeHandling(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.addToCart}>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
