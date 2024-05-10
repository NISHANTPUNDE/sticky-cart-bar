import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticatedFetch } from "../hooks";
export default function Price() {
  let Authfetch = useAuthenticatedFetch();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  // const [subscriptionDate, setSubscriptionDate] = useState("");
  // useEffect(() => {
  //   let res = fetch(
  //     `http://localhost:4008/api/get-subscription-details?email=${email}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setSubscriptionDate(data.data[0]?.endDate);
  //     });
  // }, [email]);
  // console.log("date", subscriptionDate);

 

  const stripe = loadStripe(
    "pk_test_51P9hepSIHgPasW2iCmMqqOqxfNUPbZl2D31Pi5DoX6WMWn8t8eeOrniJP7W2rV3ykBLd9ue9IlJqjFzvXBH9DdZA00ycomA70b"
  );

  useEffect(() => {
    const shopFetch = async () => {
      let req = await Authfetch("/api/shop");
      let res = await req.json();
      console.log(res.data[0].email);
      setEmail(res.data[0].email);
    };
    shopFetch();
  }, [navigate]);
  console.log(email);
  const handleSubscription = async (interval, planname) => {
    const stripePromise = await loadStripe(
      "pk_test_51P9h0BSGbpwgGS0X0sBP4G3v2nKBA5GHHQujeSOnnw4QPBjZFJhDFEqCXIwLnodJsCD3I1LY1PP04t3AOr8A9Qcd005yXQzhxi"
    );
    console.log("11", email);
    const response = await fetch(
      "http://localhost:4008/api/create-stripe-session-subscription",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          planname: planname,
          qty: "3",
          itemCode: "99",
          email: email,
          interval: interval,
        }),
      }
    );

    if (response.status === 409) {
      const data = await response.json();
      if (data && data.redirectUrl) {
        console.log(
          data.redirectUrl.replace(
            "https://admin.shopify.com/store/dev-demosky/apps/subscription-app-142",
            ""
          )
        );

        navigate(
          data.redirectUrl.replace(
            "https://admin.shopify.com/store/dev-demosky/apps/subscription-app-142",
            ""
          )
        );
      }
    } else {
      const session = await response.json();
      stripePromise.redirectToCheckout({
        sessionId: session.id,
      });
    }
  };

  return (
    <>
      <div style={{ height: "80vh" }} >
        <div className="priceheading">
          <h1>Pricing Plan's</h1>
        </div>
        <div style={{ display: "flex", top: "15%", position: "absolute" }}>
          <div className="subscription-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0644/5845/7264/files/free-trial.png?v=1714194908"
              alt="YouTube Logo"
              className="youtube-logo"
            />
            <div className="subscription-details">
              <h2 style={{ fontSize: "20px" }}>
                <b>Free Trail</b>
              </h2>
              <br />
              <p>
                Get access for 7 days ,<br /> Activate or Deactivate Discount,
                <br /> Easily Customaizable Sticky cart bar Color and many more
              </p>
              <br />
              <p>
                <strong>Price: $0.00</strong>
              </p>
            </div>
            <button
              className="subscribe-button"
              onClick={() => handleSubscription("trial", "free trial")}
            >
              Start free trial
            </button>
          </div>

          <div className="subscription-card middle-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0644/5845/7264/files/subscription-model.png?v=1714194908"
              alt="YouTube Logo"
              className="youtube-logo"
            />
            <div className="subscription-details">
              <h2 style={{ fontSize: "20px" }}>
                <b>Monthly Subscription</b>
              </h2>
              <br />
              <p>
                Get access for month ,<br /> Activate or Deactivate Discount,
                <br /> Easily Customaizable Sticky cart bar Color and many more
              </p>
              <br />
              <p>
                <strong>Price: ₹200 /M</strong>
              </p>
            </div>
            <button
              className="subscribe-button"
              onClick={() => handleSubscription("month", "monthly plan")}
            >
              Subscribe Now
            </button>
            {/* <button className="subscribe-button" >Subscribe Now</button> */}
          </div>

          <div className="subscription-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0644/5845/7264/files/annualy-subscription.png?v=1714194908"
              alt="YouTube Logo"
              className="youtube-logo"
            />
            <div className="subscription-details">
              <h2 style={{ fontSize: "20px" }}>
                <b>Yearly Subscription</b>
              </h2>
              <br />
              <p>
                Get access for a year ,<br /> Activate or Deactivate Discount,
                <br /> Easily Customaizable Sticky cart bar Color and many more
              </p>
              <br />
              <p>
                <strong>Price: ₹50000 /Y</strong>
              </p>
            </div>
            <button
              className="subscribe-button"
              onClick={() => handleSubscription("year", "yearly plan")}
            >
              Subscribe Now
            </button>

            {/* <button className="subscribe-button">Subscribe Now</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
