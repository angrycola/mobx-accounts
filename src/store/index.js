import { autorun, computed, observable, action, runInAction } from 'mobx';
import accounts from '../data/accounts.json';
import notes from '../data/notes.json';


const checkAuth = () => {
		const json = localStorage.getItem('user');
		const res = JSON.parse(json);
		return res || false;
};

const getAccounts = () => {
	const data = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(accounts)
		}, 1120);
	});
	return data;
};

const getCredentials = () => {
	const data = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ name: 'test', id: 'A-ID' });
		}, 1110);
	})
	return data;
};

const getNotes = () => {
	const data = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(accounts)
		}, 1150);
	});
	return data;
};

class Item {
	constructor(item, note, user) {
		this.accountName = item.accountName;
		this.account = item.account;
		this.amount = item.amount;
		this.currency = item.currency;
		this.char = note.char;
		this.userName = user.Name;
	}
}


class Store {
	@observable isAuthed = false;
	@observable user = {};
	@observable isLoading = false;
	@observable notes = [];
	@observable items = [];


	constructor() {
		this.user = checkAuth();
	}

	@computed get renderAccounts() {
		return this.isAuthed ? fetchNotes() : [];
	}

	@action async fetchUser() {
		const user = await getCredentials();
		runInAction(() => this.user = user);
		const json = JSON.stringify(user);
		localStorage.setItem('user', json);
	}

	@action async fetchNotes() {
		this.isLoading = true;
		const notes = await getNotes();
		runInAction(() => this.notes.replace(notes));
		this.fetchAccounts();
	}

	@action async fetchAccounts() {
		const accounts = await getAccounts();
		const items = accounts.map((item) => {
			const note = notes.find(note => note.isoCode === item.currency);
			return this.items.push(new Item(item, note, this.user ));
		});
		this.isLoading = false;
	}

	@action logout() {
		this.isAuthed = false;
		this.items.replace([])
		this.user = false;
		const json = JSON.stringify({ user: false });
		localStorage.setItem('user', json);
	}
}


const store = new Store;
export default store;

autorun(() => store.user.id ? store.fetchNotes() : null);
