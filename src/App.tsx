import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './reducers';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Route path="/" component={HomePage} />
      </BrowserRouter>
    </Provider>
  );
};
export default App;
