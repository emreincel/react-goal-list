import React from 'react';

import styles from './styles.module.css';

////// With Styled-components //////

// import styled from 'styled-components';

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

////// With JSX Component //////

type TProps = {
  children: string;
};

const Button = ({ children }: TProps) => {
  return <button className={styles['button']}>{children}</button>;
};

export default Button;
