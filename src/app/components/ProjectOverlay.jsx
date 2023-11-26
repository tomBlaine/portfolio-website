import React from 'react'

const ProjectOverlay = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded w-3/4 h-3/4 relative">
                <p>{project.title}</p>
                <button onClick={onClose} className="absolute top-2 right-2">
                    Close
                </button>
            </div>
        </div>
    );
}

export default ProjectOverlay