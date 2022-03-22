import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      <Icon id="at-sign" />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  width: auto;
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  border: none;
  color: ${COLORS.gray700};

  &:focus {
    outline: 2px solid #4374cb;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
