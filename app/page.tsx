export default function HomePage() {
  return (
    <main className="container">
      {/* <!-- HOME SECTION --> */}
    <section id="home" className="hero-section">
      <div className="hero-text">
        <h2>Welcome to My Web Portfolio</h2>
        <p>
          This webpage was built as part of Assignment 3 for IT516 — Web Information Systems.
          It demonstrates the use of theme toggle, form validation, back to top button, responsive design,
          and commit in github, Live on vercel.
        </p>
        <a href="#about" className="cta-button">Learn More</a>
      </div>
    </section>

    {/* <!-- ABOUT SECTION --> */}
    <section id="about" className="content-section">
      <h2>About Me</h2>
      <div className="card-grid">
        <div className="card">
          <h3>👩‍🎓 Student</h3>
          <p>
            My name is Devi Nepal. I am currently enrolled in the Web Information Systems
            program, building foundational skills in HTML, CSS, JavaScript, and modern
            development workflows.
          </p>
        </div>
        <div className="card">
          <h3>📚 Course</h3>
          <p>
            IT516 · Web Information Systems<br/>
            Spring 2026 · Online<br/>
            Assignment 2 — Responsive Web Page with HTML, CSS, and Git
          </p>
        </div>
        <div className="card">
          <h3>🎯 Goals</h3>
          <p>
            To develop professional front-end skills and learn how to manage
            web projects effectively using industry-standard tools like Git and GitHub.
          </p>
        </div>
      </div>
    </section>

    {/* <!-- COURSEWORK SECTION --> */}
    <section id="coursework" className="content-section alt-bg">
      <h2>Assignment Skills Practiced</h2>
      <div className="skills-list">
        <div className="skill-item">
          <span className="skill-icon">🏗️</span>
          <div>
            <h3>Semantic HTML</h3>
            <p>Used structural tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;footer&gt;</code> for accessible, well-organized content.</p>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-icon">🎨</span>
          <div>
            <h3>CSS Styling</h3>
            <p>Applied custom fonts, color schemes, spacing, flexbox layout, and visual hierarchy to enhance user experience and readability.</p>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-icon">📱</span>
          <div>
            <h3>Responsive Design</h3>
            <p>Implemented media queries so the layout adapts gracefully for phones, tablets, and desktop screens at various breakpoints.</p>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-icon">🔧</span>
          <div>
            <h3>Git & GitHub</h3>
            <p>Initialized a local Git repository, committed changes with descriptive messages, and pushed the project to GitHub for version control and collaboration.</p>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- CONTACT SECTION --> */}
    <section id="contact" className="content-section">
      <h2>Contact</h2>
      <div className="contact-box">
        <p><strong>Name:</strong> Devi Nepal</p>
        <p><strong>Email:</strong> <a href="mailto:devinepal1976@gmail.com">devinepal1976@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:5629814178">(562) 981-4178</a></p>
        <p><strong>Course:</strong> IT516 · Web Information Systems · Spring 2026</p>
      </div>
    </section>
    </main>
  );
}