import { platformBrowser } from "@angular/platform-browser";

import "zone.js";

import { AppModule } from "./module";

platformBrowser().bootstrapModule(AppModule);
