import React from "react";
import moment from "moment";
import styled from "styled-components";
import get from "lodash/get";
import { graphql, useStaticQuery } from "gatsby";
import "moment/min/locales.min";

const DatePost = props => {
  const { children: date } = props;

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          language
        }
      }
    }
  `);

  const language = get(data, "site.siteMetadata.language");

  moment.locale(language);

  const dateFormated = date && moment(date, "YYYY-MM-DD").format("LL");

  return dateFormated && <DatePostStyled>{dateFormated}</DatePostStyled>;
};

const DatePostStyled = styled.p`
  margin-top: 0;
  color: #696969;
  font-size: 1rem;
`;

export default DatePost;
