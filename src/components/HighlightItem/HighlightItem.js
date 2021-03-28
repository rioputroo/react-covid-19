import React from 'react';

import './HighlightItem.css';

function HighlightItem(props) {
  return props.covid.length !== 0 ? (
    <div className="HighlightItem">
      <h2>Total</h2>
      <div className="HighlightTotalItem">
        <p>
          Positif{' '}
          <span>{props.covid.map((item) => parseInt(item.total.positif).toLocaleString())}</span>
        </p>
        <p>
          Dirawat{' '}
          <span>{props.covid.map((item) => parseInt(item.total.dirawat).toLocaleString())}</span>
        </p>
        <p>
          Sembuh{' '}
          <span>{props.covid.map((item) => parseInt(item.total.sembuh).toLocaleString())}</span>
        </p>
        <p>
          Meninggal{' '}
          <span>{props.covid.map((item) => parseInt(item.total.meninggal).toLocaleString())}</span>
        </p>
      </div>
      <h2>Penambahan</h2>
      <div className="HighlightAddedItem">
        <p>
          Positif{' '}
          <span>
            {props.covid.map((item) => parseInt(item.penambahan.positif).toLocaleString())}
          </span>
        </p>
        <p>
          Dirawat{' '}
          <span>
            {props.covid.map((item) => parseInt(item.penambahan.dirawat).toLocaleString())}
          </span>
        </p>
        <p>
          Sembuh{' '}
          <span>
            {props.covid.map((item) => parseInt(item.penambahan.sembuh).toLocaleString())}
          </span>
        </p>
        <p>
          Meninggal
          <span>
            {props.covid.map((item) => parseInt(item.penambahan.meninggal).toLocaleString())}
          </span>
        </p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default HighlightItem;
