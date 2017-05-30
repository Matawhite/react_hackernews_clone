import React from 'react';
import Button from './Button';


const isSearched = (searchTerm) => (item) =>
  !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());


const Table = ({list, pattern, onDismiss}) =>{
  return (
    <div className="table">
      {list.filter(isSearched(pattern)).map(item =>
        <div key={item.objectID} className="table-row">
          <span style={{width:'40%'}}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title} </a>
          </span>
          <span style={{width:'30%'}}>Author: {item.author} </span>
          <span style={{width:'10%'}}>Commments: {item.num_comments} </span>
          <span style={{width:'10%'}}>Points: {item.points} </span>
          <span style={{width:'10%'}}>
            <Button
              onClick={ () => onDismiss(item.objectID)} className="button-inline">
              Dismiss
            </Button>

          </span>
        </div>
      )}
    </div>
  );
};


export default Table
