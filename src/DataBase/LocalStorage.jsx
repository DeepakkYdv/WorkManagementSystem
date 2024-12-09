

const admins=  [
      {
        "AdminID": 1,
        "Name": "Sarah Parker",
        "Email": "sarah@admin.com",
        "Password": "admin123"
      },
      {
        "AdminID": 2,
        "Name": "Michael Green",
        "Email": "michael@admin.com",
        "Password": "admin456"
      }
    ]

const employees =  [
          {
            "EmployeeID": 1,
            "Name": "John Smith",
            "Email": "john@example.com",
            "Password": "pass123",
            "Title": "Manager",
            "Tasks": [
              {
                "TaskName": "Prepare quarterly report",
                "DueDate": "2024-12-08",
                "Status": "New",
                "Priority": "High"
              },
              {
                "TaskName": "Team meeting preparation",
                "DueDate": "2024-12-10",
                "Status": "Failed",
                "Priority": "Medium"
              },
              {
                "TaskName": "Draft employee handbook",
                "DueDate": "2024-12-12",
                "Status": "New",
                "Priority": "Low"
              },
              {
                "TaskName": "Coordinate with vendors",
                "DueDate": "2024-12-15",
                "Status": "Completed",
                "Priority": "High"
              },
              {
                "TaskName": "Organize company retreat",
                "DueDate": "2024-12-18",
                "Status": "Accepted",
                "Priority": "Medium"
              },
            ]
          },
          {
            "EmployeeID": 2,
            "Name": "Alice Johnson",
            "Email": "alice@example.com",
            "Password": "alice456",
            "Title": "Software Engineer",
            "Tasks": [
              {
                "TaskName": "Submit financial audit",
                "DueDate": "2024-11-30",
                "Status": "Completed",
                "Priority": "High"
              },
              {
                "TaskName": "Finalize project proposal",
                "DueDate": "2024-11-25",
                "Status": "Completed",
                "Priority": "Low"
              },
              {
                "TaskName": "Approve leave applications",
                "DueDate": "2024-11-20",
                "Status": "Completed",
                "Priority": "Medium"
              },
              {
                "TaskName": "Review department budgets",
                "DueDate": "2024-11-18",
                "Status": "Completed",
                "Priority": "High"
              },
              {
                "TaskName": "Inspect office facilities",
                "DueDate": "2024-11-10",
                "Status": "Completed",
                "Priority": "Medium"
              },
              {
                "TaskName": "Approve vendor contracts",
                "DueDate": "2024-12-05",
                "Status": "Accepted",
                "Priority": "High"
              },
            ]
          },
          {
            "EmployeeID": 3,
            "Name": "Bob Brown",
            "Email": "bob@example.com",
            "Password": "bob789",
            "Title": "Designer",
            "Tasks": [
              {
                "TaskName": "Plan marketing campaign",
                "DueDate": "2024-12-07",
                "Status": "Accepted",
                "Priority": "Medium"
              },
              {
                "TaskName": "Oversee system upgrade",
                "DueDate": "2024-12-09",
                "Status": "Accepted",
                "Priority": "Low"
              },
              {
                "TaskName": "Train new employees",
                "DueDate": "2024-12-11",
                "Status": "Accepted",
                "Priority": "Medium"
              },
              {
                "TaskName": "Conduct customer survey",
                "DueDate": "2024-12-13",
                "Status": "Accepted",
                "Priority": "High"
              },
              {
                "TaskName": "Resolve client complaints",
                "DueDate": "2024-12-03",
                "Status": "Failed",
                "Priority": "High"
              },
              {
                "TaskName": "Fix critical system bug",
                "DueDate": "2024-12-01",
                "Status": "Failed",
                "Priority": "High"
              },
              {
                "TaskName": "Recover deleted data",
                "DueDate": "2024-11-28",
                "Status": "Failed",
                "Priority": "Medium"
              },
              {
                "TaskName": "Replace outdated equipment",
                "DueDate": "2024-11-26",
                "Status": "Failed",
                "Priority": "Low"
              },
            ]
          }
        ]

        export const setLocalStorage = () => {
                localStorage.setItem('employee',JSON.stringify(employees));
                localStorage.setItem('admin',JSON.stringify(admins));
        }
    
        export const getLocalStorage = () => {
          // eslint-disable-next-line no-unused-vars
          const data = localStorage.getItem('employee')
          // return data
        }
        
        export const updateData = (task,empId) => {
          employees.map((e)=> {
            
            if(e.EmployeeID===Number(empId)){e.Tasks.push(task)}
            
          })
          setLocalStorage()
       }