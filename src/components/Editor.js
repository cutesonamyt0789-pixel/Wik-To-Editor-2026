import React from 'react';
import '../styles/Editor.css';

function Editor({ content, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="editor">
      <textarea
        className="editor-textarea"
        value={content}
        onChange={handleChange}
        placeholder="Start typing your document here..."
      />
    </div>
  );
}

export default Editor;
