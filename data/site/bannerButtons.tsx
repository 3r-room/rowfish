import React from 'react';
import { BannerButtonType } from '@site/src/types';
import RoomIcon from '@ricons/material/PeopleAltOutlined';
import WorkIcon from '@ricons/antd/CoffeeOutlined';
import CourseIcon from '@ricons/antd/VideoCameraOutlined';
import OrderIcon from '@ricons/material/HandshakeOutlined';

export const bannerButtons: BannerButtonType[] = [
    {
        title: '3R教室',
        icon: () => <RoomIcon />,
        desc: '体系化学习TS全栈开发',
        link: '/classroom',
    },
    {
        title: '订阅本站',
        icon: () => <CourseIcon />,
        desc: '永久享用本站所有视频教程',
        link: '/subscriber',
    },
    {
        title: '自由办公',
        icon: () => <WorkIcon />,
        desc: '助你寻找远程工作与接单渠道',
        link: '/classroom',
    },
    {
        title: '接单开发',
        icon: () => <OrderIcon />,
        desc: '站长承接各类外包业务',
        link: '/about',
    },
];
