import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';


export default function Price() {

    const [products, setProducts] = useState([
        {
            address: "Pizza, Fast Food, Pasta",
            arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
            delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
            dish: "",
            id: 3,
            imgdata: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png",
            price: '',
            qnty: 1,
            rating: "4.2",
            somedata: " 650 + order placed from here recently"
        }
    ]);

    useEffect(() => {
        console.log("Updated products:", products);
    }, [products]);

    const makePayment = async (planName, price) => {
        console.log("plan", planName);
        console.log("price", price);
        setProducts(prevProducts => {
            const updatedProducts = prevProducts.map(product => {
                return {
                    ...product,
                    dish: planName,
                    price: price
                };
            });
            return updatedProducts;
        });

        const stripe = await loadStripe("pk_test_51P9hepSIHgPasW2iCmMqqOqxfNUPbZl2D31Pi5DoX6WMWn8t8eeOrniJP7W2rV3ykBLd9ue9IlJqjFzvXBH9DdZA00ycomA70b");

        const body = {
            product: products
        };
        const headers = {
            "Content-Type": "application/json"
        };
        const response = await fetch("http://localhost:7000/api/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });

        if (result.error) {
            console.log(result.error);
        }
    }

    return (
        <>
            <div style={{ height: "80vh" }}>
                <div className="priceheading">
                    <h1>Pricing Plan's</h1>
                </div>
                <div style={{ display: 'flex', top: '15%', position: 'absolute' }}>
                    <div className="subscription-card">
                        <img src="https://cdn.shopify.com/s/files/1/0644/5845/7264/files/free-trial.png?v=1714194908" alt="YouTube Logo" className="youtube-logo" />
                        <div className="subscription-details">
                            <h2 style={{ fontSize: "20px" }}><b>Free Trail</b></h2><br />
                            <p>Get access for 7 days ,<br /> Activate or Deactivate Discount,<br />  Easily Customaizable Sticky cart bar Color and many more</p><br />
                            <p><strong>Price: $0.00</strong></p>
                        </div>
                        <button className="subscribe-button" onClick={() => makePayment("Free Trail", 0)}>Get Started</button>
                    </div>

                    <div className="subscription-card middle-card" >
                        <img src="https://cdn.shopify.com/s/files/1/0644/5845/7264/files/subscription-model.png?v=1714194908" alt="YouTube Logo" className="youtube-logo" />
                        <div className="subscription-details">
                            <h2 style={{ fontSize: "20px" }}><b>Monthly Subscription</b></h2><br />
                            <p>Get access for 7 days ,<br /> Activate or Deactivate Discount,<br />  Easily Customaizable Sticky cart bar Color and many more</p><br />
                            <p><strong>Price: $3 /M</strong></p>
                        </div>
                        {/* <button className="subscribe-button" onClick={() => makePayment("Monthly Subscription", 3)}>Subscribe Now</button> */}
                        <button className="subscribe-button" >Subscribe Now</button>

                    </div>

                    <div className="subscription-card">
                        <img src="https://cdn.shopify.com/s/files/1/0644/5845/7264/files/annualy-subscription.png?v=1714194908" alt="YouTube Logo" className="youtube-logo" />
                        <div className="subscription-details">
                            <h2 style={{ fontSize: "20px" }}><b>Yearly Subscription</b></h2><br />
                            <p>Get access for 7 days ,<br /> Activate or Deactivate Discount,<br />  Easily Customaizable Sticky cart bar Color and many more</p><br />
                            <p><strong>Price: $25 /Y</strong></p>
                        </div>
                        {/* <button className="subscribe-button" onClick={() => makePayment("Yearly Subscription", 25)}>Subscribe Now</button> */}

                        <button className="subscribe-button">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
