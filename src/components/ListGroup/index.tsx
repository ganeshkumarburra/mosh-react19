import { useState } from "react";
import { FaList } from "react-icons/fa";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h2>
        <span>
          <FaList size={24} style={{ margin: "0px 5px 0px 5px" }} />
        </span>
        {heading}
      </h2>
      <ul className="list-group">
        {items.length === 0 ? (
          <p>No items found</p>
        ) : (
          items.map((item, index) => (
            <li
              className={`list-group-item ${
                index == selectedIndex ? "active" : ""
              }`}
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default ListGroup;
