function saveAuthToCookie(value) {
	document.cookie = `tokenValue=${value}`;
}

function saveUserToCookie(value) {
	document.cookie = `userId = ${value}`;
}
function getAuthFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}

function getUserFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}

function deleteCookie(value) {
	document.cookie = `tokenValue=${value}; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
}
function deleteCookie2(value) {
	document.cookie = `userId=${value}; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
}

export {
	saveUserToCookie,
	getUserFromCookie,
	saveAuthToCookie,
	getAuthFromCookie,
	deleteCookie,
	deleteCookie2,
};
