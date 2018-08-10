# learn-angular-js

## Start the Application
Run `ng serve --open` to start the application. It will be accessible via `localhost:4200`.

# AngularJS (1.4.8)
AngularJS 1.4.8
## Templates
Templates are written in HTML and contain Angular-specific elements and attributes. Angular combines the template with information from the model and controller to render the dynamic view that a user sees in the browser. Inside templates you can use, Directives, Markup ({{ and }} to bind expressions), Filters and Form Controls. In a simple app, the template consists of HTML, CSS and Angular directives contained in a single HTML file (`index.html`). A more complex app may use partials to segment the page into multiple views.

## Directives
Directives are used to extend HTML with their own customer attributes and elements. A list of pre-defined ng-directives can seen on the API [here](http://devdocs.io/angularjs~1.4-ng-directives/) . The only place where an application should access the DOM is within the directives. If you need to access the DOM directly, you should write a custom directive for this. A guide on writing custom directives can be found [here](https://code.angularjs.org/1.4.8/docs/guide/directive) .

## Models
The model is the data shown to the user in the view and with which the user interacts. The values that are stored in variables on the scope are referred to as the model.

## Expressions
Expressions are like JavaScript expressions, but with a few differences. JavaScript expressions are evaluated against the global `window` scope. Where as, Angular expressions are evaluated against a `scope` object. The expressions guide can be found [here](https://code.angularjs.org/1.4.8/docs/guide/expression) .

## Compiler

## Filters
These are used to format the value of an Expression. The available filters are;
* currency
* date
*	filter
*	json
*	limitTo
*	lowercase
*	number
*	orderBy
*	uppercase

They are applied to an expression by piping them. For example, `{{ someExpress | currency }}`. Which will format it as currency.

## Views
The loaded, transformed and rendered DOM is called the view.

## Data Binding
Data Binding in Angular apps is the automatic synchronisation of data between the model and the view components. Due to Two-Way Data Binding (Mentioned below), means that the model is a single source of truth in the application as they syncrhonise in real-time.

#### Two-Way Data-Binding
The data bindings in Angular are live. Meaning that whenever the input value changes, the value of the expressions are automatically recalculated and the DOM is updated with their new values. A guide on two-way binding can be found [here](https://code.angularjs.org/1.4.8/docs/guide/databinding) . Because views are just projections of models, the controllers are completely separate from the view and are unaware of it. This makes its very easy to test controllers in isolation without the view and the DOM/Browser relation dependency.

## Controllers

The controller guide can be found [here](https://code.angularjs.org/1.4.8/docs/guide/controller) .

The purpose of a controller is to expose variables and functionality to expressions and directives. They shouldn't really do too much, simply contain the business logic needed for a single view. The most common way to keep controllers slim is by encapsulating work that doesn't belong to controllers into services and then using these services in controllers via dependency injection.
The array in the `.controller()` function an array of service dependencies that the controller needs. The last entry in the array is the controller constructor function. Angular uses this array syntax to define the dependencies so that the Dependency Injection also works after minifying code.

When a controller is attached to the DOM via the `ng-controller` directive, a new Controller object is instantiated via it's constructor. A new child scope will be created and made available as an injectable parameter to the controllers constructor function as `$scope`. Scopes have their own hierarchy, a guide to understanding scopes can be found [here](https://github.com/angular/angular.js/wiki/Understanding-Scopes) . They essentially inherit properties and methods defined by controller above them in the hierarchy. Child controllers can also override such properties and methods from their parents.

Naming convention for controllers is like Java class names, suffixed with 'Controller'. For example, a food controller would be called FoodController.

## Dependency Injection

Dependency injection is a software design pattern that deals with how objects and functions get created and how they get hold of all their dependencies. Everything within Angular (Directives, Filters, Controller, Services etc...) are created and wired using dependency injection. The DI container in Angular is called the Injector.

## Injectors

## Modules
Modules are used as a place where all the things that should work together, are registered. When Angular starts, it will use the configuration of the module with the name defined by the `ng-app` directive, including the configuration of all the modules that this module depends on.
A Template can specify the module to use via the `ng-app="moduleName"` directive.

## Services
Services in angular are substitute objects that are wired together using Dependency Injection. They can be used to organise and share code across the application. Services are lazily instantiated so they are only instantiated when an application component depends on it. They are also singletons. Each component dependent on a service gets a reference to the single instance generated by the service factory.

To use a service, you add it as a dependency for the component (Controller, Service, Filter or Directive) that depends on the service. The dependency injection subsystem takes care of the rest. Services can have dependencies themselves, which as normal, are declared in the factory function signature in the service dependency array.

## Scopes
The guide on scope can be accessed [here](https://code.angularjs.org/1.4.8/docs/guide/scope) . 
Scope is an object that refers to the application model. It is an execution context for expressions. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application. Scopes can watch expressions and propagate events.

When Angular evaluates an expression, e.g `{{ name }}` it first looks at the scope associated with the given element for the name property. If no such property is found, it searches the parent scope and so on until the root scope is reached. In JavaScript this behavior is known as prototypical inheritance, and child scopes prototypically inherit from their parents.

## Testing in AngularJS
Testing in Angular is done via Karma and are written in Jasmine. The karma site can view accessed [here](https://karma-runner.github.io/2.0/index.html) .

#### Testing Controllers
An example of controller testing can found [here](https://code.angularjs.org/1.4.8/docs/guide/controller) . Testing nested controllers can be done by creating the same scope hierarchy that exists in the DOM.

#### Unit Tests
Services can be registered via the `$provide` service inside of a module's `config` function. This technique is often used in unit tests to mock out a service's dependencies.
