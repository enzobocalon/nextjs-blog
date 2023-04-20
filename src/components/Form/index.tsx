import Link from 'next/link';
import { Button } from '../Button';
import { Input } from '../Input';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import isEmailValid from '@/utils/isEmailValid';
import { error } from 'console';

interface Props {
  isLogin?: boolean;
}

type FormValues = {
  name: string;
  email: string;
  password: string;
}

export default function Form({isLogin}: Props) {
	const {register, handleSubmit, formState: { errors }} = useForm<FormValues>({
		defaultValues: {
			'name': '',
			'email': '',
			'password': ''
		}
	});
	console.log(errors);

	function onSubmit(data: FormValues) {
		console.log(data);
	}
	return (
		<S.Container>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<h1>{isLogin ? 'Welcome Back' : 'Sign Up!'}</h1>
				{
					!isLogin && (
						<S.FieldContainer>
							<label htmlFor="name">Name</label>
							<Input
								id="name"
								placeholder='Your name'
								{...register('name', {
									required: 'Name is required.',
								})}
								aria-invalid={errors.name ? 'true' : 'false'}
							/>
							<S.Error>{errors.name?.message}</S.Error>
						</S.FieldContainer>
					)
				}
				<S.FieldContainer>
					<label htmlFor="email">Email</label>
					<Input
						id="email"
						placeholder='email@email.com'
						{...register('email', {
							required: 'Email is required.',
							validate: (value) => isEmailValid(value) || 'Invalid email'
						})}
						aria-invalid={errors.email ? 'true' : 'false'}
					/>
					<S.Error>{errors.email?.message}</S.Error>
				</S.FieldContainer>
				<S.FieldContainer>
					<label htmlFor="password">Password</label>
					<Input
						id="password"
						placeholder='Your password'
						type='password'
						{...register('password', {
							required: 'Password is required.',
							minLength: {
								value: 5,
								message: 'Your password must be at least 5 characters long.'
							},
						})}
						aria-invalid={errors.password ? 'true' : 'false'}
					/>
					<S.Error>{errors.password?.message}</S.Error>
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
