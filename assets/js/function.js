import { userListField } from './dom.js';
import storageKey from './key.js';

const checkForStorage = () => {
    return typeof Storage !== 'undefined';
};

const putUserList = data => {
    if (checkForStorage()) {
        let userData = [];
        if (localStorage.getItem(storageKey) === null) userData = [];
        else userData = JSON.parse(localStorage.getItem(storageKey));

        userData.unshift(data);
        if (userData.length > 5) userData.pop();

        localStorage.setItem(storageKey, JSON.stringify(userData));
    }
};

const getUserList = () => {
    if (checkForStorage) return JSON.parse(localStorage.getItem(storageKey));
    else return [];
};

const renderUserList = () => {
    const userData = getUserList();
    const userList = userListField;

    userList.innerHTML = '';

    for (let user of userData) {
        let row = document.createElement('tr');
        row.innerHTML = `<td> ${user.nama} </td>`;
        row.innerHTML += `<td> ${user.umur} </td>`;
        row.innerHTML += `<td> ${user.domisili} </td>`;

        userList.appendChild(row);
    }
};

export { putUserList };
