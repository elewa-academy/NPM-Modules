class model {
	constructor(_name, _schema) {
		this.name = _name;
		this.schema = _schema;
		this.nextID = 00;
		this.DB = {};
	}
	get name() {
		return this.name;
	}
	static get_docs() {
		return {
			// write specs and return them
		};
	}
	create () {}
	read_one () {}
	read_all () {}
	update () {}
	remove () {}
	validate () {}
	find_by () {}
	find_by_challenges () {}
};

// we give them just this, they fill it out
// https://coryrylan.com/blog/javascript-es6-class-syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
