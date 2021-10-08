import { gql, useQuery } from "@apollo/client";
import './CharityTable.css';
import CharityTableHeader from './CharityTableHeader';
import CharityData from './CharityData';
import CharityTableRow from './CharityTableRow';

const QUERY = gql`
  query Query($searchTerm: String!) {
    charities(searchTerm: $searchTerm) {
      name,
      url,
      score,
      ein
    }
  }
`;

interface CharityTableData {
  searchTerm: string
};

export default function CharityTable(props:CharityTableData) {
  const { loading, error, data } = useQuery(QUERY, {
    variables: { searchTerm: props.searchTerm }
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  return (
    <div className="CharityTable">
      <CharityTableHeader />
      {
        data.charities.map((charity: CharityData) => {
          return <CharityTableRow
            key={charity.ein}
            ein={charity.ein}
            name={charity.name}
            url={charity.url}
            score={charity.score} />
        })
      }
    </div>
  );
}
