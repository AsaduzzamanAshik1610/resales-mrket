import React from 'react';

const Blog = () => {
    return (
        <div className='m-5 bg-black'>
          <h1 className=' text-white'>1.What are the different ways to manage a state in a React application?</h1> 
          <p className='text-white m-5 p-5'>Beau Carnes. React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose.In this guide, we will uncover the several kinds of state in your.</p>
         <h1 className='text-white'>2.How does prototypical inheritance work?</h1>
         <p className='text-white m-5 p-5'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype</p>
         <h1 className='text-white'>3.What is a unit test? Why should we write unit tests?</h1>
         <p className='text-white m-5 p-5'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.This testing methodology is done during. </p>
         <h1 className='text-white'>4.React vs. Angular vs. Vue?</h1>
         <p className='text-white m-5 p-5'>There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.They can be used almost interchangeably to build front-end applications, but theyre not 100 percent the same, so it makes sense to compare them and understand their differences.Each framework is component-based and allows the rapid creation of UI features.However, they all have a different structure and architecture — so first, well look into their architectural differences to understand the philosophy behind them.</p>
        </div>

    );
};

export default Blog;