import { useState } from "react"
import TextareaAutosize from "react-autosize-textarea"
import { Controlled as CodeMirror } from "react-codemirror2"
import "./App.css"

require("codemirror/lib/codemirror.css")
require("codemirror/theme/material.css")
require("codemirror/theme/neat.css")
require("codemirror/mode/xml/xml.js")
require("codemirror/mode/javascript/javascript.js")

function TextareaOl() {
    const [value, setValue] = useState("")
    const options = {
        lineNumbers: true,
        lineWrapping: true,
        lineNumberFormatter: lineNumberFormatter,
    }
    return (
        // <div className="textarea-ol">
        //     <div className="numbers">
        //         1<br />
        //         2<br />
        //         3<br />
        //     </div>
        //     <TextareaAutosize
        //         placeholder="Add content instance, one line each"
        //         className="textarea"
        //         value={value}
        //         onChange={(e) => handleChange(e, setValue)}
        //     />
        // </div>
        <CodeMirror
            value={value}
            options={options}
            onBeforeChange={(editor, data, value) => {
                setValue(value)
            }}
            onChange={(editor, data, value) => {
                // console.log(value)
            }}
        />
    )

    function lineNumberFormatter(line) {
        const arr = value.split("\n")
        var blankLine = 0

        if (arr[line - 1] === "") {
            return ""
        }

        for (let i = 0; i < line - 1; i++) {
            const element = arr[i]
            if (element === "") {
                blankLine++
            }
        }

        return line - blankLine
    }
}

function handleChange(e, setValue) {
    setValue(e.target.value)
    console.log(e.target.value)
}

export default TextareaOl
