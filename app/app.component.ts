/**
 * The App Component
 * 
 * The root of the application
 * Hosts the client user experience 
 */
// Import library
import {Component} from 'angular2/core';

// The decorator - What template use end hox to create the component
@Component({
    selector: 'my-app',
    template: '<h1>My first Angular 2 application</h1>'
})

// The class controls the appearance and behavior of view through its template
export class AppComponent { }