import { useEffect, useRef } from 'react';

import jspreadsheet from 'jspreadsheet-ce';

import 'jspreadsheet-ce/dist/jspreadsheet.css';

export const Spreadsheet = () => {
  const jRef = useRef<any>(null);

  const options = {
    data: [[]],
    minDimensions: [10, 10] as [number, number],
  };

  useEffect(() => {
    if (!jRef.current.jspreadsheet) {
      jspreadsheet(jRef.current, options);
    }
  }, [options]);

  const addRow = () => {
    jRef.current.jexcel.insertRow();
  };

  return (
    <div>
      <div ref={jRef} />
      <br />
      <input type="button" onClick={addRow} value="Add new row" />
    </div>
  );
};
