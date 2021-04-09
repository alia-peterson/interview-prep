const questions = [
  {
    id: 1,
    q: 'In as much detail as possible, explain how you would localize an application.'
  },
  {
    id: 2,
    q: 'Tell me two advantages of testing your code.'
  },
  {
    id: 3,
    q: 'Name three strategies for fixing cross-browser inconsistencies.'
  },
  {
    id: 4,
    q: 'What are some tools and strategies you use to prevent shipping unstable code to production?'
  },
  {
    id: 5,
    q: 'What factors influence whether you’ll take a progressive enhancement vs. graceful degradation approach to building an application?'
  },
  {
    id: 6,
    q: 'Define the term ‘MVC’ and explain how an application is architected when following MVC patterns.'
  },
  {
    id: 7,
    q: 'What does CORS stand for and what issue does it address?'
  },
  {
    id: 8,
    q: 'In as much detail as possible, describe the request-response cycle.'
  },
  {
    id: 9,
    q: 'Tell me 3 new features of CSS3.'
  },
  {
    id: 10,
    q: 'Can you describe what responsive design is to you and how you would implement it?'
  },
  {
    id: 11,
    q: 'What’s the difference between display: inline and display: inline-block?'
  },
  {
    id: 12,
    q: 'What is a pseudo class? What are they used for?'
  },
  {
    id: 13,
    q: 'Describe z-index and how stacking context is formed.'
  },
  {
    id: 14,
    q: 'If you have two elements inside of an outer containing element, one with float: left; and the other with float: right, how can you ensure that the containing element expands around the floated elements and does not collapse?'
  },
  {
    id: 15,
    q: 'Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?'
  },
  {
    id: 16,
    q: 'What does event bubbling or event propagation mean?'
  },
  {
    id: 17,
    q: 'What’s the difference between <code class="language-plaintext highlighter-rouge">undefined</code> and <code class="language-plaintext highlighter-rouge">null</code>'
  },
  {
    id: 18,
    q: 'In as much detail as possible, explain how JSON Web Tokens work.'
  },
  {
    id: 19,
    q: 'What is Ajax?'
  },
  {
    id: 20,
    q: 'What is <code class="language-plaintext highlighter-rouge">"use strict";</code>? What are the advantages and disadvantages to using it?'
  },
  {
    id: 21,
    q: 'Explain why the following doesn’t work as an IIFE: <code class="language-plaintext highlighter-rouge">function foo(){ }();</code>. What needs to be changed to properly make it an IIFE? Why?'
  },
  {
    id: 22,
    q: 'What are the pros and cons of using Promises instead of callbacks?'
  },
  {
    id: 23,
    q: 'What is a closure, and how/why would you use one?'
  },
  {
    id: 24,
    q: 'What advantages does React offer? What about disadvantages?'
  },
  {
    id: 25,
    q: 'Why is it generally a good idea to position CSS <code class="language-plaintext highlighter-rouge">&lt;link&gt;</code>s between <code class="language-plaintext highlighter-rouge">&lt;head&gt;&lt;/head&gt;</code> and JS <code class="language-plaintext highlighter-rouge">&lt;script&gt;</code>s just before <code class="language-plaintext highlighter-rouge">&lt;/body&gt;</code>? Do you know any exceptions?'
  },
  {
    id: 26,
    q: 'In an HTML file, what does the ‘doctype’ keyword do?'
  },
  {
    id: 27,
    q: 'Give an example of a self-closing HTML tag.'
  },
  {
    id: 28,
    q: 'What’s the difference between <code class="language-plaintext highlighter-rouge">window.onload</code> and <code class="language-plaintext highlighter-rouge">onDocumentReady</code>'
  },
  {
    id: 29,
    q: 'Give an example of an element that is considered a ‘block-level’ element? An example of an inline element? What’s the difference between block-level and inline elements?'
  },
  {
    id: 30,
    q: 'What could we use instead of <code class="language-plaintext highlighter-rouge">&lt;b&gt;</code> tags for bold and <code class="language-plaintext highlighter-rouge">&lt;i&gt;</code> tags for italics to make our HTML more semantic?'
  },
  {
    id: 31,
    q: 'What is the purpose of article, section, header and footer tags? Please explain with an example and why we should not use divs.'
  },
  {
    id: 32,
    q: 'What are HTML data attributes?'
  },
  {
    id: 33,
    q: 'What is the event loop?'
  },
  {
    id: 34,
    q: 'What are some popular NodeJS Modules?'
  },
  {
    id: 35,
    q: 'What is the concept of state in React?'
  },
  {
    id: 36,
    q: 'What is the virtual DOM in React?'
  },
  {
    id: 37,
    q: 'How is an array different from an object?'
  },
  {
    id: 38,
    q: 'What is the DOM? How is the virtual dom different?'
  },
  {
    id: 39,
    q: 'What does npm eject do?'
  },
  {
    id: 40,
    q: 'What does npm build do?'
  },
  {
    id: 41,
    q: 'How do you make sure your project meets the requirements you have received?'
  },
  {
    id: 42,
    q: 'What IDE do you use?'
  },
  {
    id: 43,
    q: 'How does json work?'
  },
  {
    id: 44,
    q: 'What is a restful api?'
  },
  {
    id: 45,
    q: 'What is a react component?'
  },
  {
    id: 46,
    q: 'Whats the difference between map state to props and map dispatch to props?'
  },
  {
    id: 47,
    q: 'What problems does redux solve?'
  },
  {
    id: 48,
    q: 'What are libraries you have used?'
  },
  {
    id: 49,
    q: 'What are frameworks you have used?'
  },
  {
    id: 50,
    q: 'How are props different from state?'
  },
  {
    id: 51,
    q: 'Do you know the concept of SCRUM?'
  },
  {
    id: 52,
    q: 'What is JSX?'
  },
  {
    id: 53,
    q: 'How is JSX different from HTML?'
  },
  {
    id: 54,
    q: 'Explain how a branch works'
  },
  {
    id: 55,
    q: 'What can you tell me about Rest APIs?'
  },
  {
    id: 56,
    q: 'Do you know what a bearer token is in terms of JWT?'
  },
  {
    id: 57,
    q: 'What is CORS?'
  },
  {
    id: 58,
    q: 'Whats the difference between ES5 and ES6?'
  },
  {
    id: 59,
    q: 'What method was you use to search an array and return a value?'
  },
  {
    id: 60,
    q: 'How would you find all the values for a specific key in an array of objects?'
  },
  {
    id: 61,
    q: 'How do you interact with APIs on the front end?'
  },
  {
    id: 62,
    q: 'Whats the difference between an HTTP request and response?'
  },
  {
    id: 63,
    q: 'What does a 200 status code mean?'
  },
  {
    id: 64,
    q: 'What does a 400 status code mean?'
  },
  {
    id: 65,
    q: 'What is chaining in javascript?'
  },
  {
    id: 66,
    q: 'How do you stay up-to-date on JS and React news/improvements?'
  },
  {
    id: 67,
    q: 'Why use cookies?'
  },
  {
    id: 68,
    q: 'Have you used local storage?'
  },
  {
    id: 69,
    q: 'Whats the difference between let and const?'
  },
  {
    id: 70,
    q: 'Whats your experience with React Hooks? Why use them?'
  }
]

export default questions
