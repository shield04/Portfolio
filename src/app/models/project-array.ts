export class Projects{

    project ={
        project1: {
            id: 'portfolio',
            name: 'Portfolio Web',
            description: 'A personal portfolio where I make myself known and use the latest trends in development.',
            category: 'Web Development',
            year: 2022,
            langs: 'Angular, Node.js, Express, jQuery, TypeScript and GSAP'
        },
        project2: {
            id: 'appfiesta',
            name: 'App Fiesta',
            description: 'The application allows the same track to be played synchronously on different devices. It is available for smartphones with IOS and Android operating systems, and is aimed at users who get together with their friends and want to listen to music together. It also allows you to do it remotely. In other words, the music that plays in a meeting in Bogotá may be playing simultaneously in another meeting in Medellín. This allows, for example, hiring a professional DJ remotely to organize the music for a party in another city or country. The app works for small gatherings as well as music festivals with millions of attendees. https://youtu.be/7bqpVv0ewsw',
            category: 'Mobile Development',
            year: 2016,
            langs: 'Ionic 2, Angular, TypeScript, Android, IOS, SASS, Node.JS Cloudant, MongoDB.'
           },
        project3: {
            id: 'wekall',
            name: 'We Kall',
            description: 'WeKall provides you with a robust Contact Center platform, which allows fluid interaction between high-level teams and drives the overcoming of great challenges in the customer experience.',
            category: 'Mobile and Desktop Development',
            year: 2018,
            langs: 'Ionic 5, React, SCSS, AWS'
           },
        project4: {
            id: 'platformweb',
            name: 'Platform for training new staff',
            description: 'Employee training software allows HR teams and people managers to create and assign training and development courses, as well as monitor progress and track completion rates. These tools allow HR teams to standard an overall employee training and development procedure across the entire organization’s employee training methods – from onboarding, managerial development, software training, and more – using a variety of online courses, educational tools, quizzes, interactive content',
            category: 'Web Development',
            year: 2021,
            langs: 'React, NodeJS, Express, Sass, GSAP, MongoDB'
           }
    };

    data= Object.values(this.project);
}