import * as S from './styles';
import axios from 'axios';
import Link from 'next/link';
import Loader from '../Loader';
import isEmailValid from '@/utils/isEmailValid';
import { Button } from '../Button';
import { Input } from '../Input';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

interface Props {
  isLogin?: boolean;
}

type FormValues = {
  name: string;
  email: string;
  password: string;
}

export default function Form({ isLogin }: Props) {
	const router = useRouter();
	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
		defaultValues: {
			'name': '',
			'email': '',
			'password': ''
		}
	});

	async function onSubmit(data: FormValues) {
		try {
			if (!isLogin) {
				await axios.post('/api/auth/signup', {
					name: data.name,
					email: data.email,
					password: data.password
				});
				toast.success('User created successfully');
			} else {
				const hasLoggedIn = await signIn('credentials', {
					redirect: false,
					email: data.email,
					password: data.password,
				});
				if (hasLoggedIn?.status === 200) {
					toast.success('Logged. Redirecting...');
					router.push('/');
				} else {
					throw new Error(hasLoggedIn?.error);
				}
			}
		} catch (error) {
			const errorMessage = !isLogin ? error.response.data.message || 'Error on creating user!' : error.message || 'Error on logging in!';
			toast.error(errorMessage);
		}
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
