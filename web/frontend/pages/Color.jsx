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
  const [textvalue, setTextvalue] = useState();
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
        setValue(res.data.data[0]?.bgColor);
        setTextvalue(res.data.data[0]?.textColor);
        setbackgroundColor(res.data.data[0]?.bgColor);
        setColor(res.data.data[0]?.textColor);
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
          textColor: Color,
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
                <Text variant="heading2xl" as="h3">
                  Color
                </Text>
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
                  {/* <div
                    id="bar"
                    style={{
                      backgroundColor: `${
                        backgroundColor ? backgroundColor : value
                      }`,
                      color: `${Color ? Color : textvalue}`,
                    }}
                  >
                    <img src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=80" />
                    <div>
                      <h2 id="productname">Product Name</h2>
                    </div>
                    <div className="proquantity">
                      <div>
                        <h2>Quantity</h2>
                      </div>
                      <div>
                        <input
                          className="numberstyle"
                          type="number"
                          disabled
                          value={1}
                          id="quantity"
                        />
                        <h2 id="quantity"></h2>
                      </div>
                    </div>
                    <div className="proprice">
                      <div>
                        <h2>Price</h2>
                      </div>
                      <div>
                        <h2 id="Price">$ 43</h2>
                      </div>
                    </div>
                    <div>
                      <button style={{color: `${Color ? Color : textvalue}`}} className="cartbtn" type="submit">
                        Add to cart
                      </button>
                    </div>
                  </div> */}
                  <section class="add-cart-section" id="add-cart-id">
                    <div class="container-fluid ">
                      <div class="box" style={{backgroundColor: `${
                        backgroundColor ? backgroundColor : value
                      }`,
                      color: `${Color ? Color : textvalue}`,}}>
                        <img
                          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                          class="earring-img"
                        />
                        <h3
                        style={{ color: `${Color ? Color : textvalue}`}}
                        >
                          Martini Stud Earrings 1.65 <br />
                          CT. TW.
                        </h3>
                        <label
                          for="my-dropdown"
                          data-toggle="dropdown"
                          class="label1"
                          style={{ color: `${Color ? Color : textvalue}`}}
                        >
                          3
                        </label>
                        <label
                          for="my-dropdown"
                          data-toggle="dropdown"
                          class="label2"
                          style={{ color: `${Color ? Color : textvalue}`}}
                        >
                          Silver
                        </label>
                        <label
                          for="my-dropdown"
                          data-toggle="dropdown"
                          class="label3"
                          style={{ color: `${Color ? Color : textvalue}`}}
                        >
                          M
                        </label>
                        <h4 style={{ color: `${Color ? Color : textvalue}`}}>$200</h4>
                        <button style={{ color: `${Color ? Color : textvalue}`}}>Add To Cart</button>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
}
