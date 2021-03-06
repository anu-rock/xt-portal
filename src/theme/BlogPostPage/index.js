/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogSidebar from '@theme/BlogSidebar';
import TOC from '@theme/TOC';
import EditThisPage from '@theme/EditThisPage';

function BlogPostPage(props) {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'anu-rock/xt-portal');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comment');
    script.setAttribute('theme', 'github-light');
    script.crossOrigin = 'anonymous';
    script.async = true;

    document.getElementById('comment-system').appendChild(script);
  }, []);

  const { content: BlogPostContents, sidebar } = props;
  const { frontMatter, metadata } = BlogPostContents;
  const { title, description, nextItem, prevItem, editUrl } = metadata;
  const { hide_table_of_contents: hideTableOfContents } = frontMatter;
  return (
    <Layout title={title} description={description} wrapperClassName='blog-wrapper'>
      {BlogPostContents && (
        <div className='container margin-vert--lg'>
          <div className='row'>
            <div className='col col--3'>
              <BlogSidebar sidebar={sidebar} />
            </div>
            <main className='col col--7'>
              <BlogPostItem frontMatter={frontMatter} metadata={metadata} isBlogPostPage>
                <BlogPostContents />
              </BlogPostItem>
              <div>{editUrl && <EditThisPage editUrl={editUrl} />}</div>
              {(nextItem || prevItem) && (
                <div className='margin-vert--xl'>
                  <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
                </div>
              )}
              <div id='comment-system'></div>
            </main>
            {!hideTableOfContents && BlogPostContents.toc && (
              <div className='col col--2'>
                <TOC toc={BlogPostContents.toc} />
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default BlogPostPage;
