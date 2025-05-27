import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface LikeProps {
  size?: number;
  color?: string;
  onClick: (isLiked: boolean) => void;
  isLiked?: boolean;
}

/**
 * A heart icon component that toggles between filled and outline states.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} [props.size=24] - The size of the heart icon in pixels.
 * @param {string} [props.color="red"] - The color of the filled heart icon.
 * @param {boolean} [props.isLiked=false] - The initial liked state.
 * @param {function} props.onClick - Callback function that gets called when the heart is clicked.
 *                                   Receives the new liked state (true/false) as an argument.
 *
 * @example
 * <Like
 *   size={32}
 *   color="crimson"
 *   isLiked={false}
 *   onClick={(newState) => console.log(`Heart is now ${newState ? 'liked' : 'unliked'}`)}
 * />
 *
 * @returns A clickable heart icon that toggles between filled and outline states.
 */
const Like = ({
  size = 24,
  color = "red",
  isLiked: initialIsLiked = false,
  onClick,
}: LikeProps) => {
  const toggle = () => {
    setIsLiked(!isLiked);
    onClick(!isLiked);
  };
  const [isLiked, setIsLiked] = useState<boolean>(initialIsLiked);

  if (isLiked) {
    return <FaHeart size={size} color={color} onClick={toggle} />;
  }

  return <FaRegHeart size={size} onClick={toggle} />;
};

export default Like;
