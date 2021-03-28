import React, { useState, useEffect } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import HighlightItem from '../../components/HighlightItem/HighlightItem';
import HighlightProvince from '../../components/HighlightProvince/HighlightProvince';
import './Highlight.css';

function Highlight() {
  const [dataCovidState, setDataCovidState] = useState([]);

  useEffect(() => {
    axios.get('/more').then((response) => {
      const result = [];

      if (response) {
        result.push(response.data);
        setDataCovidState(result);
      }
    });
  }, []);

  return (
    <div className="Highlight">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Update Kasus
              </NavLink>
            </li>
            <li>
              <NavLink to="/province" exact>
                Kasus by Provinsi
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {dataCovidState ? (
        <div className="LastUpdated">{dataCovidState.map((item) => item.total.lastUpdated)}</div>
      ) : null}

      <Switch>
        <Route path="/" exact component={() => <HighlightItem covid={dataCovidState} />}></Route>
        <Route path="/province" exact component={() => <HighlightProvince />}></Route>
      </Switch>
    </div>
  );
}

export default Highlight;
