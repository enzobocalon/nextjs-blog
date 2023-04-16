import Link from 'next/link';
import { Button } from '../Button';
import { Input } from '../Input';
import * as S from './styles';

interface Props {
  isLogin?: boolean;
}

export default function Form({isLogin}: Props) {
	return (
		<S.Container>
			<S.Form>
				<h1>Welcome Back!</h1>
				{
					!isLogin && (
						<S.FieldContainer>
							<label htmlFor="name">Name</label>
							<Input
								id="name"
								name="name"
								placeholder='Your name'
								required
							/>
						</S.FieldContainer>
					)
				}
				<S.FieldContainer>
					<label htmlFor="email">Email</label>
					<Input
						id="email"
						name="email"
						placeholder='email@email.com'
						required
					/>
				</S.FieldContainer>
				<S.FieldContainer>
					<label htmlFor="password">Password</label>
					<Input
						id="password"
						name="password"
						placeholder='Your password'
						required
					/>
				</S.FieldContainer>
				<S.FieldContainer>
					<Button>{isLogin ? 'Login' : 'Register'}</Button>
				</S.FieldContainer>
				<Link href={isLogin ? '/register' : '/login'}>
					{
						isLogin ? (
							<p>Doesn&apos;t have an account yet? Create one now!</p>
						) : (
							<p>Already have an account? Login now!</p>
						)
					}
				</Link>
			</S.Form>
		</S.Container>
	);
}
