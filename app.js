const heading=React.createElement("h1",{id:"head1"},"Heading1")
const heading2=React.createElement("h2",{id:"head2",className:"head2"},"Heading2")
const container=React.createElement("div",{id:"container"},[heading,heading2]) //pass children in array


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(container)