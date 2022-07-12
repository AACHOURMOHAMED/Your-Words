import AddToArray from './modules/AddToArray.js';
import changeBackground from './modules/Changebackground.js';
import Switchpages from './modules/NavSwitch.js';
import Popup from './modules/Popup.js';
import './scss/style.scss';

const data = [];
changeBackground();
Switchpages();
Popup(data, AddToArray);
AddToArray(data);