import React, { useState } from 'react';

const PortfolioApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const personalInfo = {
    name: "VENKATA RAMA RAO MALISETTI",
    title: "Tech Lead (Data) | GIS Specialist & Senior GIS Analyst",
    email: "ramu.malisetti@gmail.com",
    linkedin: "Venkata Rama Rao Malisetti",
    mobile: "+966503949027",
  };
  
  const experience = [
    {
      role: "Tech Lead (Data) & Senior GIS Analyst",
      company: "GPC East Pvt Ltd, Hyderabad",
      period: "August 2017 - Present"
    },
    {
      role: "Project Leader",
      company: "Avineon India Pvt Ltd, Hyderabad",
      period: "2015 - July 2017"
    },
    {
      role: "Team Leader",
      company: "Avineon India Pvt Ltd, Hyderabad",
      period: "2012 - 2015"
    },
    {
      role: "Associate GSS",
      company: "Avineon India Pvt Ltd, Hyderabad",
      period: "2006 - 2012"
    },
    {
      role: "CAD Engineer",
      company: "Graben Technology Pvt Ltd, Hyderabad",
      period: "2005 - 2006"
    }
  ];
  
  const education = [
    {
      degree: "Bachelor of Technology in Electrical & Electronics Engineering (Distance Education)",
      institution: "JNT University",
      period: "2006 - 2014"
    },
    {
      degree: "Diploma in Electrical & Electronics Engineering",
      institution: "M.B.T.S Govt Polytechnic College",
      period: "1999 - 2002"
    }
  ];
  
  const certifications = [
    "Do-It-Yourself Geo Apps",
    "Earth Imagery at Work",
    "Going Places with Spatial Analysis",
    "Cartography",
    "Spatial Data Science: The New Frontier in Analytics"
  ];
  
  const skills = {
    gisTools: ["ArcGIS Pro", "Enterprise", "Online", "Model Builder", "Revit", "FME", "AutoCAD", "ArcFM", "BIM", "QGIS", "Power-BI", "SQL Queries"],
    programming: ["Python for GIS automation", "geoprocessing", "data analysis", "workflow optimization"],
    geoAI: ["AI and machine learning", "land-use classification", "feature extraction", "predictive modeling"],
    utilityNetworks: ["Managing electrical and gas networks", "feeder tracing", "ArcFM configurations"],
    database: ["SQL Server", "Oracle"]
  };
  
  const projects = [
    "MPDA (Makkah Province Development Authority, Saudi Arabia)",
    "ZATCA (Zakat, Tax, and Customs Authority, Saudi Arabia)",
    "Ministry of Tourism (Saudi Arabia)",
    "e-Pass (Department of Municipalities and Transport, Abu Dhabi)",
    "UMIS (Urban Management Information System, Afghanistan)",
    "MAF (Majid Al Futtaim)",
    "Al Hosn Gas (Al Hosn Gas, Abu Dhabi)",
    "MJEC (Majan Electricity Company Muscat, Oman)",
    "SoCal Gas (Southern California Gas Company, US)",
    "PEPCO (Potomac Electric Power Company, US)"
  ];
  
  const portfolioHighlights = [
    {
      title: "Experience Builder - Dashboard",
      imgPlaceholder: "Experience-Builder-Dashboard.jpg"
    },
    {
      title: "3D Data - Publish Revit Data capture",
      imgPlaceholder: "3D-Data-Revit.jpg"
    },
    {
      title: "Road Network and Utility Network data",
      imgPlaceholder: "Road-Network-Utility.jpg"
    },
    {
      title: "CAD – GIS Migration",
      imgPlaceholder: "CAD-GIS-Migration.jpg"
    },
    {
      title: "Network Analyst – Find the nearest Facility",
      imgPlaceholder: "Network-Analyst.jpg"
    },
    {
      title: "ArcGIS Dashboard",
      imgPlaceholder: "ArcGIS-Dashboard.jpg" 
    },
    {
      title: "ArcGIS Insights",
      imgPlaceholder: "ArcGIS-Insights.jpg"
    },
    {
      title: "Map Services Publish & Geoprocessing Tools Publish",
      imgPlaceholder: "Map-Services.jpg"
    },
    {
      title: "FME Workbench creation based on the requirement",
      imgPlaceholder: "FME-Workbench.jpg"
    },
    {
      title: "Python using AI – Based on the Requirement to improve the performance",
      imgPlaceholder: "Python-AI.jpg"
    },
    {
      title: "Geo AI - Building Extraction by training the data with samples",
      imgPlaceholder: "GeoAI-Building-Extraction.jpg"
    }
  ];
  
  const careerObjective = {
    experience: "Over 18 years in geospatial analysis and GIS automation",
    expertise: "Python scripting, GeoAI solutions, and enterprise GIS workflows",
    goal: "Deliver impactful solutions using cutting-edge AI tools and spatial data integration",
    problemSolving: "Advanced analytical thinking and innovative approaches to complex spatial challenges"
  };
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><button 
                className={`px-3 py-1 rounded ${activeSection === 'home' ? 'bg-blue-900' : 'hover:bg-blue-600'}`}
                onClick={() => setActiveSection('home')}>Home</button></li>
              <li><button 
                className={`px-3 py-1 rounded ${activeSection === 'skills' ? 'bg-blue-900' : 'hover:bg-blue-600'}`}
                onClick={() => setActiveSection('skills')}>Skills</button></li>
              <li><button 
                className={`px-3 py-1 rounded ${activeSection === 'experience' ? 'bg-blue-900' : 'hover:bg-blue-600'}`}
                onClick={() => setActiveSection('experience')}>Experience</button></li>
              <li><button 
                className={`px-3 py-1 rounded ${activeSection === 'education' ? 'bg-blue-900' : 'hover:bg-blue-600'}`}
                onClick={() => setActiveSection('education')}>Education</button></li>
              <li><button 
                className={`px-3 py-1 rounded ${activeSection === 'portfolio' ? 'bg-blue-900' : 'hover:bg-blue-600'}`}
                onClick={() => setActiveSection('portfolio')}>Portfolio</button></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto p-4 mt-6">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md">
              <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-full border-4 border-blue-600 flex items-center justify-center text-gray-500">
                Profile Image
              </div>
              <h2 className="text-xl font-bold text-center">{personalInfo.name}</h2>
              <p className="text-center text-gray-600 mb-4">{personalInfo.title}</p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-bold mr-2">Email:</span> {personalInfo.email}
                </p>
                <p className="flex items-center">
                  <span className="font-bold mr-2">LinkedIn:</span> {personalInfo.linkedin}
                </p>
                <p className="flex items-center">
                  <span className="font-bold mr-2">Mobile:</span> {personalInfo.mobile}
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Career Objective</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-bold text-blue-700">Experience</h3>
                    <p>{careerObjective.experience}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-bold text-blue-700">Expertise</h3>
                    <p>{careerObjective.expertise}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-bold text-blue-700">Goal</h3>
                    <p>{careerObjective.goal}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-bold text-blue-700">Problem Solving</h3>
                    <p>{careerObjective.problemSolving}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projects.slice(0, 6).map((project, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded border border-gray-200">
                      {project}
                    </div>
                  ))}
                </div>
                <button 
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  onClick={() => setActiveSection('portfolio')}
                >
                  View all projects →
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Professional Skills</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">GIS Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.gisTools.map((tool, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">GeoAI</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.geoAI.map((skill, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Utility Networks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.utilityNetworks.map((skill, index) => (
                    <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Database</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((db, index) => (
                    <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Certifications</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-2">ESRI MOOC Certificates:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Work Experience</h2>
            
            <div className="relative border-l-2 border-blue-600 pl-6 ml-6 space-y-10">
              {experience.map((job, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow border border-gray-200">
                    <h3 className="text-lg font-bold text-blue-700">{job.role}</h3>
                    <p className="text-gray-700">{job.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{job.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Education Section */}
        {activeSection === 'education' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Education & Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Academic Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Professional Certifications</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium mb-2">ESRI MOOC Certificates:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Portfolio Section */}
        {activeSection === 'portfolio' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Portfolio Highlights</h2>
              <p className="mb-4 text-gray-600">These projects showcase implementation of enterprise GIS solutions, automation workflows, and AI-driven spatial analysis across various domains.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioHighlights.map((highlight, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="h-40 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500 overflow-hidden">
                      {/* Image placeholder with filename reference */}
                      <div className="p-2 text-center">
                        <div className="text-xs font-mono bg-gray-300 p-1 rounded">Image Path: {highlight.imgPlaceholder}</div>
                      </div>
                    </div>
                    <h3 className="font-bold text-blue-700">{highlight.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Client Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-blue-700">{project}</h3>
                    <p className="text-gray-600 mt-2">Implementation of enterprise GIS solutions and spatial data analysis.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-gray-800 text-white mt-12 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">{personalInfo.name}</h2>
              <p className="text-gray-400">{personalInfo.title}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-center md:text-right">
                <a href={`mailto:${personalInfo.email}`} className="text-blue-400 hover:text-blue-300">
                  {personalInfo.email}
                </a>
              </p>
              <p className="text-center md:text-right text-gray-400">
                {personalInfo.mobile}
              </p>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioApp;