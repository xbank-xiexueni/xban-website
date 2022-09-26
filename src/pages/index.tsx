import * as React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { Box, Button } from '@chakra-ui/react';
import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';
// import AutoSlider from '../components/AutoSlider';
import Header from '../components/Header';
import Content1 from '../components/Content1';
import WhyChoose from '../components/WhyChoose';
import Introduce from '../components/Introduce';
import Community from '../components/Community';
import DownloadApp from '../components/DownloadApp';
import '../style/global.scss';
import SafeCrypto from '../components/SafeCrypto';

const IndexPage = () => {
  const { t, changeLanguage } = useI18next();
  return (
    <main>
      <Header />

      <Content1 />
      <WhyChoose />
      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
      <SafeCrypto />
      <Introduce />
      <Community />
      <DownloadApp />

      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
      <Box>{t('xxn')}</Box>
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
