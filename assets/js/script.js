import { submitAction } from './dom.js';
import { submitActionListener, windowLoadListener } from './function.js';

window.addEventListener('load', windowLoadListener);

submitAction.addEventListener('submit', submitActionListener);
