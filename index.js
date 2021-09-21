marked.setOptions({
    renderer: new marked.Renderer(),
    breaks: true});


function App () {


    const startingtext = `
Paragraph
# Heading One
## Heading Two

- list items
- list items

[Website link](https://www.google.com)

inline \` <div></div> \`


> BlockQuote

**Block Code:**

\`\`\`
    <html>
        <head>
        </head>
    </html>
\`\`\`

     `
    const [editor, setEditor] = React.useState(startingtext);

    const handleChange = (event) => {
        setEditor(event.target.value);
    }


    return ( 
        <div>
            <h1 className="head text-center"> Markdown Previewer</h1>
            <div className="row d-flex justify-content-center my-5 mx-5">
            <div className="col-md-2">
                <h2>Input</h2>
                <textarea onChange={handleChange} className="textarea" id="editor" value={editor} rows="10"></textarea>
            </div>
            <div className="col-md-2">
                <h3>Output</h3>
                <div id="preview" dangerouslySetInnerHTML={{__html: marked(editor)}}></div>
                
            </div>
            
        </div>
        </div>
        
    )
}


ReactDOM.render(<App/> , document.getElementById("app"));
