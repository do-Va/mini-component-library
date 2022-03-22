import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width, size, placeholder }) => {
  return (
    <Wrapper width={width} size={size}>
      <Icon
        id={icon}
        size={size === 'small' ? '10.67' : '16'}
        strokeWidth={size === 'large' && '2'}
        color="gray700"
      />
      <Input placeholder={placeholder} size={size} value={label} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${props => props.width}px;
  border-bottom: ${props => (props.size === 'small' ? '1px' : '2px')} solid
    ${COLORS.black};
  padding: 4px;
  gap: 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;

  &::placeholder {
    font-size: ${props => (props.size === 'small' ? '14' : '18')}px;
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  font-size: 16px;
  font-weight: 700;
  color: ${COLORS.gray700};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
