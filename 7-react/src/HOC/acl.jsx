// access control list

export const user = {
  name: "Ali",
  family: "Mousavi",
  permissions: ["ADD_POST", "EDIT_POST", "DELETE_POST", "VIEW_POST_LIST"],
  role: ["editor", "writer"],
};

export function hasPermission(permission) {
  return user.permissions.includes(permission);
}

export const acl =
  (Component) =>
  ({ permission, ...props }) => {
    return permission && !hasPermission(permission) ? null : (
      <Component {...props} />
    );
  };

// export function acl(Component) {
//   return function ({ permission, ...props }) {
//     if (permission) {
//       if (hasPermission(permission)) {
//         <Component {...props} />;
//       } else {
//         null;
//       }
//     } else {
//       <Component {...props} />;
//     }

//     // return permission && !hasPermission(permission) ? null : (
//     //   <Component {...props} />
//     // );
//   };
// }
