import {START_ACCOUNT_LOADING, SUCCESS_ACCOUNT_LOADING, ERROR_ACCOUNT_LOADING, loadAccount} from '../actions/account.actions.js';
import {ERROR_CHATS_LOADING, START_CHATS_LOADING, SUCCESS_CHATS_LOADING, loadChats} from '../actions/chats.actions.js';

export async function load(url) {
    const account = await loadAccount(url);
    dispatch({ type: SUCCESS_ACCOUNT_LOADING, payload: account});
}
