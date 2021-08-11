import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotosAction } from '../../redux/actions/setNewsAction';

const Photos = () => {

	const dispatch = useDispatch();
	const photos = useSelector(state => state.photos);

	return (
		<div>
			<S.Button onClick={() => { dispatch(setPhotosAction()) }}>Get Photos</S.Button>
			<S.NewsWrapper>
				{photos?.map(photosItem => <div>{photosItem.url}</div>)}
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

export default Photos;