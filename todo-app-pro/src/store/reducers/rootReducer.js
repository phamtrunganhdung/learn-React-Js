const initState = {
  manyLinks: [
    {
      id: 1,
      title: "Github",
      link: "https://www.github.com/phamtrunganhdung",
    },
    {
      id: 2,
      title: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100009744435194",
    },
    {
      id: 3,
      title: "Youtube",
      link: "https://www.youtube.com/channel/UCdQgYnUF3VuT0LlUoxZeC5g",
    },
  ],
  nickName: [
    {
      id: 1,
      name: "Bo",
    },
    {
      id: 2,
      name: "Dun",
    },
    {
      id: 3,
      name: "Dun Dun",
    },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_NICKNAME":
      let nickName = state.nickName;
      nickName = nickName.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        nickName,
      };
    case "ADD_NICKNAME":
      let id = Math.floor(Math.random() * 10000);
      let newNickName = { id: id, name: `random - ${id}` };
      return {
        ...state,
        nickName: [...state.nickName, newNickName],
      };
    default:
      return state;
  }
};

export default rootReducer;
