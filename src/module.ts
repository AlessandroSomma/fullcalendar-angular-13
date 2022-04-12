import { Component, NgModule } from "@angular/core";
import { BrowserModule, Title } from "@angular/platform-browser";


import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; 

FullCalendarModule.registerPlugins([ 
  dayGridPlugin
]);


@Component({
	template: "",
})
export class PageComponent {

	readonly title: Title;

	constructor(title: Title) {
		this.title = title;
	}

}

@Component({
	selector: 'my-main',
	template: `
		{{ title.getTitle() }}
		<full-calendar></full-calendar>
	`,
})
export class MainComponent extends PageComponent {

}

@NgModule({
	imports: [BrowserModule, FullCalendarModule],
	declarations: [MainComponent],
	bootstrap: [MainComponent],
})
export class AppModule {

}
