import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history"
import './App.css';
import Applicant from './Pages/Applicant';
import Company from './Pages/Company';
import Home from './Pages/Home';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Route path="/admin/applicant" exact component={Applicant} />
      <Route path="/admin/company" exact component={Company} />
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
