import React from 'react';

const CourseCard = ({course}) => {
    const styles = {
        courseCard: {
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        },
        courseCardHover: {
          transform: "translateY(-10px)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
        courseImage: {
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "5px",
          marginBottom: "15px",
        },
        courseTitle: {
          fontSize: "1.5rem",
          marginBottom: "10px",
          color: "#333",
        },
        courseDescription: {
          fontSize: "1rem",
          color: "#666",
          marginBottom: "15px",
        },
        courseMeta: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        },
        courseDifficulty: {
          background: "#6a11cb",
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "0.9rem",
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
        <div 
            style = {styles.courseCard}
            onMouseOver = {(e) => (e.currentTarget.style.transform = styles.courseCardHover.transform)}
            onFocus = {(e) => (e.currentTarget.style.transform = styles.courseCardHover.transform)}
            onMouseOut = {(e) => (e.currentTarget.style.transform = "none")}
            onBlur = {(e) => (e.currentTarget.style.transform = "none")}
        >
            <img src = {course.image} alt = {course.title} style = {styles.courseImage}/>
            <h3 style = {styles.courseTitle}>{course.description}</h3>
            <p style = {styles.courseDescription}>{course.description}</p>
            <div style = {styles.courseMeta}>
                <span style = {styles.courseDifficulty}>{course.difficulty}</span>
            </div>
            <div style = {styles.progressBar}>
                <div 
                    style = {{
                        ...styles.progressFill,
                        width: `${course.progress}%`,
                    }}
                />
            </div>
        </div>
    );
};

export default CourseCard;