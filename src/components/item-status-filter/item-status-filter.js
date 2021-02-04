import React, {Component} from 'react';

import './item-status-filter.css';

// Компонент-класс
export default class ItemStatusFilter extends Component {
  render() {
    return(
    <div className="btn-group">
      <button type="button"
              className="btn btn-info">Все</button>
      <button type="button"
              className="btn btn-outline-secondary">Активные</button>
      <button type="button"
              className="btn btn-outline-secondary">Законченные</button>
    </div>
    );
  };
  
}


