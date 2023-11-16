import Image from "next/image";
import { apolloClient, getClient } from "../lib/client";
import { graphql } from "./gql/gql";

const query = graphql(`
  query NotionDatabasePages($databaseId: String!) {
    notionDatabasePages(databaseID: $databaseId) {
      id
      featureName
      categoryRefID
      featureGroupRefIDs
      maturityID
      jobToBeDone
    }
  }
`);

export default async function Home() {
  const notionData = await apolloClient.query({
    query,
    variables: { databaseId: "ae8957e059a845788d0eb2f360850d0c" },
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Testing output</div>
      {notionData.data.notionDatabasePages.map((page) => {
        return (
          <div key={page.id}>{page.featureName || "No feature name!"}</div>
        );
      })}
    </main>
  );
}
