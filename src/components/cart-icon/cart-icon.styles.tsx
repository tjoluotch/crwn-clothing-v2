import { Dispatch } from 'react';
import styled from 'styled-components';
import { SetIsCartOpen } from '../../store/cart/cart.action';

type ChildrenProp = {
  children?: React.ReactNode;
  onClick: Dispatch<SetIsCartOpen>;
}

export const CartIconContainer = styled.div<ChildrenProp>`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
