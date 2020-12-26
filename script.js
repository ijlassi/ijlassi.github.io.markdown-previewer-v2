const intialMarkdown = ` 
### Headers
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
### List 
1 List biscuits
2 List vegtebals
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
>The future belongs to those who believe in the beauty of their dreams.
### Code 
\`\`\`
function addTwoNumbers(a,b) {
>return a+b
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
    const htmlText = text.
    replace(/^##### (.*$)/gim, '<h5>$1</h5>').
    replace(/^#### (.*$)/gim, '<h4>$1</h4>').
    replace(/^### (.*$)/gim, '<h3>$1</h3>').
    replace(/^## (.*$)/gim, '<h2>$1</h2>').
    replace(/^# (.*$)/gim, '<h1>$1</h1>').
    replace(/^>(.+)/gm, '<blockquote> $1 </blockquote>').
    replace(/\*\*(.*)\*\*/gim, '<b>$1</b><br />').
    replace(/\*(.*)\*/gim, '<i>$1</i><br />').
    replace(/^[0-9] (.*$)/gim, '<ul><li> $1 </li></ul>').
    replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" /><br />').
    replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a><br />").
    replace(/[`]{3}([^`]+)[`]{3}/gim, '<code> $1 </code><br />').
    replace(/\n$/gim, '<br />');

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