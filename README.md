# Webpage Calculator

A browser-based arithmetic calculator built with vanilla HTML, CSS, and JavaScript.

## Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)

## Quick Start

No build step or dependencies required. Clone the repo and open `index.html` in any browser:

```bash
git clone git@github.com:krosengr4/webpage-calculator.git
cd webpage-calculator
open index.html
```

## Features

- **Basic arithmetic**: Addition, subtraction, multiplication, and division
- **Chained operations**: Result of one calculation feeds directly into the next
- **Input guard**: Caps entry at 9 digits to prevent overflow
- **Divide-by-zero protection**: Displays "Error" instead of crashing
- **Clear button**: Resets the screen to `00` in one click

## Usage

### Basic Calculation

1. Click number buttons to enter the first operand
2. Click an operator (`+`, `-`, `*`, `/`)
3. Click number buttons to enter the second operand
4. Click `=` to display the result

### Chaining Operations

After pressing `=`, the result becomes the first operand for the next operation — just click an operator and continue.

### Clearing the Screen

Click **Clear** at any time to reset the display to `00`.

### Edge Cases

| Scenario | Behavior |
|---|---|
| Divide by zero | Displays `Error` |
| Operator pressed before any number | Ignored |
| `=` pressed with no operator set | Ignored |
| Input exceeds 9 digits | Further digits are blocked |

## Contributing

**Please contribute to this project:**

- [Submit Bugs and Request Features you'd like to see Implemented](https://github.com/krosengr4/webpage-calculator/issues)

## Questions

- [Link to my GitHub Profile](https://github.com/krosengr4)

- For any additional questions, email me at rosenkev4@gmail.com
