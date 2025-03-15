<h1>📝 Todo App Backend</h1>
<p>A simple <strong>Todo App Backend</strong> built with <strong>Node.js and Express.js</strong>, providing full CRUD (Create, Read, Update, Delete) functionalities for managing todos.</p>

<h2>🚀 Features</h2>
<ul>
    <li>Create a Todo</li>
    <li>Get All Todos</li>
    <li>Get a Todo by ID</li>
    <li>Update a Todo</li>
    <li>Delete a Todo</li>
</ul>

<h2>🛠️ Technologies Used</h2>
<ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
</ul>

<h2>📌 Installation</h2>
<ol>
    <li><strong>Clone the repository:</strong></li>
    <pre><code>git clone <-repository link->
    </code></pre>

    Install dependencies:
    npm install

    Run the server:
    npm start
  The server will start at http://localhost:3000(default port).
</ol>

<h2>📡 API Endpoints</h2>

<h3>1️⃣ Create a Todo</h3>
<ul>
    <li><strong>Method:</strong> <code>POST</code></li>
    <li><strong>Endpoint:</strong> <code>/createTodo</code></li>
    <li><strong>Request Body:</strong></li>
    <pre><code>{
  "title": "Learn Express",
  "description": "Understand basics of Express.js"
}</code></pre>

    Response:
   {
  "id": 1,
  "title": "Learn Express",
  "description": "Understand basics of Express.js"
}
</ul>

<h3>2️⃣ Get All Todos</h3>
<ul>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Endpoint:</strong> <code>/getTodos</code></li>
    <li><strong>Response:</strong></li>
    <pre><code>[
  {
    "id": 1,
    "title": "Learn Express",
    "description": "Understand basics of Express.js"
  },
  {
    "id": 2,
    "title": "Build a Todo App",
    "description": "Create a simple backend with Express"
  }
]</code></pre>
</ul>

<h3>3️⃣ Get a Todo by ID</h3>
<ul>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Endpoint:</strong> <code>/getTodos/:id</code></li>
    <li><strong>Response:</strong></li>
    <pre><code>{
  "id": 1,
  "title": "Learn Express",
  "description": "Understand basics of Express.js"
}</code></pre>
</ul>

<h3>4️⃣ Update a Todo</h3>
<ul>
    <li><strong>Method:</strong> <code>PUT</code></li>
    <li><strong>Endpoint:</strong> <code>/updateTodo/:id</code></li>
    <li><strong>Request Body:</strong></li>
    <pre><code>{
  "title": "Updated Todo",
  "description": "Updated description"
}</code></pre>
    <li><strong>Response:</strong></li>
    <pre><code>{
  "id": 1,
  "title": "Updated Todo",
  "description": "Updated description"
}</code></pre>
</ul>

<h3>5️⃣ Delete a Todo</h3>
<ul>
    <li><strong>Method:</strong> <code>DELETE</code></li>
    <li><strong>Endpoint:</strong> <code>/deleteTodo/:id</code></li>
    <li><strong>Response:</strong></li>
    <pre><code>{
  "message": "Todo deleted successfully"
}</code></pre>
</ul>

<h2>🏗️ Project Structure</h2>
<pre><code>📂 todo-app-backend  
│-- 📄 package.json  
│-- 📄 server.js  
│-- 📂 routes  
│   └── todoRoutes.js  
│-- 📂 controllers  
│   ├── createTodo.js  
│   ├── getTodo.js  
│   ├── updateTodo.js  
│   ├── deleteTodo.js  
│-- 📂 models  
│   └── todoModel.js  
</code></pre>

<h2>🤝 Contributing</h2>
<p>Feel free to contribute by submitting pull requests or reporting issues!</p>

