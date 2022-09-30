import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          # image
          siteUrl
          keyword
        }
      }
    }
  `);

  return data?.site?.siteMetadata;
};

export const SEO = ({
  title,
  description,
  pathname,
  children,
}: {
  title?: string;
  description?: string;
  pathname?: string;
  children?: any;
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
    keyword,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    keyword,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='keywords' content={seo.keyword} />
      {/* <meta name='image' content={seo.image} /> */}
      {/* <meta name='twitter:card' content='summary_large_image' /> */}
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:description' content={seo.description} />
      {/* <meta name='twitter:image' content={seo.image} /> */}
      <meta name='twitter:creator' content={seo.twitterUsername} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no'
      />
      {children}
    </>
  );
};
