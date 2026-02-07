# How to run this project

## Option 1: Production (recommended – avoids 404)

1. **Open Terminal** and go to the project folder:
   ```bash
   cd "/Users/shivam.barnwal/Documents/account page"
   ```

2. **Load Node** (if you use nvm):
   ```bash
   export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
   ```

3. **Build and start**:
   ```bash
   npm run serve
   ```

4. **Open in browser**:  
   **http://localhost:3000**

   If you see an old 404 page, do a **hard refresh**: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows).

---

## Option 2: Development

```bash
cd "/Users/shivam.barnwal/Documents/account page"
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
npm run dev
```

Then open the URL shown in the terminal (e.g. **http://localhost:3000** or **http://localhost:3001**).

---

## If port 3000 is already in use

1. Stop other Node servers (close other terminals running `npm run dev` or `next start`), or  
2. Start on another port:
   ```bash
   npx next start -p 3005
   ```
   Then open **http://localhost:3005**
