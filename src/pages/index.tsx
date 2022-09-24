import * as React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from 'gatsby-plugin-react-i18next';
import AutoSlider from '../components/AutoSlider';
// import {}from 'gatsby'

const IndexPage = () => {
  const { t, changeLanguage, languages } = useI18next();
  return (
    <main>
      <AutoSlider />
      <Box bg='primary'>{t('xxn')}</Box>
      <Trans>xxn</Trans>

      <Button
        onClick={() => {
          changeLanguage('zh');
        }}
      >
        asasas
      </Button>
    </main>
  );
};
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
