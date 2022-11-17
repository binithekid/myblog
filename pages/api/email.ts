import type { NextApiRequest, NextApiResponse } from "next";

import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;
const Bearer = process.env.GRAPHCMS_TOKEN;

type Data = {
  email: string;
};

export default async function email(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${Bearer}`,
    },
  });

  const query = gql`
    mutation CreateEmail($email: String!) {
      createEmail(data: { email: $email }) {
        email
        id
      }
    }
  `;

  const result = await graphQLClient.request(query, req.body);

  return res.status(200).send(result);
}
