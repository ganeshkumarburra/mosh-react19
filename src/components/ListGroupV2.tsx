import { useState } from "react";
import styled from "styled-components";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const List = styled.ul`
  list-style-type: none;
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  background-color: ${(props) => (props.active ? "green" : "none")};
`;

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <List className="list-group">
        {items.length === 0 ? (
          <p>No items found</p>
        ) : (
          items.map((item, index) => (
            <ListItem
              active={index === selectedIndex}
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </ListItem>
          ))
        )}
      </List>
    </>
  );
}

export default ListGroup;
