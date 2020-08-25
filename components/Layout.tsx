import React, {ReactNode} from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

export function Layout({children}: Props) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;
