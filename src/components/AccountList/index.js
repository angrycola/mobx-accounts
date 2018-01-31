import React from 'react';
import { observer } from 'mobx-react';
import AccountItem from '../AccountItem';

const AccountList = observer(({ store }) => {

	const renderedAccounts = store.items.map(item => <AccountItem key={ item.account } item={ item } />	);

	return (
		<div>
			{ store.renderAccounts && renderedAccounts }
		</div>
	);
});
export default AccountList;
