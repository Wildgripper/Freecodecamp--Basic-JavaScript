function countOnline(usersObj) {
  let number = 0;
  for (let user in usersObj) {

    if (usersObj[user].online === true) {
      number++;
    }
  }
  return number;
}

