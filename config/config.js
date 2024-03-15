var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/


    /*在这里配置首页的座右铭集合*/
    motto: [
        "立冬北风冰雪多，立冬南风无雨雪。",
        "夏至无雨三伏热，处暑难得十日阴。",
        "白露勿露身，早晚要叮咛。",
        "夏至刮东风，半月水来冲。",
        "处暑里的雨，谷仓里的米。",
        "年逢双春雨水多，年逢无春好种田。",
        "谷雨有雨兆雨多，谷雨无雨水来迟。",
        "立秋有雨样样有，立秋无雨收半秋。",
        "白露早，寒露迟，秋分种麦正当时。",
        "芒种火烧天，夏至雨淋头。"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "承启工作室<br>" +
             "24节气新文创形象<br>" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    // about:"<p>24节气是中国传统的自然节律变化以及确立“十二月建”（月令）的特定节令。它们依次为立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪、冬至、小寒、大寒。这些节气与干支以及八卦等是联系在一起的，有着久远的历史源头。在历史发展中，24节气被列入农历，成为农历的一个重要部分。它们在我国传统农耕社会中占有极其重要的位置，农耕生产与大自然的节律息息相关，它是上古先民顺应农时，通过观察天体运行，认知一岁中时候、气候、物候等方面变化规律所形成的知识体系。它科学地揭示了天文气象变化的规律，将天文、农事、物候和民俗实现了巧妙的结合，衍生了大量与之相关的岁时节令文化。24节气于2016年11月入选联合国教科文组织人类非物质文化遗产代表作名录。</p><br><p>商标对应的产品是二十四节气衍生产品，因此在设计时也与二十四节气息息相关。首先由墨痕构成的二十，与图中的四中元素：墨痕笔画，墨痕圆圈，水墨竹子，水墨景一起表达二十四的意思。其次二十四节气是中国优秀传统文化，因此设计时一切采用中国风元素。图中的圆圈元素隐喻二十四节气贯穿整个春夏秋冬，在365天里过一段时间便能看到它的身影，将一年围成一个圆圈。而背景躲在山后喷薄欲出的朝阳则隐喻着像二十四节气这类优秀的传统文化，终会在将来的某一天，以亮眼惊艳的方式出现在世人眼前。用自己的光芒温润世人的心灵，陶冶世人的情操。最后小小一角的带有二十四节气字样的印章再次对产品的主题进行强调，让人们注意到产品背后的文化故事。</p>",
    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
   /* skills: [
        ["Java", 80, "red"],
        ["GoLang", 77, "blue"],
        ["SQL", 75, "#1abc9c"],
        ["HTML5", 67, "rgba(0,0,0)"],
        ["CSS3", 60, "yellow"],
        ["JavaScript", 70, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    /*skills_description: "<ul>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>熟练掌握Java基础。</li>" +
        "     <li>熟悉JavaIO、多线程、集合等基础框架。</li>" +
        "     <li>了解JVM原理。</li>" +
        "     <li>熟悉Go语言开发基本知识。</li>" +
        "     <li>熟悉SQL语句编写以及调优。</li>" +
        "     <li>熟悉基本Linux命令操作。</li>" +
        "     <li>熟悉Spring、ibatis、struts等框架的使用，了解其原理与机制。</li>" +
        "     <li>熟悉缓存、消息等机制。</li>" +
        "     <li>了解分布式系统的设计与应用。</li>" +
        "     <li>熟悉HTML、CSS、JavaScript以及相应前端知识。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.png", "http://1.15.234.109:8000/", "个人博客", "这里记录了我的Java后端学习笔记<br>持续更新"],
        ["./images/pro-1.png", "http://1.15.234.109:8000/", "个人博客", "这里记录了我的Java后端学习笔记<br>持续更新"],
        ["./images/pro-2.png", "https://github.com/happysnaker/Gobang", "智能人机对战五子棋", "采用C++编写的智能五子棋人机对战<br>2021/7/23"],
        ["https://pic3.zhimg.com/80/v2-d9766956d5c85c2780e4c5008fd946ca_1440w.jpg", "https://github.com/happysnaker/StudentsManageSystem", "学生管理系统", "C语言+AVL树+多重双向表实现"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
   /* work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
            "<p><strong>阎王殿研发部</strong></p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ],

        ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
            "<p><strong>阎王殿研发部</strong></p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
     
    /*others: [
        ["2021-04-28", "第十二届蓝桥杯大学生A组省三等奖", "大一下学期，我参与第十二届蓝桥杯大学生A组，然比赛一改以往暴力题，半数以上DP，仅取得省级三等奖。"],
        ["2021-04-24", "第六届团队程序设计天梯赛个人国家三等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，在个人赛中获得全国三等奖。"],
        ["2021-04-24", "第六届团队程序设计天梯赛团体国家二等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，跟随团队取得团体国家二等奖的成绩。"],
        ["2020-11-14", "2020级南昌大学程序设计正式赛三等奖", "大一上学期，我参与校举办的面向全校程序设计大赛并获得三等奖，"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    /*icon: [
        ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/happysnaker", "我的GitHub主页"],
        ["./svg/博客.svg", "http://1.15.234.109:8000", "我的个人博客"],
        ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/tian-xia-you-dao-81", "我的知乎主页"]
    ],
*/

    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/24.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}