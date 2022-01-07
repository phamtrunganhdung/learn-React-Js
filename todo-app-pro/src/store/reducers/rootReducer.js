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
      id: 2,
      title: "Youtube",
      link: "https://www.youtube.com/channel/UCdQgYnUF3VuT0LlUoxZeC5g",
    },
  ],
};
const rootReducer = (state = initState, actions) => {
  return state;
};

export default rootReducer;
