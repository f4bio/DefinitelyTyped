// Type definitions for angular-dynamic-locale v0.1.27
// Project: https://github.com/lgalfaso/angular-dynamic-locale
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="angular" />

import * as angular from 'angularjs';

declare module 'angularjs' {
	export namespace dynamicLocale {

		interface tmhDynamicLocaleService {
			set(locale: string): void;
			get(): string;
		}

		interface tmhDynamicLocaleProvider extends angular.IServiceProvider {
			localeLocationPattern(location: string): tmhDynamicLocaleProvider;
			localeLocationPattern(): string;
			useStorage(storageName: string): void;
			useCookieStorage(): void;
		}
	}
}


