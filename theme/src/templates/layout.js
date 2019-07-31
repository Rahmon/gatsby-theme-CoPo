/**
 * External dependencies
 */
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';

/**
 * Internal dependencies
 */
import Header from '../components/Header';
import Title from '../components/TitleHeader';
import Subtitle from '../components/SubtitleHeader';
import Nav from '../components/NavHeader';

const GlobalStyle = createGlobalStyle`
    html {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,Ubuntu, Cantarell, "PT Sans","Open Sans","Fira Sans","Droid Sans","Helvetica Neue",Helvetica, Arial, sans-serif;
      font-size: 16px;
      background-color: #fff;
      color: #000;
      line-height: 1.4;
    }

    body {
      margin: 1.375rem;
      font-size: 1.125rem;
    }
    
    a {
        color: #0064c1;

        :hover {
            color: #003D73;
        }

        :visited: {
            color: #8d39d0;
        }

        &.active {
            cursor: default;
            color: inherit;
            text-decoration: none;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        line-height: 1.2;
    }

    h1 {
        font-size: 2.8125rem;
    }
`;


export default ({children}) => {
    
    const data = useStaticQuery( graphql`
    query {
        site {
            siteMetadata {
                title
                subtitle
                navigationLinks {
                    text
                    link
                }
                language
            }
        }
    }
    ` );
    
    const title = get(data, 'site.siteMetadata.title');
    const subtitle = get(data, 'site.siteMetadata.subtitle');
    const navigationLinks = get(data, 'site.siteMetadata.navigationLinks', []);
    const language = get(data, 'site.siteMetadata.language');

    return (
        <>
            <Helmet 
                htmlAttributes={ { lang: language} }
                title={title + (subtitle && ` - ${subtitle}`)}
                meta={[
                    {
                      name: 'viewport',
                      content: 'width=device-width, initial-scale=1.0',
                    }
                ]}
            />

            <GlobalStyle  />

            <Header>
                {title && <Title>{title}</Title>}
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
            
                {!isEmpty(navigationLinks) && 
                (<Nav>
                    <ul>
                        {navigationLinks.map(item => (
                            <li key={item.text+item.link}>
                                <Link to={item.link} activeClassName="active">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Nav>)}
            </Header>

            <main style={{
                position: 'relative',
                maxWidth: '40rem',
                margin: '0 auto',
            }}>
                {children}
            </main>
    </>
)}