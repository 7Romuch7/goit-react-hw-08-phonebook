import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import ContactRouter from './routers/ContactRouter';
import HomePage from './routers/HomePage';
import RegisterRouter from './routers/RegisterRouter';
import LoginRouter from './routers/LoginRouter';
import Container from './components/Container';

export default function App() {
  <Container>
      <AppBar />

      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/register' component={RegisterRouter} />
          <Route exact path='/login' component={LoginRouter} />
          <Route exact path='/contacts' component={ContactRouter} />
      </Switch>
  </Container>
}