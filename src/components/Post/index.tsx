import * as S from './styles';
import placeholder from '../../assets/newsPlaceholder.jpg';
import IPost from '@/types/Post';
import parseDate from '@/utils/parseDate';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import CommentaryGroup from '../CommentaryGroup';

interface IProps {
  post: IPost
}

export default function Post({post}: IProps) {
	return (
		<S.Container>
			<S.HeaderContainer>
				<S.ImageContainer>
					<img src={placeholder.src} />
				</S.ImageContainer>
				<S.HeaderInfo>
					<p>{post.author.name}</p>
					<p>Published on {parseDate(post.createdAt)}</p>
					<h1>{post.title}</h1>
				</S.HeaderInfo>
			</S.HeaderContainer>
			<S.BodyContainer>
				<ReactMarkdown>
					{post.content}
				</ReactMarkdown>

				{
					post.allowComments ? (
						<CommentaryGroup postId={post.id}/>
					) : (
						<p style={{textAlign: 'center', marginTop: 16}}>Comments are disabled</p>
					)
				}
			</S.BodyContainer>
		</S.Container>
	);
}
