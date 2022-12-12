const url = "https://randomuser.me/api/?results=5";
const randomUser = () => {
  return fetch(url).then((res) => res.json(res));
};

export default randomUser;
