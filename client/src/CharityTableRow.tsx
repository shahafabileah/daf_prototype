import PropTypes from 'prop-types';
import './CharityTableRow.css';

interface CharityRowData {
    name: string,
    url: string,
    score: number,
    ein: string
};

function CharityRow(props:CharityRowData) {
  return (
    <div className="CharityRow">
        <span className="Name">
            <a href="{props.url}">{props.name}</a>
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
