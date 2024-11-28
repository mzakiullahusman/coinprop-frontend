interface MenuItem {
  id: number;
  path: string;
  name: string;
}

export const webHeaderMenuItems: MenuItem[] = [
  {
    id: 1,
    path: "/web",
    name: "Home",
  },
  {
    id: 2,
    path: "/web/statistics",
    name: "Statistics",
  },
  {
    id: 3,
    path: "/web/challenge-pricing",
    name: "Funding +",
  },
  {
    id: 4,
    path: "/web/fmf-academy",
    name: "Academy",
  },
  {
    id: 5,
    path: "/web/contests",
    name: "Contests",
  },
  {
    id: 6,
    path: "/web/contact",
    name: "Contact Us",
  },
];
