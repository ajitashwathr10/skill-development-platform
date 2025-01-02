import React from 'react';

const CourseDetail = () => {
    const course = {
        id: 1,
        title: "Introduction to Python",
        description: 
            "Learn the basics of Python programming, including syntax, data structures, and algorithms.",
        instructor: "John Doe",
        difficulty: "Beginner",
        progress: 25,
        lessons: [
            {id: 1, title: "Introduction to Python", duration: "10:00"},
            {id: 2, title: "Variables and Data Types", duration: "12:00"},
            {id: 3, title: "Control Structures", duration: "20:00"},
            {id: 4, title: "Functions and Modules", duration: "28:00"},
        ],
    };

    const styles = {
        courseDetail: {
          padding: "40px",
          fontFamily: "Arial, sans-serif",
          color: "#333",
        },
        courseHeader: {
          marginBottom: "20px",
        },
        courseTitle: {
          fontSize: "2rem",
          marginBottom: "10px",
        },
        courseMeta: {
          fontSize: "1rem",
          color: "#666",
          marginBottom: "20px",
        },
        courseDescription: {
          fontSize: "1.2rem",
          marginBottom: "40px",
        },
        progressBar: {
          width: "100%",
          height: "10px",
          background: "#f0f0f0",
          borderRadius: "5px",
          overflow: "hidden",
          marginBottom: "40px",
        },
        progressFill: {
          height: "100%",
          background: "#6a11cb",
          borderRadius: "5px",
        },
        lessonsTitle: {
          fontSize: "1.5rem",
          marginBottom: "20px",
        },
        lessonList: {
          display: "grid",
          gap: "10px",
        },
        lessonCard: {
          background: "white",
          padding: "15px",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        lessonTitle: {
          fontSize: "1rem",
        },
        lessonDuration: {
          fontSize: "0.9rem",
          color: "#666",
        },
    };

    return (
        <div style = {styles.courseDetail}>
            <div style = {styles.courseHeader}>
                <h1 style = {styles.courseTitle}>{course.title}</h1>
                <p style = {styles.courseMeta}>
                    Instructor: {course.instructor} | Difficulty: {course.difficulty}
                </p>
        </div>
        <p style = {styles.courseDescription}>{course.description}</p>
        <div style = {styles.progressBar}>
            <div
                style = {{
                    ...styles.progressFill,
                    width: `${course.progress}%`,
                }}
            />
        </div>
        <section>
            <h2 style = {styles.lessonsTitle}>Lessons</h2>
            <div style = {styles.lessonList}>
                {course.lessons.map((lesson) => (
                    <div key={lesson.id} style={styles.lessonCard}>
                        <span style={styles.lessonTitle}>{lesson.title}</span>
                        <span style={styles.lessonDuration}>{lesson.duration}</span>
                    </div>
                ))}
            </div>
        </section>
        </div>
    );
};

export default CourseDetail;