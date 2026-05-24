import React from 'react';
import '../styles/FileManager.css';

function FileManager({ documents, currentDoc, onNewDocument, onSelectDocument, onDeleteDocument }) {
  return (
    <div className="file-manager">
      <div className="file-manager-header">
        <h2>Documents</h2>
        <button className="btn btn-sm btn-primary" onClick={onNewDocument}>
          + New
        </button>
      </div>
      <div className="file-list">
        {documents.length === 0 ? (
          <p className="empty-message">No documents yet</p>
        ) : (
          documents.map(doc => (
            <div
              key={doc.id}
              className={`file-item ${currentDoc === doc.id ? 'active' : ''}`}
              onClick={() => onSelectDocument(doc.id)}
            >
              <div className="file-info">
                <span className="file-name">{doc.name}</span>
                <span className="file-date">
                  {new Date(doc.modifiedAt).toLocaleDateString()}
                </span>
              </div>
              <button
                className="file-delete"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteDocument(doc.id);
                }}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FileManager;
