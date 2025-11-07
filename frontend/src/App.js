import { useState, useEffect, useRef } from 'react';
import '@/App.css';
import { BookOpen, Users, Globe, Video, GraduationCap, Award, Mail, Phone, MapPin, ChevronRight, Laptop, Shield, Cloud, Database, Code, Server, Smartphone, LineChart, Cpu, Network, Lock, CheckCircle, Sun, Moon } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const GOOGLE_FORM_LINK = 'https://forms.google.com/your-form-link';

const courses = [
  { name: 'Guidewire', icon: Server, color: 'from-blue-500 to-cyan-500' },
  { name: 'RPA', icon: Cpu, color: 'from-purple-500 to-pink-500' },
  { name: 'DevOps', icon: Code, color: 'from-orange-500 to-red-500' },
  { name: 'Artificial Intelligence', icon: Cpu, color: 'from-indigo-500 to-purple-500' },
  { name: 'Azure', icon: Cloud, color: 'from-blue-600 to-blue-400' },
  { name: 'CompTIA', icon: Award, color: 'from-green-500 to-teal-500' },
  { name: 'Computer Programming', icon: Code, color: 'from-yellow-500 to-orange-500' },
  { name: 'Splunk', icon: LineChart, color: 'from-green-600 to-green-400' },
  { name: 'Spring', icon: Server, color: 'from-green-500 to-emerald-500' },
  { name: 'Cloud Computing', icon: Cloud, color: 'from-sky-500 to-blue-500' },
  { name: 'Veeam', icon: Database, color: 'from-green-600 to-lime-500' },
  { name: 'VMware', icon: Server, color: 'from-blue-700 to-indigo-500' },
  { name: 'Mobile App Development', icon: Smartphone, color: 'from-pink-500 to-rose-500' },
  { name: 'Oracle', icon: Database, color: 'from-red-600 to-orange-500' },
  { name: 'HR Analytics', icon: LineChart, color: 'from-purple-500 to-indigo-500' },
  { name: 'MuleSoft', icon: Network, color: 'from-teal-500 to-cyan-500' },
  { name: 'IoT', icon: Cpu, color: 'from-blue-500 to-purple-500' },
  { name: 'PRINCE2', icon: Award, color: 'from-indigo-600 to-blue-500' },
  { name: 'BDD', icon: Code, color: 'from-green-500 to-teal-600' },
  { name: 'WSO2', icon: Server, color: 'from-orange-600 to-red-500' },
  { name: 'SAP', icon: Database, color: 'from-blue-600 to-indigo-600' },
  { name: 'Tableau', icon: LineChart, color: 'from-orange-500 to-amber-500' },
  { name: 'Data Science', icon: Database, color: 'from-cyan-500 to-blue-600' },
  { name: 'Cyber Security', icon: Shield, color: 'from-red-500 to-pink-500' },
  { name: 'PMP', icon: Award, color: 'from-blue-500 to-indigo-500' },
  { name: 'Telecom Training', icon: Network, color: 'from-purple-500 to-pink-500' },
  { name: 'Software Testing', icon: CheckCircle, color: 'from-green-500 to-emerald-600' },
  { name: 'SQL Server', icon: Database, color: 'from-red-600 to-orange-600' },
  { name: 'Six Sigma', icon: Award, color: 'from-yellow-500 to-orange-500' },
  { name: 'TIBCO', icon: Network, color: 'from-purple-600 to-indigo-500' },
  { name: 'AWS', icon: Cloud, color: 'from-orange-500 to-yellow-500' },
  { name: 'Citrix', icon: Server, color: 'from-green-600 to-teal-500' },
];

