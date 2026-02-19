# FizzBuzz React Application
This application processes an array of values and applies FizzBuzz rules.

## What's This All About?

Remember FizzBuzz? It's that classic programming challenge where:
- Numbers divisible by 3 become "Fizz"
- Numbers divisible by 5 become "Buzz"  
- Numbers divisible by both become "FizzBuzz"
- Everything else stays as-is (but we'll show you the math!)

This app lets you input multiple values at once, see the results in a nice table, and for numbers that don't match Fizz/Buzz/FizzBuzz, you'll see exactly what divisions were checked (like "Divided 1 by 3" and "Divided 1 by 5").





The code is organized into:
- `fizzBuzzUtils.js` - All the FizzBuzz logic lives here
- `InputForm.jsx` - Handles getting values from you
- `ResultPage.jsx` - Shows you the results
- `App.jsx` - Ties everything together



### What You'll Need

- Node.js (version 18 or newer works great)
- npm (comes with Node.js) or yarn

### Let's Get It Running!

1. **Install the dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser** - The app will be running at `http://localhost:5173` (or whatever port Vite shows you)

That's it! You should see the app running in your browser.

### Running Tests

Want to see the tests in action?

```bash
npm test
```

Or if you prefer a visual test interface:

```bash
npm run test:ui
```

### Building for Production

Ready to deploy? Create a production build:

```bash
npm run build
```

Then preview it locally:

```bash
npm run preview
```

## How to Use It

Using the app is super simple:

1. **Type a value** in the input field (try numbers like 1, 3, 5, 15, or even letters like "A")
2. **Click "Add"** or press Enter to add it to your array
3. **Keep adding values** until you have everything you want to test
4. **Click "Run Process"** to see the magic happen!
5. **Check out the results** - you'll see what each value became, and for non-multiples, you'll see the division operations that were checked

## Tech Stack

This project uses:

- **React 18** - For building the UI
- **React Router** - For routing (though we only use the `/` route)
- **Vite** - Super fast build tool and dev server
- **Tailwind CSS** - For styling (makes things look pretty!)
- **Vitest** - For testing
- **Testing Library** - For testing React components




