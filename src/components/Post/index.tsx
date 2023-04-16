import * as S from './styles';
import placeholder from '../../assets/newsPlaceholder.jpg';

export default function Post() {
	return (
		<S.Container>
			<S.HeaderContainer>
				<S.ImageContainer>
					<img src={placeholder.src} />
				</S.ImageContainer>
				<S.HeaderInfo>
					<p>Team fulano</p>
					<p>Published on date</p>
					<h1>Lorem ipsum dolor, sit amet consectetur adipisicing</h1>
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
