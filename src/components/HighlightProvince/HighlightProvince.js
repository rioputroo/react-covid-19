import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './HighlightProvince.css';
import arrow from '../../assets/expand-arrow.png';

function HighlightProvince() {
  const [covidProvinceState, setCovidProvinceState] = useState();
  const [activeState, setActiveState] = useState({
    index: null,
    status: false,
  });

  useEffect(() => {
    axios.get('/provinsi/more').then((response) => {
      const result = [];

      if (response) {
        result.push(response.data);
        setCovidProvinceState(result);
      }
    });
  }, []);

  const toggleActiveClass = (idx) => {
    const currentState = activeState;

    if (currentState.status === true && currentState.index === idx) {
      setActiveState({
        index: null,
        status: false,
      });
    } else {
      setActiveState({
        index: idx,
        status: true,
      });
    }
  };

  let covidProvince = 'Loading...';
  if (covidProvinceState) {
    covidProvince = covidProvinceState[0].map((item, index) => {
      return (
        <li className="Item" key={index}>
          <div
            onClick={() => toggleActiveClass(index)}
            className={
              activeState.status === true && activeState.index === index
                ? 'ItemContainerActive'
                : 'ItemContainer'
            }
          >
            <h4>{item.provinsi}</h4>
            <div className="ItemContainerStatus">
              <p>
                Total Kasus <span>{parseInt(item.kasus).toLocaleString()}</span>
              </p>
              <p>
                Dirawat <span>{parseInt(item.dirawat).toLocaleString()}</span>
              </p>
              <p>
                Sembuh <span>{parseInt(item.sembuh).toLocaleString()}</span>
              </p>
              <p>
                Meninggal <span>{parseInt(item.meninggal).toLocaleString()}</span>
              </p>
            </div>
            {activeState.status === true && activeState.index === index ? (
              <div className="ItemContainerDetails">
                <h4>Penambahan</h4>
                <p>
                  Positif <span>{parseInt(item.penambahan.positif).toLocaleString()}</span>
                </p>
                <p>
                  Sembuh <span>{parseInt(item.penambahan.sembuh).toLocaleString()}</span>
                </p>
                <p>
                  Meninggal <span>{parseInt(item.penambahan.meninggal).toLocaleString()}</span>
                </p>
              </div>
            ) : null}
            <div className="PullDownMark">
              <img alt="arrow-down" src={arrow} />
            </div>
          </div>
        </li>
      );
    });
  }

  return (
    <div>
      <section className="ListCovidProvince">
        <ul className="ListItem">{covidProvince}</ul>
      </section>
    </div>
  );
}

export default HighlightProvince;
