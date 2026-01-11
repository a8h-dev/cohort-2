# SCSS

- Compiler Extension Needed : Live Sass Compiler by Glenn Marks
- Setting : Show output Window On ko None kr do

----------------------------------------------------------------------

# What is SCSS?

 - SCSS (Sassy CSS) is a powerful extension of CSS, a CSS preprocessor that adds features like variables, nesting, mixins, and functions, making stylesheets more organized, reusable, and efficient to write, though it must be compiled into standard CSS for browsers to understand it. It offers a more advanced syntax than plain CSS, allowing for better maintainability, especially in large projects. 

# Key Features & Benefits:

- Variables: Store colors, fonts, or other values to reuse them easily, ensuring consistency.

- Nesting: Write CSS selectors in a nested structure that mirrors your HTML, reducing repetition.

- Mixins: Reusable blocks of CSS code that you can include anywhere, perfect for vendor prefixes or complex styles.

- Functions & Operators: Perform calculations and manipulations on values, adding dynamic capabilities.

- Partials & Imports: Organize your code into smaller, manageable files (partials) and import them into main files. 

# How it Works:

- Write SCSS: You write your styles in .scss files using the extended syntax.

- Compile: An SCSS compiler (often part of build tools) processes these files.

- Generate CSS: The compiler outputs standard .css files that web browsers can read and apply. 

# SCSS vs. Sass:

- SCSS is the newer, more common syntax for Sass (Syntactically Awesome Style Sheets).

- Sass also has an older syntax (indented syntax) that uses indentation instead of curly braces, but SCSS is fully CSS-compatible and uses familiar curly braces and semicolons. 

--------------------------------------------

# SCSS Mostly Used Features

# Nesting
- In SCSS, you can write selectors inside other selectors.
- This mimics the structure of your HTML, and makes code cleaner.

# Mixins
- A mixin is like a reusable styles for CSS rules.
- Helps avoid code repetition.
- Can take arguments to make it dynamic.

# Partials & Imports
- Partials: Small SCSS files (start with _) to quit your code (e.g. _header.scss, _footer.scss)
- Imports: Use @import to bring all partials into one main file.
- Keeps project modular & easy to maintain.