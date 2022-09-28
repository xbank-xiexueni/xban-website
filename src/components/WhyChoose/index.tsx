import { Box, Divider } from '@chakra-ui/react';
import React, {
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
// import ReactPageScroller from 'react-page-scroller';
import MyContainer from '../container';
import Item, { Header } from './Item';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import { graphql, useStaticQuery } from 'gatsby';
import { DIVIDE } from '../../constants/paddingY';
import Slider from 'react-slick';

const DATA = [
  {
    key: 'why1',
    title: 'NFT lowest as $10, Join to Free Mint & Pre-Mint',
    titleHighlight: ['NFT', '$10'],
    buttonTitle: 'Buy my NFT',
    description:
      'Pick-Up and Own Your New Profile Picture by Artists; Find Interesting Digital Collectibles of Sport, Music and Photography.',
  },
  {
    key: 'why2',
    title: 'Early Bird Access to Hot Games',
    titleHighlight: ['Hot Games'],
    buttonTitle: 'Get hot games',
    description:
      'Onboard Blockchain Games without Hassles and Be Ready to Enjoy New Worlds All the Time.',
  },
  {
    key: 'why3',
    title: 'Participate Popular DAO with Friends',
    titleHighlight: ['DAO'],
    buttonTitle: 'Connect my wallet',
    description:
      'Interact with Your New Friends From Decentralized Communities Based on Your Hobbies, Interests, Visions and Wishes..',
  },
  {
    key: 'why4',
    title: 'Play Around and Earn Free Coins',
    buttonTitle: 'Exploring Web3',
    description:
      'Explore Token Bounties of Events and Applications of Web3 and Earn on Your Contributions',
  },
];

const WhyChoose = () => {
  const query = useStaticQuery(graphql`
    query {
      why1: file(relativePath: { eq: "why/why1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      why2: file(relativePath: { eq: "why/why2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      why3: file(relativePath: { eq: "why/why3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      why4: file(relativePath: { eq: "why/why4.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    // document.addEventListener(
    //   'wheel',
    //   function (event) {
    //     if (!flag) {
    //       document.removeEventListener('wheel', () => {});
    //       return;
    //     }
    //     console.log(flag, 'wheel');
    //     ref?.current?.goToPage(2);
    //     event.preventDefault();
    //   },
    //   { passive: false }
    // );
    // document.addEventListener('scroll', function (event) {
    //   console.log('1212');
    // });
  }, [flag]);
  console.log(flag);

  useEffect(() => {
    // 添加滚动事件
    addEventListener('scroll', handleScroll);
    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = useCallback(() => {
    // rot.style.width = innerot.clientHeight + 3 + 'px'; // 3px 预留滚动条
    // innerot.style.transform = `translateY(-${innerot.clientHeight}px) rotateZ(90deg) rotateX(180deg) translateY(${innerot.clientHeight}px)`;
    // const scrollTop =
    //   document.documentElement.scrollTop ||
    //   window?.pageYOffset ||
    //   document.body.scrollTop;
    // //  高度
    // const dom = document.getElementById('content1');
    // const top: number = dom?.offsetTop || 500;
    // console.log(scrollTop);
    // if (scrollTop > top || (scrollTop > top && scrollTop < top + innerHeight)) {
    //   setFlag(true);
    // } else {
    //   setFlag(false);
    // }
  }, []);

  return (
    <Box bg='bg.gray' py={DIVIDE}>
      {/* <MyContainer> */}
      <Header />
      {DATA.map((item, index) => (
        <Box position={'sticky'} top={130} zIndex={11 + index} bg='bg.gray'>
          <MyContainer>
            {index !== 0 && <Divider color={'gray'} borderWidth={2} />}

            <Item
              {...item}
              image={query[item?.key]?.childImageSharp?.gatsbyImageData}
            />
          </MyContainer>
        </Box>
      ))}
      {/* <Box position={'sticky'} top={130} zIndex={15} bg='bg.gray'>
        <MyContainer>
          <Divider color={'gray'} borderWidth={2} />

          <Item
            {...DATA[0]}
            image={query[DATA[0].key]?.childImageSharp?.gatsbyImageData}
          />
        </MyContainer>
      </Box>

      <Box position={'sticky'} top={130} zIndex={16} bg='bg.gray'>
        <MyContainer>
          <Item
            {...DATA[1]}
            image={query[DATA[1].key]?.childImageSharp?.gatsbyImageData}
          />
          <Divider color={'gray'} borderWidth={2} />
        </MyContainer>
      </Box>

      <Box position={'sticky'} top={130} zIndex={17} bg='bg.gray'>
        <MyContainer>
          <Item
            {...DATA[2]}
            image={query[DATA[2].key]?.childImageSharp?.gatsbyImageData}
          />
          <Divider color={'gray'} borderWidth={2} />
        </MyContainer>
      </Box>

      <Box position={'sticky'} top={130} zIndex={18} bg='bg.gray'>
        <MyContainer>
          <Item
            {...DATA[3]}
            image={query[DATA[3].key]?.childImageSharp?.gatsbyImageData}
          />
          <Divider color={'gray'} borderWidth={2} />
        </MyContainer>
      </Box> */}
      {/* </MyContainer> */}
    </Box>
  );
};

export default WhyChoose;
