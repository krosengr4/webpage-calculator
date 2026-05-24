# Calculator Logic — Pseudocode

## State

```
currentInput  = ""   // digits the user is currently typing
previousInput = ""   // first operand, saved when operator is pressed
operator      = ""   // the pending operator (+, -, *, /)
```

---

## On Page Load

```
get reference to #screen element
get references to all .numbers buttons
get references to all .top-buttons (operators)
get reference to #= button
get reference to #0 button

display "00" on screen
```

---

## Number Button Clicked (0–9)

```
if currentInput is "0" or screen shows "00"
    currentInput = digit pressed          // replace leading zero
else
    currentInput = currentInput + digit   // append digit

update screen with currentInput
```

---

## Operator Button Clicked (+, -, *, /)

```
if currentInput is not empty
    previousInput = currentInput
    currentInput  = ""

operator = button that was clicked

// optional: highlight the active operator button
```

---

## Equals Button Clicked

```
if previousInput is empty OR operator is empty
    do nothing / return early

result = calculate(previousInput, currentInput, operator)

display result on screen

// set up for chaining: result becomes the new previousInput
previousInput = result
currentInput  = ""
operator      = ""
```

---

## Calculate(a, b, op) — Helper Function

```
convert a and b from strings to numbers

if op == "+"  return a + b
if op == "-"  return a - b
if op == "*"  return a * b
if op == "/"
    if b == 0  return "Error"   // guard divide-by-zero
    return a / b
```

---

## Edge Cases to Handle

| Case | Behavior |
|---|---|
| Divide by zero | Show "Error" on screen |
| Pressing operator before any number | Ignore / no-op |
| Pressing `=` with no operator set | Ignore / no-op |
| Multiple decimals in one number | Prevent appending a second `.` |
| Very long numbers | Consider capping display length or using `toFixed` |
| Chained operations (3 + 4 = 7, then * 2) | `previousInput = result` pattern above handles this |

---

## Event Wiring Summary

```
for each .numbers button
    addEventListener("click", handleNumberClick)

for each .top-buttons button
    addEventListener("click", handleOperatorClick)

document.querySelector("#=")
    addEventListener("click", handleEquals)
```
