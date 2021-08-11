import Users from "./Users";
import styled from 'styled-components';
import Todos from "./Todos";
import Photos from "./Photos";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

const App = () => {
	return (
		<S.Wrapper>
			<Router>
				<nav style={{ display: 'flex', justifyContent: 'space-around' }}>

					<NavLink to='/users'>Users</NavLink>
					<NavLink to='/todos'>Todos</NavLink>
					<NavLink to='/photos'>Photos</NavLink>

				</nav>

				<Switch>
					<Route path='/users' component={Users} />
					<Route path='/todos' component={Todos} />
					<Route path='/photos' component={Photos} />
				</Switch>
			</Router>
		</S.Wrapper>

	)
}

const S = {
	Wrapper: styled.div`
	font-family:	'Segoe ui', sans-serif;
	& *{
		box-sizing:border-box;
		float: left;
		margin: 10px 10px
	}`
}

export default App