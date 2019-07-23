
var src_str = document.documentElement.outerHTML;

var match = src_str.match(/(\<!--.*?\-->)/g);

document.body.textContent = "";

for (var i = 0 ; i < match.length ; i++) {
	var header = document.createElement('ul');
    header.textContent = (i+1).toString() + "  " + match[i];
    document.body.appendChild(header);
}


