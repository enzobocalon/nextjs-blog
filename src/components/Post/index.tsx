import * as S from './styles';
import placeholder from '../../assets/newsPlaceholder.jpg';
import IPost from '@/types/Post';

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
					<p>Published on date</p>
					<h1>{post.title}</h1>
					<h2>Description</h2>
				</S.HeaderInfo>
			</S.HeaderContainer>
			<S.BodyContainer>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, porro possimus? Itaque animi vel, amet deserunt laboriosam cupiditate saepe distinctio fuga maxime molestias nobis laudantium? Tempora illo natus minus cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, porro possimus? Itaque animi vel, amet deserunt laboriosam cupiditate saepe distinctio fuga maxime molestias nobis laudantium? Tempora illo natus minus cumque.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, porro possimus? Itaque animi vel, amet deserunt laboriosam cupiditate saepe distinctio fuga maxime molestias nobis laudantium? Tempora illo natus minus cumque.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, porro possimus? Itaque animi vel, amet deserunt laboriosam cupiditate saepe distinctio fuga maxime molestias nobis laudantium? Tempora illo natus minus cumque.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, porro possimus? Itaque animi vel, amet deserunt laboriosam cupiditate saepe distinctio fuga maxime molestias nobis laudantium? Tempora illo natus minus cumque.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, porro possimus? Itaque animi vel, amet deserunt laboriosam cupiditate saepe distinctio fuga maxime molestias nobis laudantium? Tempora illo natus minus cumque.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, porro possimus? Itaque animi vel, amet deserunt laboriosam cupiditate saepe distinctio fuga maxime molestias nobis laudantium? Tempora illo natus minus cumque.
				</p>
			</S.BodyContainer>
		</S.Container>
	);
}
