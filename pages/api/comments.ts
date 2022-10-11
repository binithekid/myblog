// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Any file within the folder pages/api is mapped to /api/ and will be treated as an API endpoint instead of a page

import type { NextApiRequest, NextApiResponse } from "next";

import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;
const Bearer = process.env.GRAPHCMS_TOKEN;

type Data = {
  name: string;
};

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, slug, comment } = req.body;
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${Bearer}`,
    },
  });

  const query = gql`
    mutation createComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);

    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
}
