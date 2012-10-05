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

A fourth component is optionally available, which is called **Libraries**, and constitute
the _Service_ layer.
The purpose of this layer is encapsulating business logic in a high level interface
available to the controller, freeing the latter from overload and duplication.

Typically, the most simple applications will only need Controllers and Views. You
are not forced to use Models and Libraries if you do not need them.
