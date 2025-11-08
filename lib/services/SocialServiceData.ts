import { nanoid } from "nanoid"
import type { JSX } from "react";

type Option = {
    id: string;
    lable: string;
    price?: number;
    length?: number;
    icon?: JSX.Element;
    months?: number;
    dicounts?: number
};

type Meta = {
    id: string;
    order: number;
    title: string;
    Subtitle: string;
    options: Option[];
};

export const SocialServices: Meta[] = [
    {
        id: nanoid(),
        order: 0,
        title: "Strategy & Reposting",
        Subtitle: "Select the type of strategy you want to use",
        options: [
            { id: nanoid(), lable: "Social Media Strategy", price: 100 },
            { id: nanoid(), lable: "Competitor Analysis", price: 80 },
            { id: nanoid(), lable: "Monthly Performance Reports", price: 70 },
        ],
    },
    {
        id: nanoid(),
        order: 1,
        title: "Content Creation",
        Subtitle: "Select what type of content you want",
        options: [
            { id: nanoid(), lable: "Custom Graphics", price: 150 },
            { id: nanoid(), lable: "Copywriting", price: 120 },
            { id: nanoid(), lable: "Photography", price: 200 },
        ],
    },
    {
        id: nanoid(),
        order: 2,
        title: "Community Management",
        Subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        options: [
            { id: nanoid(), lable: "Standard (2 hours/day)", price: 200 },
            { id: nanoid(), lable: "Premium (3+ hours/day)", price: 300 },
        ],
    },
    {
        id: nanoid(),
        order: 3,
        title: "Platforms",
        Subtitle: "Select the social media platforms you prefer to use",
        options: [
            {
                id: nanoid(),
                lable: "Facebook",
                price: 150,

            },
            {
                id: nanoid(),
                lable: "Instagram",
                price: 220,

            },
            {
                id: nanoid(),
                lable: "Youtube",
                price: 250,

            },
            {
                id: nanoid(),
                lable: "LinkedIn",
                price: 175,

            },
            {
                id: nanoid(),
                lable: "TikTok",
                price: 225,

            },
            {
                id: nanoid(),
                lable: "Pinterest",
                price: 100,

            },
        ],
    },
    // {
    //   id: nanoid(),
    //   order: 4,
    //   title: "Post/week",
    //   Subtitle: "Select the amount of posts you plan to upload",
    //   options: [], // add later
    // },
    {
        id: nanoid(),
        order: 5,
        title: "Contract Length",
        Subtitle: "Select the your desired contract length.",
        options: [
            { id: nanoid(), lable: "Monthly", months: 0, dicounts: 0, length: 0 },
            { id: nanoid(), lable: "3 Months", months: 3, dicounts: 0.1, length: 10 },
            { id: nanoid(), lable: "6 Months", months: 6, dicounts: 0.2, length: 20 },
        ],
    },
];
