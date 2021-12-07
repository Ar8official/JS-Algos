function charCountRefactor(str){
	var obj = {};
	for (var char of str) {
		if (isAlphaNumeric(char)) {
		    char = char.toLowerCase();
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

function isAlphaNumeric(str) {
    var code;
    for (var i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0—9)
            !(code > 64 && code < 91) && // upper alpha (A—Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false; 
        }
    }
    return true;
}

