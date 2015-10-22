
// pybabel with js
// http://www.obviel.org/en/1.0b/i18n.html

var es_data = {
	'myDomain': {
	    "": {
	        "Content-Transfer-Encoding": "8bit",
	        "Content-Type": "text/plain; charset=utf-8",
	        "Generated-By": "Babel 2.1.1",
	        "Language": "es",
	        "Language-Team": "es <LL@li.org>",
	        "Last-Translator": "FULL NAME <EMAIL@ADDRESS>",
	        "MIME-Version": "1.0",
	        "PO-Revision-Date": "2015-10-21 12:15-0400",
	        "POT-Creation-Date": "2015-10-22 16:47-0400",
	        "Plural-Forms": "nplurals=2; plural=(n != 1)",
	        "Project-Id-Version": "PROJECT VERSION",
	        "Report-Msgid-Bugs-To": "EMAIL@ADDRESS"
	    },
	    "Ignore case": [null, "caso de omitir"],
	    "Link must be a valid Google Spreadsheet": [null, "Inklay ustmay ebay a alidvay Google Spreadsheet"],
	    "Sample": [null, "muestra"],
	    "Submit": [null, "Ubmitsay"],
	    "Text": [null, "texto"],
	    "The file must be a .csv": [null, "Ethay ilefay ustmay ebay a .csv"],
	    "Upload file": [null, "subir un archivo"],
	    "You have %(num)s row of data.": ["You have %(num)s rows of data.", "", ""]
	}
};

var gt = new Gettext({
	domain: 'myDomain',
	locale_data: es_data
});

var _ = function(msgid) { return gt.gettext(msgid); };