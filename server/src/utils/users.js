let users = [];

const addUserToARoom = (id, username, room) => {
  const user = { id, username, room };

  users.push(user);
  return user;
};

const getCurrentUser = (id) => {
  return users.find((user) => user.id === id);
};

const removeUser = (id) => {
  let removedUser;
  const newUsers = users.filter((user) => {
    if (user.id === id) {
      removedUser = user;
      return false;
    } else {
      return true;
    }
  });

  users = newUsers;
  return removedUser;
};

module.exports = {
  addUserToARoom,
  getCurrentUser,
  removeUser,
};
