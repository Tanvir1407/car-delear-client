import React from 'react';

const Blogs = () => {
    return (
      <div className="container">
        <div>
          <h3 className="mt-6">1. Difference between javascript and nodejs</h3>
          <div className="mt-4">
            <img
              className="rounded mx-auto d-block"
              src={
                "https://cdn.educba.com/academy/wp-content/uploads/2018/07/Java-Script-vs-Node-JS-1.png"
              }
              alt=""
            />
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Javascript</th>
                  <th scope="col">Node.JS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    It is a programming language. We use JS mainly to write
                    scripts on a website that makes web pages more dynamic in
                    nature.
                  </td>
                  <td>
                    It is a runtime environment for Javascript that lets a user
                    run this programming language on the server-side as well.
                  </td>
                </tr>
                <tr>
                  <td>NodeJS helps us run JS outside the browser as well.</td>
                  <td>We can only run JS on browsers.</td>
                </tr>
                <tr>
                  <td>
                    It lets us use JS on the server-side as well since it works
                    on the server-side.
                  </td>
                  <td>It is utilised on the web page’s client-side.</td>
                </tr>
                <tr>
                  <td>
                    The Node.JS, on the other hand, isn’t capable enough to add
                    various HTML tags.
                  </td>
                  <td>
                    The JS can easily add HTML and even play with the DOM.
                  </td>
                </tr>
                <tr>
                  <td>
                    Inside Node.JS, we have the JS engine known as V8. It helps
                    in parsing and running the JS code.
                  </td>
                  <td>
                    We can run JS in any browser engine, such as the
                    Spidermonkey in the Firefox browser and the JS core in the
                    Safari browser.
                  </td>
                </tr>
                <tr>
                  <td>
                    It runs on the server-side. Thus, it helps in the
                    server-side development via the JS.
                  </td>
                  <td>
                    It runs mainly on the client-side. Thus, it is used in the
                    development of the front end.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="mt-6">
            2.Differences between sql and nosql databases.
          </h3>
          <div className="mt-4">
            <img
              className="rounded mx-auto d-block"
              src={
                "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png"
              }
              alt=""
            />
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">SQL</th>
                  <th scope="col">NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SQL databases are relational</td>
                  <td>NoSQL databases are non-relational</td>
                </tr>
                <tr>
                  <td>
                    SQL databases use structured query language and have a
                    predefined schema
                  </td>
                  <td>
                    NoSQL databases have dynamic schemas for unstructured data.
                  </td>
                </tr>
                <tr>
                  <td>SQL databases are vertically scalable</td>
                  <td>while NoSQL databases are horizontally scalable.</td>
                </tr>
                <tr>
                  <td>SQL databases are table-based</td>
                  <td>
                    NoSQL databases are document, key-value, graph, or
                    wide-column stores
                  </td>
                </tr>
                <tr>
                  <td>SQL databases are better for multi-row transactions</td>
                  <td>
                    NoSQL is better for unstructured data like documents or
                    JSON.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3>3. What is the purpose of jwt and how does it work?</h3>
          <img
            src={
              "https://cdn-images-1.medium.com/fit/t/1600/480/1*AMeiWwTqbLAUe0bvdVTVLA.png"
            }
            alt=""
          />
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
          <p>
            JWTs are mainly used for authentication. After a user signs in to an
            application, the application then assigns JWT to that user.
            Subsequent requests by the user will include the assigned JWT. This
            token tells the server what routes, services, and resources the user
            is allowed to access.
          </p>
        </div>
      </div>
    );
};

export default Blogs;