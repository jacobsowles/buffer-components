import React from 'react';
import Icon from '../../Icon';

const RetweetIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M2.00001778,4 C2.00462751,2.89464321 2.90478822,2 4.0085302,2 L11.9914698,2 C13.1007504,2 14,2.90195036 14,4.0085302 L14,6 L12,6 L12,5 C12,4.44386482 11.5543453,4 11.0046024,4 L2.00001651,4 Z M13.9999822,12 C13.9953725,13.1053568 13.0952118,14 11.9914698,14 L4.0085302,14 C2.8992496,14 2,13.0980496 2,11.9914698 L2,10 L4,10 L4,11 C4,11.5561352 4.44902676,12 5.00292933,12 L9.99707067,12 C10.5621186,12 11.4472481,12 11.9989566,12 L13.9999848,12 Z M2.4001155,6.79984599 C2.73142256,6.35810325 3.26622999,6.35497332 3.5998845,6.79984599 L5.4001155,9.20015401 C5.73142256,9.64189675 5.54902482,10 5.00922203,10 L0.990777969,10 C0.443586406,10 0.266229987,9.64502668 0.599884495,9.20015401 L2.4001155,6.79984599 Z M12.4001155,9.20015401 L10.5998845,6.79984599 C10.26623,6.35497332 10.4435864,6 10.990778,6 L15.009222,6 C15.5490248,6 15.7314226,6.35810325 15.4001155,6.79984599 L13.5998845,9.20015401 C13.26623,9.64502668 12.7314226,9.64189675 12.4001155,9.20015401 Z" />
  </Icon>;

RetweetIcon.propTypes = {
  ...Icon.propTypes,
};

export default RetweetIcon;