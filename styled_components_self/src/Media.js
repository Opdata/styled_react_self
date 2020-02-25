import { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768
};

// 위에 있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어 준다.
// 참고 : https://www.styled-components.com/docs/advanced#media-templates

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
