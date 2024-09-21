const item1 = {
  user: {
    id: 1,
    name: "一号",
    student_id: "2020211222",
    class_id: "2020211333",
    college: "理学院",
  },
  overall: [
    { category: "参与活动总量", count: 10 },
    { category: "思想成长", count: 5 },
    { category: "社会实践", count: 1 },
    { category: "志愿服务", count: 0 },
    { category: "学术科创", count: 1 },
    { category: "文化艺术", count: 2 },
    { category: "强身健体", count: 1 },
    { category: "其他", count: 0 },
  ],
  semesters: [
    {
      semester: "2021-2022-1",
      acts: [
        { id: 1, name: "码写诗为你”语言为你歌写诗翻译你公开赛文化艺", category: "思想成长", type: 3 },
        { id: 2, name: "演基础交流会（教三411+线上）", category: "社会实践", type: 1 },
        { id: 3, name: "计算机学院国家示范性软件“学院代码系院列之歌华前量影沿课语大模文化型李时的研发写技件“、式工具期科性青总春第企", category: "学术科创", type: 1 },
        { id: 4, name: "码系杯展十歌数六火术数炬交", category: "文化艺术", type: 2 },
        { id: 5, name: "秋+接力快码系杯展十歌强身健体艺", category: "强身健体", type: 1 },
      ],
    },
    {
      semester: "2021-2022-2",
      acts: [
        { id: 1, name: "活动1", category: "思想成长", type: 3 },
        { id: 2, name: "活动2", category: "社会实践", type: 1 },
        { id: 3, name: "活动3", category: "学术科创", type: 1 },
      ],
    },
    {
      semester: "2022-2023-1",
      acts: [
        { id: 1, name: "活动1", category: "思想成长", type: 3 },
        { id: 2, name: "活动2", category: "社会实践", type: 1 },
        { id: 3, name: "活动3", category: "学术科创", type: 1 },
        { id: 4, name: "活动4", category: "文化艺术", type: 2 },
        { id: 5, name: "活动5", category: "强身健体", type: 1 },
        { id: 6, name: "活动6", category: "强身健体", type: 1 },
      ]
    },
    {
      semester: "2022-2023-2",
      acts: [
        { id: 1, name: "活动1", category: "思想成长", type: 3 },
        { id: 2, name: "活动2", category: "社会实践", type: 1 },
        { id: 3, name: "活动3", category: "学术科创", type: 1 },
        { id: 4, name: "活动4", category: "文化艺术", type: 2 },
      ],
    }
  ],
};

const item2 = {
  user: {
    id: 2,
    name: "呦呦呦",
    student_id: "2020211223",
    class_id: "2020211334",
    college: "计算机学院（国家示范性软件学院）",
  },
  overall: [
    { category: "参与活动总量", count: 8 },
    { category: "思想成长", count: 3 },
    { category: "社会实践", count: 2 },
    { category: "志愿服务", count: 1 },
    { category: "学术科创", count: 1 },
    { category: "文化艺术", count: 1 },
    { category: "强身健体", count: 0 },
    { category: "其他", count: 0 },
  ],
  semesters: [
    {
      semester: "2021-2022-1",
      acts: [
        { id: 1, name: "活动1", category: "思想成长", type: 3 },
        { id: 2, name: "活动2", category: "社会实践", type: 1 },
        { id: 3, name: "活动3", category: "学术科创", type: 1 },
        { id: 4, name: "活动4", category: "文化艺术", type: 2 },
        { id: 5, name: "活动5", category: "强身健体", type: 1 },
      ],
    },
    {
      semester: "2021-2022-2",
      acts: [
        { id: 1, name: "活动1", category: "思想成长", type: 3 },
        { id: 2, name: "活动2", category: "社会实践", type: 1 },
        { id: 3, name: "活动3", category: "学术科创", type: 1 },
      ],
    },
    {
      semester: "2022-2023-1",
      acts: [
        { id: 1, name: "活动1", category: "思想成长", type: 3 },
        { id: 2, name: "活动2", category: "社会实践", type: 1 },
        { id: 3, name: "活动3", category: "学术科创", type: 1 },
        { id: 4, name: "活动4", category: "文化艺术", type: 2 },
        { id: 5, name: "活动5", category: "强身健体", type: 1 },
        { id: 6, name: "活动6", category: "强身健体", type: 1 },
      ],
    },
    {
      semester: "2022-2023-2",
      acts: [
        { id: 1, name: "活动1", category: "思想成长", type: 3 },
        { id: 2, name: "活动2", category: "社会实践", type: 1 },
        { id: 3, name: "活动3", category: "学术科创", type: 1 },
        { id: 4, name: "活动4", category: "文化艺术", type: 2 },
      ],
    }
  ],
};

const item3 = {
  user: {
    id: 3,
    name: "三号",
    student_id: "2020211224",
    class_id: "2020211335",
    college: "未来学院",
  },
  overall: [
    { category: "参与活动总量", count: 12 },
    { category: "思想成长", count: 4 },
    { category: "社会实践", count: 3 },
    { category: "志愿服务", count: 2 },
    { category: "学术科创", count: 1 },
    { category: "文化艺术", count: 1 },
    { category: "强身健体", count: 0 },
    { category: "其他", count: 0 },
  ],
  semesters: [
    {
      semester: "2021-2022-1",
      acts: [
        { id: 1, name: "活动1", category: "思想成长", type: 3 },
        { id: 2, name: "活动2", category: "社会实践", type: 1 },
        { id: 3, name: "活动3", category: "学术科创", type: 1 },
        { id: 4, name: "活动4", category: "文化艺术", type: 2 },
        { id: 5, name: "活动5", category: "强身健体", type: 1 },
      ],
    },
    {
      semester: "2021-2022-2",
      acts: [
        { id: 1, name: "活动1", category: "思想成长", type: 3 },
        { id: 2, name: "活动2", category: "社会实践", type: 1 },
        { id: 3, name: "活动3", category: "学术科创", type: 1 },
      ],
    },
    {
      semester: "2022-2023-1",
      acts: [
        { id: 1, name: "活动1", category: "思想成长", type: 3 },
        { id: 2, name: "活动2", category: "社会实践", type: 1 },
        { id: 3, name: "活动3", category: "学术科创", type: 1 },
        { id: 4, name: "活动4", category: "文化艺术", type: 2 },
        { id: 5, name: "活动5", category: "强身健体", type: 1 },
        { id: 6, name: "活动6", category: "强身健体", type: 1 },
      ],
    },
    {
      semester: "2022-2023-2",
      acts: [
        { id: 1, name: "活动1", category: "思想成长", type: 3 },
        { id: 2, name: "活动2", category: "社会实践", type: 1 },
        { id: 3, name: "活动3", category: "学术科创", type: 1 },
        { id: 4, name: "活动4", category: "文化艺术", type: 2 },
      ],
    }
  ],
};

const datas = [item1, item2, item3];

export default datas;
