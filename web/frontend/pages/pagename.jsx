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
        <Card>
          {/* <div className='onboardingheading'>
              <h1><b>Setup Your App</b></h1>
            </div> */}
          <h3 class="Polaris-Text--root Polaris-Text--heading2xl onboardingheading">Enable app embed</h3>
        </Card>

        <Card>
          <div className="onboardingsteups">
            <ol style={{ listStyleType: 'square', listStyle:'none' }}>
              <p style={{ fontSize: "20px", fontFamily: 'math', textAlign:'center' }}>
                App embed is required for reviews to show properly .<br></br>
                Just follow these easy steps:</p><br></br>
              <li> &#128073; Improve user experience by accessing Footer Options.</li>
              <li> &#128073; Effortlessly add our app through a Block.</li>
              <li> &#128073; Explore the "App" Extension for enhanced features</li>
              <li> &#128073; Choose the "Sticky Cart Bar" for constant visibility.</li>
              <li> &#128073; Save Changes to apply them instantly.</li>
              <li> &#128073; Fine-tune settings in the App Customizer.</li>
              <li> &#128073; Make targeted adjustments on the Product Page.</li>
              <li> &#128073; Activate the app for its full potential.</li>
              <li> &#128073; Enjoy the smooth review display on your screen</li>

            </ol>
          </div>
          {/* <div className='onboardinginside'>
            
          </div> */}
        </Card>

        <Card >
          <div className="onboardingvideo">
            {/* <iframe height="315" className="video" src="https://www.youtube.com/embed/VVMaLbrsBuo?si=Og3NjCUGn40-Y44k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <iframe  height="315" className="video" src="https://www.youtube.com/embed/W3dmeq_ln9A?si=kroN9prktRd2WIwt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
         
        </Card>
      </div>
    </>
  );
}
