/**
 * External dependencies
 */
import React, {useState} from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import get from "lodash/get";
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

const standardPalette = {
  backgroundColor: '#fff',
  fontColor: '#000',
  linkColor: '#0064c1',
  linkHoverColor: '#003D73',
  linkVisitedColor: '#8d39d0'
};

const darkPalette = {
  backgroundColor: '#222831',
  fontColor: '#dbedf3',
  linkColor: '#00adb5',
  linkHoverColor: '#00fff5',
  linkVisitedColor: '#404b69'
};

const GlobalStyle = createGlobalStyle`
    html {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,Ubuntu, Cantarell, "PT Sans","Open Sans","Fira Sans","Droid Sans","Helvetica Neue",Helvetica, Arial, sans-serif;
      font-size: 16px;
      background-color: ${props => props.palette.backgroundColor};
      color: ${props => props.palette.fontColor};
      line-height: 1.4;
    }

    body {
      margin: 1.375rem;
      font-size: 1.125rem;
    }

    a {
        color: ${props => props.palette.linkColor};

        :hover {
            color: ${props => props.palette.linkHoverColor};
        }

        :visited: {
            color: ${props => props.palette.linkVisitedColor};
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

    const [palette, setPalette] = useState(localStorage.getItem('palette')==='dark' ? darkPalette : standardPalette);
    const [namePalette, setNamePalette] = useState(localStorage.getItem('palette')==='dark' ? 'stantdard' : 'dark');

    const handleChangeTheme = () => {
      if(namePalette==='dark') {
        setPalette(darkPalette);
        setNamePalette('standard');
        localStorage.setItem('palette', 'dark');
      } else {
        setPalette(standardPalette);
        setNamePalette('dark');
        localStorage.setItem('palette', 'standard');
      }
    };

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

            <GlobalStyle palette={palette} />

            <Header>
                {title && <Title>{title}</Title>}
                {subtitle && <Subtitle>{subtitle}</Subtitle>}

                {!isEmpty(navigationLinks) &&
                (<Nav style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <ul style={{alignSelf: ''}}>
                        {navigationLinks.map(item => (
                            <li key={item.text+item.link}>
                                <Link to={item.link} activeClassName="active">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleChangeTheme}>{namePalette}</button>
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
