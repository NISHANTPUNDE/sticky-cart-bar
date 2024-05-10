import {
  Page,
  Layout,
  Text,
  Card
} from "@shopify/polaris";
import { useTranslation, Trans } from "react-i18next";
import { ProductsCard } from "../components";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { useState,useEffect } from "react";
export default function HomePage() {
  let navigate=useNavigate()
  const [endDate, setenddate] = useState('')
  const fetchDatasubscription = async () => {
    const email = 'amitganuwala@gmail.com'; // Define email here
    // console.log("email: - ", email);
    try {
      const response = await axios.get('http://localhost:4008/api/get-subscription-details', {
        params: { email: email }
      });
      console.log('Data selected successfully', response.data.data[0]);

      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const day = String(today.getDate()).padStart(2, '0');
      console.log("last date", endDate)
      const todaydate = `${year}-${month}-${day}`;
      // const todaydate = '2024-12-15';
      console.log("today", todaydate);

      if (todaydate <= response.data.data[0].endDate) {
        console.log("subscrption not end");
        navigate('/')
      } else {
        console.log("Subscription End")
        navigate('/Price')
      }
      setenddate(response.data.data[0].endDate);

      const { data } = response.data;
      // Do something with the data
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

  

  useEffect(() => {
    fetchDatasubscription(); // Call fetchData when the component is loaded
  }, [ navigate]);
  const { t } = useTranslation();
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card sectioned>
          <div className="flex">
            <Text variant="heading2xl" as="h3">
              Product
            </Text>
            </div>
          </Card>
          <Card >
            <ProductsCard />
          </Card>
          </Layout.Section>
        </Layout>
    </Page>
  );
}
