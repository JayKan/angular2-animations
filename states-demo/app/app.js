"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.emails = [
            {
                subject: 'Angular 2 Release Date',
                sender: 'Brad Green',
                body: "\n      Hey team,\n\n      I'm thinking we can ship Angular 2 in anywhere between 2 days and 2 years.\n\n      What do you think?\n\n      Cheers,\n      Brad Green\n      The boss of the Father of AngularJS  \n    "
            },
            {
                subject: 'Invite: Angular 3 Planning Meeting',
                sender: 'Papa Misko',
                body: "\n      Hey team,\n      \n      I'm really excited for Angular 2, but I think it's time to start thinking about Angular 3.\n      \n      I'm thinking we kill off Components and switch from TypeScript to CoffeeScript.\n      \n      Let me know what you think.\n      \n      Misko Hevery a.k.a. Papa Misko      \n    "
            },
            {
                subject: 'Delete all the tests?',
                sender: 'David East',
                body: "\n      Hey ngFolks,\n      \n      Testing is really hard, so I'm just going to delete all the .spec.ts files.\n      \n      Sound good? Great!      \n      \n      David East\n      Firebase all the things\n    "
            },
            {
                subject: 'Router vs Router',
                sender: 'Pete Bacon Darwin',
                body: "\n      Hey everyone,\n      \n      Just a friendly reminder that the term is router, not router.\n      \n      Hope that clears everything up.\n      \n      Cheers,\n      Pete Bacon-Router Darwin\n      "
            },
            {
                subject: 'Invitation: Your Deep Brain Stimulation Appointment',
                sender: 'Dr Andres Lozano',
                body: "\n      Hey Matias,\n      \n      We have you scheduled for this upcoming Friday at 9am.\n      \n      Remember to bring your tin-foil.\n      \n      Cheers,\n      Dr. Andres Lozano\n    "
            }
        ];
        this.selectedEmail = this.emails[0];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [],
            directives: [],
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'app/app.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map