import React from 'react';
import '../styles/Toolbar.css';

function Toolbar() {
  const handleSave = () => {
    console.log('Document saved');
  };

  const handleExport = () => {
    console.log('Export functionality');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="toolbar">
      <div className="toolbar-group">
        <button className="toolbar-btn" title="Save" onClick={handleSave}>
          💾 Save
        </button>
        <button className="toolbar-btn" title="Export" onClick={handleExport}>
          📤 Export
        </button>
        <button className="toolbar-btn" title="Print" onClick={handlePrint}>
          🖨️ Print
        </button>
      </div>
      <div className="toolbar-group">
        <button className="toolbar-btn" title="Undo">↶ Undo</button>
        <button className="toolbar-btn" title="Redo">↷ Redo</button>
      </div>
      <div className="toolbar-group">
        <button className="toolbar-btn" title="Bold"><strong>B</strong></button>
        <button className="toolbar-btn" title="Italic"><em>I</em></button>
        <button className="toolbar-btn" title="Underline"><u>U</u></button>
      </div>
    </div>
  );
}

export default Toolbar;
