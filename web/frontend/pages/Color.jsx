// Desc: This file is used to set the color of the product purchase bar. The user can select the background color and text color of the product purchase bar. The selected color will be displayed in the product purchase bar
import { Page, Layout, Card, Text } from "@shopify/polaris";
import { useState, useEffect } from "react";
import { useAuthenticatedFetch } from "../hooks";
import axios from "axios";
export default function Color() {
  let fetch = useAuthenticatedFetch();

  const [backgroundColor, setbackgroundColor] = useState("");
  const [Color, setColor] = useState("");

  const [shopid, setShopid] = useState();
  const [value, setValue] = useState();
  const [textvalue, setTextvalue] = useState()
  const shopFetch = async () => {
    let req = await fetch("/api/shop");
    let res = await req.json();
    setShopid(res.data[0].id);
  };
  const colorFetch = async () => {
    await axios
      .get(
        `https://www.prodnotifyapi.skyvisionshopify.in/productnotifypurchasebar/color/${shopid}`
      )
      .then((res) => {
        setValue(res.data.data[0]?.bgColor)
        setTextvalue(res.data.data[0]?.textColor)
        setbackgroundColor(res.data.data[0]?.bgColor)
        setColor(res.data.data[0]?.textColor)
      })
      .catch((err) => console.log(err));
  };
  console.log(value);
  useEffect(() => {
    shopFetch();
  }, []);
  useEffect(() => {
    colorFetch();
  }, [shopid]);
  const handlebgColor = () => {
    axios
      .post(
        "https://www.prodnotifyapi.skyvisionshopify.in/productnotifypurchasebar/color",
        {
          shopid: shopid,
          bgColor: backgroundColor,
          textColor: Color
        }
      )
      .then((res) => {
        alert("Color Added successfully");
        console.log(res);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  return (
    <div>
      <Page fullWidth>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <div className="flex">
                <Text variant="heading2xl" as="h3">Color</Text>
              </div>
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card>
              <div className="colorpallete">
                <div>
                  <label>Select BackgroundColor</label>
                  <input
                    type="color"
                    value={backgroundColor ? backgroundColor : value}
                    onChange={(e) => setbackgroundColor(e.target.value)}
                  />
                </div>
                <div>
                  <label>Select Color</label>
                  <input
                    type="color"
                    value={Color ? Color : textvalue}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="submit-btn color-btn"
                    onClick={handlebgColor}
                  >
                    Set colors
                  </button>

                </div>
              </div>
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card >
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
                  <div
                    id="bar"
                    style={{
                      backgroundColor: `${backgroundColor ? backgroundColor : value
                        }`,
                      color: `${Color ? Color : textvalue}`,
                    }}
                  >
                    <img src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=60" />
                    <div>
                      <div class="rg-sticky-cart-bar-product-title-div" id="productname" >
                        <p style={{color: `${Color ? Color : textvalue}`}} >Martini Stud Earrings 1.65</p>
                        <p style={{color: `${Color ? Color : textvalue}`}} >CT.TW</p>
                      </div>
                    </div>
                    <div class="rg-sticky-cart-bar-main-select-div">
                      <div class="rg-sticky-cart-bar-quantity-div" >
                        <select id="quantity" name="quantity" class="select-arrow-design quantity" style={{color: `${Color ? Color : textvalue}`, border:` 1px solid ${Color ? Color : textvalue}`}}  >
                          <option value="1" selected>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                      <div class="rg-sticky-cart-bar-color-div">
                        <select id="color" name="color" class="rg-sticky-cart-bar-select-arrow-design color" style={{color: `${Color ? Color : textvalue}`, border:` 1px solid ${Color ? Color : textvalue}`}} >
                          <option value="silver" selected>Silver</option>
                          <option value="gold">Gold</option>
                        </select>
                      </div>
                      <div class="rg-sticky-cart-bar-size-div">
                        <select id="size" name="size" class="select-arrow-design size" style={{color: `${Color ? Color : textvalue}`, border:` 1px solid ${Color ? Color : textvalue}`}} >
                          <option value="s">S</option>
                          <option value="m" selected>M</option>
                          <option value="l">L</option>
                        </select>
                      </div>
                    </div>
                    <div class="rg-sticky-cart-bar-main-price-button-div">
                      <div class="rg-sticky-cart-bar-price-div">$200</div>
                    </div>
                    <div class="rg-sticky-cart-bar-main-price-button-div"> <div class="rg-sticky-cart-bar-button-div"><button class="rg-sticky-cart-bar-buy-now" style={{color: `${Color ? Color : textvalue}`}} >Buy Now</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
}
