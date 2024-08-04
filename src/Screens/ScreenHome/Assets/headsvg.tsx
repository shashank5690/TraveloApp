import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgProps } from 'react-native-svg';

const Headsvg: React.FC<SvgProps> = (props) => (
  <Svg width="322" height="170" viewBox="0 0 300 102" fill="none" {...props}>
    <Path
      d="M18.666 36.6992H5.02832V26.4199H17.9795V24.1562H5.02832V14.5264H18.666V12.2256H2.50488V39H18.666V36.6992ZM29.3164 30.7617L34.8271 39H37.6104L30.6709 28.8506L37.666 19.0166H34.8828L29.3906 27.0693H29.335L23.7871 19.0166H21.0039L27.9805 28.9434L20.9297 39H23.7129L29.2422 30.7617H29.3164ZM49.6152 18.7939C46.4424 18.7939 43.752 20.6123 42.6943 23.1543H42.6387V19.0166H40.3193V45.624H42.7686V34.8809H42.8242C43.9375 37.4785 46.4424 39.2227 49.6523 39.2227C54.6807 39.2227 58.1318 35.1035 58.1318 28.999C58.1318 22.9131 54.6621 18.7939 49.6152 18.7939ZM49.1885 37.0146C45.3848 37.0146 42.75 33.7676 42.75 28.999C42.75 24.2676 45.3848 20.9834 49.1885 20.9834C53.0479 20.9834 55.627 24.2119 55.627 29.0176C55.627 33.8232 53.0479 37.0146 49.1885 37.0146ZM61.7314 39H64.1807V11.0566H61.7314V39ZM76.8535 39.2227C82.3457 39.2227 85.9453 35.2334 85.9453 28.999C85.9453 22.7646 82.3457 18.7939 76.8535 18.7939C71.3613 18.7939 67.7803 22.7646 67.7803 28.999C67.7803 35.2334 71.3613 39.2227 76.8535 39.2227ZM76.8535 37.0146C72.8086 37.0146 70.2852 33.9902 70.2852 28.999C70.2852 24.0264 72.8086 20.9834 76.8535 20.9834C80.917 20.9834 83.4404 24.0078 83.4404 28.999C83.4404 33.9902 80.917 37.0146 76.8535 37.0146ZM89.3779 39H91.8271V26.6055C91.8271 23.377 93.6455 21.1504 96.4844 21.1504C97.3379 21.1504 98.043 21.2803 98.377 21.4287V18.998C98.0615 18.9053 97.4678 18.7939 96.8184 18.7939C94.332 18.7939 92.4395 20.1855 91.7529 22.5605H91.6787V19.0166H89.3779V39ZM107.858 20.9648C111.477 20.9648 113.926 23.6367 113.963 27.6074H101.531C101.754 23.6367 104.277 20.9648 107.858 20.9648ZM113.833 33.3408C113.239 35.5303 111.105 37.0518 108.1 37.0518C104.129 37.0518 101.531 34.2686 101.531 29.7412V29.6113H116.523V28.5352C116.523 22.5977 113.146 18.7939 107.896 18.7939C102.515 18.7939 98.9893 22.8574 98.9893 29.0547C98.9893 35.3447 102.515 39.2227 108.044 39.2227C112.386 39.2227 115.67 36.7549 116.264 33.3408H113.833ZM129.456 14.2295V19.0166H126.599V21.0762H129.456V34.083C129.456 37.6826 130.792 39.1113 134.095 39.1113C134.614 39.1113 135.69 39.0557 135.95 38.9814V36.8848C135.802 36.9033 134.837 36.959 134.577 36.959C132.722 36.959 131.905 36.0684 131.905 33.9902V21.0762H135.857V19.0166H131.905V14.2295H129.456ZM139.661 39H142.11V27.3477C142.11 23.5439 144.467 20.9834 148.085 20.9834C151.499 20.9834 153.466 23.0986 153.466 26.5869V39H155.915V26.1973C155.915 21.7256 153.15 18.7939 148.771 18.7939C145.562 18.7939 143.279 20.2598 142.166 22.7461H142.11V11.0566H139.661V39ZM168.087 20.9648C171.705 20.9648 174.154 23.6367 174.191 27.6074H161.76C161.982 23.6367 164.506 20.9648 168.087 20.9648ZM174.062 33.3408C173.468 35.5303 171.334 37.0518 168.328 37.0518C164.357 37.0518 161.76 34.2686 161.76 29.7412V29.6113H176.752V28.5352C176.752 22.5977 173.375 18.7939 168.124 18.7939C162.743 18.7939 159.218 22.8574 159.218 29.0547C159.218 35.3447 162.743 39.2227 168.272 39.2227C172.614 39.2227 175.898 36.7549 176.492 33.3408H174.062Z"
      fill="#2E323E"
    />
    <Path d="M13.8047 89C19.5195 89 23.0078 86.1055 23.0078 81.3926C23.0078 77.8486 20.4473 75.2324 16.8105 74.8799V74.7314C19.5566 74.2861 21.6904 71.7812 21.6904 68.9053C21.6904 64.8418 18.5547 62.2256 13.6934 62.2256H2.35645V89H13.8047ZM7.14355 65.9551H12.5059C15.3447 65.9551 16.959 67.2725 16.959 69.6104C16.959 72.0967 15.085 73.5068 11.7451 73.5068H7.14355V65.9551ZM7.14355 85.2705V76.9023H12.5244C16.1797 76.9023 18.1094 78.3311 18.1094 81.0586C18.1094 83.8047 16.2354 85.2705 12.71 85.2705H7.14355ZM34.6973 72.041C37.4434 72.041 39.3359 73.9707 39.4287 76.9023H29.8174C30.0215 74.0078 31.9883 72.041 34.6973 72.041ZM39.4473 82.9697C38.9092 84.6396 37.1836 85.6973 34.957 85.6973C31.8584 85.6973 29.7803 83.5264 29.7803 80.2607V79.9824H43.9746V78.4609C43.9746 72.3193 40.375 68.4414 34.6973 68.4414C28.8896 68.4414 25.1602 72.5605 25.1602 78.9434C25.1602 85.3262 28.8711 89.2969 34.8643 89.2969C39.5957 89.2969 43.1953 86.7178 43.7891 82.9697H39.4473ZM54.4209 85.6787C52.2686 85.6787 50.8584 84.6396 50.8584 83.0068C50.8584 81.3555 52.1943 80.3906 54.7178 80.2236L59.3564 79.9268V81.4668C59.3564 83.9346 57.2227 85.6787 54.4209 85.6787ZM53.0664 89.2227C55.7568 89.2227 58.2617 87.9053 59.375 85.7344H59.4863V89H63.9209V75.1025C63.9209 71.0762 60.6367 68.4414 55.5713 68.4414C50.8027 68.4414 47.3516 71.0947 47.2402 74.8057H51.5078C51.8232 73.1729 53.3262 72.0781 55.4229 72.0781C57.9092 72.0781 59.3564 73.2471 59.3564 75.3994V76.8838L54.0869 77.1992C48.9844 77.5146 46.2197 79.5742 46.2197 83.1924C46.2197 86.792 49.0771 89.2227 53.0664 89.2227ZM85.6484 68.7197H81.0283V80.3535C81.0283 83.3594 79.3027 85.3447 76.4824 85.3447C73.7549 85.3447 72.3262 83.749 72.3262 80.7988V68.7197H67.7061V81.7266C67.7061 86.4023 70.4707 89.2598 74.8867 89.2598C77.9668 89.2598 79.9893 87.9238 81.1025 85.4561H81.2139V89H85.6484V68.7197ZM90.8809 64.1924V68.7197H88.1162V72.3008H90.8809V83.6191C90.8809 87.5342 92.5879 89.0928 96.8926 89.0928C97.876 89.0928 98.8223 89.0186 99.3232 88.9072V85.3633C99.0264 85.4004 98.3955 85.4561 97.9502 85.4561C96.2803 85.4561 95.501 84.6582 95.501 82.9883V72.3008H99.3418V68.7197H95.501V64.1924H90.8809ZM102.737 89H107.357V68.7197H102.737V89ZM105.038 66.1406C106.485 66.1406 107.636 65.0273 107.636 63.5986C107.636 62.1514 106.485 61.0566 105.038 61.0566C103.609 61.0566 102.44 62.1514 102.44 63.5986C102.44 65.0273 103.609 66.1406 105.038 66.1406ZM112.738 89H117.358V72.3008H121.144V68.7197H117.303V67.1055C117.303 65.5098 117.989 64.8232 119.641 64.8232C120.197 64.8232 120.717 64.8789 121.125 64.9717V61.6133C120.438 61.4834 119.696 61.4277 118.88 61.4277C114.52 61.4277 112.738 63.0605 112.738 66.9014V68.7197H109.974V72.3008H112.738V89ZM142.203 68.7197H137.583V80.3535C137.583 83.3594 135.857 85.3447 133.037 85.3447C130.31 85.3447 128.881 83.749 128.881 80.7988V68.7197H124.261V81.7266C124.261 86.4023 127.025 89.2598 131.441 89.2598C134.521 89.2598 136.544 87.9238 137.657 85.4561H137.769V89H142.203V68.7197ZM146.285 89H150.905V60.9824H146.285V89Z" fill="#1B1E28"/>
    <Path d="M190.835 68.7197H186.271L182.764 84.3799H182.671L178.645 68.7197H174.21L170.184 84.3799H170.091L166.603 68.7197H161.982L167.493 89H172.299L176.325 74.1006H176.437L180.481 89H185.324L190.835 68.7197ZM201.949 89.2969C207.961 89.2969 211.728 85.3262 211.728 78.8506C211.728 72.4307 207.924 68.4414 201.949 68.4414C196.012 68.4414 192.189 72.4492 192.189 78.8506C192.189 85.3262 195.975 89.2969 201.949 89.2969ZM201.949 85.6045C198.795 85.6045 196.884 83.1182 196.884 78.8691C196.884 74.6387 198.795 72.1338 201.949 72.1338C205.122 72.1338 207.033 74.6201 207.033 78.8691C207.033 83.1182 205.141 85.6045 201.949 85.6045ZM214.826 89H219.446V77.2363C219.446 74.3789 221.079 72.6162 223.788 72.6162C224.586 72.6162 225.31 72.7275 225.699 72.876V68.6826C225.347 68.5713 224.827 68.4971 224.215 68.4971C221.821 68.4971 220.003 69.8701 219.354 72.2451H219.261V68.7197H214.826V89ZM228.334 89H232.954V60.9824H228.334V89ZM244.644 89.2227C247.612 89.2227 249.95 87.8125 251.045 85.5488H251.138V89H255.665V60.9824H251.045V72.1338H250.934C249.839 69.8887 247.557 68.4971 244.625 68.4971C239.597 68.4971 236.201 72.5605 236.201 78.8506C236.201 85.1592 239.578 89.2227 244.644 89.2227ZM245.998 72.3379C249.041 72.3379 251.063 74.9541 251.063 78.8691C251.063 82.8027 249.06 85.3818 245.998 85.3818C242.937 85.3818 240.933 82.8584 240.933 78.8691C240.933 74.8984 242.937 72.3379 245.998 72.3379ZM261.046 62.2256L261.417 80.168H265.443L265.814 62.2256H261.046ZM263.421 89.3711C264.942 89.3711 266.13 88.2021 266.13 86.7363C266.13 85.2705 264.942 84.1201 263.421 84.1201C261.918 84.1201 260.73 85.2705 260.73 86.7363C260.73 88.2021 261.918 89.3711 263.421 89.3711Z" fill="#FF7029"/>
    <Path d="M167.841 101.54C178.5 93.6095 226.5 83.6511 266.766 101.092C244.5 95.6012 199 91.6178 167.841 101.54Z" fill="#FF7029"/>
  </Svg>
);

export default Headsvg;
