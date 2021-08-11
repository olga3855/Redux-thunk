import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersAction } from '../../redux/actions/setNewsAction'

const Users = () => {

	const dispatch = useDispatch();
	const users = useSelector(state => state.users)

	return (
		<div>
			<S.Button onClick={() => { dispatch(setUsersAction()) }}>Get Users</S.Button>
			<S.NewsWrapper>
				{users?.map(userItem => <div>{userItem.name}</div>)}
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

export default Users;