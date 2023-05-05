import React from 'react'
import { FaBook, FaBriefcase, FaCreditCard, FaHome, FaLaptop, FaMailBulk, FaTeamspeak, FaTools, FaUser } from 'react-icons/fa'

export const Links = [
    {id:1,url:'products', text: 'Projects', icon: <FaHome/>},
    {id:2, url:'developers', text: 'Developers', icon: <FaUser/>},
    {id:3, url:'company', text: 'Company', icon: <FaTeamspeak/>},
    // {id:4, url:'products', text: 'Products', icon: <FaLaptop/>},
    // {id:5, url:'services', text: 'Services', icon: <FaTools/>},
    // {id:6, url:'projects', text: 'Projects', icon: <FaBriefcase/>},
    // {id:7, url:'contact', text: 'Contacts', icon: <FaMailBulk/>}
]

export const sublinks = [
    {
        page: 'Projects',
        links: [
            {lable: 'partnership ', icon: <FaCreditCard/>, url: '/products'},
            {lable: 'internal ', icon: <FaCreditCard/>, url: '/products'},
            {lable: 'Contract ', icon: <FaCreditCard/>, url: '/products'},
        ],
    },
    {
        page: 'Developers',
        links: [
            {lable: 'docs', icon: <FaLaptop/>, url: '/products'},
            {lable: 'plugins', icon: <FaLaptop/>, url: '/products'},
            {lable: 'libraries', icon: <FaLaptop/>, url: '/products'},
            {lable: 'help', icon: <FaLaptop/>, url: '/products'},
        ],
    },
    {
        page: 'Company',
        links: [
            {lable: 'about', icon: <FaBriefcase/>, url: '/products'},
            {lable: 'customers', icon: <FaBriefcase/>, url: '/products'},
            {lable: 'sponsors', icon: <FaBriefcase/>, url: '/products'},
            {lable: 'partners', icon: <FaBriefcase/>, url: '/products'},
            {lable: 'contact', icon: <FaBriefcase/>, url: '/products'},
        ],
    },
]