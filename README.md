<h1>VIDEO DEMO </h1>
file:///C:/Users/lenovo/OneDrive/Desktop/gitvideo/ems.mp4

👨‍💼 Admin Login <br></br>
Email: admin@example.com
 <br></br>
Password: 123


👷 Employee Logins <br></br>
Name	Email	Password <br></br>
Arjun Sharma	arjun@s.com	123 <br></br>
Kavya Menon	kavya.menon@example.com	123 <br></br>
Rahul Verma	rahul.verma@example.com	123 <br></br>
Isha Patel	isha.patel@example.com	123 <br></br>
Ananya Reddy	ananya.reddy@example.com	123 <br></br>



🧑‍💼 Employee Management System (EMS) <br></br>
📌 Overview <br></br>
The Employee Management System (EMS) is a React-based web application that allows an admin (or employer) to manage employee task assignments. Admins can assign tasks only to existing employees, while employees (clients) can log in to view their assigned tasks.

All data is stored in the browser’s local storage, making it lightweight and fast for small team use or prototyping.

✨ Features <br></br>
🔐 Admin <br></br>
Secure login with predefined credentials

Add tasks for existing employees only

View list of all employees and their task statuses

👤 Employee <br></br>
Log in to view assigned tasks

See task details: category, status, completion, and intensity

Filter or review tasks (based on implementation)

🛠️ Tech Stack <br></br>
React – Component-based UI

Tailwind CSS – Utility-first styling

React Router DOM – Routing between Admin/Employee views

React Icons – Beautiful and scalable icons

Local Storage – Data persistence without backend

🚀 Live Demo <br></br>
Access the live version: https://shank0045.github.io/EMS/

📦 Installation <br></br>
To run locally:

bash
Copy
Edit
git clone https://github.com/shank0045/EMS.git
cd EMS
npm install
npm start
Then open http://localhost:3000 in your browser.

📁 Folder Structure <br></br>
bash
Copy
Edit
/src
 ┣ /components        # Reusable UI components
 ┣ /pages             # Admin and Employee dashboard views
 ┣ /data              # Local JSON data for employees/admin
 ┣ App.js             # Main app with routes
 ┣ index.js           # React entry point
 ┗ tailwind.config.js # Tailwind CSS configuration
🧪 Credentials (Default) <br></br>
Admin Login <br></br>
Email: admin@example.com <br></br>
Password: 123 <br></br>

Employee Logins
Predefined in local storage (see employee array)

💾 Data Storage
All data is saved using localStorage

Automatically initialized on first load via useEffect

📝 License
This project is under the MIT License. Feel free to modify and reuse!
