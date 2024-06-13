import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

export default function app(appDiv) {
  const page = setupPageBasics(appDiv)
  checkResponseStatus()
  .then ((data) => renderStatus(page.statusDiv, data))


  .then(() => getUsers())
  .then((data) => renderUsers(page.usersUl, data))
  .then(() => {
    page.usersUl.addEventListener('click', (event) => {
      if(event.target.matches('button')){
        getUserPosts(event.target.getAttribute('data-user-id'))
        .then((data) => renderPosts(page.postsUl, data))
      }
    })
  })
  page.newUserForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const form = event.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);

    createNewUser(formObj)
    .then((data) => renderNewUser(page.newUserDiv, data))
  })



}