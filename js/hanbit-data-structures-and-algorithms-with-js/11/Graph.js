function Graph(v) {
	this.vertices = v;
	this.vertexList = [];
	this.edges = 0;
	this.adj = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.dfs = dfs;
	this.marked = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.marked[i] = false;
	}
	this.edgeTo = [];
	this.bfs = bfs;
	this.pathTo = pathTo;
	this.hasPathTo = hasPathTo;
	this.topSort = topSort;
	this.topSortHelper = topSortHelper;
}

function addEdge(v, w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph() {
	for (var i = 0; i < this.vertices; ++i) {
		var result = i + ' -> ';
		for (var j = 0; j < this.vertices; ++j) {
			if (this.adj[i][j] != undefined) {
				result += this.adj[i][j] + ' ';
			}
		}
		console.log(result);
	}
}

// 깊이 우선 검색
function dfs(v) {
	this.marked[v] = true;
	if (this.adj[v] != undefined) {
		console.log('Visited vertex: ' + v);
	}
	for (var i = 0; i < this.adj[v].length; ++i) {
		if (!this.marked[this.adj[v][i]]) {
			this.dfs(this.adj[v][i]);
		}
	}
}

// 너비 우선 검색
function bfs(s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s); // 큐로 삽입
	while (queue.length > 0) {
		var v = queue.shift(); // 큐에서 가져옴
		if (v != undefined) {
			console.log('Visited vertex: ' + v);
		}
		for (var i = 0; i < this.adj[v].length; ++i) {
			if (!this.marked[this.adj[v][i]]) {
				this.edgeTo[this.adj[v][i]] = v;
				this.marked[this.adj[v][i]] = true;
				queue.push(this.adj[v][i]);
			}
		}
	}
}

function pathTo(v) {
	var source = 0;
	if (!this.hasPathTo(v)) {
		return undefined;
	}

	var path = [];
	for (var i = v; i != source; i = this.edgeTo[i]) {
		path.push(i);
	}
	path.push(source);
	return path;
}

function hasPathTo(v) {
	return this.marked[v];
}

function topSort() {
	var stack = [];
	var visited = [];
	for (var i = 0; i < this.vertices; i++) {
		visited[i] = false;
	}
	for (var i = 0 ; i < this.vertices; i++) {
		if (visited[i] == false) {
			this.topSortHelper(i, visited, stack);
		}
	}
	for (var i = 0; i < stack.length; i++) {
		if (stack[i] != undefined && stack[i] != false) {
			console.log(this.vertexList[stack[i]]);
		}
	}
}

function topSortHelper(v, visited, stack) {
	visited[v] = true;
	for (var i = 0; i < this.adj[v].length; ++i) {
		if (!visited[this.adj[v][i]]) {
			this.topSortHelper(this.adj[v][i], visited, stack);
		}
	}
	console.log(v)
	stack.push(v);
}

module.exports.Graph = Graph;