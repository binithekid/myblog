import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            read
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        read
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (categories: any, slug: any) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        read
      }
    }
  `;
  const result = await request(graphqlAPI, query, { categories, slug });

  return result.posts;
};

export const getAdjacentPosts = async (createdAt: any, slug: any) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
      next: posts(
        first: 1
        orderBy: createdAt_ASC
        where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous: posts(
        first: 1
        orderBy: createdAt_DESC
        where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug: string) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(
        where: { categories_some: { slug: $slug } }
        orderBy: publishedAt_DESC
      ) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            read
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        read
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const submitComment = async (obj: any) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug: string) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        read
        excerpt
        author {
          name
          photo {
            url
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getMostRecentPost = async () => {
  const query = gql`
    query GetMostRecentPost(){
      posts(
        orderBy:createdAt_ASC
        last:1
      ) {
        title
        featuredImage {
          url
        }
        read
        createdAt
        slug
        excerpt
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const SubmitEmail = async (obj: any) => {
  const result = await fetch("/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const SubmitContact = async (values: any) => {
  const result = await fetch("/api/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  return result.json();
};

export const getCategoryPosts = async (name: string) => {
  const query = gql`
    query GetCategoryPosts($name: String!) {
      category(where: { name: $name }) {
        posts(orderBy: createdAt_ASC) {
          author {
            name
          }
          excerpt
          featuredImage {
            url
          }
          slug
          title
          read
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { name });

  return result.category;
};
