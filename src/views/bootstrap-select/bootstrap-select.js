import 'bootstrap-select/css/bootstrap-select.min.css';
import jQuery from 'jquery';
export class BootstrapSelect {
  pickerOptions = {
    actionsBox: true,
    dropupAuto: true
  };
  allCondiments = [
    { id: 1, option: 'Ketchup', group: 'Condiments' },
    { id: 2, option: 'Mustard', group: 'Condiments' },
    { id: 10, option: 'Steam', group: 'Breads' },
    { id: 12, option: 'Toasted', group: 'Breads' },
  ];

  constructor() {

  }
  activate() {
    $(document).ready(function () {
      $('.selectpicker').selectpicker({
        liveSearch: true,
        showSubtext: true
      });
    });

  }
}
