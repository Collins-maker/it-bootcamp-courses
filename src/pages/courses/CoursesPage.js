import React from 'react';
import Hero from '../../components/hero/Hero';
import Partners from '../../components/partners/Partners';
import CourseCard from '../../components/coursesCard/CourseCard';
import heroCourse from '../../images/heroCourse.jpg'
import './CoursesPage.css';

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
      <Hero
        title="OUR CODING BOOTCAMPS"
        description="The fastest way into the tech industry"
        
        heroImage={heroCourse}
      />
      <h1 id='our-courses'>Our Courses</h1>
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
