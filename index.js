//first make the rootNode 0 distance 
//initialize a discovered array and assign rootNode to it -- that is the first element we have visited
//initialize a discoverOrder array and assign rootNode to it -- same reason as above
function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    let discovered = [rootNode]
    let discoverOrder = [rootNode]

    while(discovered.length != 0){
        let currentNode = discovered.shift() //remove the first element in discovered to be currentNode
        let adjacentNodes = findAdjacent(currentNode.name,vertices, edges) //call on findAdjacent() to grab the adjacent nodes from the rootNode
        discoverOrder = discoverOrder.concat(adjacentNodes) //concat the adjacentNodes when they have not been visited..?
        markDistanceAndPredecessor(currentNode, adjacentNodes) //once visited we mark that node with its predecessor and distance 
        discovered = discovered.concat(adjacentNodes) // we now concat our newly visited nodes 
    }
    return discoverOrder //return the full order visited 
}


//filter thru the edges to see if it includes the rootNode
// iterate thru out edges t find the elements that are not our rootNode
//filter thru the vertices and return the elements that both the name and distance are null 
function findAdjacent(rootNode, vertices, edges){
    let adjacentE = edges.filter(edge => edge.includes(rootNode))
    let adjacentV = adjacentE.map(e => e.find(element => element != rootNode))
    return vertices.filter(x => adjacentV.includes(x.name) && x.distance === null)

}

//use map to iterate thru the adjacentNode array, populating a new array with the vertices and their distances
//mark the predecessor's distance and add plus 1
function markDistanceAndPredecessor(predecessor, adjacentNodes){
  return adjacentNodes.map(node => {
      node.predecessor = predecessor
      node.distance = predecessor.distance + 1
  })
}

