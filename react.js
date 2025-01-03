import React, { useState } from 'react';
import { Search, BookOpen, Download, RefreshCw, Home, Image, Upload, Clock, ClipboardCheck, Mail, LogOut } from 'lucide-react';

const IntegratedDashboard = () => {
  const [qualification, setQualification] = useState('');
  const [unit, setUnit] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [showTopics, setShowTopics] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');

  // Theme configurations with Bootstrap classes
  const themes = {
    light: {
      background: 'bg-light',
      sidebar: 'bg-white',
      card: 'bg-white shadow',
      text: 'text-dark',
      accent: 'bg-primary',
    },
    dark: {
      background: 'bg-dark',
      sidebar: 'bg-secondary',
      card: 'bg-secondary',
      text: 'text-light',
      accent: 'bg-primary',
    },
    blue: {
      background: 'bg-primary bg-opacity-25',
      sidebar: 'bg-primary bg-opacity-75',
      card: 'bg-primary bg-opacity-75',
      text: 'text-light',
      accent: 'bg-info',
    }
  };

  const theme = themes[currentTheme];

  // Mock data
  const topics = {
    "A-Level": {
      "PAPER 1": {
        "Unit 1": {
          "Topic": "Mechanics",
          "Subtopics": ["Motion", "Forces", "Energy", "Momentum"]
        }
      },
      "PAPER 2": {
        "Unit 1": {
          "Topic": "Electricity",
          "Subtopics": ["Current", "Voltage", "Resistance", "Circuits"]
        }
      }
    }
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <div className={`min-vh-100 ${theme.background} ${theme.text}`}>
        {/* Sidebar */}
        <nav className={`fixed-top h-100 ${theme.sidebar} p-4`} style={{ width: '240px' }}>
          <div className="d-flex align-items-center mb-4">
            <div className={`${theme.accent} rounded p-2 me-2`}>
              <span className="h5 mb-0 text-light">ED</span>
            </div>
            <span className="h5 mb-0">EduDashboard</span>
          </div>

          <div className="nav flex-column mb-auto">
            <div className="mb-4">
              <small className="text-uppercase text-muted">Main</small>
              <div className="nav flex-column mt-2">
                <a href="#" className={`nav-link ${theme.text} d-flex align-items-center gap-2 rounded`}>
                  <Home size={20} />
                  <span>Home</span>
                </a>
                <a href="#" className={`nav-link ${theme.text} d-flex align-items-center gap-2 rounded`}>
                  <BookOpen size={20} />
                  <span>Topics</span>
                </a>
              </div>
            </div>

            <div className="mb-4">
              <small className="text-uppercase text-muted">Resources</small>
              <div className="nav flex-column mt-2">
                <a href="#" className={`nav-link ${theme.text} d-flex align-items-center gap-2`}>
                  <BookOpen size={20} />
                  <span>Documents</span>
                </a>
                <a href="#" className={`nav-link ${theme.text} d-flex align-items-center gap-2`}>
                  <Image size={20} />
                  <span>Images</span>
                </a>
                <a href="#" className={`nav-link ${theme.text} d-flex align-items-center gap-2`}>
                  <Upload size={20} />
                  <span>Uploads</span>
                </a>
              </div>
            </div>

            <div className="mb-4">
              <small className="text-uppercase text-muted">Activities</small>
              <div className="nav flex-column mt-2">
                <a href="#" className={`nav-link ${theme.text} d-flex align-items-center gap-2`}>
                  <Clock size={20} />
                  <span>History</span>
                </a>
                <a href="#" className={`nav-link ${theme.text} d-flex align-items-center gap-2`}>
                  <ClipboardCheck size={20} />
                  <span>Assignments</span>
                </a>
                <a href="#" className={`nav-link ${theme.text} d-flex align-items-center gap-2`}>
                  <Mail size={20} />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>

          <button className="btn btn-outline-danger d-flex align-items-center gap-2 w-100 mt-4">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>

        {/* Main Content */}
        <div className="container-fluid" style={{ marginLeft: '240px' }}>
          <div className="row p-4">
            {/* Theme Selector */}
            <div className="col-12 mb-4">
              <div className={`card ${theme.card} border-0`}>
                <div className="card-body">
                  <h5 className="card-title mb-3">Select Theme</h5>
                  <div className="btn-group">
                    {Object.keys(themes).map((themeName) => (
                      <button
                        key={themeName}
                        onClick={() => setCurrentTheme(themeName)}
                        className={`btn ${currentTheme === themeName ? 'btn-primary' : 'btn-outline-primary'}`}
                      >
                        {themeName}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="col-12 mb-4">
              <div className={`card ${theme.card} border-0`}>
                <div className="card-body">
                  <div className="input-group">
                    <span className="input-group-text bg-transparent border-0">
                      <Search size={20} />
                    </span>
                    <input 
                      type="text"
                      className="form-control bg-transparent border-0"
                      placeholder="Search for physics topics, questions, or concepts..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Configuration Card */}
            <div className="col-12 col-lg-4 mb-4">
              <div className={`card ${theme.card} border-0 h-100`}>
                <div className="card-body">
                  <h5 className="card-title mb-4">Question Configuration</h5>
                  
                  <div className="mb-3">
                    <label className="form-label text-muted">Qualification</label>
                    <select 
                      className="form-select bg-transparent"
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                    >
                      <option value="">Select Qualification</option>
                      {Object.keys(topics).map(qual => (
                        <option key={qual} value={qual}>{qual}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-muted">Paper</label>
                    <select 
                      className="form-select bg-transparent"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                    >
                      <option value="">Select Paper</option>
                      <option value="PAPER 1">Paper 1</option>
                      <option value="PAPER 2">Paper 2</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-muted">Question Type</label>
                    <select 
                      className="form-select bg-transparent"
                      value={questionType}
                      onChange={(e) => setQuestionType(e.target.value)}
                    >
                      <option value="">Select Type</option>
                      <option value="MCQ">MCQ</option>
                      <option value="Short">Short Answer</option>
                      <option value="Long">Long Answer</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Topics Overview Card */}
            <div className="col-12 col-lg-8 mb-4">
              <div className={`card ${theme.card} border-0 h-100`}>
                <div className="card-body">
                  <h5 className="card-title mb-4">Topics Overview</h5>
                  {showTopics && qualification && unit && topics[qualification]?.[unit] ? (
                    <div className="list-group list-group-flush">
                      {Object.entries(topics[qualification][unit]).map(([unitKey, unitData]) => (
                        <div key={unitKey} className="list-group-item bg-transparent">
                          <h6 className="text-primary mb-3">{unitData.Topic}</h6>
                          <ul className="list-unstyled ms-3">
                            {unitData.Subtopics.map((subtopic, index) => (
                              <li key={index} className="mb-2">• {subtopic}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-muted py-5">
                      Select qualification and paper to view topics
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="col-12">
              <div className="d-flex gap-3">
                <button 
                  onClick={() => setShowTopics(true)}
                  className="btn btn-primary d-flex align-items-center gap-2"
                >
                  <BookOpen size={20} />
                  View Topics
                </button>
                <button className="btn btn-success d-flex align-items-center gap-2">
                  <Download size={20} />
                  Generate PDF
                </button>
                <button 
                  onClick={() => {
                    setQualification('');
                    setUnit('');
                    setQuestionType('');
                    setShowTopics(false);
                  }}
                  className="btn btn-danger d-flex align-items-center gap-2"
                >
                  <RefreshCw size={20} />
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegratedDashboard;