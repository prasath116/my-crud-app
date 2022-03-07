# MyCrudApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Steps to be followed

## Create New Angular App
  *ng new my-crud-app --routing* To create fresh new application.
  Following commands should be done inside **my-crud-app**
## 1 - Install Bootstrap
  *npm install bootstrap --save*  To install bootstrap. After that, import this css file into angular crud app: @import "~bootstrap/dist/css/bootstrap.css" in *src/styles.css* file
## 2 – Create Module & Routing
  *ng generate module post --routing* will create files in the following locations:
  - *src/app/post/post.module.ts* & 
  - *src/app/post/post-routing.module.ts*
## 3 – Create CRUD Component
  - **ng generate component student/index** 
  - **ng generate component student/view** 
  - **ng generate component student/create**
  - **ng generate component student/edit**
    
    Execute these one by one to create componet for create,read,update & delete operations. You can see respective folders inside student path.
## 4 – Create Interface 
  **ng generate interface student/student** For model data.
## 5 – Create Service 
 **ng generate service student/student** From where we can amke API calls.
## 6 – Start Angular App
  **ng serve** after that hit [localhost:4200](http://localhost:4200/student)

