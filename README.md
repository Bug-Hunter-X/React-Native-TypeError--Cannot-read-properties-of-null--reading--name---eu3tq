# React Native TypeError: Cannot read properties of null (reading 'name')

This repository demonstrates a common React Native error: `TypeError: Cannot read properties of null (reading 'name')`.  This occurs when trying to access a property of an object that is null or undefined, often a result of asynchronous operations.

## Problem

The `bug.js` file contains a component that fetches user data. If the data hasn't loaded yet, accessing `userData.name` before it exists throws the TypeError.

## Solution

The `bugSolution.js` file shows two ways to handle this:

1. **Optional Chaining (?.)**: This allows accessing nested properties only if they exist, gracefully handling null or undefined values.
2. **Nullish Coalescing (??):** This provides a default value if the expression is null or undefined. 

Both solutions prevent the error and ensure the app continues running smoothly.