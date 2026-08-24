const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Build a responsive login page using React.",
        taskDate: "2026-06-18",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription: "Connect login page with backend API.",
        taskDate: "2026-06-20",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navbar issue.",
        taskDate: "2026-06-15",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription: "Create dashboard wireframes.",
        taskDate: "2026-06-19",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Develop profile management page.",
        taskDate: "2026-06-14",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Notification System",
        taskDescription: "Implement real-time notifications.",
        taskDate: "2026-06-16",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Add dark mode functionality.",
        taskDate: "2026-06-22",
        category: "Frontend"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure MongoDB database.",
        taskDate: "2026-06-18",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "User Schema",
        taskDescription: "Create schema for user collection.",
        taskDate: "2026-06-13",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate Razorpay payment gateway.",
        taskDate: "2026-06-11",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "JWT Authentication",
        taskDescription: "Implement JWT-based authentication.",
        taskDate: "2026-06-24",
        category: "Security"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing Login Module",
        taskDescription: "Write test cases for login page.",
        taskDate: "2026-06-18",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Verification",
        taskDescription: "Verify fixed dashboard bugs.",
        taskDate: "2026-06-16",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Automation Scripts",
        taskDescription: "Create Selenium automation scripts.",
        taskDate: "2026-06-12",
        category: "Testing"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy application on Vercel.",
        taskDate: "2026-06-20",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure GitHub Actions workflow.",
        taskDate: "2026-06-13",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor server performance metrics.",
        taskDate: "2026-06-14",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Docker Setup",
        taskDescription: "Containerize application using Docker.",
        taskDate: "2026-06-23",
        category: "DevOps"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];

export  const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
     localStorage.setItem('admin', JSON.stringify(admin))
} 
export  const getLocalStorage = () =>{
   const employees= JSON.parse( localStorage.getItem('employees'))
    const admin = JSON.parse( localStorage.getItem('admin'))
   console.log(employees, admin);
} 