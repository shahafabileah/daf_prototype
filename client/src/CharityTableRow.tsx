import './CharityTableRow.css';
import CharityData from './CharityData';

function CharityRow(props:CharityData) {
  return (
    <div className="CharityRow">
        <span className="Name">
            <a href={props.url}>{props.name}</a>
        </span>
        <span className="Score">
            {props.score}
        </span>
        <span className="EIN">
            {props.ein}
        </span>
    </div>    
  );
}

export default CharityRow;
