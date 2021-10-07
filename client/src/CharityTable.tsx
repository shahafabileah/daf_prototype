import './CharityTable.css';
import CharityTableHeader from './CharityTableHeader';
import CharityTableRow from './CharityTableRow';

function CharityTable() {
  return (
    <div className="CharityTable">
      <CharityTableHeader />
      <CharityTableRow name="Friends of Kexp" url="http://www.kexp.org/" score={88} ein="91-2061474" />
      <CharityTableRow name="Water.org" url="http://www.water.org/" score={95.12} ein="58-2060131" />
      <CharityTableRow name="Food Lifeline" url="http://www.foodlifeline.org/" score={92.92} ein="91-1090450" />
    </div>
  );
}

export default CharityTable;
