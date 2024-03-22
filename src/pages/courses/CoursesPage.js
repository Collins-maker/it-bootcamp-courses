// CoursesPage.js
import React, { useState } from 'react';
import Filter from '../../components/filter/Filter';
import Sort from '../../components/sort/Sort';
import Pagination from '../../components/pagination/Pagination';
import CourseCard from '../../components/coursesCard/CourseCard'; 

const CoursesPage = () => {
  // Sample course data (replace with actual data from your backend or API)
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Learn full-stack web development with HTML, CSS, JavaScript, React, Node.js, and more.',
      imageSrc: '/images/course1.jpg',
      duration: '12 weeks',
      price: '$2000'
    },
    // Add more course objects as needed
  ]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3; // Change this value as needed
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Filter and Sort functions (add your logic here)

  return (
    <div className="courses-page">
      <div className="courses-page-content">
        <h1>Our Courses</h1>
        <div className="filters">
          <Filter />
          <Sort />
        </div>
        <div className="course-list">
          {courses
            .slice((currentPage - 1) * coursesPerPage, currentPage * coursesPerPage)
            .map(course => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                imageSrc={course.imageSrc}
              />
            ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CoursesPage;
