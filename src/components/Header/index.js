import React from 'react';
import { observer } from 'mobx-react';

import Spinner from '../Spinner';


const Header = observer(({ store }) => {

	const fetchUser = () => store.fetchUser();
	const logout = () => store.logout();

	return (
		<div>
			<div className='header'>
				{ store.user.id && <div className='header__username'>User: { store.user.name}</div>}
				<div>
					{
						store.user.id
						? <button onClick={ logout }>Logout</button>
						: <button onClick={ fetchUser }>Login</button>
					}
				</div>
			</div>
			{ store.isLoading ? <Spinner /> : null }
		</div>
	);
});
export default Header;
