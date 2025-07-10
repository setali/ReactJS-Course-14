import { acl } from "./acl";

function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export default acl(Button);
