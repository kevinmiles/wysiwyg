RULES = { // you can create your own parsing fules all are processed in the after()
	head: {
		'# ' : [ '<h1>', '</h1>'],
	},
	anywhere: {
		'`': [ '<code>', '</code>'],
		'$': [ '<pass>', '</pass>'],
		'***' : [ '<s2>', '</s2>'],
		'**' : [ '<s1>', '</s1>'],
		'*' : [ '<b>', '</b>']
	}
	
}