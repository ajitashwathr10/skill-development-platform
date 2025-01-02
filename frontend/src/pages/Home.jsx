import React from 'react';
import CourseCard from "./CourseDetail";

const Home = () => {
    const featuredCourses = [
        {
            id: 1,
            title: "Introduction to Python",
            description: "Learn the basics of Python programming",
            image: "https://via.placeholder.com/300",
            instructor: "John Doe",
            diffculty: "Beginner",
        },
        {
            id: 2,
            title: "Web Development Fundamentals",
            description: "Learn the fundamentals of web development",
            image: "https://via.placeholder.com/300",
            instructor: "Jane Smith",
            diffculty: "Intermediate",
        },
        {
            id: 3,
            title: "Data Science with Python",
            description: "Learn data science using Python",
            image: "https://via.placeholder.com/300",
            instructor: "John Doe",
            diffculty: "Advanced",
        },
    ];
    const styles = {
        home: {
          fontFamily: "Arial, sans-serif",
          color: "#333",
        },
        hero: {
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          color: "white",
          padding: "100px 20px",
          textAlign: "center",
        },
        heroContent: {
          maxWidth: "800px",
          margin: "0 auto",
        },
        heroTitle: {
          fontSize: "3rem",
          marginBottom: "20px",
        },
        heroSubtitle: {
          fontSize: "1.5rem",
          marginBottom: "40px",
        },
        heroButton: {
          background: "#ff6f61",
          color: "white",
          border: "none",
          padding: "15px 30px",
          fontSize: "1.2rem",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background 0.3s ease",
        },
        heroButtonHover: {
          background: "#ff4a3d",
        },
        featuredCourses: {
          padding: "60px 20px",
          background: "#f9f9f9",
        },
        sectionTitle: {
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "40px",
          color: "#333",
        },
        courseGrid: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        },
    };

    return (
        <div style = {styles.home}>
            <section style = {styles.hero}>
                <div style = {styles.heroContent}>
                    <h1 style = {styles.heroTitle}>Welcome to CodeLab</h1>
                    <p style = {styles.heroSubtitle}>Learn to code by building real projects</p>
                    <button style = {styles.heroButton}>
                        onMouseOver = {(e) => (e.target.style.background = styles.heroButtonHover.background)}
                        onMouseOut = {(e) => (e.target.style.background = styles.heroButton.background)}
                        Get Started
                    </button>
                </div>
            </section>
            <section style = {styles.featuredCourses}>
                <h2 style = {styles.sectionTitle}>Featured Courses</h2>
                <div style = {styles.courseGrid}>
                    {featuredCourses.map((course) => (
                        <CourseCard key = {course.id} course = {course} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;