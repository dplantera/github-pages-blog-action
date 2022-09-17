export type FrontMatterType = {
  title: string;
  date: string;
  permalink: string;
  externalUrl: string;
};

export type PostType = {
  title: string;
  date: string;
  permalink: string;
  externalUrl: string;
  html: string;
};

export type SiteConfigType = {
  title: string;
  subtitle: string;
  baseUrl: string;
  repoName: string;
  owner: {
    name: string;
    email: string;
  };
  social: {
    github: string;
    twitter: string;
    medium: string;
  };
  newsletter: {
    showTwitterBanner?: boolean;
    currentCount: string;
    revueUsername: string;
  };
  seo: {
    title: string;
    description: string;
    author: string;
    keywords: string[];
  };
  cname: string;
};
