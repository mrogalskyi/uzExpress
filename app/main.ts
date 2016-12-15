require("core-js/client/shim.min");
require("zone.js/dist/zone");
require("reflect-metadata/Reflect");
require("core-js/client/shim.min");
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);