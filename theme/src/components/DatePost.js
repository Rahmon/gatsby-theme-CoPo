import React from "react"
import moment from 'moment';
import styled from 'styled-components';

const DatePost = props => {
  const { children: date } = props;

  const dateFormated = date && moment(date, "YYYY-MM-DD").format('LL');

  return dateFormated && <DatePostStyled>{dateFormated}</DatePostStyled>
}

const DatePostStyled = styled.p`
  margin-top: 0;
  color: #696969;
  font-size: 1rem
`;

export default DatePost;