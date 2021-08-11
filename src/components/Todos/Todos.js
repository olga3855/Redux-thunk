import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setTodosAction } from '../../redux/actions/setNewsAction';

const Todos = () => {

	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos)

	return (
		<div>
			<S.Button onClick={() => { dispatch(setTodosAction()) }}>Get Todos</S.Button>
			<S.NewsWrapper>
				{todos?.map(todosItem => <div>{todosItem.title}</div>)}
			</S.NewsWrapper>
	 </div >
	);
};

const S = {
	NewsWrapper: styled.div`
box-shadow: inset 2px 2px 4px rgba(0,0,0,0.4);
`,
	Button: styled.button`
border-radius: 6px;
background-color: coral;
color: #fff;
cursor: pointer;
border: none;
padding: 15px 20px;
transition: all 0.5s ease;
margin-bottom: 40px;

&:hover {
background-color: lightcoral;
}
`
};

export default Todos;