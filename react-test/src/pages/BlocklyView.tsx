import { useEffect } from 'react';

import Blockly from 'blockly/core';

export const BlocklyView = () => {
  useEffect(() => {
    Blockly.inject('blocklyDiv', {});
  });

  return <div id="blocklyDiv" className="w-full h-96"></div>;
};
