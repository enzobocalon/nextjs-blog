import Portal from '../Portal';
import * as S from './styles';

import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  open: boolean;
}

export default function Modal({children, open}: Props) {

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [open]);

	return (
		<>
			{
				open && (
					<Portal>
						<S.Container>
							{children}
						</S.Container>
					</Portal>
				)
			}
		</>
	);
}
