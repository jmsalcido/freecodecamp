var htmlEntities = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&apos;'
};

function convertHTML(str) {
	// &colon;&rpar;

	Object.entries(htmlEntities).forEach(function(element) {
		var before = element[0];
		var after = element[1];

		var regexp = new RegExp(before, 'g');
		str = str.replace(regexp, after);
	});

	return str;
}

module.exports = convertHTML;
