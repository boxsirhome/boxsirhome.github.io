/* 友链数据 */
export interface LinkData {
  name: string;
  desc: string;
  ico: string;
  link: string;
}

export const friends: LinkData[] = [
  {
    "name": "盒子小屋",
    "desc": "心有山海，静而不争",
    "ico": "https://boxsir.gitee.io/logo.png",
    "link": "https://boxsir.gitee.io/"
  },
  {
    name: "Mr.Hope",
    desc: "VuePress Theme Hope 主题作者",
    ico: "https://mister-hope.com/logo.svg",
    link: "https://mister-hope.com/",
  },
  {
    "name": "上冬十二",
    "desc": "到最后，竟庆幸于夕阳仍留在身上",
    "ico": "https://oragekk.me/logo.svg",
    "link": "https://oragekk.me/"
  }
];
