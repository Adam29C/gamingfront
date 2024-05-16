export const admin_sidebar = [
  {
    id: 1,
    name: "SuperAdmin Dashboard",
    Icon: "bx bx-home-heart",
    route: "/admin/dashboard",
    Data: [],
  },

  {
    id: 3,
    name: "Clients",
    Icon: "bx bx-user-circle",
    Data: [
      {
        id: 1,
        name: "Add Client",
        route: "/superadmin/user/add",
      },
      {
        id: 2,
        name: "Clients",
        route: "/superadmin/users",
      },

      {
        id: 4,
        name: "Expired-Clients",
        route: "/superadmin/user/edit",
      },
    ],
  },

];

export const supper_admin_sidebar = [
  {
    id: 1,
    name: " Super Dashboard",
    Icon: "LayoutDashboard",
    route: "/super/dashboard",
    Data: [],
  },
  {
    id: 2,
    name: "All Admins",
    Icon: "Users",
    route: "/super/alladmins",
    Data: [],
  },
  {
    id: 3,
    name: "All Permissions",
    Icon: "Vote",
    route: "/super/permitions",
    Data: [],
  },
  {
    id: 4,
    name: "History",
    Icon: "FolderClock",
    route: "/super/history",
    Data: [],
  },
  {
    id: 5,
    name: "Select Theme",
    Icon: "Paintbrush",
    route: "/super/selecttheme",
    Data: [],
  },
  {
    id: 6,
    name: "Api Create Info",
    route: "/super/apicreateinfo",
    Icon: "WalletCards",
    Data: [],
  },
  {
    id: 7,
    name: "Query-Update",
    Icon: "HelpingHand",
    route: "/super/query",
    Data: [],
  },
  {
    id: 8,
    name: "Support",
    Icon: "HelpingHand",
    route: "/super/support",
    Data: [],
  },
];
