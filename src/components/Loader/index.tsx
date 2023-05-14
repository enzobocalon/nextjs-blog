import * as S from './styles';

interface Props {
  small?: boolean;
}

export default function Loader({small}: Props) {
	return (
		<S.Loader small={small}/>
	);
}
