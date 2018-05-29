function fearNotLetter(str) {
	var first = 97;

	if (str.charCodeAt(0) != first) {
		return;
	}

	var actual = first;
	for(var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) === actual) {
			actual++;
		} else {
			return String.fromCharCode(actual++);
		}
	}
}

module.exports = fearNotLetter;
