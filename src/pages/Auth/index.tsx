import googleIconImg from '../../assets/google-icon.svg';
import { Header } from '../../components/Header';

import './auth.scss';

export function Auth(){
	return (
		<div id="page-auth">
				<Header />
			<main>
				<button>
					<img src={googleIconImg} alt="Logo do Google"/>
					Faça seu Login com o Google
				</button>
			</main>
		</div>
	);
}