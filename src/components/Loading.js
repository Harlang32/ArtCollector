import React from 'react';


//  Create and export a component called Loading which uses this static HTML template:
  const Loading = (props) => {
    const {loading} = props;
    return (
      <div id="loading">
        <h2 className="message">Searching...</h2>
      </div>
    );
  }

  export default Loading;
 
