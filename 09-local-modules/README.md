# Project Title

build a model factory with these configuration options: sync/async, validating/non-validating - if so a schema.  now write the same basic app twice (ie. same user stories), once synchronous MCL, once async. and of course tests


make it a local module, build a basic crud app

### Index
* [Learning Objectives](#learning-objectives)
* [Specifications](#specifications)
* [Resources](#resources)
* [Assessment](#assessment)

---

## Learning Objectives

overview

list

[TOP](#index)

---

## Specifications

turn your models into a local module
	users can configure it on instantiation:
		options
			version: callback, promise, return
			type_validation: boolean
			db: path to db.txt
	use example: 
		let pre-model = require('model')
		let model = pre-model(options)
	so build it however you want, but a user uses it as a function not constructor
npm install it
use it in a basic crud app

[TOP](#index)

---

## Resources

https://derickbailey.com/2016/04/04/develop-against-local-node-modules-deploy-from-npm-or-github/

example: https://github.com/elewa-student/Exploring-Modules

[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

