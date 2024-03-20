import {
  Page,
  Layout,
  Text,
  Card
} from "@shopify/polaris";
import { useTranslation, Trans } from "react-i18next";
import { ProductsCard } from "../components";
export default function HomePage() {
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
