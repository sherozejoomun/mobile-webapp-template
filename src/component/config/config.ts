import {Locale} from '../locale/locale';

/**
 * Config defines the application configuration settings
 */
export class Config{

  // Default application locale
  public static get DEFAULT_LOCALE():string {
    return 'en';
  }

  // List of locales in which the application is available
  public static get LOCALES():Locale[] {
    return [
      {code: 'fr', label: 'FR', selected: false},
      {code: 'en', label: 'EN', selected: false},
      {code: 'de', label: 'DE', selected: false},
      {code: 'nl', label: 'NL', selected: false},
      {code: 'pt', label: 'PT', selected: false},
      {code: 'es', label: 'ES', selected: false}
    ];
  }
}