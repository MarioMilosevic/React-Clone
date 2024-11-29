
const element = {
    type: "h1",
    props: {
        title: "foo",
        children:"Hello"
    }
}
const container = document.getElementById('root');
const node = document.createElement(element.type)
const text = document.createTextNode('')
node['title'] = element.props.title
text['nodeValue'] = element.props.children;
node.appendChild(text)
container?.appendChild(node)
