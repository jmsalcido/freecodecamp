function uniteUnique(arr) {
	var newArr = [];
	var args = Array.from(arguments);
	args.forEach(function(item) {
		item.forEach(function(n) {
			if (!newArr.includes(n)) {
				newArr.push(n);
			}
		});
	});

	return newArr;
}

module.exports = uniteUnique;