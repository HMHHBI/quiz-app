// js/questions.js
export const quizData = {
  "HMH Quiz App": [
    {
      question: "Which tag is used to define the largest heading in HTML?",
      options: ["<h3>", "<h1>", "<head>", "<header>"],
      answer: 1,
    },
    {
      question: "Which attribute specifies an alternate text for an image?",
      options: ["title", "src", "alt", "text"],
      answer: 2,
    },
    {
      question: "How do you insert a comment in CSS?",
      options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
      answer: 2,
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "font-size", "text-style", "text-size"],
      answer: 1,
    },
    {
      question: "How do you write a function in JavaScript?",
      options: [
        "function = myFunction()",
        "def myFunction()",
        "function myFunction()",
        "create myFunction()",
      ],
      answer: 2,
    },
    {
      question: "How do you call a function named 'test'?",
      options: ["test();", "call test;", "call function test();", "Call test();"],
      answer: 0,
    },
    {
      question: "Every React component must return:",
      options: ["A string", "An array", "A single React element", "Nothing"],
      answer: 2,
    },
    {
      question: "What hook is used for side effects?",
      options: ["useProp", "useState", "useEffect", "useSide"],
      answer: 2,
    },
    {
      question: "What does the fs module handle?",
      options: [
        "Network requests",
        "File system operations",
        "Database connections",
        "Authentication",
      ],
      answer: 1,
    },
    {
      question: "Node.js is mainly used for:",
      options: [
        "Designing webpages",
        "Building server-side applications",
        "Creating mobile apps",
        "Styling pages",
      ],
      answer: 1,
    },
  ],

  HTML: [
    {
      question: "Which tag is used to define the largest heading in HTML?",
      options: ["<h3>", "<h1>", "<head>", "<header>"],
      answer: 1,
    },
    {
      question: "Which attribute specifies an alternate text for an image?",
      options: ["title", "src", "alt", "text"],
      answer: 2,
    },
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Machine Language",
        "Hyper Tool Markup Language",
        "HyperText Markup Language",
        "Hyper Transfer Markup Language",
      ],
      answer: 2,
    },
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: 1,
    },
    {
      question: "Which tag is used to display a numbered list?",
      options: ["<ul>", "<dl>", "<ol>", "<list>"],
      answer: 2,
    },
    {
      question: "Which tag inserts a line break?",
      options: ["<br>", "<lb>", "<break>", "<newline>"],
      answer: 0,
    },
    {
      question: "How do you set a background color in HTML?",
      options: [
        "<background>",
        "<body bg='color'>",
        "<bgcolor>",
        "Use CSS style attribute",
      ],
      answer: 3,
    },
    {
      question: "What is the correct HTML element for the title of a document?",
      options: ["<meta>", "<title>", "<head>", "<header>"],
      answer: 1,
    },
    {
      question: "Which HTML tag defines emphasized text?",
      options: ["<i>", "<em>", "<strong>", "<b>"],
      answer: 1,
    },
    {
      question: "Which HTML tag is used for a table row?",
      options: ["<td>", "<th>", "<tr>", "<table>"],
      answer: 2,
    },
  ],

  CSS: [
    {
      question: "What does CSS stand for?",
      options: [
        "Colorful Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
      ],
      answer: 3,
    },
    {
      question: "Which property is used to change the background color?",
      options: ["bgcolor", "background-color", "color", "bg-color"],
      answer: 1,
    },
    {
      question: "How do you insert a comment in CSS?",
      options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
      answer: 2,
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "font-size", "text-style", "text-size"],
      answer: 1,
    },
    {
      question: "Which is the correct CSS syntax?",
      options: [
        "{body;color:black;}",
        "body:color=black;",
        "body { color: black; }",
        "body = {color: black;}",
      ],
      answer: 2,
    },
    {
      question: "How do you make text bold in CSS?",
      options: [
        "text-decoration: bold;",
        "font-weight: bold;",
        "font-style: bold;",
        "style: bold;",
      ],
      answer: 1,
    },
    {
      question: "Which property is used to change text color?",
      options: ["fgcolor", "text-color", "color", "font-color"],
      answer: 2,
    },
    {
      question: "How do you select an element with id 'header'?",
      options: [".header", "header", "#header", "*header*"],
      answer: 2,
    },
    {
      question: "Which CSS property changes the left margin of an element?",
      options: ["padding-left", "indent", "margin-left", "space-left"],
      answer: 2,
    },
    {
      question: "Which value of position makes an element stay fixed on screen?",
      options: ["relative", "static", "absolute", "fixed"],
      answer: 3,
    },
  ],

  JS: [
    {
      question: "Inside which HTML element do we put JavaScript?",
      options: ["<js>", "<javascript>", "<code>", "<script>"],
      answer: 3,
    },
    {
      question: "Which keyword declares a variable?",
      options: ["var", "let", "const", "All of the above"],
      answer: 3,
    },
    {
      question: "What is the correct syntax to output 'Hello World' in an alert box?",
      options: [
        "msg('Hello World');",
        "alert('Hello World');",
        "alertBox('Hello World');",
        "msgBox('Hello World');",
      ],
      answer: 1,
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["-", "x", "=", "*"],
      answer: 2,
    },
    {
      question: "How do you write a function in JavaScript?",
      options: [
        "function = myFunction()",
        "def myFunction()",
        "function myFunction()",
        "create myFunction()",
      ],
      answer: 2,
    },
    {
      question: "How do you call a function named 'test'?",
      options: ["test();", "call test;", "call function test();", "Call test();"],
      answer: 0,
    },
    {
      question: "How do you write an IF statement in JavaScript?",
      options: ["if i = 5", "if (i == 5)", "if i == 5 then", "if (i = 5)"],
      answer: 1,
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["Undefined", "Number", "Float", "Boolean"],
      answer: 2,
    },
    {
      question: "How do you add a comment in JavaScript?",
      options: ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
      answer: 1,
    },
    {
      question: "What will typeof [] return?",
      options: ["array", "object", "list", "undefined"],
      answer: 1,
    },
  ],

  React: [
    {
      question: "React is mainly used for building what?",
      options: ["Databases", "Connectivity", "User interfaces", "Server-side logic"],
      answer: 2,
    },
    {
      question: "What is JSX?",
      options: [
        "A database",
        "A CSS framework",
        "A syntax extension for JavaScript",
        "A React hook",
      ],
      answer: 2,
    },
    {
      question: "Which method is used to create components?",
      options: [
        "React.createComponent()",
        "React.Component or function component",
        "React.makeComponent()",
        "Create.ReactComponent()",
      ],
      answer: 1,
    },
    {
      question: "What is used to pass data to a component from outside?",
      options: ["State", "Props", "Render", "Methods"],
      answer: 1,
    },
    {
      question: "What does the useState hook do?",
      options: [
        "Manages state in functional components",
        "Updates props",
        "Renders components",
        "Connects APIs",
      ],
      answer: 0,
    },
    {
      question: "What is used to render React elements to the DOM?",
      options: [
        "ReactDOM.render()",
        "React.renderDOM()",
        "renderDOM()",
        "createDOM()",
      ],
      answer: 0,
    },
    {
      question: "Every React component must return:",
      options: ["A string", "An array", "A single React element", "Nothing"],
      answer: 2,
    },
    {
      question: "What hook is used for side effects?",
      options: ["useProp", "useState", "useEffect", "useSide"],
      answer: 2,
    },
    {
      question: "What is the default port for React dev server?",
      options: ["8080", "3000", "5000", "8000"],
      answer: 1,
    },
    {
      question: "React component names must start with:",
      options: ["Lowercase letter", "Uppercase letter", "Underscore", "Number"],
      answer: 1,
    },
  ],

  NodeJS: [
    {
      question: "Node.js is built on which engine?",
      options: ["SpiderMonkey", "Chakra", "V8 JavaScript Engine", "Nitro"],
      answer: 2,
    },
    {
      question: "What type of language is Node.js?",
      options: ["Multi-threaded", "Single-threaded", "Two-threaded", "None"],
      answer: 1,
    },
    {
      question: "Which command initializes a Node project?",
      options: ["node install", "npm init", "npm install", "node start"],
      answer: 1,
    },
    {
      question: "What file is used to manage project dependencies?",
      options: ["node.txt", "config.json", "package.json", "index.js"],
      answer: 2,
    },
    {
      question: "How do you import a module in Node.js (CommonJS)?",
      options: [
        "import 'fs';",
        "const fs = require('fs');",
        "include 'fs';",
        "load 'fs';",
      ],
      answer: 1,
    },
    {
      question: "Which of these is a built-in Node.js module?",
      options: ["request", "axios", "http", "express"],
      answer: 2,
    },
    {
      question: "Which function is used to write to the console?",
      options: ["write()", "console.log()", "log.write()", "print()"],
      answer: 1,
    },
    {
      question: "Which command installs a package globally?",
      options: [
        "npm install pkg",
        "npm install -g pkg",
        "npm global install pkg",
        "install pkg",
      ],
      answer: 1,
    },
    {
      question: "What does the fs module handle?",
      options: [
        "Network requests",
        "File system operations",
        "Database connections",
        "Authentication",
      ],
      answer: 1,
    },
    {
      question: "Node.js is mainly used for:",
      options: [
        "Designing webpages",
        "Building server-side applications",
        "Creating mobile apps",
        "Styling pages",
      ],
      answer: 1,
    },
  ],
};