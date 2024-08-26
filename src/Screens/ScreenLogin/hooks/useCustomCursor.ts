import { useState, useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

export const useCustomCursor = (maxLength: number) => {
  const [text, setText] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);
  const [inputDimension, setInputDimension] = useState({ width: 0, height: 0 });
  const [caretPosition, setCaretPosition] = useState({ start: 0, end: 0 });

  const cursorOpacity = useSharedValue(1);
  const cursorX = useSharedValue(0);

  useEffect(() => {
    if (isInputFocused) {
      cursorOpacity.value = withRepeat(withTiming(0, { duration: 1000 }), -1, true);
    } else {
      cursorOpacity.value = 0;
    }
  }, [isInputFocused]);

  useEffect(() => {
    const caretPos = Math.min(caretPosition.start, text.length);
    const newPosition = (caretPos / maxLength) * inputDimension.width;
    cursorX.value = withTiming(newPosition);
  }, [caretPosition, inputDimension, maxLength, text.length]);

  const cursorStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: cursorX.value }],
      opacity: cursorOpacity.value,
    };
  });

  return {
    text,
    setText,
    isInputFocused,
    setInputFocused,
    inputDimension,
    setInputDimension,
    caretPosition,
    setCaretPosition,
    cursorStyle,
  };
};
