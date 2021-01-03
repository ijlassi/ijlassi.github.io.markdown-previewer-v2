const intialMarkdown = ` 
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
### List 

1 List biscuits

2 List vegetables

3 List fruits 

4 List drinks

### Links

[Facebook](facebook.com)

[Instagram](instagram.com)

[Twitter](twitter.com/)

### Text Decorations 

  *italic* 

  **bold**

 *** bold and italic*** 

### Images 

![image](https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg "so nice view")

### Blockquote 

>We accept the love we think we deserve.
### Code 
\`\`\`
 function addTwoNumbers(a,b) {
    return a+b
 }
 const name ="iness"
 const age= "27"
\`\`\`
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: intialMarkdown };

  }
  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  parseMarkdown(text) {
    const htmlText = text
      .replace(/^##### (.*$)/gim, '<h5>$1</h5><pre />')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4><pre />')
      .replace(/^### (.*$)/gim, '<h3>$1</h3><pre/>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2><pre />')
      .replace(/^# (.*$)/gim, '<h1>$1</h1><pre />')
      .replace(/^>(.+)/gm, '<blockquote> $1 </blockquote><pre />')
      .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
      .replace(/\*(.*)\*/gim, '<i>$1</i>')
      .replace(/^[0-9] (.*$)/gim, '<ul><li> $1 </li></ul><pre />')
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" /><pre />')
      .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a><pre />")
      .replace(/[`]{3}([^`]+)[`]{3}/gim, '<code> $1 </code><pre />')
      .replace(/\n$/gim, '<pre />');

    return htmlText.trim();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "App" }, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "A Markdown Previewer "), /*#__PURE__*/
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "left" }, /*#__PURE__*/
      React.createElement("textarea", { id: "editor", value: this.state.markdown, onChange: this.handleChange.bind(this) })), /*#__PURE__*/

      React.createElement("div", { className: "right" }, /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: this.parseMarkdown(this.state.markdown) } })))));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
