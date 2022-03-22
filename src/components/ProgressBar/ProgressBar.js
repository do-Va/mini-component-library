/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size}>
      <Progress value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: ${props =>
    props.size === 'small' ? '8' : props.size === 'medium' ? '12' : '24'}px;
  width: 370px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  padding: ${props => props.size === 'large' && '4'}px;
`;

const Progress = styled.div`
  width: ${props => (370 * props.value) / 100}px;
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: 5px ${props => (props.value === 100 ? '5px' : '0px')}
    ${props => (props.value === 100 ? '5px' : '0px')} 5px;
`;

export default ProgressBar;
