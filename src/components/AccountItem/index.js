import React from 'react';


const AccountItem = ({ item }) => {

	return (
		<div className='item__table'>
			<table className='item__table-table'>
				<thead className='item__table-header'>
					<tr>
						<th>Name</th>
						<th>Number</th>
						<th>Amount</th>
						<th>Currency</th>
						<th>Char</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{ item.accountName }</td>
						<td>{ item.account }</td>
						<td>{ item.amount }</td>
						<td>{ item.currency }</td>
						<td>{ item.char }</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default AccountItem;
