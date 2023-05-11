import * as S from './styles';
import placeholder from '../../assets/newsPlaceholder.jpg';
import IPost from '@/types/Post';
import parseDate from '@/utils/parseDate';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  major?: boolean;
  post: IPost
}

export default function Article({major, post}: Props) {
	const router = useRouter();
	return (
		<S.ArticleContainer major={major} onClick={() => router.push(`/posts/${post.id}`)}>
			<S.ImageContainer>
				<img src={post.banner || placeholder.src} alt='placeholder'/>
			</S.ImageContainer>
			<S.InfoContainer>
				<S.HeaderInfo>
					<p>{post.author.name}</p>
					<p>{parseDate(post.createdAt)}</p>
				</S.HeaderInfo>

				<S.Title>
					<h1>{post.title}</h1>
				</S.Title>
			</S.InfoContainer>
		</S.ArticleContainer>
	);
}