const trainingOptions = [
  {
    title: 'On-Premise Classroom Training',
    description: 'Interactive, hands-on learning in state-of-the-art facilities with expert instructors.',
    details: 'Experience immersive learning in our modern training facilities equipped with the latest technology. Our on-premise classroom training offers face-to-face interaction with industry experts, collaborative learning environments, and immediate hands-on practice. Perfect for those who thrive in structured, in-person learning settings with direct access to instructors and networking opportunities with peers.',
    icon: Users,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Self-Paced Online Training',
    description: 'Learn at your own pace with 24/7 access to comprehensive course materials and resources.',
    details: 'Our self-paced online training provides the ultimate flexibility for busy professionals. Access comprehensive video lectures, interactive modules, downloadable resources, and practice labs anytime, anywhere. Study at your own speed, revisit materials as needed, and balance your learning with work and personal commitments. Includes lifetime access to course materials and updates.',
    icon: Laptop,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Blended Training',
    description: 'The perfect combination of online flexibility and in-person interaction for optimal learning.',
    details: 'Get the best of both worlds with our blended training approach. Combine the convenience of online learning with the engagement of classroom sessions. Start with self-paced online modules to build foundational knowledge, then attend scheduled in-person workshops for advanced topics, hands-on labs, and collaborative projects. This hybrid model maximizes learning effectiveness while providing schedule flexibility.',
    icon: Globe,
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Instructor-Led Live Online',
    description: 'Real-time virtual training with live instructors, interactive sessions, and peer collaboration.',
    details: 'Join live, interactive virtual classrooms led by experienced instructors in real-time. Participate in live Q&A sessions, group discussions, collaborative exercises, and hands-on labs—all from the comfort of your home or office. Benefit from scheduled structure and accountability while enjoying the convenience of remote learning. Includes session recordings for review and catch-up.',
    icon: Video,
    gradient: 'from-orange-500 to-red-500'
  },
];

const AnimatedSection = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
};

const TypeWriter = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[textIndex];
      
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return <span className="text-gradient">{displayText}<span className="animate-pulse">|</span></span>;
};

