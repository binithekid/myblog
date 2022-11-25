import { NextApiRequest, NextApiResponse } from "next";

import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;
const Bearer = process.env.GRAPHCMS_TOKEN;

export default async function contacts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      Authorization: `Bearer ${Bearer}`,
    },
  });

  const query = gql`
    mutation CreateContact($name: String!, $email: String!, $message: String!) {
      createContact(data: { name: $name, email: $email, message: $message }) {
        id
      }
    }
  `;

  const result = await graphQLClient.request(query, req.body);

  return res.status(200).send(result);
}
