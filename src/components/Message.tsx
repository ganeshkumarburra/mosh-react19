import { useRef, memo } from "react";

const Message = memo(function Message({ value }: { value: number }) {
  // Use useRef to track renders without causing re-renders
  const renderCount = useRef(0);
  renderCount.current += 1;

  console.log(`Message ${value} rendered ${renderCount.current} times`);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "5px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>Message {value}</h3>
      <p>This component has rendered {renderCount.current} times</p>
    </div>
  );
});

export default Message;
