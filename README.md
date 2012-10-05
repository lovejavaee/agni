#agni

Simple and intuitive MVC web framework for node.js.

##Overview

Agni is a web framework built on top of Express, based on the principle
of _convention over configuration_.
It consists of a router, an MVC application skeleton and a useful helper function
for multi-language support.

It does not include any database abstraction system, but leaves the choice of the
object mapping system to the developer.

##Architecture

Agni is loosely based on the [MVC](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
development pattern.

The three main application components are:

- the **Model**, which is the data access layer;

- the **View**, which is the part of the application that is "visible" to the user;

- the **Controller**, which acts as an intermediary between the other two components,
taking data from the Model and sending it to the View.

A fourth component is optionally available, which is the **Service** layer.
The purpose of this layer is encapsulating business logic in a high level interface
available to the controller, freeing the latter from overload and duplication.

Typically, the most simple applications will only need Controllers and Views. You
are not forced to use Models and Services if you do not need them.

## License

(The MIT License)

Copyright (C) 2012 Lorenzo Tabacchini

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
