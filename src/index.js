import AddToArray from './modules/AddToStorege.js';
import AddWord from './modules/AddWord.js';
import changeBackground from './modules/Changebackground.js';
import Switchpages from './modules/NavSwitch.js';
import Popup from './modules/Popup.js';
import './scss/style.scss';

const data = [];

changeBackground();
Switchpages();
Popup();
AddWord();
AddToArray(data);