function App() {
  const [showTrainingDetails, setShowTrainingDetails] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleCourseClick = (courseName) => {
    window.open(GOOGLE_FORM_LINK, '_blank');
  };

  return (
    <div className="App">
      {/* Theme Toggle Button */}
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        data-testid="theme-toggle-btn"
        aria-label="Toggle theme"
      >
        {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="logo-container" data-testid="logo-container">
              <img src="./AVV.png" alt="avv logo" className="avv-logo" />
          </div>
          <h1 className="hero-title" data-testid="main-title">
            AVV Aspire Solutions
          </h1>
          <div className="hero-subtitle">
            <TypeWriter texts={['Transform Your Career', 'Master New Skills', 'Get Certified', 'Lead the Future']} />
          </div>
          <p className="hero-description">
            Premier training institute offering world-class certification programs in technology, management, and professional development
          </p>
          <button 
            className="cta-button"
            data-testid="explore-courses-btn"
            onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Courses <ChevronRight className="inline" size={20} />
          </button>
        </div>
      </section>

      {/* Training Options */}
      <section className="section" data-testid="training-options-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Training Options</h2>
            <p className="section-subtitle">Choose the learning style that fits your schedule and goals</p>
          </AnimatedSection>
          
          <div className="training-grid-2x2">
            {trainingOptions.map((option, index) => (
              <AnimatedSection key={index}>
                <div 
                  className="training-card"
                  data-testid={`training-option-${index}`}
                >
                  <div className={`icon-wrapper bg-gradient-to-br ${option.gradient}`}>
                    <option.icon size={32} className="text-white" />
                  </div>
                  <h3 className="card-title">{option.title}</h3>
                  <p className="card-description">{option.description}</p>
                  <div className="card-footer">
                    <span 
                      className="learn-more"
                      onClick={() => setShowTrainingDetails(showTrainingDetails === index ? null : index)}
                    >
                      Learn More <ChevronRight size={16} className="inline" style={{ transform: showTrainingDetails === index ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                    </span>
                  </div>
                  {showTrainingDetails === index && (
                    <div className="training-details" data-testid={`training-details-${index}`}>
                      <p>{option.details}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Graduate Programs */}
      <section className="section section-alt" data-testid="postgrad-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Enroll. Learn. Get Certified.</h2>
            <p className="section-subtitle">Post-Graduate & Master's Programs</p>
          </AnimatedSection>
          
          <div className="grid-2">
            <AnimatedSection>
              <div className="program-card" data-testid="cyber-security-program">
                <div className="program-icon">
                  <Shield size={48} className="text-red-500" />
                </div>
                <h3 className="program-title">Cyber Security Expert</h3>
                <p className="program-duration">12 Months Program</p>
                <ul className="program-features">
                  <li><CheckCircle size={16} /> Industry-recognized certification</li>
                  <li><CheckCircle size={16} /> Hands-on lab sessions</li>
                  <li><CheckCircle size={16} /> Expert mentorship</li>
                  <li><CheckCircle size={16} /> Career placement support</li>
                </ul>
                <button 
                  className="enroll-button"
                  data-testid="enroll-cyber-btn"
                  onClick={() => handleCourseClick('Cyber Security')}
                >
                  Enroll Now
                </button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="program-card" data-testid="data-science-program">
                <div className="program-icon">
                  <Database size={48} className="text-blue-500" />
                </div>
                <h3 className="program-title">Data Science Master</h3>
                <p className="program-duration">10 Months Program</p>
                <ul className="program-features">
                  <li><CheckCircle size={16} /> Real-world projects</li>
                  <li><CheckCircle size={16} /> AI & ML specialization</li>
                  <li><CheckCircle size={16} /> Industry experts training</li>
                  <li><CheckCircle size={16} /> Job guarantee program</li>
                </ul>
                <button 
                  className="enroll-button"
                  data-testid="enroll-data-science-btn"
                  onClick={() => handleCourseClick('Data Science')}
                >
                  Enroll Now
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Courses Categories */}
      <section className="section" id="courses" data-testid="courses-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Categories of Training</h2>
            <p className="section-subtitle">Explore our comprehensive range of professional certification courses</p>
          </AnimatedSection>
          
          <div className="courses-marquee-container">
            {/* First Row */}
            <Marquee
              gradient={false}
              speed={40}
              pauseOnHover={true}
              className="mb-4"
            >
              {courses.slice(0, Math.ceil(courses.length / 2)).map((course, index) => {
                const Icon = course.icon;
                return (
                  <div 
                    key={index}
                    className="course-card-scroll mx-3"
                    data-testid={`course-${course.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleCourseClick(course.name)}
                  >
                    <div className={`course-icon-scroll bg-gradient-to-br ${course.color}`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h4 className="course-name-scroll">{course.name}</h4>
                    <ChevronRight size={18} className="course-arrow-scroll" />
                  </div>
                );
              })}
            </Marquee>

            {/* Second Row */}
            <Marquee
              gradient={false}
              speed={40}
              pauseOnHover={true}
              direction="right"
            >
              {courses.slice(Math.ceil(courses.length / 2)).map((course, index) => {
                const Icon = course.icon;
                return (
                  <div 
                    key={index + Math.ceil(courses.length / 2)}
                    className="course-card-scroll mx-3"
                    data-testid={`course-${course.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleCourseClick(course.name)}
                  >
                    <div className={`course-icon-scroll bg-gradient-to-br ${course.color}`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h4 className="course-name-scroll">{course.name}</h4>
                    <ChevronRight size={18} className="course-arrow-scroll" />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Employee Training */}
      <section className="section section-alt" data-testid="employee-training-section">
        <div className="container">
          <AnimatedSection>
            <div className="employee-training-content">
              <div className="employee-training-text">
                <h2 className="section-title text-left">Employee & Team Training Solutions</h2>
                <p className="text-lg mb-6 text-gray-300">
                  Empower your workforce with customized training programs designed to enhance skills, boost productivity, and drive organizational success.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Tailored curriculum aligned with your business objectives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Flexible scheduling to minimize disruption</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Progress tracking and performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Dedicated account manager and support</span>
                  </li>
                </ul>
                <button 
                  className="cta-button" 
                  data-testid="request-quote-btn"
                  onClick={() => window.open(GOOGLE_FORM_LINK, '_blank')}
                >
                  Request a Quote
                </button>
              </div>
              <div className="employee-training-image">
                <img 
                  src="https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=srgb&fm=jpg&w=800&q=85" 
                  alt="Team Training" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certification Section */}
      <section className="section" data-testid="certification-section">
        <div className="container">
          <AnimatedSection>
            <div className="certification-banner">
              <Award size={64} className="text-yellow-400 mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Earn Your Certification</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Stand out in your field with globally recognized certifications from industry leaders. Our programs are designed to validate your expertise and accelerate your career growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="cert-badge">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Industry Recognized</span>
                </div>
                <div className="cert-badge">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Lifetime Validity</span>
                </div>
                <div className="cert-badge">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Global Acceptance</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-alt" data-testid="contact-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">Get in touch with our team to start your learning journey</p>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="contact-grid">
              <div className="contact-card" data-testid="contact-email">
                <Mail size={32} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400">info@avvaspire.com</p>
                <p className="text-gray-400">support@avvaspire.com</p>
              </div>
              
              <div className="contact-card" data-testid="contact-phone">
                <Phone size={32} className="text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">Mon-Fri: 9AM - 6PM</p>
              </div>
              
              <div className="contact-card" data-testid="contact-location">
                <MapPin size={32} className="text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400">123 Training Avenue</p>
                <p className="text-gray-400">Tech City, TC 12345</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">AVV Aspire Solutions</h3>
              <p className="footer-text">Empowering professionals with cutting-edge training and certification programs.</p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#courses">Courses</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#refund">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 AVV Aspire Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;