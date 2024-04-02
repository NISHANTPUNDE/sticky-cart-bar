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
                  // value={settingdata.quantity}
                  // checked={settingdata.quantity}
                  // onChange={handleChange}
                />

              </div>
              
              <div>
                <label htmlFor="variant2">Show Variant2</label>
                <input
                  type="checkbox"
                  name="variant2"
                  id="variant2"
                  // value={settingdata.price}
                  // checked={settingdata.price}
                  // onChange={handleChange}
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
                  <div id="bar" style={{ backgroundColor: "purple" }}>
                    {settingdata.logo ? (

                      <img src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=80" />
                    ) : (
                      ""
                    )}
                    <div>
                      {settingdata.product_name ? (
                        <h2 id="productname">Product Name</h2>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="proquantity">
                      {settingdata.quantity ? (
                        <div>
                          <h2>Quantity</h2>
                        </div>
                      ) : (
                        ""
                      )}
                      {settingdata.quantity ? (
                        <div>
                          <input
                            className="numberstyle"
                            type="number"
                            id="quantity"
                            value="1"
                            disabled
                          />
                          <h2 id="quantity"></h2>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {settingdata.price ? (
                      <div className="proprice">
                        <div>
                          <h2 className="pricetitle">Price</h2>
                        </div>
                        <div>
                          <h2 id="Price">&nbsp; $87</h2>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div>
                      {settingdata.cart_btn ? (
                        <button className="cartbtn" type="submit">
                          Add to cart
                        </button>
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
