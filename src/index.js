import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// These imports won't work until you fix ./components/index.js
import {
  Feature,
  Loading,
  Preview,
  Search,
  Title
} from './components';

const App = () => {

  const [searchResults, setSearchResults] = useState({info: {}, records: []});
  const [featuredResult, setFeaturedResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 
 
  /**
   * We are at the App level component, which is top-most. Any state which needs to be shared between immediate children should
   * be made here, so create state pairs using useState() for:
   * 
   * searchResults, setSearchResults (default should be this object:  {info: {}, records: []} )
   * featuredResult, setFeaturedResult (default should be null)
   * isLoading, setIsLoading (default should be false)
   */

  return (
    <div className="app">
      <Title/>
      <Search setIsLoading={setIsLoading} setSearchResults={setSearchResults} />
      <Preview
        setIsLoading={setIsLoading}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
        setFeaturedResult={setFeaturedResult}
      />
      <Feature
        setIsLoading={setIsLoading}
        setSearchResults={setSearchResults}
        featuredResult={featuredResult}
      />

      {isLoading ? <Loading /> : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));