import React, { useState } from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import MyContainer from '../container';
import '../../style/global.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Title from '../Title';
import left from '../../images/team/team-bg-left.png';
import right from '../../images/team/team-bg-right.png';
import { DIVIDE } from '../../constants/paddingY';
import ResponsiveBox from '../ResponsiveBox';
import kaiyang from '../../images/team/kaiyang.png';
import dx from '../../images/team/XD.png';
import rayi from '../../images/team/rayi.png';
import LUO from '../../images/team/Luo.png';
import waiguoren from '../../images/team/waiguoren.png';
import langren from '../../images/team/langren.png';

const Team = () => {
  return (
    <Box bg='bg.gray' pos='relative'>
      <Box position={'absolute'} bottom={0} left={0}>
        <Image src={left} alt='bg' />
      </Box>
      <Box position={'absolute'} bottom={0} right={0}>
        <Image src={right} alt='bg' />
      </Box>
      <MyContainer>
        <Item3 />
      </MyContainer>
    </Box>
  );
};

const MOBILE_DATA = [
  ['kaiyang', 'dx'],
  ['rayi', 'LUO'],
  ['langren', 'waiguoren'],
];

const AVATAR_DATA = new Map([
  [
    'rayi',
    {
      name: 'Rayi',
      image: rayi,
      hold: 'COO',
      intro:
        'Builder of First Generation of Cryptoexchanges. Lead of Product and Exchange Operation for 6+ Years at Huobi Global',
    },
  ],
  [
    'kaiyang',
    {
      name: 'Kaiyang',
      image: kaiyang,
      hold: 'CEO & Founder',
      intro:
        'Entrepreneur, Quant/Smart Contract/Blockchain Developer; Former Blockchain R&D at Huobi Global; Promoter of Bitcoin and Blockchain Since 2017',
    },
  ],
  [
    'dx',
    {
      name: 'Dx',
      image: dx,
      hold: 'CTO & Co-Founder',
      intro:
        'Tech Lead and Expert in Cryptoexchange Custodian Solution and Risk Management with 6 Years of Practical Experience at Huobi Global',
    },
  ],
  [
    'LUO',
    {
      name: 'Luo',
      image: LUO,
      hold: 'General Consul',
      intro:
        'Core of Oversea Compliant Team for Several Main Cryptoexchanges and Public Blockchain Projects',
    },
  ],
  [
    'langren',
    {
      name: 'Bruce Chen',
      hold: ' Advisor',
      image: langren,
      intro: 'CEO & Founder of xCurrency, Entrepreneur and Co-Founder of xBank',
    },
  ],
  [
    'waiguoren',
    {
      name: 'Florian M Spiegal',
      hold: ' Advisor',
      image: waiguoren,
      intro:
        'Founder of FinFabrik, Entrepreneur and Investor. FinTech Advisory of HKSFC & HKSI, Chairman of HK FinTech Association',
    },
  ],
]);

