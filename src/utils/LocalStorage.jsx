import { useEffect } from "react";

let Employee= [
  {
    "id": 1,
    "name": "Arjun Sharma",
    "email": "arjun@s.com",
    "password": "123",
    "role": "employee",
    "tasks": [
      {
        "title": "Design Landing Page",
        "description": "Create and implement a visually appealing, fully responsive landing page layout...",
        "category": "Design",
        "date": "2025-04-22",
        "completed": false,
        "active": true,
        "newTask": true,
        "failed": false,
        "intensity": "medium"
      },
      {
        "title": "Team Sync",
        "description": "Join the weekly cross-functional team sync-up meeting...",
        "category": "Management",
        "date": "2025-04-24",
        "completed": false,
        "active": true,
        "newTask": false,
        "failed": false,
        "intensity": "low"
      },
      {
        "title": "Fix Footer Bug",
        "description": "Investigate and resolve the visual layout issue...",
        "category": "Development",
        "date": "2025-04-21",
        "completed": true,
        "active": false,
        "newTask": false,
        "failed": false,
        "intensity": "high"
      }
    ],
    "taskcount": {
      "active": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Kavya Menon",
    "email": "kavya.menon@example.com",
    "password": "123",
    "role": "employee",
    "tasks": [
      {
        "title": "Database Optimization",
        "description": "Analyze and refactor existing database queries...",
        "category": "Development",
        "date": "2025-04-20",
        "completed": false,
        "active": false,
        "newTask": false,
        "failed": true,
        "intensity": "high"
      },
      {
        "title": "Write Blog Post",
        "description": "Craft a detailed, engaging blog article...",
        "category": "Marketing",
        "date": "2025-04-25",
        "completed": false,
        "active": true,
        "newTask": true,
        "failed": false,
        "intensity": "medium"
      },
      {
        "title": "Test User Flows",
        "description": "Conduct manual QA testing of critical user flows...",
        "category": "QA",
        "date": "2025-04-23",
        "completed": true,
        "active": false,
        "newTask": false,
        "failed": false,
        "intensity": "low"
      },
      {
        "title": "Prepare Deck",
        "description": "Design and assemble a professional presentation deck...",
        "category": "Design",
        "date": "2025-04-26",
        "completed": false,
        "active": true,
        "newTask": true,
        "failed": false,
        "intensity": "medium"
      }
    ],
    "taskcount": {
      "active": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "name": "Rahul Verma",
    "email": "rahul.verma@example.com",
    "password": "123",
    "role": "employee",
    "tasks": [
      {
        "title": "Client Feedback Review",
        "description": "Carefully analyze and summarize client feedback...",
        "category": "Support",
        "date": "2025-04-23",
        "completed": false,
        "active": true,
        "newTask": true,
        "failed": false,
        "intensity": "medium"
      },
      {
        "title": "Push Release v2.3",
        "description": "Coordinate the deployment of version 2.3...",
        "category": "Development",
        "date": "2025-04-22",
        "completed": false,
        "active": true,
        "newTask": false,
        "failed": false,
        "intensity": "high"
      },
      {
        "title": "Sprint Planning",
        "description": "Participate in sprint planning...",
        "category": "Management",
        "date": "2025-04-24",
        "completed": false,
        "active": true,
        "newTask": true,
        "failed": false,
        "intensity": "medium"
      }
    ],
    "taskcount": {
      "active": 3,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 4,
    "name": "Isha Patel",
    "email": "isha.patel@example.com",
    "password": "123",
    "role": "employee",
    "tasks": [
      {
        "title": "Security Audit",
        "description": "Review and evaluate current system security policies...",
        "category": "QA",
        "date": "2025-04-25",
        "completed": false,
        "active": false,
        "newTask": true,
        "failed": false,
        "intensity": "high"
      },
      {
        "title": "Code Review",
        "description": "Perform a detailed code review of a teammate’s pull request...",
        "category": "Development",
        "date": "2025-04-21",
        "completed": true,
        "active": false,
        "newTask": false,
        "failed": false,
        "intensity": "medium"
      },
      {
        "title": "Set Up Analytics",
        "description": "Integrate Google Analytics into the web application...",
        "category": "Marketing",
        "date": "2025-04-22",
        "completed": false,
        "active": true,
        "newTask": true,
        "failed": false,
        "intensity": "medium"
      }
    ],
    "taskcount": {
      "active": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "name": "Ananya Reddy",
    "email": "ananya.reddy@example.com",
    "password": "123",
    "role": "employee",
    "tasks": [
      {
        "title": "Create Onboarding Flow",
        "description": "Design a seamless user onboarding flow...",
        "category": "Design",
        "date": "2025-04-26",
        "completed": false,
        "active": true,
        "newTask": true,
        "failed": false,
        "intensity": "medium"
      },
      {
        "title": "Run A/B Test",
        "description": "Set up and run an A/B test...",
        "category": "Marketing",
        "date": "2025-04-24",
        "completed": true,
        "active": false,
        "newTask": false,
        "failed": false,
        "intensity": "medium"
      },
      {
        "title": "Internal Documentation",
        "description": "Update internal project documentation...",
        "category": "Documentation",
        "date": "2025-04-20",
        "completed": false,
        "active": false,
        "newTask": false,
        "failed": true,
        "intensity": "low"
      }
    ],
    "taskcount": {
      "active": 1,
      "completed": 1,
      "failed": 1
    }
  }
];


  
  

  let admin=[{
    "id": 99,
    "email": "admin@example.com",
    "password": "123"
  }
  ];


  


 export const setlocalstorage=()=>{

    localStorage.setItem("employee",JSON.stringify(Employee));

    localStorage.setItem("admin",JSON.stringify(admin))

 }



 export const getlocalstorage=()=>{
  
   let employee = JSON.parse(localStorage.getItem( "employee")) 

    let admin= JSON.parse(localStorage.getItem( "admin"));

    return {employee,admin}
   
 }
 
 import React from 'react'
 
 const LocalStorage = () => {

  localStorage.removeItem("employee");
  localStorage.removeItem("admin");
   
 useEffect(() => {

  setlocalstorage()
  
  const  {employee,admin} = getlocalstorage();

  console.log("Employee data:", employee);
  console.log("Admin data:", admin);

 }, [])
   return (
     <div>LocalStorage</div>
   )
 }
 
 export default LocalStorage

 