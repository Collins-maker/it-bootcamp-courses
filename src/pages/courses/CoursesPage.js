import React from 'react';
import Hero from '../../components/hero/Hero';
import Partners from '../../components/partners/Partners';
import CourseCard from '../../components/coursesCard/CourseCard';
// import course1 from './public/courses/course1.png';
// import course2 from './public/courses/course2.jpg';
// import course3 from './public/courses/course3.jpg'; // Corrected file name

const CoursesPage = () => {
  // Sample data for courses
  const courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Master the fundamentals of web development with HTML, CSS, and JavaScript.',
      duration: '12 weeks',
      price: '$999',
      image: '/courses/course2.jpg'
    },
    {
      id: 2,
      title: 'Web Development Bootcamp',
      description: 'Master the fundamentals of web development with HTML, CSS, and JavaScript.',
      duration: '12 weeks',
      price: '$999',
      image: '/courses/course2.jpg'
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      description: 'Master the fundamentals of web development with HTML, CSS, and JavaScript.',
      duration: '12 weeks',
      price: '$999',
      image: '/courses/course3.jpg'
    },
    // Add more courses as needed
  ];

  return (
    <div className="courses-page">
      <Hero />
      <h1>Our Courses</h1>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Partners />
    </div>
  );
};

export default CoursesPage;
