import errors from './errors';

const findUXErrorFromCatchError = (error) => {
	if (error?.response?.data?.message)
		return errors[error.response.data.message];
	else if (error?.response?.data?.messages?.length)
		return error.response.data.messages
			.map((m) => errors[m] ?? m)
			.join('<br />');
	return 'Error';
};

const storeToken = (token) => {
	localStorage.setItem(
		`${import.meta.env.VITE_LOCAL_STORAGE_KEY}_token`,
		token
	);
};

const clearToken = () => {
	localStorage.removeItem(`${import.meta.env.VITE_LOCAL_STORAGE_KEY}_token`);
};

export { findUXErrorFromCatchError, storeToken, clearToken };
