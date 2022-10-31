import React from 'react';
import styled from 'styled-components';

interface ListItemProps {
  content: string;
}

const ListItem = ({ content }: ListItemProps) => {
  return <Wrapper>{content}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`;

export default ListItem;
