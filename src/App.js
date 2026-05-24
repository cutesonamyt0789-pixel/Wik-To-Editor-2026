import React, { useState } from 'react';
import './styles/App.css';
import Editor from './components/Editor';
import Toolbar from './components/Toolbar';
import FileManager from './components/FileManager';

function App() {
  const [documents, setDocuments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState(null);
  const [content, setContent] = useState('');

  const createNewDocument = () => {
    const newDoc = {
      id: Date.now(),
      name: `Document ${documents.length + 1}`,
      content: '',
      createdAt: new Date(),
      modifiedAt: new Date(),
    };
    setDocuments([...documents, newDoc]);
    setCurrentDoc(newDoc.id);
    setContent('');
  };

  const updateContent = (newContent) => {
    setContent(newContent);
    if (currentDoc) {
      setDocuments(documents.map(doc =>
        doc.id === currentDoc ? { ...doc, content: newContent, modifiedAt: new Date() } : doc
      ));
    }
  };

  const deleteDocument = (docId) => {
    setDocuments(documents.filter(doc => doc.id !== docId));
    if (currentDoc === docId) {
      setCurrentDoc(null);
      setContent('');
    }
  };

  const selectDocument = (docId) => {
    const doc = documents.find(d => d.id === docId);
    if (doc) {
      setCurrentDoc(docId);
      setContent(doc.content);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Wik To Editor 2026</h1>
      </header>
      <div className="app-container">
        <aside className="sidebar">
          <FileManager
            documents={documents}
            currentDoc={currentDoc}
            onNewDocument={createNewDocument}
            onSelectDocument={selectDocument}
            onDeleteDocument={deleteDocument}
          />
        </aside>
        <main className="editor-section">
          {currentDoc ? (
            <>
              <Toolbar />
              <Editor content={content} onChange={updateContent} />
            </>
          ) : (
            <div className="empty-state">
              <h2>Welcome to Wik To Editor 2026</h2>
              <p>Create a new document to get started</p>
              <button className="btn btn-primary" onClick={createNewDocument}>
                Create New Document
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
