import React from "react";

//  This is a functional component
const Category = (props) => (
  <tr>
    <td>{props.category.category}</td>

    <td>
      {/* <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "} */}
      <a
        href="#"
        onClick={ () => {
          props.deleteCategory(props.category._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default Category;