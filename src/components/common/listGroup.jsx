import React from "react";

const ListGroup = ({
  selectedItem,
  onItemSelected,
  genres,
  propertyId,
  propertyValue,
}) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[propertyId]}
          className={
            selectedItem.name === genre[propertyValue]
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelected(genre)}
        >
          {genre[propertyValue]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  propertyId: "_id",
  propertyValue: "name",
};

export default ListGroup;
