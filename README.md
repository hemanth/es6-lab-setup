> How to setup your ES6 LAB?

* git clone https://github.com/hemanth/es6-lab-setup.git

* cd es6-lab-setup

* npm install 

* gulp watch

That would watch for any changes in `js` and `spec` dir and fire a `traceur` and `jasmine` task.


__Sample usage:__

![](/images/es6-lab.gif)


__TODO :__

Provide support for the below with shims or by exploring `traceur` flags:

* Module.

* Proxy.

* Map, Set, WeakMap. 

* Object Observe. 

* Rest and spread.

Also take care of errors from `gulp-traceur`.

More ES6 recpies at [paws-on-es6](https://github.com/hemanth/paws-on-es6)

