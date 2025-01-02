import React from "react";

const Dashboard = () => {
    const enrolledCourses = [
        {
            id: 1,
            title: "Introduction to Python",
            progress: 25,
        },
        {
            id: 2,
            title: "Web Development Fundamentals",
            progress: 50,
        },
        {
            id: 3,
            title: "Data Science with Python",
            progress: 75,
        },
    ];

    const styles = {
        dashboard: {
          padding: "40px",
          fontFamily: "Arial, sans-serif",
          color: "#333",
        },
        welcomeMessage: {
          fontSize: "2rem",
          marginBottom: "20px",
        },
        sectionTitle: {
          fontSize: "1.5rem",
          marginBottom: "20px",
        },
        courseList: {
          display: "grid",
          gap: "20px",
        },
        courseCard: {
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
        courseTitle: {
          fontSize: "1.2rem",
          marginBottom: "10px",
        },
        progressBar: {
          width: "100%",
          height: "10px",
          background: "#f0f0f0",
          borderRadius: "5px",
          overflow: "hidden",
        },
        progressFill: {
          height: "100%",
          background: "#6a11cb",
          borderRadius: "5px",
        },
    };

    return (
        <div style = {styles.dashboard}>
            <h1 style = {styles.welcomeMessage}>Welcome, User!</h1>
            <section>
                <h2 style = {styles.sectionTitle}>
                    Your Enrolled Courses
                </h2>
                <div style = {styles.courseList}>
                    {enrolledCourses.map((course) => (
                        <div key = {course.id} style = {styles.courseCard}>
                            <h3 style = {styles.courseTitle}>{course.title}</h3>
                            <div style = {styles.progressBar}>
                                <div
                                    style = {{
                                        ...styles.progressFill,
                                        width: `${course.progress}%`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;