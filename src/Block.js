import React, { useState, useRef, useContext } from "react";
import BlocklyComponent, {
  Block,
  Category,
  Value,
  Field,
  Shadow,
} from "./Blockly";

import { Box, IconButton, Button } from "@material-ui/core";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import BlocklyJs from "blockly/javascript";
import { GraphVisUndirected } from "./GraphVisUndirected";
import BlocklyP from "blockly/python";
import "./blocks/customblocks";
import "./generator/generator";
import useStyles from "./BlockStyles";
import { CopyBlock, dracula } from "react-code-blocks";
import { ProgressContext } from "./Context";

export function Blocky() {
  const classes = useStyles();
  const [jsCode, setJsCode] = useState("");
  const [pCode, setPCode] = useState("");
  const simpleWorkspace = useRef();
  const { setUnlockedQuiz } = useContext(ProgressContext);

  const generateCode = () => {
    localStorage.setItem("unlockedQuiz", false);
    BlocklyJs.workspaceToCode(simpleWorkspace.current.workspace);
    setJsCode(BlocklyJs.workspaceToCode(simpleWorkspace.current.workspace));

    BlocklyP.workspaceToCode(simpleWorkspace.current.workspace);
    setPCode(BlocklyP.workspaceToCode(simpleWorkspace.current.workspace));
  };

  const runCode = () => {
    setUnlockedQuiz(true);
    localStorage.setItem("unlockedQuiz", true);

    setJsCode(BlocklyJs.workspaceToCode(simpleWorkspace.current.workspace));

    console.log("jsCode:", jsCode);

    eval(jsCode);
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

        <Category name="Variables" custom="VARIABLE"></Category>
        <Category name="Loops" colour="120">
          <Block type="controls_whileUntil" />
          <Block type="controls_ifelse" />
        </Category>
        <Category name="Functions" colour="290" custom="PROCEDURE" />

        <Category name="text" colour="160">
          <Block type="text_print">
            <Value name="TEXT">
              <Shadow type="text">
                <Field name="TEXT">abc</Field>
              </Shadow>
            </Value>
          </Block>
        </Category>

        {/* <Category name="Math" colour="230" />
        <Category name="Colour" colour="20" />
        <Category name="Variables" colour="330" custom="VARIABLE" />
        */}
        {/* <Block type="test_react_date_field" />
      
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
        </Block> */}
      </BlocklyComponent>
      <Box className={classes.code}>
        <Button
          onClick={() => generateCode()}
          className={classes.convertButton}
        >
          Convert to python
        </Button>
        <CopyBlock
          text={pCode}
          language={"python"}
          showLineNumbers={true}
          codeBlock
          wrapLines
          theme={dracula}
        />
        <IconButton
          color="secondary"
          aria-label="Run code"
          className={classes.runCodeButton}
          onClick={() => runCode()}
        >
          <PlayCircleFilledWhiteIcon />
        </IconButton>
      </Box>
      <Box className={classes.graphVisWrapper}>
        <GraphVisUndirected />
      </Box>
    </div>
  );
}
