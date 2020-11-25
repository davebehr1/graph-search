import React, { useState, useRef } from "react";
import BlocklyComponent, { Block, Value, Field, Shadow } from "./Blockly";

import { Typography, Box, IconButton, Button } from "@material-ui/core";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import BlocklyJs from "blockly/javascript";
import { GraphVis } from "./GraphVis";
import BlocklyP from "blockly/python";
import "./blocks/customblocks";
import "./generator/generator";
import useStyles from "./BlockStyles";

var Interpreter = require("js-interpreter");

export function Blocky() {
  const classes = useStyles();
  const [jsCode, setJsCode] = useState("");
  const [pCode, setPCode] = useState("");
  const simpleWorkspace = useRef();

  const generateCode = () => {
    var code = BlocklyJs.workspaceToCode(simpleWorkspace.current.workspace);
    setJsCode(code);

    var code = BlocklyP.workspaceToCode(simpleWorkspace.current.workspace);
    setPCode(code);
  };

  const runCode = () => {
    var code = BlocklyJs.workspaceToCode(simpleWorkspace.current.workspace);
    setJsCode(code);

    var code = BlocklyP.workspaceToCode(simpleWorkspace.current.workspace);
    setPCode(code);
    var myInterpreter = new Interpreter(jsCode);
    myInterpreter.run();
  };
  return (
    <div id="blockWrapper">
      <BlocklyComponent
        ref={simpleWorkspace}
        readOnly={false}
        trashcan={true}
        move={{
          // scrollbars: true,
          drag: true,
          wheel: true,
        }}
        initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>
      `}
      >
        <Block type="test_react_field" />
        <Block type="test_react_date_field" />
        <Block type="controls_ifelse" />
        <Block type="logic_compare" />
        <Block type="logic_operation" />
        <Block type="controls_repeat_ext">
          <Value name="TIMES">
            <Shadow type="math_number">
              <Field name="NUM">10</Field>
            </Shadow>
          </Value>
        </Block>
        <Block type="logic_operation" />
        <Block type="logic_negate" />
        <Block type="logic_boolean" />
        <Block type="logic_null" disabled="true" />
        <Block type="logic_ternary" />
        <Block type="text_charAt">
          <Value name="VALUE">
            <Block type="variables_get">
              <Field name="VAR">text</Field>
            </Block>
          </Value>
        </Block>
      </BlocklyComponent>
      <Box className={classes.code}>
        <Button
          onClick={() => generateCode()}
          className={classes.convertButton}
        >
          Convert
        </Button>
        <Typography variant="text">{pCode}</Typography>
        <IconButton
          color="secondary"
          aria-label="Run code"
          className={classes.runCodeButton}
        >
          <PlayCircleFilledWhiteIcon />
        </IconButton>
      </Box>
      <Box className={classes.graphVisWrapper}>
        <GraphVis />
      </Box>
    </div>
  );
}
