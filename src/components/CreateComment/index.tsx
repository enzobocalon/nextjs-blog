import { Button } from '../Button';
import * as S from './styles';

import { MdOutlineClose } from 'react-icons/md';

interface Props {
  postId: string;
  handleModal: () => void;
}

export default function CreateComment({ postId, handleModal }: Props) {
	return (
		<S.Container>
			<S.Header>
				<h1>New Commentary</h1>
				<MdOutlineClose size={24} onClick={handleModal}/>
			</S.Header>

			<S.StyledTextarea placeholder='Your reply...'/>

			<Button>Submit</Button>

		</S.Container>
	);
}
