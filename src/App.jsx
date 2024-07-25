import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header id="#top" className="header">
        <h1>CSS Styling in a React Project with Vite</h1>
      </header>

      <main>
        <section>
          <nav>
            <h3>Contents</h3>
            <li>
              <a href="#what">What is React?</a>
            </li>
            <li>
              <a href="#history">ReactJS History</a>
            </li>
            <li>
              <a href="#why">Why React?</a>
            </li>
            <li>
              <a href="#adv">ReactJS Advantages</a>
            </li>
          </nav>

          <section className="imageReact">
            <img src="data:image/png;base64,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"></img>
          </section>

          <article id="what">
            <h2>What is React?</h2>
            React is a framework that employs Webpack to automatically compile
            React, JSX, and ES6 code while handling CSS file prefixes. React is
            a JavaScript-based UI development library. Although React is a
            library rather than a language, it is widely used in web
            development. The library first appeared in May 2013 and is now one
            of the most commonly used frontend libraries for web development.
            React offers various extensions for entire application architectural
            support, such as Flux and React Native, beyond mere UI.
          </article>

          <article id="history">
            <h2>ReactJS History</h2>
            When compared to other technologies on the market, React is a new
            technology. Jordan Walke, a software engineer at Facebook, founded
            the library in 2011, giving it life. The likes of XHP, a
            straightforward HTML component framework for PHP, have an influence
            on React. React's newsfeed was its debut application in 2011. Later,
            Instagram picks it up and incorporates it into their platform.
          </article>

          <article id="why">
            <h2>Why React?</h2>
            React’s popularity today has eclipsed that of all other front-end
            development frameworks. Here is why: Easy creation of dynamic
            applications: React makes it easier to create dynamic web
            applications because it requires less coding and offers more
            functionality, as opposed to JavaScript, where coding often gets
            complex very quickly. Improved performance: React uses Virtual DOM,
            thereby creating web applications faster. Virtual DOM compares the
            components’ previous states and updates only the items in the Real
            DOM that were changed, instead of updating all of the components
            again, as conventional web applications do. Reusable components:
            Components are the building blocks of any React application, and a
            single app usually consists of multiple components. These components
            have their logic and controls, and they can be reused throughout the
            application, which in turn dramatically reduces the application’s
            development time. Unidirectional data flow: React follows a
            unidirectional data flow. This means that when designing a React
            app, developers often nest child components within parent
            components. Since the data flows in a single direction, it becomes
            easier to debug errors and know where a problem occurs in an
            application at the moment in question. Small learning curve: React
            is easy to learn, as it mostly combines basic HTML and JavaScript
            concepts with some beneficial additions. Still, as is the case with
            other tools and frameworks, you have to spend some time to get a
            proper understanding of React’s library. It can be used for the
            development of both web and mobile apps: We already know that React
            is used for the development of web applications, but that’s not all
            it can do. There is a framework called React Native, derived from
            React itself, that is hugely popular and is used for creating
            beautiful mobile applications. So, in reality, React can be used for
            making both web and mobile applications. Dedicated tools for easy
            debugging: Facebook has released a Chrome extension that can be used
            to debug React applications. This makes the process of debugging
            React web applications faster and easier. The above reasons more
            than justify the popularity of the React library and why it is being
            adopted by a large number of organizations and businesses. Now let’s
            familiarize ourselves with React’s features.
          </article>

          <article id="adv">
            <h2>ReactJS Advantages</h2>
            React.js builds a customized virtual DOM. Because the JavaScript
            virtual DOM is quicker than the conventional DOM, this will enhance
            the performance of apps. ReactJS makes an amazing UI possible.
            Search - engine friendly ReactJS. Modules and valid data make larger
            apps easier to manage by increasing readability. React integrates
            various architectures. React makes the entire scripting environment
            process simpler. It makes advanced maintenance easier and boosts
            output. Guarantees quicker rendering The availability of a script
            for developing mobile apps is the best feature of React. ReactJS is
            supported by a large community.
          </article>
        </section>
      </main>

      <footer>
        This is the footer section of the webpage. Click on{" "}
        <button id="btn">
          <a href="top"> TOP</a>
        </button>{" "}
        to go back to the top of the page.
      </footer>
    </>
  );
}

export default App;
