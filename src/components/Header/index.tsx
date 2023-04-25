import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Button } from '../Button';
import * as S from './styles';

import { MdMenu, MdLogout, MdPostAdd } from 'react-icons/md';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { data: session } = useSession();
	console.log(session);

	useEffect(() => {
		const handleResize = () => setIsMenuOpen(window.innerWidth > 768);
		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<S.Container>
			{/* Temporary */}
			<h1>Blog</h1>
			<MdMenu size={20} onClick={() => setIsMenuOpen(prev => !prev)}/>
			<AnimatePresence>
				{
					isMenuOpen && (
						<S.Wrapper
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							transition={{duration: .3}}>
							<S.Navbar>
								<Link href={'/'}>
									<S.NavItems>
                  Blog
									</S.NavItems>
								</Link>
								<S.NavItems disabled>
                  Teams
								</S.NavItems>
							</S.Navbar>
							{
								!session ? (
									<S.HeaderActions>
										<Link href={'/login'}>
											<S.NavItems>
                        Login
											</S.NavItems>
										</Link>
										<Link href={'/register'}>
											<Button>
                      Register
											</Button>
										</Link>
									</S.HeaderActions>
								) : (
									<S.HeaderActions>
										<p>Hello, {session.name}</p>
										{
											['AUTHOR', 'ADMIN'].includes(session.role) && (
												<S.SvgItem>
													<MdPostAdd size={24} />
												</S.SvgItem>
											)
										}
										<S.SvgItem>
											<MdLogout size={24} onClick={() => signOut()}/>
										</S.SvgItem>
									</S.HeaderActions>
								)
							}
						</S.Wrapper>
					)
				}
			</AnimatePresence>
		</S.Container>
	);
}
