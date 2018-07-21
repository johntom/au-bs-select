import 'bootstrap-select/css/bootstrap-select.min.css';
// import jQuery from 'jquery';
// import { inject } from 'aurelia-framework';
import { bindable } from 'aurelia-framework';

export class BootstrapSelect {
  @bindable condimentItem;
  @bindable condimentValue;
   condimentItemChanged(newItem) {
    // output --> { id: 2, option: 'Mustard', company: 'French\'s' }
    console.log('Item changed:', newItem);
  }

  condimentValueChanged(newValue) {
    // output --> 2
    console.log('Value changed:', newValue)
  }
  pickerOptions = {
    // actionsBox: true,
    // dropupAuto: true
    liveSearch: true ,
    liveSearchPlaceholder:'search',
    liveSearchStyle:'contains' 

  };
  allCondiments = [
    { id: 1, option: 'Ketchup', group: 'Condiments' },
    { id: 2, option: 'Mustard', group: 'Condiments' },
    { id: 10, option: 'Steam', group: 'Breads' },
    { id: 12, option: 'Toasted', group: 'Breads' },
  ];

  constructor() {

  }
  
  // activate() {
  //   $(document).ready(function () {
  //     $('.selectpicker').selectpicker({
  //       liveSearch: true,
  //       showSubtext: true
  //     });
  //   });
  // }
}
