import React from 'react';

const AboutMe = () => {
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'white' }}>
            {/* Menu Bar */}
            <div style={{
                background: '#F0F0F0',
                borderBottom: '1px solid #ccc',
                display: 'flex',
                padding: '2px 5px',
                fontSize: '11px'
            }}>
                <span style={{ padding: '2px 8px' }}>File</span>
                <span style={{ padding: '2px 8px' }}>Edit</span>
                <span style={{ padding: '2px 8px' }}>Format</span>
                <span style={{ padding: '2px 8px' }}>View</span>
                <span style={{ padding: '2px 8px' }}>Help</span>
            </div>

            {/* Text Content */}
            <div style={{
                flex: 1,
                padding: '10px',
                fontFamily: 'Lucida Console, Courier New, monospace',
                fontSize: '12px',
                overflow: 'auto',
                whiteSpace: 'pre-wrap',
                userSelect: 'text',
                lineHeight: '1.5'
            }}>
                {`ABHIJITH K J
================================================================================
ML Project Engineer @ CDAC-Thiruvananthapuram
Thiruvananthapuram, Kerala | abhijithkj3690@gmail.com | 8129895738
linkedin.com/in/abhijithkj3690

ABOUT
-----
Machine Learning Engineer with expertise in developing AI models and scalable 
data pipelines for healthcare applications. Currently serving as Project 
Engineer at CDAC, delivering innovative medical imaging solutions for radiology 
departments. M.Sc. in Computer Science with Specialization in Machine 
Intelligence from Digital University Kerala. 

Passionate about harnessing AI innovation to build sustainable technological 
solutions that make the world better.

TECHNICAL SKILLS
----------------
Languages:          Python, C, C++
ML/DL Frameworks:   PyTorch, TensorFlow, MONAI, OpenCV, LangChain
DevOps & Tools:     Git, Docker, Kubernetes, PyInstaller, CUDA
Databases:          SQL, MongoDB
Web Frameworks:     Django, Flask

Core Expertise:     ML Modeling & Algorithms, Deep Learning, 
                    Reinforcement Learning, Generative AI, 
                    Feature Engineering, Model Optimization, System Design

PROFESSIONAL EXPERIENCE
-----------------------
ML Project Engineer | CDAC-Thiruvananthapuram (March 2024 - Present)

• Built and optimized deep learning models using PyTorch and MONAI for medical 
  imaging workflows, achieving 95%+ Dice coefficient in organ segmentation, 
  90%+ detection accuracy, and reducing diagnostic turnaround by ~80%

• Collaborated with 5+ Doctors to translate cutting-edge research into 
  production-ready diagnostic tools, reducing manual analysis time from 
  ~9 hours to ~10 seconds (~99.97% reduction)

• Optimized existing ML pipelines for multi-layered medical datasets, 
  improving processing efficiency by ~60% and model inference speed by ~3×, 
  enabling near-real-time image analysis

• Led development of multimodal LLM systems for healthcare analytics, enabling 
  automated analysis of text, image, and audio medical data for enhanced 
  patient care

• Deployed containerized ML solutions using Docker and Kubernetes, delivering 
  scalable medical imaging applications across 10+ hospitals, supporting 
  clinicians and processing 100+ images daily

EDUCATION
---------
M.Sc. Computer Science - Machine Intelligence Specialization (2022-2024)
Kerala University of Digital Science Innovation and Technology, Trivandrum

B.Sc. Computer Science (2019-2022)
V.V. College, affiliated with Calicut University, Palakkad

ACHIEVEMENTS
------------
• Best Outgoing Student - Computer Science Department (College)
• State & District Athletic Meet Medalist - Running Events
• Vice-Captain - South Zone Inter-University Football Tournament (SRM Chennai)
• School Arts Leader - 2 years
• Excellence Awards in Western-Style Dance Competitions

LANGUAGES
---------
English, Malayalam, Tamil, Hindi

================================================================================
"Thanks for visiting my portfolio! Feel free to explore my projects."
================================================================================`}
            </div>

            {/* Status Bar */}
            <div style={{
                background: '#F0F0F0',
                borderTop: '1px solid #ccc',
                padding: '2px 10px',
                fontSize: '10px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <span>Ln 1, Col 1</span>
                <span>Windows (CRLF)</span>
                <span>UTF-8</span>
            </div>
        </div>
    );
};

export default AboutMe;
