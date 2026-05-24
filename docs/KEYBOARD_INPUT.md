# Keyboard Input

## Approach

Add a single `keydown` listener on `document` that maps key inputs to the existing handler functions, rather than duplicating logic.

```js
document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
        handleNumClick({ target: { textContent: e.key } });
    } else if (["+", "-", "*", "/"].includes(e.key)) {
        handleOperatorClick({ target: { textContent: e.key } });
    } else if (e.key === "Enter" || e.key === "=") {
        handleEqualsClick();
    } else if (e.key === "Escape") {
        clear();
    }
});
```

## Key Mappings

| Key(s)        | Action          |
|---------------|-----------------|
| `0` – `9`     | Input digit     |
| `+` `-` `*` `/` | Select operator |
| `Enter` / `=` | Calculate result |
| `Escape`      | Clear           |

## Trade-off: Synthetic Event vs `.click()`

`handleNumClick` and `handleOperatorClick` read `event.target.textContent` for the value and toggle the `.active` CSS class on the pressed button. Passing a synthetic event object (as above) reuses the logic but **skips the visual button highlight** on keypress.

If visual feedback is needed when using the keyboard, query the matching button and call `.click()` on it instead:

```js
document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
        document.querySelector(`#btn-${e.key}`)?.click();
    }
    // ...
});
```

This approach couples keyboard handling to DOM structure (requires button IDs), so it is only worth adding if the visual highlight matters.
