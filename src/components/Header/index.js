import React from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Spinner from '../Spinner';


const Header = observer(({ store, history, match, location }) => {

	const fetchUser = () => store.fetchUser();
	const logout = () => {
		store.logout();
		history.push('/');
	}

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
			{ store.items.length > 0 && !store.isLoading && <Redirect to={`${ store.user.id }/accounts`} /> }
		</div>
	);
});
export default Header;
