/**
 * External dependencies
 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import { createGlobalStyle } from 'styled-components';

/**
 * Internal dependencies
 */
import Header from './Header';
import Title from './TitleHeader';
import Subtitle from './SubtitleHeader';
import Nav from './NavHeader';

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
    }`;

export default ({children}) => {
    
    const data = useStaticQuery( graphql`
    query {
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
    ` );
    
    const title = get(data, 'site.siteMetadata.title');
    const subtitle = get(data, 'site.siteMetadata.subtitle');

    return (
        <>
            <GlobalStyle  />

            <Header>
                {title && <Title>{title}</Title>}
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
            
                <Nav>
                    <ul>
                        <li>Home</li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </Nav>
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