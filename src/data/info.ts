export const info = {
  name: "lyf",
  brief_description: "I am a curious front-end developer",
  role: "front-end developer",
  picture: "/pic.png",
  picture_alt: "Bart Simpson",
  location: "Guangdong Province",
  // cv: "/resume.pdf",

  about: {
    description: `热衷于前端开发领域。擅长使用 Vue、Node.js 和 MYSQL 构建 Web 应用程序。`,
    experience: [
      {
        title: "前端开发",
        date: "2024 - Present",
        location: "Guangdong Province",
        description:
          "通过b站或者各大博客网站进行技术积累和学习并在前端方面自2024年1月起至今有两段实习经验",
      },
    ],
    skills: ["JavaScript", "Vue", "Node.js", "MYSQL"], // not used yet
  },

  projects: [
    {
      title: "智能简历解析系统",
      date: "2023.05-2023.07",
      description:
        "将用户上传word文档/pdf等格式的简历提取信息到后端并解析 \n系统功能： \n-求职者上传简历解析录入 \n-HR在系统上发布岗位，并查看求职者上传的简历。",
      // link: "https://github.com/bartsimpsonfake/prank-portfolio",
      tech: ["Vue2", "uni-app", "Node.js", "Express"],
      img_alt: "智能简历解析系统",
      img_path: "/jianli.png",
    },
    {
      title: "画展网站",
      date: "2022.06-2022.07",
      description:
        "首页分为画作展示和作家展示。 \n组成部分：中国画、油画、动漫 \n点击按钮展示对应画作，默认展示中国画，点击画作能跳转到画作详情页，作家页面同理。",
      // link: "https://github.com/bartsimpsonfake/skate-shop",
      tech: ["Vue2", "axios"],
      img_alt: "画展网站",
      img_path: "/comics.png",
    },
    {
      title: "特产宣传销售小程序",
      date: "2022.06-2022.07",
      description:
        "基于微信小程序开发的项目，与国内各地特产宣传及销售的电商平台",
      // link: "https://github.com/bartsimpsonfake/comic-club",
      tech: ["原生微信小程序"],
      img_alt: "特产宣传销售小程序",
      img_path: "/shop.png",
    },
  ],

  contact: {
    email: "l.yfeng@qq.com",
    github: "https://github.com/Fawnix",
  },
};
