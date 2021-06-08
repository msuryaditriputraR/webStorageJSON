import { submitAction } from './dom';
import { submitActionListener, windowLoadListener } from './function';

window.addEventListener('load', windowLoadListener);

submitAction.addEventListener('submit', submitActionListener);
