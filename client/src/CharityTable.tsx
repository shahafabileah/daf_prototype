import { gql, useQuery } from "@apollo/client";
import './CharityTable.css';
import CharityTableHeader from './CharityTableHeader';
import CharityData from './CharityData';
import CharityTableRow from './CharityTableRow';

const QUERY = gql`
  query Query {
    charities(name: "blah") {
      name,
      url,
      score,
      ein
    }
  }
`;

function CharityTable() {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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

export default CharityTable;
