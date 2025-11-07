import { nanoid } from "nanoid";

export const Data = {
    menu: [
        {id: nanoid(), title: "Services", color: "#B9E3C6"},
        {id: nanoid(), title: "Invoices", color: "#A7C7E7"}
    ],
    
    services: [
        {id: nanoid(), lable: "Social Media", path: "/social"},
        {id: nanoid(), lable: "Photography", path: "/social"},
    ]
}