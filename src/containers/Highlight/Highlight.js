import React, { useState, useEffect } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import HighlightItem from '../../components/HighlightItem/HighlightItem';
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
                Cases Update
              </NavLink>
            </li>
            <li>
              <NavLink to="/province" exact>
                Cases by Provinces
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/" exact component={() => <HighlightItem covid={dataCovidState} />}></Route>
      </Switch>
    </div>
  );
}

export default Highlight;
