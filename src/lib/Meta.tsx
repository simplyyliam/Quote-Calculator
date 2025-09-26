import { nanoid } from "nanoid";
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  LinkdinIcon,
  TikTokIcon,
  PinterestIcon,
} from "../components/Icons";
import type { JSX } from "react";

type Option = {
  id: string;
  lable: string;
  price: number;
  icon?: JSX.Element;
};

type Meta = {
  id: string;
  order: number
  title: string
  Subtitle: string;
  options: Option[];
};

export const Meta: Meta[] = [
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
      { id: nanoid(), lable: "None", price: 0 },
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
        icon: <FacebookIcon className="w-5 h-5" />,
      },
      {
        id: nanoid(),
        lable: "Instagram",
        price: 220,
        icon: <InstagramIcon className="w-5 h-5" />,
      },
      {
        id: nanoid(),
        lable: "Youtube",
        price: 250,
        icon: <YouTubeIcon className="w-5 h-5" />,
      },
      {
        id: nanoid(),
        lable: "LinkedIn",
        price: 175,
        icon: <LinkdinIcon className="w-5 h-5" />,
      },
      {
        id: nanoid(),
        lable: "TikTok",
        price: 225,
        icon: <TikTokIcon className="w-5 h-5" />,
      },
      {
        id: nanoid(),
        lable: "Pinterest",
        price: 100,
        icon: <PinterestIcon className="w-5 h-5" />,
      },
    ],
  },
  {
    id: nanoid(),
    order: 4,
    title: "Post/week",
    Subtitle: "Select the amount of posts you plan to upload",
    options: [], // add later
  },
];