const Item3 = () => {
  const [showIndex, setShowIndex] = useState<string | undefined>();
  return (
    <Box
      py={{
        md: DIVIDE,
        sm: 5,
        xs: 5,
      }}
    >
      <Title
        mb={{
          md: 20,
          sm: 8,
          xs: 8,
        }}
      >
        Team & Advisors
      </Title>
      <ResponsiveBox
        mobile={
          <Box>
            {MOBILE_DATA.map((f) => (
              <Flex
                position={'relative'}
                justify={'space-between'}
                key={f?.join()}
              >
                {f.map((item) => (
                  <Box
                    onMouseOver={() => setShowIndex(item)}
                    onMouseLeave={() => setShowIndex(undefined)}
                    borderRadius={10}
                    pb={4}
                    mb={4}
                    cursor='pointer'
                    key={item}
                  >
                    {/* <GatsbyImage
                      loading='lazy'
                      image={query[item]?.childImageSharp?.gatsbyImageData}
                      alt='index'
                      title=''
                      key={item}
                      style={{
                        width: 158,
                        height: 124,
                        borderRadius: 10,
                      }}
                    /> */}
                    <Image
                      src={AVATAR_DATA.get(item)?.image}
                      style={{
                        width: 158,
                        height: 124,
                        borderRadius: 10,
                      }}
                    />
                    <Text fontSize={18} fontWeight={700} mt={3}>
                      {AVATAR_DATA.get(item)?.name}
                    </Text>
                    <Text fontSize={12} color='font.tip'>
                      {AVATAR_DATA.get(item)?.hold}
                    </Text>
                    {showIndex === item && (
                      <Box
                        position={'absolute'}
                        zIndex={2}
                        top={0}
                        bottom={4}
                        left={0}
                        right={0}
                        bg='rgba(0, 0, 0, 0.7)'
                        backdropFilter={'blur(12px)'}
                        color='#fff'
                        borderRadius={10}
                        p={4}
                      >
                        <Flex
                          gap={4}
                          justify={'space-between'}
                          alignItems='center'
                          // flexDirection={index === 0 ? 'row-reverse' : 'row'}
                        >
                          <Box>
                            <Text fontSize={14} fontWeight={700}>
                              {AVATAR_DATA.get(item)?.name}
                              <Text
                                fontSize={12}
                                as='span'
                                ml={2}
                                fontWeight={400}
                              >
                                {AVATAR_DATA.get(item)?.hold}
                              </Text>
                            </Text>

                            <Text fontSize={12} mt={3}>
                              {AVATAR_DATA.get(item)?.intro}
                            </Text>
                            <Box mt={4}>
                              <svg
                                width='44'
                                height='20'
                                viewBox='0 0 44 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  opacity='0.5'
                                  d='M34.3732 0C31.8389 0 29.4459 0.97838 27.6345 2.7544L15.0217 15.1276C13.5718 16.5499 11.6543 17.3319 9.6268 17.3319C5.40682 17.3319 1.96873 13.9252 1.92158 9.71704C1.8705 5.5363 5.21428 2.04321 9.39504 1.9214C11.5089 1.85853 13.5168 2.64831 15.0217 4.12178L18.2358 7.27694C18.4087 7.44588 18.6876 7.44202 18.8567 7.26912L19.5875 6.52647C19.7564 6.35359 19.7525 6.07461 19.5796 5.90566L16.3655 2.75047C14.5541 0.978379 12.1612 0 9.62294 0C4.22411 0 -0.153065 4.47148 0.00410435 9.90954C0.149486 14.8761 4.11017 18.9546 9.06883 19.2337C11.8076 19.3869 14.4205 18.4006 16.3616 16.4949L28.9744 4.12178C30.4243 2.69939 32.3418 1.91747 34.3693 1.91747C38.5893 1.91747 42.0234 5.32412 42.0745 9.53237C42.1296 13.7131 38.7818 17.2061 34.605 17.328C32.4911 17.3908 30.4832 16.6011 28.9784 15.1276L25.7642 11.9724C25.5913 11.8034 25.3124 11.8074 25.1435 11.9803L24.4126 12.7229C24.2436 12.8958 24.2476 13.1748 24.4204 13.3437L27.6345 16.4989C29.5756 18.4046 32.1885 19.3908 34.9272 19.2376C39.8899 18.9625 43.8506 14.8801 43.9959 9.91349C44.1531 4.47148 39.7759 0 34.3732 0Z'
                                  fill='white'
                                />
                              </svg>
                            </Box>
                          </Box>

                          <Box>
                            {/* <GatsbyImage
                              loading='lazy'
                              image={
                                query[item]?.childImageSharp?.gatsbyImageData
                              }
                              alt='index'
                              title=''
                              key={item}
                              style={{
                                width: 100,
                                height: 129,
                                borderRadius: '10px',
                              }}
                            /> */}
                            <Box w={120}>
                              <Image
                                src={AVATAR_DATA.get(item)?.image}
                                style={{
                                  width: 120,
                                  height: 129,
                                  borderRadius: '10px',
                                }}
                              />
                            </Box>
                          </Box>
                        </Flex>
                      </Box>
                    )}
                  </Box>
                ))}
              </Flex>
            ))}
          </Box>
        }
        pc={
          <Flex flexWrap={'wrap'} justify={'space-between'} position='relative'>
            {['kaiyang', 'dx', 'rayi', 'LUO', 'langren', 'waiguoren']?.map(
              (item) => (
                <Box
                  onMouseOver={() => setShowIndex(item)}
                  onMouseLeave={() => setShowIndex(undefined)}
                  // position='relative'
                  position={'relative'}
                  borderRadius={10}
                  pb={10}
                  mb={10}
                  cursor='pointer'
                  key={item}
                >
                  <Image
                    src={AVATAR_DATA.get(item)?.image}
                    style={{
                      width: 384,
                      height: 300,
                      borderRadius: 10,
                    }}
                  />
                  {/* <GatsbyImage
                    loading='lazy'
                    image={query[item]?.childImageSharp?.gatsbyImageData}
                    alt='index'
                    title=''
                    key={item}
                    style={{
                      width: 384,
                      height: 300,
                      borderRadius: 10,
                    }}
                    // 最大宽度 高度
                    // width={380}
                    // height={560}
                    // formats={["AUTO", "WEBP", "AVIF"]}
                    // className="case-img"
                    // breakpoints={[375, 750, 1080, 1366, 1920]}
                  /> */}
                  <Text fontSize={30} fontWeight={700} mt={6}>
                    {AVATAR_DATA.get(item)?.name}
                  </Text>
                  <Text fontSize={16} color='font.tip'>
                    {AVATAR_DATA.get(item)?.hold}
                  </Text>
                  {showIndex === item && (
                    <Box
                      position={'absolute'}
                      zIndex={2}
                      top={0}
                      bottom={0}
                      left={0}
                      right={0}
                      bg='rgba(0, 0, 0, 0.7)'
                      backdropFilter={'blur(12px)'}
                      color='#fff'
                      borderRadius={10}
                      p={10}
                    >
                      <Text fontSize={30} fontWeight={700}>
                        {AVATAR_DATA.get(item)?.name}
                      </Text>
                      <Text fontSize={16}>{AVATAR_DATA.get(item)?.hold}</Text>
                      <Text fontSize={16} lineHeight={'26px'} mt={8}>
                        {AVATAR_DATA.get(item)?.intro}
                      </Text>
                      <Box position={'fixed'} bottom={10}>
                        <svg
                          width='44'
                          height='20'
                          viewBox='0 0 44 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            opacity='0.5'
                            d='M34.3732 0C31.8389 0 29.4459 0.97838 27.6345 2.7544L15.0217 15.1276C13.5718 16.5499 11.6543 17.3319 9.6268 17.3319C5.40682 17.3319 1.96873 13.9252 1.92158 9.71704C1.8705 5.5363 5.21428 2.04321 9.39504 1.9214C11.5089 1.85853 13.5168 2.64831 15.0217 4.12178L18.2358 7.27694C18.4087 7.44588 18.6876 7.44202 18.8567 7.26912L19.5875 6.52647C19.7564 6.35359 19.7525 6.07461 19.5796 5.90566L16.3655 2.75047C14.5541 0.978379 12.1612 0 9.62294 0C4.22411 0 -0.153065 4.47148 0.00410435 9.90954C0.149486 14.8761 4.11017 18.9546 9.06883 19.2337C11.8076 19.3869 14.4205 18.4006 16.3616 16.4949L28.9744 4.12178C30.4243 2.69939 32.3418 1.91747 34.3693 1.91747C38.5893 1.91747 42.0234 5.32412 42.0745 9.53237C42.1296 13.7131 38.7818 17.2061 34.605 17.328C32.4911 17.3908 30.4832 16.6011 28.9784 15.1276L25.7642 11.9724C25.5913 11.8034 25.3124 11.8074 25.1435 11.9803L24.4126 12.7229C24.2436 12.8958 24.2476 13.1748 24.4204 13.3437L27.6345 16.4989C29.5756 18.4046 32.1885 19.3908 34.9272 19.2376C39.8899 18.9625 43.8506 14.8801 43.9959 9.91349C44.1531 4.47148 39.7759 0 34.3732 0Z'
                            fill='white'
                          />
                        </svg>
                      </Box>
                    </Box>
                  )}
                </Box>
              )
            )}
          </Flex>
        }
      />
    </Box>
  );
};

export default Team;
