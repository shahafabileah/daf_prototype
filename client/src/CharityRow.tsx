import PropTypes from 'prop-types';
import './CharityRow.css';

interface CharityRowData {
    name: string,
    url: string,
    score: number,
    ein: string
};

function CharityRow(props:CharityRowData) {
  return (
    <div className="CharityRow">
        <span className="TableCell">
            <a href="{props.url}">{props.name}</a>
        </span>
        <span className="TableCell">
            {props.score}
        </span>
        <span className="TableCell">
            {props.ein}
        </span>
    </div>    
  );
}

export default CharityRow;
