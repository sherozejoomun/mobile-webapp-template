import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * LocaleChooser defines the language selector component which allows the user to choose the locale of the application.
 *
 */
@Component({
  selector: 'locale-chooser',
  template: `
    <div class="locale" [class.selected]="selected">
      <input (click)="selectLocale(code)" type="button" class="locale-button" value="{{label}}"/>
      <div class="locale-underline"></div>
    </div>
  `
})
export class LocaleChooser {

  @Input() code:string;
  @Input() label:string;
  @Input() selected:boolean;

  @Output() localeChange = new EventEmitter();

  /**
   * Set the current locale of the application.
   *
   * @param code {string} Locale code of the application
   */
  selectLocale(code:string) {
    this.localeChange.emit({code: this.code});
  }

}
