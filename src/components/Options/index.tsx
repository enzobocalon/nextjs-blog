import { useState } from 'react';
import * as S from './styles';

import { MdOutlineDelete, MdEdit } from 'react-icons/md';
import Modal from '../Modal';
import { Button } from '../Button';

interface Props {
  onDelete: () => void;
  isPost?: boolean
}

export default function Options({onDelete, isPost}: Props) {
	const [openModal, setOpenModal] = useState(false);

	function handleDelete() {
		setOpenModal(false);
		onDelete();
	}

	function handleModal() {
		setOpenModal(prev => !prev);
	}
	return (
		<>
			<S.Container initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
				{
					isPost && (
						<S.Options onClick={handleModal} isPost>
							<MdEdit size={20}/>
							<span>Edit</span>
						</S.Options>
					)
				}
				<S.Options onClick={handleModal}>
					<MdOutlineDelete size={20}/>
					<span>Delete</span>
				</S.Options>
			</S.Container>

			<Modal open={openModal}>
				<S.ModalBackground>
					<strong>Are you sure you want to delete this {isPost ? 'post' : 'comment'}?</strong>

					<div>
						<Button onClick={handleDelete}>Yes, delete now!</Button>
						<p onClick={() => setOpenModal(false)}>Cancel</p>
					</div>
				</S.ModalBackground>
			</Modal>
		</>
	);
}
