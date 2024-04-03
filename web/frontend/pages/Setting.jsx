// Desc: Setting page for the app where the user can set the logo, product name, quantity, price, popup bar, and cart button. The user can also save the settings and view the settings in the product purchase bar.
import React, { useEffect, useState } from "react";
import { Page, Layout, Card, Text } from "@shopify/polaris";
import axios from "axios";
import { useAuthenticatedFetch } from "../hooks";
export default function Setting() {
  let fetch = useAuthenticatedFetch();
  const [shopid, setShopid] = useState();

  const shopFetch = async () => {
    let req = await fetch("/api/shop");
    let res = await req.json();
    setShopid(res.data[0].id);
  };
  console.log(shopid);
  useEffect(() => {
    shopFetch();
  }, []);

  const [settingdata, setSettingData] = useState({
    logo: "",
    product_name: "",
    quantity: "",
    price: "",
    variant1: "",
    variant2:"",
    popup_bar: "",
    cart_btn: "",
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettingData((prevSettingData) => ({
      ...prevSettingData,
      [name]: checked,
    }));
  };

  console.log(settingdata);
  const submitSetting = () => {
    axios
      .post(
        "https://www.prodnotifyapi.skyvisionshopify.in/productnotifypurchasebar/setSetting",
        {
          logo: settingdata.logo,
          product_name: settingdata.product_name,
          quantity: settingdata.quantity,
          price: settingdata.price,
          popup_bar: settingdata.popup_bar,
          cart_button: settingdata.cart_btn,
          variant1: settingdata.variant1,
          variant2: settingdata.variant2,
          shopid: shopid,
        }
      )
      .then((res) => {
        alert("setting save successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  };

  const getSetting = () => {
    console.log(shopid);
    axios
      .get(
        `https://www.prodnotifyapi.skyvisionshopify.in/productnotifypurchasebar/getSetting/${shopid}`
      )
      .then((res) =>
        setSettingData({
          logo: res.data.data[0].logo,
          product_name: res.data.data[0].product_name,
          quantity: res.data.data[0].quantity,
          price: res.data.data[0].price,
          popup_bar: res.data.data[0].popup_bar,
          cart_btn: res.data.data[0].cart_button,
          variant1: res.data.data[0].variant1,
          variant2: res.data.data[0].variant2,
        })
      )
      .catch((err) => err);
  };

  useEffect(() => {
    if (shopid) getSetting();
  }, [shopid]);

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <div className="flex">
              <Text variant="heading2xl" as="h3">
                Setting
              </Text>
            </div>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <div className="setting-container">
              <div className="col1">
                <div>
                  <label htmlFor="logo">Show logo</label>
                  <input
                    type="checkbox"
                    name="logo"
                    id="logo"
                    value={settingdata.logo}
                    checked={settingdata.logo}
                    onChange={handleChange}
                  />

                </div>

                <div>
                  <label htmlFor="product_name">Show Product Name</label>
                  <input
                    type="checkbox"
                    name="product_name"
                    id="product_name"
                    value={settingdata.product_name}
                    checked={settingdata.product_name}
                    onChange={handleChange}
                  />

                </div>
              </div>

              <div className="col2">
                <div>
                  <label htmlFor="quantity">Show Quantity</label>
                  <input
                    type="checkbox"
                    name="quantity"
                    id="qty"
                    value={settingdata.quantity}
                    checked={settingdata.quantity}
                    onChange={handleChange}
                  />

                </div>

                <div>
                  <label htmlFor="price">Show Price</label>
                  <input
                    type="checkbox"
                    name="price"
                    id="price"
                    value={settingdata.price}
                    checked={settingdata.price}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col2">
              <div>
                <label htmlFor="variant1">Show Variant1</label>
                <input
                  type="checkbox"
                  name="variant1"
                  id="variant1"
                  value={settingdata.variant1}
                  checked={settingdata.variant1}
                  onChange={handleChange}
                />

              </div>
              
              <div>
                <label htmlFor="variant2">Show Variant2</label>
                <input
                  type="checkbox"
                  name="variant2"
                  id="variant2"
                  value={settingdata.variant2}
                  checked={settingdata.variant2}
                  onChange={handleChange}
                />
              </div>
              </div>
              <div className="col3">
                <div className="popup_bar">
                  <label htmlFor="popup_bar">Show Popup Bar</label>
                  <input
                    type="checkbox"
                    name="popup_bar"
                    id="popup_bar"
                    value={settingdata.popup_bar}
                    checked={settingdata.popup_bar}
                    onChange={handleChange}
                  />

                </div>

                <div>
                  <label htmlFor="cart_btn">Show Add to Cart Button</label>
                  <input
                    type="checkbox"
                    name="cart_btn"
                    id="cart_btn"
                    value={settingdata.cart_btn}
                    checked={settingdata.cart_btn}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="btn-cont">
              <button className="setting-btn" onClick={submitSetting}>
                Submit
              </button>
            </div>
          </Card>
          <Card>
            <div className="container">
              <div className="color-section">
                <img
                  src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                  alt=""
                />
                <div className="productdisc">
                  <p>
                    Media cards provide a consistent layout to present visual
                    information to merchants. Visual media is used to provide
                    additional context to the written information it's paired
                    with.
                  </p>
                </div>
              </div>
              <div className="footer">
                {settingdata.popup_bar && (
                  <div id="bar" style={{ backgroundColor: "#2E2E2E" }}>

                    {settingdata.logo ? (

                      <img src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=50" />
                    ) : (
                      ""
                    )}
                    {settingdata.product_name ? (
                      <h2 id="productname" style={{ color:"#fff"}}>Martini Stud Earrings<br /> 1.65

                        CT.TW</h2>
                    ) : (
                      ""
                    )}

                    <div className="proquantity">
                      {settingdata.quantity ? (
                        <div class="rg-sticky-cart-bar-main-select-div">
                          <div class="rg-sticky-cart-bar-quantity-div">
                            <select id="quantity" name="quantity" class="select-arrow-design quantity">
                              <option value="1" selected>1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="proquantity">
                      {settingdata.variant1 ? (
                        <div class="rg-sticky-cart-bar-main-select-div">
                          <div class="rg-sticky-cart-bar-color-div">
                            <select id="color" name="color" class="rg-sticky-cart-bar-select-arrow-design color">
                              <option value="silver" selected>Silver</option>
                              <option value="gold">Gold</option>
                            </select>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="proquantity">
                      {settingdata.variant2 ? (
                        <div class="rg-sticky-cart-bar-main-select-div">
                          <div class="rg-sticky-cart-bar-size-div">
                            <select id="size" name="size" class="select-arrow-design size">
                              <option value="s">S</option>
                              <option value="m" selected>M</option>
                              <option value="l">L</option>
                            </select>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {settingdata.price ? (
                      <div className="proprice">
                        <div class="rg-sticky-cart-bar-main-price-button-div">

                          <div class="rg-sticky-cart-bar-price-div">$200</div>

                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div>
                      {settingdata.cart_btn ? (
                        <div class="rg-sticky-cart-bar-main-price-button-div">

                          <div class="rg-sticky-cart-bar-button-div"><button class="rg-sticky-cart-bar-buy-now">Buy Now</button></div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
