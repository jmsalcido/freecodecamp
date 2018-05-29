function booWho(bool) {
	// What is the new fad diet for ghost developers? The Boolean. --> this is a bad joke.
	if (bool === true || bool === false) return true;
	return Boolean(bool) instanceof Boolean;
}

module.exports = booWho;