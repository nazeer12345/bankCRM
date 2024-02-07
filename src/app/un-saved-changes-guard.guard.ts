import { CanDeactivateFn } from '@angular/router';
import { SearchComponent } from './search/search.component';

export const unSavedChangesGuardGuard: CanDeactivateFn<any> = (component: SearchComponent, currentRoute, currentState, nextState) => {

if (component.isDirty){
  return window.confirm('You have some unsaved changes, are you sure to navigate?')
}
return true
};
