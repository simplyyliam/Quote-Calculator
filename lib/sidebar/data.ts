import { nanoid } from "nanoid";

export const Data = {
    menu: [
        { id: nanoid(), title: "Services", color: "#B9E3C6" },
        { id: nanoid(), title: "Invoices", color: "#A7C7E7" }
    ],

    services: [
        { id: nanoid(), lable: "Social Media", path: "/services/:id/socials" },
        { id: nanoid(), lable: "Photography", path: "/services/:id/phorography" },
    ],
    Invoices: [
        { id: nanoid(), lable: "Invoices Media", path: "/services/:id/invoices" },
        { id: nanoid(), lable: "Photography", path: "/services/:id/phorography" },
    ]
}