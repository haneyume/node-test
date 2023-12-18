import { useState } from 'react';
import Xarrow from 'react-xarrows';

export function XArrowView() {
  const [dragging, setDragging] = useState(false);
  const [startBox, setStartBox] = useState(null);
  const [endBox, setEndBox] = useState(null);

  const handleMouseDown = (_e: any, boxId: any) => {
    setDragging(true);
    setStartBox(boxId);
  };

  const handleMouseUp = (_e: any, boxId: any) => {
    if (dragging) {
      setEndBox(boxId);
      setDragging(false);
    }
  };

  return (
    <div style={{ position: 'relative', height: '300px', width: '500px' }}>
      <div
        id="box1"
        onMouseDown={(e) => handleMouseDown(e, 'box1')}
        onMouseUp={(e) => handleMouseUp(e, 'box1')}
        style={{
          position: 'absolute',
          top: '50px',
          left: '50px',
          width: '100px',
          height: '100px',
          background: 'lightblue',
          cursor: 'pointer',
        }}
      >
        Box 1
      </div>
      <div
        id="box2"
        onMouseDown={(e) => handleMouseDown(e, 'box2')}
        onMouseUp={(e) => handleMouseUp(e, 'box2')}
        style={{
          position: 'absolute',
          top: '50px',
          left: '350px',
          width: '100px',
          height: '100px',
          background: 'lightpink',
          cursor: 'pointer',
        }}
      >
        Box 2
      </div>

      {startBox && endBox && (
        <Xarrow
          start={startBox}
          end={endBox}
          showHead={true}
          color="black"
          strokeWidth={2}
          path="grid"
        />
      )}
    </div>
  );
}
