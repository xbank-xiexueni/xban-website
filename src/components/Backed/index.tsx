import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Title from '../Title';

const LIST = [
  {
    icon: (
      <svg
        width='56'
        height='58'
        viewBox='0 0 56 58'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M42.8114 19.2258V12.3629C43.7197 11.9391 44.4889 11.2664 45.0292 10.4231C45.5695 9.57983 45.8588 8.60068 45.8635 7.59964V7.44203C45.8635 4.52333 43.4935 2.15724 40.57 2.15724H40.4122C39.0083 2.15724 37.6618 2.71403 36.6691 3.70512C35.6764 4.69621 35.1187 6.04042 35.1187 7.44203V7.59964C35.1234 8.60068 35.4127 9.57983 35.953 10.4231C36.4933 11.2664 37.2625 11.9391 38.1708 12.3629V19.2258C35.5601 19.6249 33.1013 20.7056 31.0434 22.3585L12.1909 7.69887C12.3254 7.21437 12.3956 6.71625 12.4034 6.21618C12.4057 5.0384 12.058 3.88639 11.4045 2.90587C10.7509 1.92535 9.82076 1.16038 8.73166 0.707705C7.64256 0.255032 6.44345 0.135 5.28601 0.362791C4.12858 0.590583 3.06481 1.15596 2.22927 1.98742C1.39372 2.81887 0.823941 3.87905 0.591994 5.03384C0.360047 6.18864 0.476366 7.38617 0.926217 8.47496C1.37607 9.56375 2.13924 10.4949 3.11922 11.1506C4.0992 11.8063 5.25196 12.1571 6.43167 12.1586C7.46375 12.1538 8.4765 11.8787 9.36879 11.3609L27.9328 25.7831C26.2651 28.2984 25.3951 31.2569 25.4361 34.273C25.4772 37.2891 26.4273 40.2229 28.1628 42.6921L22.5166 48.331C22.0602 48.1853 21.5847 48.1079 21.1056 48.1014C20.1372 48.1022 19.1908 48.3895 18.386 48.9271C17.5811 49.4647 16.954 50.2284 16.5837 51.1217C16.2135 52.0151 16.1168 52.9979 16.306 53.9461C16.4951 54.8942 16.9615 55.7652 17.6462 56.4488C18.3309 57.1324 19.2033 57.598 20.153 57.7868C21.1027 57.9756 22.0872 57.8791 22.982 57.5095C23.8767 57.1399 24.6417 56.5137 25.1802 55.7102C25.7187 54.9067 26.0065 53.9618 26.0072 52.9951C26.0009 52.5167 25.9234 52.0419 25.7773 51.5863L31.363 46.0077C33.1845 47.4077 35.3028 48.3729 37.5557 48.8293C39.8085 49.2858 42.1361 49.2213 44.3601 48.6409C46.5841 48.0605 48.6456 46.9796 50.3866 45.481C52.1275 43.9823 53.5018 42.1057 54.4041 39.9949C55.3064 37.8841 55.7128 35.5951 55.5921 33.3033C55.4714 31.0114 54.8269 28.7776 53.7079 26.7729C52.5889 24.7681 51.0252 23.0457 49.1364 21.7375C47.2477 20.4294 45.0841 19.5702 42.8114 19.2258ZM40.496 41.797C39.4636 41.8254 38.4361 41.6469 37.4741 41.272C36.512 40.8972 35.635 40.3337 34.8948 39.6147C34.1546 38.8958 33.5662 38.036 33.1645 37.0862C32.7627 36.1364 32.5557 35.1159 32.5557 34.0848C32.5557 33.0538 32.7627 32.0333 33.1645 31.0835C33.5662 30.1337 34.1546 29.2739 34.8948 28.5549C35.635 27.836 36.512 27.2725 37.4741 26.8976C38.4361 26.5228 39.4636 26.3443 40.496 26.3727C42.4968 26.4426 44.3923 27.2851 45.7833 28.7226C47.1743 30.1601 47.9522 32.0804 47.9532 34.0791C47.9543 36.0779 47.1782 37.999 45.7887 39.4379C44.3991 40.8768 42.5045 41.7211 40.5038 41.7931'
          fill='#D53996'
        />
      </svg>
    ),
    url: '1',
  },
  {
    icon: (
      <svg
        width='61'
        height='49'
        viewBox='0 0 61 49'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.61188 26.5231C9.88173 26.8081 10.2069 27.0352 10.5674 27.1903C10.928 27.3455 11.3164 27.4255 11.7089 27.4255C12.1014 27.4255 12.4898 27.3455 12.8503 27.1903C13.2109 27.0352 13.536 26.8081 13.8059 26.5231L32.1631 8.06272C33.2526 6.97321 34.7303 6.36113 36.2712 6.36113C37.812 6.36113 39.2897 6.97321 40.3792 8.06272C40.9269 8.60852 41.6686 8.91499 42.4418 8.91499C43.215 8.91499 43.9567 8.60852 44.5044 8.06272C44.7736 7.79444 44.9872 7.47567 45.133 7.12467C45.2787 6.77367 45.3537 6.39735 45.3537 6.01729C45.3537 5.63723 45.2787 5.26092 45.133 4.90992C44.9872 4.55892 44.7736 4.24014 44.5044 3.97187C42.3208 1.79741 39.3628 0.57943 36.2812 0.585877C33.1996 0.592324 30.2468 1.82266 28.0723 4.00624L9.61188 22.4323C9.34268 22.7005 9.12908 23.0193 8.98333 23.3703C8.83758 23.7213 8.76256 24.0976 8.76256 24.4777C8.76256 24.8577 8.83758 25.2341 8.98333 25.5851C9.12908 25.9361 9.34268 26.2548 9.61188 26.5231ZM38.351 14.3193C38.7997 13.756 39.0246 13.0469 38.9826 12.3279C38.9405 11.609 38.6344 10.9309 38.123 10.4238C37.6117 9.91667 36.931 9.61627 36.2118 9.58023C35.4925 9.54418 34.7852 9.77502 34.2257 10.2285L15.7653 28.5857C14.6743 29.6677 13.199 30.2734 11.6623 30.2702C10.1257 30.267 8.65297 29.6551 7.56642 28.5686C6.47987 27.482 5.86803 26.0093 5.86481 24.4726C5.8616 22.936 6.46727 21.4607 7.54927 20.3696L25.6659 2.2874C24.5764 1.19789 23.0987 0.585815 21.5579 0.585815C20.017 0.585815 18.5393 1.19789 17.4498 2.2874L3.4928 16.2788C1.5407 18.4924 0.504145 21.366 0.593566 24.316C0.682986 27.2661 1.89168 30.0715 3.97426 32.1629C6.05685 34.2542 8.85723 35.4747 11.8069 35.5764C14.7565 35.6782 17.6344 34.6537 19.8562 32.7109L38.351 14.3193ZM40.3792 16.3819L21.9188 34.7392C21.373 35.2869 21.0665 36.0286 21.0665 36.8018C21.0665 37.575 21.373 38.3167 21.9188 38.8644C22.1871 39.1336 22.5059 39.3472 22.8569 39.493C23.2079 39.6387 23.5842 39.7137 23.9642 39.7137C24.3443 39.7137 24.7206 39.6387 25.0716 39.493C25.4226 39.3472 25.7414 39.1336 26.0097 38.8644L44.5044 20.3696C45.03 19.7737 45.6722 19.2918 46.3915 18.9539C47.1107 18.616 47.8915 18.4293 48.6858 18.4052C49.4801 18.3811 50.2708 18.5202 51.0092 18.814C51.7475 19.1077 52.4178 19.5497 52.9785 20.1128C53.5392 20.6758 53.9785 21.3479 54.2691 22.0875C54.5597 22.8271 54.6955 23.6184 54.6681 24.4126C54.6407 25.2068 54.4506 25.9868 54.1097 26.7046C53.7688 27.4224 53.2843 28.0626 52.6861 28.5857L34.432 46.7023C35.5215 47.7918 36.9992 48.4039 38.54 48.4039C40.0808 48.4039 41.5585 47.7918 42.6481 46.7023L56.6738 32.7109C58.8378 30.5288 60.0492 27.5782 60.0427 24.5049C60.0363 21.4317 58.8126 18.4862 56.6395 16.3131C54.4664 14.14 51.5209 12.9163 48.4477 12.9099C45.3745 12.9035 42.4239 14.1148 40.2417 16.2788L40.3792 16.3819ZM50.6923 22.5354C50.1446 21.9896 49.4029 21.6831 48.6296 21.6831C47.8564 21.6831 47.1147 21.9896 46.567 22.5354L28.0723 40.8926C26.9827 41.9821 25.505 42.5942 23.9642 42.5942C22.4234 42.5942 20.9457 41.9821 19.8562 40.8926C19.5879 40.6234 19.2691 40.4098 18.9181 40.2641C18.5671 40.1183 18.1908 40.0433 17.8108 40.0433C17.4307 40.0433 17.0544 40.1183 16.7034 40.2641C16.3524 40.4098 16.0336 40.6234 15.7653 40.8926C15.2195 41.4403 14.9131 42.182 14.9131 42.9553C14.9131 43.7285 15.2195 44.4702 15.7653 45.0179C17.9474 47.1781 20.8938 48.3898 23.9642 48.3898C27.0347 48.3898 29.9811 47.1781 32.1631 45.0179L50.6579 26.5231C50.9271 26.2548 51.1407 25.9361 51.2864 25.5851C51.4322 25.2341 51.5072 24.8577 51.5072 24.4777C51.5072 24.0976 51.4322 23.7213 51.2864 23.3703C51.1407 23.0193 50.9271 22.7005 50.6579 22.4323L50.6923 22.5354Z'
          fill='#10C722'
        />
      </svg>
    ),
    url: '2',
  },
  {
    icon: (
      <svg
        width='79'
        height='35'
        viewBox='0 0 79 35'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M60.9715 0.706055C56.4829 0.706055 52.2448 2.43885 49.0366 5.58433L26.6983 27.4982C24.1304 30.0174 20.7344 31.4024 17.1435 31.4024C9.66954 31.4024 3.5804 25.3688 3.49689 17.9158C3.40642 10.5113 9.32854 4.32475 16.733 4.10901C20.4769 3.99766 24.033 5.39643 26.6983 8.00607L32.3907 13.5941C32.6969 13.8933 33.191 13.8865 33.4903 13.5803L34.7846 12.265C35.0838 11.9588 35.077 11.4647 34.7708 11.1655L29.0783 5.57736C25.8702 2.43885 21.6321 0.706055 17.1366 0.706055C7.57487 0.706055 -0.177479 8.62542 0.100882 18.2567C0.358365 27.0529 7.37307 34.2763 16.1553 34.7705C21.0058 35.0419 25.6335 33.2951 29.0713 29.92L51.4097 8.00607C53.9776 5.48689 57.3737 4.10205 60.9645 4.10205C68.4384 4.10205 74.5207 10.1355 74.6111 17.5887C74.7086 24.9931 68.7795 31.1796 61.382 31.3954C57.6381 31.5066 54.082 30.1079 51.4167 27.4982L45.7242 21.9102C45.418 21.6109 44.924 21.6179 44.6248 21.9242L43.3303 23.2393C43.0311 23.5455 43.0381 24.0397 43.3442 24.3389L49.0366 29.927C52.4745 33.3021 57.1022 35.0489 61.9527 34.7775C70.7419 34.2903 77.7567 27.0599 78.014 18.2637C78.2924 8.62542 70.5401 0.706055 60.9715 0.706055Z'
          fill='#20242B'
        />
      </svg>
    ),
    url: '3',
  },
  {
    icon: (
      <svg
        width='100'
        height='51'
        viewBox='0 0 100 51'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M45.318 2.0396V3.36777H46.6462H47.9743V2.0396V0.711426H46.6462H45.318V2.0396ZM8.35055 2.38271V3.83263L9.62338 3.76622L10.8962 3.69981L10.9622 2.3163L11.0279 0.932788H9.68935H8.35055V2.38271ZM55.9434 3.69981V5.13866H57.2715H58.5997V3.69981V2.26096H57.2715H55.9434V3.69981ZM38.7218 4.97264L38.7878 6.35615L40.0606 6.42256L41.3335 6.48897V5.03905V3.58913H39.9947H38.6561L38.7218 4.97264ZM0.656231 20.5787L0.713565 32.2555H3.36991H6.02625L6.08358 20.5787L6.14091 8.90182H3.36991H0.5989L0.656231 20.5787ZM15.2661 20.5787L15.3234 32.2555H24.6206H33.9179L33.9752 20.5787L34.0325 8.90182H24.6206H15.2088L15.2661 20.5787ZM41.3335 15.983V23.069H47.9743H54.6152V24.8399V26.6108H47.9743H41.3335V29.2695V31.9283L50.686 31.8705L60.0386 31.8128V24.8399V17.867L53.453 17.8083L46.8675 17.7497V15.9821V14.2145H53.5155H60.1632L60.101 11.6135L60.0386 9.0125L50.686 8.95472L41.3335 8.89694V15.983ZM68.6624 9.17852C68.6042 9.33082 68.5825 14.4857 68.6141 20.634L68.6717 31.8128L78.0242 31.8705L87.3767 31.9283V24.8423V17.7563H82.3961H77.4155V20.4126V23.069H79.6291H81.8427V24.8399V26.6108H77.9689H74.095V20.4126V14.2145H80.7359H87.3767V11.5582V8.90182H78.0727C70.8335 8.90182 68.7449 8.96313 68.6624 9.17852ZM28.4945 20.5233V26.8321H24.6206H20.7468V20.5233V14.2145H24.6206H28.4945V20.5233ZM90.6972 17.7457V19.0845H92.1471H93.597L93.5306 17.8116L93.4642 16.5388L92.0807 16.4728L90.6972 16.4071V17.7457ZM96.6098 24.5351C96.5234 24.6216 96.4526 25.2733 96.4526 25.9837V27.2749H97.9021H99.3513L99.2856 25.8913L99.2196 24.5078L97.9933 24.4427C97.3188 24.4071 96.6963 24.4485 96.6098 24.5351ZM89.8117 30.3739V31.7021H91.2506H92.6894V30.3739V29.0457H91.2506H89.8117V30.3739ZM1.74179 43.6981C2.35983 45.44 3.13748 47.6623 3.46974 48.6363L4.07428 50.4072H4.93494H5.79559L7.50163 45.6479C8.43976 43.0303 9.21386 40.814 9.22161 40.7226C9.22958 40.6312 8.91037 40.5566 8.51215 40.5566H7.78851L6.38707 44.7799L4.98585 49.0033L3.61186 44.8353L2.23786 40.6672L1.4279 40.5991L0.618158 40.5307L1.74179 43.6981ZM13.4419 45.5372V50.5179H16.873H20.3041V49.9713V49.4248L17.5924 49.3626L14.8807 49.3004L14.8159 47.7026L14.751 46.1048L17.3615 46.0424L19.972 45.9799V45.4265V44.8731L17.3611 44.8107L14.7501 44.7483L14.8154 43.2955L14.8807 41.8429L17.5371 41.8084L20.1934 41.7741L20.2634 41.1653L20.3335 40.5566H16.8876H13.4419V45.5372ZM24.51 45.5372V50.5179H25.1741H25.8381V47.3451C25.8381 44.192 25.8412 44.1725 26.3362 44.2077C26.6997 44.2336 26.8533 44.4032 26.9042 44.8348C26.9587 45.2948 27.0941 45.4265 27.513 45.4265C27.9402 45.4265 28.0518 45.5412 28.0518 45.9799C28.0518 46.4227 28.1624 46.5333 28.6052 46.5333C29.0479 46.5333 29.1586 46.644 29.1586 47.0867C29.1586 47.5295 29.2693 47.6401 29.712 47.6401C30.2455 47.6401 30.2654 47.6917 30.2654 49.079V50.5179H30.9295H31.5935V45.5372V40.5566H30.9295H30.2654V43.4343C30.2654 46.1298 30.2384 46.312 29.8382 46.312C29.5634 46.312 29.3855 46.134 29.3401 45.8139C29.2894 45.4573 29.0964 45.2959 28.6605 45.2459C28.1824 45.1908 28.0518 45.0602 28.0518 44.6371C28.0518 44.2099 27.9371 44.0984 27.4984 44.0984C27.0556 44.0984 26.9449 43.9877 26.9449 43.545C26.9449 43.1022 26.8343 42.9915 26.3915 42.9915C25.8682 42.9915 25.8381 42.9251 25.8381 41.7741C25.8381 40.569 25.8315 40.5566 25.1741 40.5566H24.51V45.5372ZM35.2155 40.8886C34.9027 41.7037 35.2916 41.9241 36.9067 41.8475L38.4569 41.7741L38.4562 46.146L38.4558 50.5179H39.2305H40.0053L40.0049 46.146L40.0046 41.7741H41.6097C43.1965 41.7741 43.2159 41.767 43.285 41.1653L43.3552 40.5566H39.349C35.9922 40.5566 35.3222 40.6104 35.2155 40.8886ZM47.0152 40.7042C46.9339 40.7852 46.8675 42.7775 46.8675 45.1315V49.411H47.4209C47.8636 49.411 47.9743 49.5217 47.9743 49.9644V50.5179H50.4093H52.8443V49.9644C52.8443 49.5217 52.955 49.411 53.3977 49.411H53.9511V44.9692V40.5271L53.3424 40.5973L52.7336 40.6672L52.6734 44.9285L52.6134 49.1897H50.4044H48.1957V44.8731V40.5566H47.6793C47.395 40.5566 47.0962 40.623 47.0152 40.7042ZM58.157 45.5308V50.5179H58.8211H59.4851V48.1781C59.4851 45.8783 59.4936 45.8396 59.9832 45.9091C60.3398 45.9598 60.5012 46.1528 60.5512 46.5887C60.6063 47.0668 60.737 47.1974 61.16 47.1974C61.5872 47.1974 61.6988 47.3121 61.6988 47.7508C61.6988 48.1936 61.8094 48.3042 62.2522 48.3042C62.6949 48.3042 62.8056 48.4149 62.8056 48.8576C62.8056 49.3004 62.9163 49.411 63.359 49.411C63.8017 49.411 63.9124 49.5217 63.9124 49.9644C63.9124 50.4317 64.0158 50.5179 64.5765 50.5179C65.1668 50.5179 65.2406 50.4441 65.2406 49.8538C65.2406 49.2931 65.1544 49.1897 64.6871 49.1897C64.2444 49.1897 64.1337 49.079 64.1337 48.6363C64.1337 48.1978 64.022 48.0829 63.5958 48.0829C63.2062 48.0829 63.0382 47.9454 62.9871 47.5848C62.9364 47.2282 62.7434 47.0668 62.3075 47.0168C61.8294 46.9617 61.6988 46.8311 61.6988 46.408C61.6988 45.9025 61.774 45.8693 62.9163 45.8693C64.0673 45.8693 64.1337 45.8391 64.1337 45.3158C64.1337 44.8705 64.2438 44.7624 64.6973 44.7624C65.2518 44.7624 65.2598 44.7388 65.1954 43.2682C65.1374 41.9434 65.0796 41.7741 64.6871 41.7741C64.3925 41.7741 64.2068 41.589 64.132 41.2207C64.0195 40.6677 64.0164 40.6672 61.0883 40.6055L58.157 40.5437V45.5308ZM69.8892 45.5372V50.5179H73.4309H76.9727V49.9644V49.411H74.2057H71.4387V47.7508V46.0906H73.9844H76.53V45.4265V44.7624H73.9844H71.4387L71.4385 43.2682L71.4382 41.7741H74.1502H76.8621L76.932 41.1653L77.0022 40.5566H73.4456H69.8892V45.5372ZM82.2854 41.11C82.2854 41.5527 82.1747 41.6634 81.732 41.6634C81.1943 41.6634 81.1786 41.7076 81.1786 43.2129C81.1786 44.7182 81.1943 44.7624 81.732 44.7624C82.1747 44.7624 82.2854 44.8731 82.2854 45.3158V45.8693H84.6097H86.934V47.5224V49.1757L84.333 49.2379L81.732 49.3004L81.6621 49.9091L81.5919 50.5179H84.2631H86.934V49.9644C86.934 49.5217 87.0447 49.411 87.4874 49.411C88.0315 49.411 88.0408 49.3816 88.0408 47.6401C88.0408 45.8987 88.0315 45.8693 87.4874 45.8693C87.0467 45.8693 86.934 45.7581 86.934 45.3236C86.934 44.7833 86.9121 44.7773 84.6651 44.7149L82.3961 44.6518L82.3301 43.2682L82.2644 41.8847H84.9311H87.5981V41.2207V40.5566H84.9418H82.2854V41.11ZM63.9124 43.3236V44.7624H61.6988H59.4851V43.3236V41.8847H61.6988H63.9124V43.3236Z'
          fill='#4656EA'
        />
      </svg>
    ),
    url: '4',
  },
  {
    icon: (
      <svg
        width='60'
        height='62'
        viewBox='0 0 60 62'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21.8931 1.83877C12.3474 2.57659 4.23132 3.22219 3.86241 3.26831C2.80178 3.49888 1.83338 4.19059 1.37224 5.15899L0.957214 5.98905L1.00333 26.0026L1.04944 46.0162L1.64893 47.2613C2.01784 47.953 4.32355 51.181 6.85984 54.4551C11.8863 61.0033 12.2552 61.3261 14.1459 61.5567C14.6993 61.6028 18.8957 61.4184 23.3687 61.1417C27.8879 60.865 35.174 60.4038 39.5087 60.1733C58.0927 59.0204 57.1243 59.1126 58.2311 58.1904C59.5684 57.0836 59.4301 58.9282 59.5223 34.5799C59.5684 13.9668 59.5223 12.5834 59.1995 11.9839C58.8767 11.2461 58.2311 10.7849 49.7461 4.83619C44.074 0.824254 43.659 0.639797 41.1227 0.593683C40.0621 0.547568 31.3926 1.14705 21.8931 1.83877ZM43.3362 4.46728C44.1662 4.83619 50.0228 8.89425 50.8528 9.67819C51.0834 9.90876 51.1756 10.1393 51.0373 10.2316C50.8067 10.4621 14.5148 12.6295 13.4542 12.445C12.993 12.3989 12.3013 12.1222 11.8863 11.8456C10.2262 10.6927 6.12201 7.32636 6.12201 7.09579C6.12201 6.45019 5.98367 6.45019 22.1236 5.25122C25.2133 5.06676 30.332 4.69785 33.4216 4.42116C40.1082 3.91391 42.0911 3.91391 43.3362 4.46728ZM54.8648 14.8891C55.1414 15.1658 55.372 15.673 55.4642 16.1803C55.5104 16.6414 55.5565 25.2187 55.5104 35.1794C55.4642 52.2416 55.4181 53.3484 55.0953 53.8095C54.9109 54.1323 54.542 54.4551 54.2192 54.5473C53.4352 54.8701 15.4371 57.0375 14.6531 56.8069C14.2842 56.7147 13.777 56.3919 13.5464 56.1152L13.0853 55.6541L13.0391 37.2084C12.993 24.2503 13.0391 18.5321 13.1775 18.0249C13.2697 17.656 13.5925 17.1948 13.8231 17.0104C14.1459 16.7798 16.4055 16.5953 24.1527 16.1342C29.5942 15.8575 38.0331 15.3502 42.8289 15.0274C54.3575 14.3357 54.3114 14.3357 54.8648 14.8891Z'
          fill='#00000F'
        />
      </svg>
    ),
    url: '5',
  },
  {
    icon: (
      <svg
        width='92'
        height='34'
        viewBox='0 0 92 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M22.1607 1.68622C17.5201 2.73735 16.1754 3.56267 8.06374 10.3397C-1.33406 18.1915 -1.2484 16.3959 7.41808 23.8398C17.7336 32.6998 19.3404 33.5331 26.2498 33.6049C33.9392 33.685 36.3884 32.3498 50.1393 20.5826C64.5818 8.22358 65.6657 7.91836 73.0602 14.1272C76.8722 17.3279 74.0515 22.7348 67.9771 23.8719C67.2807 24.0019 66.4396 24.1815 66.1077 24.27C64.6537 24.6593 60.9248 23.2844 58.6387 21.5168L56.3139 19.7187L52.4968 22.9635L48.6801 26.2083L50.8086 27.9169C62.0332 36.9273 71.4276 35.8812 85.1125 24.0973C93.7575 16.6531 93.9142 18.6799 84.0364 10.178C68.1601 -3.48642 62.5131 -2.93353 42.5011 14.2456C28.0254 26.6723 27.2015 26.9036 19.6856 20.6463C15.3765 17.0592 15.3855 17.4656 19.5414 14.1057C25.212 9.52165 28.9031 9.41676 33.9001 13.6974L35.9541 15.457L39.841 12.195L43.7274 8.93271L40.7936 6.56529C34.9465 1.84757 28.6861 0.208217 22.1607 1.68622Z'
          fill='#EF9E24'
        />
      </svg>
    ),
    url: '6',
  },
];

const Backed = () => {
  return (
    <Box bg={'bg.gray'} pt={100}>
      <Title>Backed By</Title>

      <Flex justify={'center'} gap={10} flexWrap='wrap'>
        {LIST.map(({ icon, url }) => (
          <Flex
            w={150}
            h={150}
            borderRadius={'100%'}
            bg='#FFFFFF'
            justify={'center'}
            alignItems='center'
            key={url}
          >
            {icon}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Backed;
