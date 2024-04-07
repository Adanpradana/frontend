export const routes = [
  {
    id: 1,
    name: "Reporting Pages",
    path: "/reporting",
  },
  {
    id: 1,
    name: "Student",
    path: "/student",
  },
  {
    id: 1,
    name: "Book",
    path: "/books",
  },
  {
    id: 1,
    name: "Book Category",
    path: "/category",
    submenu: [
      {
        id: 11,
        parent_id: 1,
        name: "book category",
        path: "/category/[id]",
      },
    ],
  },
  {
    id: 1,
    name: "Transaction",
    path: "/transaction",
  },
];
