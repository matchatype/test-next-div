# Next.js inner div bug

From terminal, run `npm run dev`. Open the developer tools of your browser, and find the structure to be:

```
<!doctype>
<html>
    <head>...</head>
    <body>
        <div id="__next">
            <div>...</div>
            <div>...</div>
        </div>
        ...
    </body>
</html>
```
