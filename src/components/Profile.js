// // src/components/Profile.js
// import React, { useState } from 'react';
// import './Profile.css'; 

// const Profile = () => {
//     const [formData, setFormData] = useState({
//         name: 'Bikash Dahal',
//         email: 'bikash@example.com',
//         role: 'Developer'
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Profile updated successfully!');
//     };

//     return (
//         <div className="profile-container">
//             <div className="sidebar">
//                 <ul>
//                     <li>Pegasus</li>
//                     <li>Home</li>
//                     <li>Calendar</li>
//                     <li>Task Time</li>
//                     <li>Task Graph</li>
//                     <li>New Task List</li>
//                     <li>Profile</li>
//                     <li>Logout</li>
//                 </ul>
//             </div>
//             <div className="profile-content">
//                 <h2>User Profile</h2>
//                 <div className="profile-info">
//                     <h3>Profile Information</h3>
//                     <p><strong>Name: </strong>{formData.name}</p>
//                     <p><strong>Email: </strong>{formData.email}</p>
//                     <p><strong>Role: </strong>{formData.role}</p>
//                 </div>

//                 <div className="profile-update">
//                     <h3>Update Profile</h3>
//                     <form onSubmit={handleSubmit}>
//                         <label>
//                             Name:
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                             />
//                         </label>
//                         <label>
//                             Email:
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             />
//                         </label>
//                         <label>
//                             Role:
//                             <select
//                                 name="role"
//                                 value={formData.role}
//                                 onChange={handleChange}
//                             >
//                                 <option value="Developer">Developer</option>
//                                 <option value="Designer">Designer</option>
//                                 <option value="Manager">Manager</option>
//                             </select>
//                         </label>
//                         <button type="submit">Update Profile</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;







import React, { useState } from 'react';
import './Profile.css'; 

const Profile = () => {
    const [formData, setFormData] = useState({
        name: 'Bikash Dahal',
        email: 'bikash@example.com',
        role: 'Developer'
    });

    const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar items hidden by default

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Profile updated successfully!');
    };

    // Toggle sidebar items visibility
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="profile-container">
            <div className="sidebar">
                <div className="sidebar-header">
                    <span className="pegasus">Pegasus</span>
                    <span className="hamburger" onClick={toggleSidebar}>
                        &#9776; {/* Hamburger icon */}
                    </span>
                </div>
                {/* Sidebar items will be shown/hidden based on sidebarOpen */}
                {sidebarOpen && (
                    <ul>
                        <li>Home</li>
                        <li>Calendar</li>
                        <li>Task Time</li>
                        <li>Task Graph</li>
                        <li>New Task List</li>
                        <li>Profile</li>
                        <li>Logout</li>
                    </ul>
                )}
            </div>

            <div className="profile-content">
                <h2>User Profile</h2>
                <div className="profile-info">
                    <h3>Profile Information</h3>
                    <p><strong>Name: </strong>{formData.name}</p>
                    <p><strong>Email: </strong>{formData.email}</p>
                    <p><strong>Role: </strong>{formData.role}</p>
                </div>

                <div className="profile-update">
                    <h3>Update Profile</h3>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Role:
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </label>
                        <button type="submit">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
