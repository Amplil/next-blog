import ReactMarkdown from 'react-markdown'
export default function TableOfContents({ body }){
  const ankerLink1 = ({ node, ...props }) => {
    return (
      <li class=" hover:bg-gray-100">
        <a href={"#"+node.position?.start.line.toString()}>{props.children}</a>
      </li>
    );
  };
  const ankerLink2 = ({ node, ...props }) => {
    return (
      <li class=" hover:bg-gray-100">
        <a href={"#"+node.position?.start.line.toString()}>　{props.children}</a>
      </li>
    );
  };
  const ankerLink3 = ({ node, ...props }) => {
    return (
      <li class=" hover:bg-gray-100">
        <a href={"#"+node.position?.start.line.toString()}>　　{props.children}</a>
      </li>
    );
  };
  const ankerLink4 = ({ node, ...props }) => {
    return (
      <li class=" hover:bg-gray-100">
        <a href={"#"+node.position?.start.line.toString()}>　　　{props.children}</a>
      </li>
    );
  };
  const ankerLink5 = ({ node, ...props }) => {
    return (
      <li class=" hover:bg-gray-100">
        <a href={"#"+node.position?.start.line.toString()}>　　　　{props.children}</a>
      </li>
    );
  };
  const ankerLink6 = ({ node, ...props }) => {
    return (
      <li class=" hover:bg-gray-100">
        <a href={"#"+node.position?.start.line.toString()}>　　　　　{props.children}</a>
      </li>
    );
  };
  return (
        <div class="">
            <ul>
                <ReactMarkdown
                allowedElements={["h1","h2","h3","h4","h5","h6"]}
                components={{
                    h1: ankerLink1,
                    h2: ankerLink2,
                    h3: ankerLink3,
                    h4: ankerLink4,
                    h5: ankerLink5,
                    h6: ankerLink6,}}>
                    {body}
                </ReactMarkdown>
            </ul>
        </div>
    );
};
