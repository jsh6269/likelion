// dummy data
const posts = [
  {
    id: 1,
    title: "#1 Post",
    content: "My Number one post content",
    author: { id: 1, username: "주현" },
    tags: [
      { id: 1, content: "멋사" },
      { id: 2, content: "치즈" },
      { id: 3, content: "냠냠" },
    ],
    like_users: [1, 2],
    created_at: "2024-02-04T07:42:50.658501Z",
  },
  {
    id: 2,
    title: "#2 post",
    content: "My Number two post content",
    author: { id: 2, username: "세안" },
    tags: [
      { id: 1, content: "멋사" },
      { id: 4, content: "멋쟁이김세안" },
    ],
    like_users: [4],
    created_at: "2024-02-04T07:42:50.658501Z",
  },
  {
    id: 3,
    title: "#3 post",
    content: "My Number three post content",
    author: { id: 3, username: "수혁" },
    tags: [
      { id: 5, content: "회장님" },
      { id: 6, content: "연예인" },
    ],
    like_users: [],
    created_at: "2024-02-04T07:42:50.658501Z",
  },
  {
    id: 4,
    title: "#4 post",
    content: "My Number four post content",
    author: { id: 4, username: "람쥐썬더" },
    tags: [
      { id: 7, content: "천재" },
      { id: 8, content: "다람쥐" },
    ],
    like_users: [0, 1, 2],
    created_at: "2024-02-04T07:42:50.658501Z",
  },
  {
    id: 5,
    title: "#5 post",
    content: "My Number five post content",
    author: { id: 5, username: "어진" },
    tags: [
      { id: 1, content: "멋사" },
      { id: 9, content: "막내" },
    ],
    like_users: [3],
    created_at: "2024-02-04T07:42:50.658501Z",
  },
];

export default posts;
