import React, { useState } from 'react';

const Projects = () => {
    const [selectedFolder, setSelectedFolder] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = {
        medical: [
            {
                name: 'Organ Segmentation',
                tech: 'PyTorch, MONAI, 3D U-Net',
                desc: 'Built and deployed a 3D U-Net model using MONAI for medical organ segmentation tasks, achieving 90%+ accuracy.',
                details: 'Engineered a robust pipeline to process medical imaging data, enabling more precise diagnostics. Implemented advanced preprocessing techniques and data augmentation strategies to improve model generalization.'
            },
            {
                name: 'Multimodal LLM for Medical Query Analysis',
                tech: 'LangChain, PyTorch, Transformers',
                desc: 'Developed a system enabling users to input text, image, audio, or video related to medical content.',
                details: 'Designed the model to analyze inputs and generate detailed, context-aware descriptions or diagnoses in response to user queries. Integrated multiple modalities for comprehensive medical analysis.'
            },
            {
                name: 'Multimodal LLM for Medical Conversations',
                tech: 'LangChain, Speech Recognition, NLP',
                desc: 'Built a system to capture and translate doctor-patient conversations from Malayalam to English.',
                details: 'Generates concise summaries or prescriptions from conversations. Implemented real-time speech-to-text processing and multilingual support for improved healthcare communication.'
            }
        ],
        ai: [
            {
                name: 'Eye Tracking System',
                tech: 'OpenCV, Deep Learning, Python',
                desc: 'Achieved 75% tracking accuracy in dynamic settings and identified correlations between eye movement data and user interests.',
                details: 'Enabled targeted recommendations that improved engagement. Developed custom algorithms for gaze estimation and attention mapping in real-time applications.'
            }
        ],
        data: [
            {
                name: 'Road Accident Analysis',
                tech: 'Python, Data Analytics, Visualization',
                desc: 'Led a data-driven project to analyze road accidents and identify high-risk zones.',
                details: 'Delivered a comprehensive report that highlighted 80% of high-risk zones, contributing to community safety initiatives. Applied statistical methods and geospatial analysis for actionable insights.'
            }
        ]
    };

    const allProjects = [...projects.medical, ...projects.ai, ...projects.data];
    const displayProjects = selectedFolder === 'all' ? allProjects :
        selectedFolder === 'medical' ? projects.medical :
            selectedFolder === 'ai' ? projects.ai : projects.data;

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'white' }}>
            {/* Toolbar */}
            <div style={{
                background: '#F0F0F0',
                borderBottom: '1px solid #ccc',
                padding: '5px',
                display: 'flex',
                gap: '5px',
                alignItems: 'center'
            }}>
                <button style={{ padding: '2px 8px', fontSize: '11px', cursor: 'pointer' }}>← Back</button>
                <button style={{ padding: '2px 8px', fontSize: '11px', cursor: 'pointer' }}>→ Forward</button>
                <div style={{ flex: 1, background: 'white', border: '1px inset #ccc', padding: '2px 5px', fontSize: '11px' }}>
                    🖥️ My Computer &gt; Projects &gt; {selectedFolder === 'all' ? 'All Projects' :
                        selectedFolder === 'medical' ? 'Medical AI' :
                            selectedFolder === 'ai' ? 'AI & ML' : 'Data Analytics'}
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex' }}>
                {/* Left Sidebar - Folder Tree */}
                <div style={{
                    width: '180px',
                    background: '#F0F0F0',
                    borderRight: '1px solid #ccc',
                    padding: '10px',
                    fontSize: '11px'
                }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#003C74' }}>📂 Categories</div>
                    <div
                        onClick={() => { setSelectedFolder('all'); setSelectedProject(null); }}
                        style={{
                            padding: '5px 8px',
                            cursor: 'pointer',
                            background: selectedFolder === 'all' ? '#316AC5' : 'transparent',
                            color: selectedFolder === 'all' ? 'white' : 'black',
                            marginBottom: '2px',
                            borderRadius: '2px'
                        }}
                    >
                        📁 All Projects
                    </div>
                    <div
                        onClick={() => { setSelectedFolder('medical'); setSelectedProject(null); }}
                        style={{
                            padding: '5px 8px',
                            cursor: 'pointer',
                            background: selectedFolder === 'medical' ? '#316AC5' : 'transparent',
                            color: selectedFolder === 'medical' ? 'white' : 'black',
                            marginBottom: '2px',
                            borderRadius: '2px'
                        }}
                    >
                        🏥 Medical AI
                    </div>
                    <div
                        onClick={() => { setSelectedFolder('ai'); setSelectedProject(null); }}
                        style={{
                            padding: '5px 8px',
                            cursor: 'pointer',
                            background: selectedFolder === 'ai' ? '#316AC5' : 'transparent',
                            color: selectedFolder === 'ai' ? 'white' : 'black',
                            marginBottom: '2px',
                            borderRadius: '2px'
                        }}
                    >
                        🤖 AI & ML
                    </div>
                    <div
                        onClick={() => { setSelectedFolder('data'); setSelectedProject(null); }}
                        style={{
                            padding: '5px 8px',
                            cursor: 'pointer',
                            background: selectedFolder === 'data' ? '#316AC5' : 'transparent',
                            color: selectedFolder === 'data' ? 'white' : 'black',
                            marginBottom: '2px',
                            borderRadius: '2px'
                        }}
                    >
                        📊 Data Analytics
                    </div>
                </div>

                {/* Right Panel - Project List or Details */}
                <div style={{ flex: 1, padding: '15px', overflow: 'auto', background: 'white' }}>
                    {selectedProject ? (
                        // Project Details View
                        <div>
                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    padding: '5px 10px',
                                    fontSize: '11px',
                                    marginBottom: '15px',
                                    cursor: 'pointer'
                                }}
                            >
                                ← Back to Projects
                            </button>
                            <div style={{
                                background: '#F0F8FF',
                                border: '2px solid #316AC5',
                                padding: '15px',
                                borderRadius: '5px'
                            }}>
                                <h2 style={{
                                    fontSize: '16px',
                                    color: '#003C74',
                                    marginBottom: '10px',
                                    borderBottom: '2px solid #316AC5',
                                    paddingBottom: '5px'
                                }}>
                                    🔬 {selectedProject.name}
                                </h2>
                                <div style={{ marginBottom: '10px' }}>
                                    <strong style={{ color: '#003C74' }}>Technologies:</strong>
                                    <div style={{
                                        background: '#E8F4FF',
                                        padding: '5px 10px',
                                        marginTop: '5px',
                                        borderRadius: '3px',
                                        fontSize: '11px'
                                    }}>
                                        {selectedProject.tech}
                                    </div>
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <strong style={{ color: '#003C74' }}>Overview:</strong>
                                    <p style={{ marginTop: '5px', fontSize: '12px', lineHeight: '1.6' }}>
                                        {selectedProject.desc}
                                    </p>
                                </div>
                                <div>
                                    <strong style={{ color: '#003C74' }}>Details:</strong>
                                    <p style={{ marginTop: '5px', fontSize: '12px', lineHeight: '1.6' }}>
                                        {selectedProject.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Project List View
                        <div style={{ fontSize: '12px' }}>
                            <div style={{
                                fontSize: '13px',
                                fontWeight: 'bold',
                                marginBottom: '15px',
                                color: '#003C74',
                                borderBottom: '2px solid #ccc',
                                paddingBottom: '5px'
                            }}>
                                {selectedFolder === 'all' ? '📁 All Projects' :
                                    selectedFolder === 'medical' ? '🏥 Medical AI Projects' :
                                        selectedFolder === 'ai' ? '🤖 AI & ML Projects' : '📊 Data Analytics Projects'}
                            </div>
                            {displayProjects.map((project, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedProject(project)}
                                    style={{
                                        background: 'linear-gradient(to bottom, white, #F5F5F5)',
                                        border: '1px solid #ccc',
                                        padding: '12px',
                                        marginBottom: '10px',
                                        borderRadius: '3px',
                                        boxShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(to bottom, #E8F4FF, #D0E8FF)';
                                        e.currentTarget.style.borderColor = '#316AC5';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(to bottom, white, #F5F5F5)';
                                        e.currentTarget.style.borderColor = '#ccc';
                                    }}
                                >
                                    <div style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '5px', color: '#003C74' }}>
                                        📄 {project.name}
                                    </div>
                                    <div style={{ color: '#666', fontSize: '11px', marginBottom: '5px' }}>
                                        <strong>Tech Stack:</strong> {project.tech}
                                    </div>
                                    <div style={{ fontSize: '11px', color: '#333', lineHeight: '1.5' }}>
                                        {project.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
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
                <span>{displayProjects.length} project(s)</span>
                <span>ML & AI Portfolio</span>
            </div>
        </div>
    );
};

export default Projects;
