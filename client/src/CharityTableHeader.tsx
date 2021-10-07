import './CharityTableRow.css';

function CharityTableHeader() {
  return (
    <div className="CharityRow Header">
        <span className="Name">
            Charity
        </span>
        <span className="Score">
            Score
        </span>
        <span className="EIN">
            EIN
        </span>
    </div>    
  );
}

export default CharityTableHeader;
