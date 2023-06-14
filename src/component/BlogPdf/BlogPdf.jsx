
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const BlogPdf = () => {
    const styles = StyleSheet.create({
        page: {
          fontFamily: "Helvetica",
          paddingTop: 35,
          paddingLeft: 35,
          paddingRight: 35,
          paddingBottom: 65,
        },
        title: {
          fontSize: 24,
          marginBottom: 10,
          textAlign: "center",
          fontWeight: "bold",
        },
        section: {
          marginBottom: 10,
        },
        content: {
          fontSize: 12,
          textAlign: "justify",
        },
      });
    return (
        <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.title}>Questions & Answer</Text>
          <View style={styles.section}>
            <Text style={styles.content}>
              Uncontrolled components: In uncontrolled components, the form data is managed by the DOM itself, rather than
              by React. The state of the form elements is directly accessed through references to the DOM elements, such as
              ref in React. This approach is useful for simple forms where you don't need to perform validation or track
              changes in real-time.
            </Text>
            <Text style={styles.content}>
              Controlled components: In controlled components, the form data is managed by React state. The state variables
              are used to control the values of the form elements, and React handles the updates and synchronization of the
              form data. Controlled components are preferred when you need more control over form validation, handling form
              submissions, or performing dynamic interactions based on user input.
            </Text>
          </View>
  
          <Text style={styles.title}>How to validate React props using PropTypes</Text>
          <View style={styles.section}>
            <Text style={styles.content}>
              PropTypes is a package that provides runtime type-checking for React props. To validate React props using
              PropTypes, you need to follow these steps:
            </Text>
            <Text style={styles.content}>1. Install the prop-types package: npm install prop-types</Text>
            <Text style={styles.content}>
              2. Import PropTypes in your component: import PropTypes from 'prop-types'
            </Text>
            <Text style={styles.content}>
              3. PropTypes offers a variety of validators for different types, such as string, number, array, object, func,
              and more. You can also specify if a prop is required using .isRequired.
            </Text>
          </View>
  
          <Text style={styles.title}>Tell us the difference between Node.js and Express.js</Text>
          <View style={styles.section}>
            <Text style={styles.content}>
              Node.js: Node.js is a runtime environment that allows you to execute JavaScript code on the server-side. It
              provides a runtime for executing JavaScript outside of a web browser, enabling you to build server-side
              applications. Node.js uses an event-driven, non-blocking I/O model, which makes it efficient and suitable for
              building scalable network applications.
            </Text>
            <Text style={styles.content}>
              Express.js: Express.js is a web application framework built on top of Node.js. It provides a set of features
              and abstractions to make building web applications easier and more organized. Express.js helps with tasks
              like routing, handling HTTP requests and responses, managing middleware, and more. It provides a simple and
              intuitive API for building web servers and RESTful APIs.
            </Text>
          </View>
  
          <Text style={styles.title}>What is a custom hook, and why would you create a custom hook?</Text>
          <View style={styles.section}>
            <Text style={styles.content}>
              Custom hook: A custom hook is a JavaScript function that starts with the use prefix and utilizes the built-in
              React hooks or other custom hooks. Custom hooks allow you to reuse stateful logic between components, making
              it easier to share functionality across your application.
            </Text>
            <Text style={styles.content}>
              Purpose of custom hooks: You would create a custom hook to encapsulate and share common logic or stateful
              behavior between multiple components. Custom hooks help in avoiding code duplication, improving reusability,
              and keeping your codebase clean and maintainable. They enable you to abstract away complex logic into reusable
              functions that can be easily consumed by different components.
            </Text>
          </View>
        </Page>
      </Document>
    );
};

export default BlogPdf;