export const setupPageBasics = (parentEl) => {
    parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

    const statusDiv = parentEl.querySelector('#status');
    const usersUl = parentEl.querySelector('#users-list');
    const postsUl = parentEl.querySelector('#posts-list');
    const newUserForm = parentEl.querySelector('#new-user-form');
    const newUserDiv = parentEl.querySelector('#new-user');

    return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

export const renderStatus = (statusDiv, statusInfoObj) => {
  const h2  = document.createElement('h2')
  h2.setAttribute('id', 'status-heading')
  h2.textContent = `Info on - ${statusInfoObj.url}`
  const p = document.createElement('p')
  p.setAttribute('id','status-code' )
  let statusText;
  if (statusInfoObj.ok) {
      statusText = 'OK';
  } else {
      statusText = 'FAIL';
  }
  p.textContent = `Status code: ${statusInfoObj.status}, ${statusText}!`;

  statusDiv.append(h2, p)
}

export const renderUsers = (usersUl, users) => {
    usersUl.innerHTML = '';

  users.forEach(user => {
    const li = document.createElement('li');
    li.setAttribute('class', "user-card");
    const button = document.createElement('button');
    button.setAttribute('data-user-id', user.id);
    button.textContent = `Load ${user.username}'s posts`;
    li.append(button);
    usersUl.append(li);
});

};

export const renderPosts = (postsUl, posts) => {
  postsUl.innerHTML = '';

  posts.forEach((post) => {
    const liForPost = document.createElement('li');
    const h2ForPost = document.createElement('h2');
    const pForPost = document.createElement('p');
    h2ForPost.textContent = post.title
    pForPost.textContent = post.body

  
    liForPost.append(h2ForPost, pForPost);
    postsUl.append(liForPost);
});
}

export const renderNewUser = (newUserDiv, newUserInfo) => {
  newUserDiv.innerHTML = ''
  const h2ForUser = document.createElement('h2');
  const pForUser = document.createElement('p');
  h2ForUser.textContent = newUserInfo.username
  pForUser.textContent = newUserInfo.email

  newUserDiv.append(h2ForUser,pForUser)
}