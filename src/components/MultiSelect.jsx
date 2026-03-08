import React, { useState } from "react";
import { Box, Text, useInput } from "ink";

/**
 * Multi-select component with pre-selection support and dependency callbacks.
 * Space toggles, Enter confirms.
 *
 * Optional callbacks:
 * - onToggleOn(value, selected) → { alsoSelect?: string[], hints?: string[] }
 * - onToggleOff(value, selected) → { blocked: boolean, hint?: string }
 */
export default function MultiSelect({
  items,
  preselected = [],
  onSubmit,
  label,
  onToggleOn,
  onToggleOff,
}) {
  const [cursor, setCursor] = useState(0);
  const [selected, setSelected] = useState(new Set(preselected));
  const [feedback, setFeedback] = useState(null);

  useInput((input, key) => {
    if (key.upArrow) {
      setCursor((c) => (c > 0 ? c - 1 : items.length - 1));
      setFeedback(null);
    } else if (key.downArrow) {
      setCursor((c) => (c < items.length - 1 ? c + 1 : 0));
      setFeedback(null);
    } else if (input === " ") {
      const item = items[cursor];
      if (!item) return;

      setSelected((prev) => {
        const next = new Set(prev);

        if (next.has(item.value)) {
          // Trying to deselect
          if (preselected.includes(item.value)) {
            return prev; // Can't deselect preselected
          }
          if (onToggleOff) {
            const result = onToggleOff(item.value, [...next]);
            if (result.blocked) {
              setFeedback({ type: "warn", text: result.hint });
              return prev;
            }
          }
          next.delete(item.value);
          setFeedback(null);
        } else {
          // Selecting
          next.add(item.value);
          if (onToggleOn) {
            const result = onToggleOn(item.value, next);
            if (result.alsoSelect) {
              for (const dep of result.alsoSelect) next.add(dep);
            }
            if (result.hints?.length) {
              setFeedback({
                type: "info",
                text: result.hints.join("; "),
              });
            } else {
              setFeedback(null);
            }
          }
        }
        return next;
      });
    } else if (key.return) {
      onSubmit([...selected]);
    }
  });

  return (
    <Box flexDirection="column">
      {label ? <Text bold>{label}</Text> : null}
      <Text dimColor>  ↑↓ navigate · space toggle · enter confirm</Text>
      <Box marginTop={1} flexDirection="column">
        {items.map((item, i) => {
          const isSelected = selected.has(item.value);
          const isPreselected = preselected.includes(item.value);
          const isCursor = i === cursor;
          const marker = isSelected ? "◉" : "○";
          const prefix = isCursor ? "❯" : " ";

          return (
            <Box key={item.value} flexDirection="column">
              <Box>
                <Text color={isCursor ? "cyan" : undefined}>
                  {prefix} {marker} {item.label}
                </Text>
                {isPreselected ? (
                  <Text color="green"> [included]</Text>
                ) : null}
              </Box>
              {item.description ? (
                <Text dimColor>      {item.description}</Text>
              ) : null}
              {item.hints?.map((h, j) => (
                <Text key={j} color="cyan">
                  {"      + "}
                  {h}
                </Text>
              ))}
            </Box>
          );
        })}
      </Box>
      {feedback ? (
        <Box marginTop={1}>
          <Text color={feedback.type === "warn" ? "yellow" : "cyan"}>
            {feedback.type === "warn" ? "⚠ " : "ℹ "}
            {feedback.text}
          </Text>
        </Box>
      ) : null}
    </Box>
  );
}
