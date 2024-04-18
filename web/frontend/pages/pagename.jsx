import { Card, Text } from '@shopify/polaris';
import { useTranslation } from "react-i18next";

export default function PageName() {
  const { t } = useTranslation();
  return (
    // <Page>
    //   <TitleBar
    //     title={t("PageName.title")}
    //     primaryAction={{
    //       content: t("PageName.primaryAction"),
    //       onAction: () => console.log("Primary action"),
    //     }}
    //     secondaryActions={[
    //       {
    //         content: t("PageName.secondaryAction"),
    //         onAction: () => console.log("Secondary action"),
    //       },
    //     ]}
    //   />
    //   <Layout>
    //     <Layout.Section>
    //       <Card sectioned>
    //         <Text variant="headingMd" as="h2">
    //           {t("PageName.heading")}
    //         </Text>
    //         <TextContainer>
    //           <p>{t("PageName.body")}</p>
    //         </TextContainer>
    //       </Card>
    //       <Card sectioned>
    //         <Text variant="headingMd" as="h2">
    //           {t("PageName.heading")}
    //         </Text>
    //         <TextContainer>
    //           <p>{t("PageName.body")}</p>
    //         </TextContainer>
    //       </Card>
    //     </Layout.Section>
    //     <Layout.Section secondary>
    //       <Card sectioned>
    //         <Text variant="headingMd" as="h2">
    //           {t("PageName.heading")}
    //         </Text>
    //         <TextContainer>
    //           <p>{t("PageName.body")}</p>
    //         </TextContainer>
    //       </Card>
    //     </Layout.Section>
    //   </Layout>
    // </Page>
    <>
      <div className='Onboardingpage'>
        <Card >
          <div style={{ paddingTop: '30px' }}>
            <div className='onboardingheading'>
              <h1><b>Setup Your App</b></h1>
            </div>
            <div className='onboardinginside' >

              <div className="onboardingsteups">
                <ol style={{ listStyleType: 'square'}}>
                  <p style={{ fontSize:"20px", fontFamily:'math'}}><b><u>Enable app embed</u></b><br></br>
                    App embed is required for reviews to show properly .<br></br>
                    Just follow these easy steps:</p>
                    <li>Customize your store's look in Customizer.</li>
                    <li>Head to the Product Page section.</li>
                    <li>Improve user experience by accessing Footer Options.</li>
                    <li>Effortlessly add our app through a Block.</li>
                    <li>Explore the "App" Extension for enhanced features</li>
                    <li>Choose the "Sticky Cart Bar" for constant visibility.</li>
                    <li>Save Changes to apply them instantly.</li>
                    <li>Fine-tune settings in the App Customizer.</li>
                    <li>Make targeted adjustments on the Product Page.</li>
                    <li>Activate the app for its full potential.</li>
                    <li>Enjoy the smooth review display on your screen</li>

                  </ol>
                  </div>
                  <div className="onboardingvideo">
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/VVMaLbrsBuo?si=Og3NjCUGn40-Y44k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>


              </div>
            </div>
        </Card>
      </div>
    </>
  );
}
