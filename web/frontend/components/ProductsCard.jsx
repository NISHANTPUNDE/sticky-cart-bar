// Desc: This file contains the code for the ProductsCard component. This component is responsible for displaying the list of products in a card format. It also allows the user to select multiple products and activate or deactivate them using the buttons provided.
import React, { useEffect, useState } from "react";
import { DataTable,Card } from "@shopify/polaris";
import { useAuthenticatedFetch } from "../hooks";
import axios from "axios";
export function ProductsCard() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [color, setColor] = useState([]);
  const [data, setData] = useState([]);
  const [status,setStatus] = useState([])
  const [res,setRes]=useState(true)
  const fetch = useAuthenticatedFetch();
  async function fetchProducts() {
    try {
      let request = await fetch("api/products/all");
      let response = await request.json();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleCheckboxChange = (index) => {
    const newSelectedItems = [...selectedItems];
    if (newSelectedItems.includes(index)) {
      newSelectedItems.splice(newSelectedItems.indexOf(index), 1);
    } else {
      newSelectedItems.push(index);
    }
    setSelectedItems(newSelectedItems);
  };
  const handleColorChange = (e, index) => {
    setColor({ ...color, [index]: e.target.value });
  };

  const rows = products.map((product, index) => [
    <input
    className="largerCheckbox"
      type="checkbox"
      onChange={() => handleCheckboxChange(index)}
      checked={selectedItems.includes(index)}
    />,
    product.images && product.images.length > 0 ? (
      <img
        src={product.images[0].src}
        alt={product.title}
        style={{ width: "50px", height: "50px" }}
      />
    ) : (
      <img
        src="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
        alt="Image Not Found"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    product.title,
    `$${product.variants[0].price}`,
    data.find((i) => i.productid === product.id)?.Status==1 ? <div style={{color:'darkgreen'}}>Active</div> : <div style={{color:'darkblue'}}>Deactive</div>
  ]);
  const handleAdd = () => {
    Promise.all(
      selectedItems.map((index) =>
        axios.post(
          "https://www.prodnotifyapi.skyvisionshopify.in/productnotifypurchasebar/productid",
          {
            productid: products[index].id,
            Status: true
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      )
    )
      .then((responses) => {
        alert("Products Added to Notification Bar!");
        setSelectedItems([]);
        setRes(!res)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleDeactivate = () => {
    Promise.all(
      selectedItems.map((index) =>
        axios.post(
          "https://www.prodnotifyapi.skyvisionshopify.in/productnotifypurchasebar/productid",
          {
            productid: products[index].id,
            Status: false
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      )
    )
      .then((responses) => {
        console.log(responses);
        console.log("Products remove to Notification Bar!");
        alert("Products remove to Notification Bar!");
        setSelectedItems([]);
        setRes(!res)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getData = async () => {
    const req = await fetch("https://www.prodnotifyapi.skyvisionshopify.in/productnotifypurchasebar/");
    let res = await req.json();
    setData(res.data);
    setStatus(res.data.map((i)=>i.Status))
  };
  useEffect(() => {
    getData();
    fetchProducts();
  }, []);
  useEffect(()=>{
    getData()
  },[res])
  return (
    <>
      <div style={{ height: "60vh", overflowY: "auto" }}>
        <DataTable
          columnContentTypes={["text", "text", "text", "text", "text",]}
          headings={["Checkbox", "Images", "Product", "Price", "Status"]}
          rows={rows}
          stickyHeader
        />
      </div>
      <div className="btn-container">
      <button className="submit-btn" type="submit" 
      onClick={handleAdd}
      >
        Active
      </button>
      <button className="submit-btn" type="submit" 
      onClick={handleDeactivate}
      >
        Deactive
      </button>
      </div>
    </>
  );
}
