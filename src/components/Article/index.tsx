import * as S from './styles';
import placeholder from '../../assets/newsPlaceholder.jpg';

interface Props {
  major?: boolean;
}

export default function Article({major}: Props) {
	return (
		<S.ArticleContainer major={major}>
			<S.ImageContainer>
				<img src={placeholder.src} alt='placeholder'/>
			</S.ImageContainer>
			<S.InfoContainer>
				<S.HeaderInfo>
					<p>Autor</p>
					<p>Date</p>
				</S.HeaderInfo>

				<S.Title>
					<h1>TITULO</h1>
				</S.Title>
				<S.Description>
					<h2>Description</h2>
				</S.Description>
			</S.InfoContainer>
		</S.ArticleContainer>
	);
}
