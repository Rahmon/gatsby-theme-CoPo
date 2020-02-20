import React from 'react';
import { Link } from "gatsby"

import Post from './Post';
import DatePost from './DatePost';
import TitlePost from './TitlePost';

const ListOfPosts = props => {
    const { data = [] } = props;
  
    return data.map(({ node: post }) => (
      <Post key={post.id}>
            <header>
              <DatePost>{post.frontmatter.date}</DatePost>
              
              <TitlePost>
                <Link to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </TitlePost>
            </header>
            <p>{post.frontmatter.description || post.excerpt}</p>
        </Post>
    ))
}

export default ListOfPosts;