const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((prev, user) => {
      return prev + user.balance;
    }, 0);
};

export default getTotalBalanceByGender;
