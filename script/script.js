let selectedTrackType = "straight";  // Default track type

// Add event listeners for the track type buttons
document.querySelector("#straightBtn").addEventListener("click", () => selectTrackType("straight"));
document.querySelector("#curvedBtn").addEventListener("click", () => selectTrackType("curved"));
document.querySelector("#removeTrackBtn").addEventListener("click", () => selectTrackType("remove"));

function selectTrackType(trackType) {
    selectedTrackType = trackType;
    displayMessage(`Selected Track Type: ${selectedTrackType.charAt(0).toUpperCase() + selectedTrackType.slice(1)}`);
}

// Start Game and Initialize Game Screen
document.querySelector("#startGameBtn").addEventListener("click", startGame);
document.querySelector("#showDescriptionBtn").addEventListener("click", showDescription);
document.querySelector("#hideDescriptionBtn").addEventListener("click", hideDescription);

function startGame() {
    const playerName = document.querySelector("#playerName").value;
    const difficulty = document.querySelector("#difficulty").value;

    if (!playerName) {
        displayMessage("Please enter your name");
        return;
    }

    document.querySelector("#menu").style.display = "none";
    document.querySelector("#leaderboard").style.display = "none";
    document.querySelector("#gameScreen").style.display = "block";
    document.querySelector("#displayPlayerName").textContent = `Player: ${playerName}`;

    const gridSize = difficulty === "easy" ? 5 : 7;
    document.querySelector("#grid").style.setProperty("--grid-size", gridSize);

    const selectedMap = selectRandomMap(difficulty);
    createGrid(gridSize, selectedMap);
    startTimer();
}

function showDescription() {
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#description").style.display = "block";
}

function hideDescription() {
    document.querySelector("#description").style.display = "none";
    document.querySelector("#menu").style.display = "block";
}

// Timer Initialization
let startTime;
let timerInterval;
let elapsedTime;
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        document.querySelector("#timer").textContent = `Time: ${elapsedTime}s`;
    }, 1000);
}

const TerrainTypes = {
    EMPTY: "empty",
    BRIDGE: "bridge",
    ROCKS: "rocks",
    RIVER: "river"
};

const TrackTypes = {
    STRAIGHT: "straight",
    CURVED_LEFT: "curved-left"
};


const easyMap = [

    [
    [{ terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 90 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.RIVER, rotation: 0 }],
    [{ terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.BRIDGE, rotation: 0 }, { terrain: TerrainTypes.RIVER, rotation: 0 }],
    [{ terrain: TerrainTypes.BRIDGE, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 180 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }],
    [{ terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.RIVER, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }],
    [{ terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 270 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }],
    ],

    [
        [
            { terrain: TerrainTypes.RIVER, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.BRIDGE, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }
        ],
        [
            { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 90 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 180 }
        ],
        [
            { terrain: TerrainTypes.BRIDGE, rotation: 0 }, { terrain: TerrainTypes.RIVER, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 270 },  { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }
        ],
        [
            { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.RIVER, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }
        ],
        [
            { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }
        ]
    ]
    

    

    
];

const hardMap = [
        [
        [
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.ROCKS, rotation: 90 },
            { terrain: TerrainTypes.RIVER, rotation: 0 },
            { terrain: TerrainTypes.RIVER, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.BRIDGE, rotation: 90 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 }
        ],
        [
            { terrain: TerrainTypes.BRIDGE, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 }
        ],
        [
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.BRIDGE, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 }
        ],
        [
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.ROCKS, rotation: 270 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 }
        ],
        [
            { terrain: TerrainTypes.ROCKS, rotation: 270 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.ROCKS, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.BRIDGE, rotation: 90 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.RIVER, rotation: 0 }
        ],
        [
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 }
        ],
        [
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.BRIDGE, rotation: 90 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 },
            { terrain: TerrainTypes.EMPTY, rotation: 0 }
        ]
    ],
    
    [
        [{ terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 90 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.RIVER, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 180 }],
        [{ terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.BRIDGE, rotation: 0 }, { terrain: TerrainTypes.RIVER, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }],
        [{ terrain: TerrainTypes.BRIDGE, rotation: 90 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 180 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 90 }, { terrain: TerrainTypes.RIVER, rotation: 0 }],
        [{ terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.RIVER, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 270 }],
        [{ terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 270 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 180 }],
        [{ terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.BRIDGE, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.RIVER, rotation: 0 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }],
        [{ terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 90 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 180 }, { terrain: TerrainTypes.EMPTY, rotation: 0 }, { terrain: TerrainTypes.ROCKS, rotation: 90 }, { terrain: TerrainTypes.RIVER, rotation: 0 }]
    ]

];


const easySolutions = [
    [
        [ 
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 180 },
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 90 },
            { track: null, rotation: 0 }
        ],

        [ 
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: null, rotation: 0 }
        ],

        [ 
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 270 },
            { track: TrackTypes.CURVED_LEFT, rotation: 270},
            { track: TrackTypes.CURVED_LEFT, rotation: 270 },
            { track: TrackTypes.CURVED_LEFT, rotation: 90 },
        ],

        [
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 90 },
            { track: null, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 0 },
        ],
        [
            { track: TrackTypes.CURVED_LEFT, rotation: 270 },
            { track: TrackTypes.CURVED_LEFT, rotation: 180 },
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.CURVED_LEFT, rotation: 180 },

        ]


        // Add the other rows for this map
    ],
    [
        [ // Solution for second easy map
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: null, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.CURVED_LEFT, rotation: 90 },
            { track: null, rotation: 0 }
        ],
        // Add the other rows for this map
    ]
    // Add more solutions if there are more easy maps
];

const hardSolutions = [
    [
        [ 
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 180 },
            { track: null, rotation: 0 },
            { track: null, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.CURVED_LEFT, rotation: 90 },
        ],

        [ 
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 90 },
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 180 },
        ],

        [ 
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 270 },
            { track: TrackTypes.CURVED_LEFT, rotation: 90 }

        ],

        [
            { track: TrackTypes.STRAIGHT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 270 },
            { track: TrackTypes.CURVED_LEFT, rotation: 180},
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 180 },
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 180}
        ],
        [
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 90},
            { track: TrackTypes.CURVED_LEFT, rotation: 90},
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.CURVED_LEFT, rotation: 180 },
            { track: null, rotation: 0 }
        ],
        [
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: TrackTypes.CURVED_LEFT, rotation: 180},
            { track: TrackTypes.CURVED_LEFT, rotation: 270},
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.CURVED_LEFT, rotation: 90 }
        ],
        [
            { track: TrackTypes.CURVED_LEFT, rotation: 270 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.CURVED_LEFT, rotation: 180 }

        ]


        // Add the other rows for this map
    ],
    [
        [ // Solution for second easy map
            { track: TrackTypes.CURVED_LEFT, rotation: 0 },
            { track: null, rotation: 0 },
            { track: TrackTypes.STRAIGHT, rotation: 90 },
            { track: TrackTypes.CURVED_LEFT, rotation: 90 },
            { track: null, rotation: 0 }
        ],
        // Add the other rows for this map
    ]
    // Add more solutions if there are more easy maps
];

let randomIndex;
function selectRandomMap(difficulty) {
    const maps = difficulty === "easy" ? easyMap : hardMap;
    randomIndex = Math.floor(Math.random() * maps.length);
    return maps[randomIndex];
}

function createGrid(size, selectedMap) {
    const gridElement = document.querySelector("#grid");
    gridElement.innerHTML = "";  // Clear any previous grid

    const terrainGrid = []; // Create a new 2D array to store the grid state

    for (let row = 0; row < size; row++) {
        const rowData = [];
        for (let col = 0; col < size; col++) {
            const cellData = selectedMap[row][col];
            const cellElement = document.createElement("div");
            cellElement.classList.add("grid-cell", cellData.terrain);

            // Initialize track as null
            cellData.track = null;

            // Set initial image and rotation for rocks and bridges
            if (cellData.terrain === TerrainTypes.ROCKS) {
                cellElement.style.backgroundImage = "url('/pics/mountain.png')";
                cellElement.style.transform = `rotate(${cellData.rotation}deg)`;
            } else if (cellData.terrain === TerrainTypes.BRIDGE) {
                cellElement.style.backgroundImage = "url('/pics/bridge.png')";
                cellElement.style.transform = `rotate(${cellData.rotation}deg)`;
            }

            // Event listener for placing tracks
            cellElement.addEventListener("click", () => {
                placeTrack(cellData, cellElement, terrainGrid);
            });

            gridElement.appendChild(cellElement);
            rowData.push(cellData); // Store the cell data in the row
        }
        terrainGrid.push(rowData); // Add the row to the grid
    }

    // Return the terrain grid to use in other parts of the game
    return terrainGrid;
}



function placeTrack(cellData, cellElement, terrainGrid) {
    console.log("Starting placement...");

    // Clear any previous track styling
    cellElement.style.backgroundImage = '';
    cellElement.classList.remove(
        "track-straight-horizontal", "track-straight-vertical",
        "track-curved-left-0", "track-curved-left-90", "track-curved-left-180", "track-curved-left-270"
    );

    console.log(`Cell terrain type: ${cellData.terrain}`);
    
    // Check if cell is a river
    if (cellData.terrain === TerrainTypes.RIVER) {
        console.log("Cannot place tracks on rivers.");
        displayMessage("Tracks cannot be placed on rivers!");
        return;
    }

    // Handle bridge terrain
    if (cellData.terrain === TerrainTypes.BRIDGE) {
        console.log("Placing on a bridge cell...");
        
        if (selectedTrackType === "remove") {
            cellData.track = null;
            console.log("Track removed from bridge.");
            cellElement.style.backgroundImage = '';
            displayMessage("Track removed.");
            return;
        }

        if (!cellData.track) {
            cellData.track = TrackTypes.STRAIGHT;
            const orientation = cellData.rotation === 0 ? "horizontal" : "vertical";
            console.log(`Placed new straight track on bridge. Orientation: ${orientation}`);
            cellElement.classList.add(`track-straight-${orientation}`);
            cellElement.style.backgroundImage = "url('/pics/bridge_rail.png')";
        } else if (cellData.track === TrackTypes.STRAIGHT) {
            cellData.rotation = (cellData.rotation + 90) % 180;
            const orientation = cellData.rotation === 0 ? "horizontal" : "vertical";
            console.log(`Rotated existing straight track on bridge. New orientation: ${orientation}`);
            cellElement.classList.add(`track-straight-${orientation}`);
            cellElement.style.backgroundImage = "url('/pics/bridge_rail.png')";
        }
    } 

    // Handle rocks terrain
    else if (cellData.terrain === TerrainTypes.ROCKS) {
        console.log("Placing on a rocks cell...");

        if (selectedTrackType === "remove") {
            cellData.track = null;
            console.log("Track removed from rocks.");
            cellElement.style.backgroundImage = '';
            displayMessage("Track removed.");
            return;
        }

        if (!cellData.track) {
            cellData.track = TrackTypes.CURVED_LEFT;
            cellData.rotation = (cellData.rotation + 90) % 360;
            console.log(`Placed new curved track on rocks. Rotation: ${cellData.rotation}`);
            cellElement.classList.add(`track-curved-left-${cellData.rotation}`);
            cellElement.style.backgroundImage = "url('/pics/mountain_rail.png')";
        }
    } 

    // Handle empty terrain
    else if (cellData.terrain === TerrainTypes.EMPTY) {
        console.log("Placing on an empty cell...");

        if (selectedTrackType === "remove") {
            cellData.track = null;
            console.log("Track removed from empty cell.");
            cellElement.style.backgroundImage = '';
            displayMessage("Track removed.");
            return;
        }

        if (!cellData.track) {
            if (selectedTrackType === "curved") {
                cellData.track = TrackTypes.CURVED_LEFT;
                cellData.rotation = 0;
                console.log("Placed new curved track on empty cell. Initial rotation: 0");
                cellElement.classList.add(`track-curved-left-${cellData.rotation}`);
                cellElement.style.backgroundImage = "url('/pics/curve_rail.png')";
            } else {
                cellData.track = TrackTypes.STRAIGHT;
                cellData.rotation = 0;
                console.log("Placed new straight track on empty cell. Orientation: horizontal");
                cellElement.classList.add("track-straight-horizontal");
                cellElement.style.backgroundImage = "url('/pics/straight_rail.png')";
            }
        } else if (cellData.track === TrackTypes.CURVED_LEFT) {
            cellData.rotation = (cellData.rotation + 90) % 360;
            console.log(`Rotated existing curved track on empty cell. New rotation: ${cellData.rotation}`);
            cellElement.classList.add(`track-curved-left-${cellData.rotation}`);
            cellElement.style.backgroundImage = "url('/pics/curve_rail.png')";
        } else if (cellData.track === TrackTypes.STRAIGHT) {
            if (cellData.rotation === 0) {
                cellData.rotation = 90;
                console.log("Rotated existing straight track to vertical.");
                cellElement.classList.add("track-straight-vertical");
            } else {
                cellData.rotation = 0;
                console.log("Rotated existing straight track to horizontal.");
                cellElement.classList.add("track-straight-horizontal");
            }
            cellElement.style.backgroundImage = "url('/pics/straight_rail.png')";
        }
    }

    if (checkWinCondition(terrainGrid)) {
        clearInterval(timerInterval);
        console.log("Win condition met.");
        displayMessage(`Congratulations! You won in ${elapsedTime} seconds.`);
        const playerName = document.querySelector("#playerName").value 
        const difficulty = document.querySelector("#difficulty").value;
        updateLeaderboard(difficulty, playerName, elapsedTime); 
        displayLeaderboard(); // Refresh leaderboard display
    } else {
        console.log("Current placement does not meet win condition.");
    }
}

// Initialize the leaderboard from local storage or create a default leaderboard
const leaderboard = {
    easy: JSON.parse(localStorage.getItem("leaderboard_easy")) || { name: null, time: Infinity },
    hard: JSON.parse(localStorage.getItem("leaderboard_hard")) || { name: null, time: Infinity }
};

// Function to update the leaderboard
function updateLeaderboard(difficulty, playerName, time) {
    if (time < leaderboard[difficulty].time) {
        leaderboard[difficulty] = { name: playerName, time: time };
        localStorage.setItem(`leaderboard_${difficulty}`, JSON.stringify(leaderboard[difficulty]));
    }
}

// Function to display the leaderboard
function displayLeaderboard() {
    const easyBoard = leaderboard.easy.name
        ? `${leaderboard.easy.name}: ${leaderboard.easy.time}s`
        : "<br>No record";
    const hardBoard = leaderboard.hard.name
        ? `${leaderboard.hard.name}: ${leaderboard.hard.time}s`
        : "No record";

    document.querySelector("#easyLeaderboard").textContent = `Easy: ${easyBoard}`;
    document.querySelector("#hardLeaderboard").textContent = `Hard: ${hardBoard}`;
}

displayLeaderboard();


function checkWinCondition(terrainGrid) {
    // Choose the correct solution based on difficulty
    const solution = terrainGrid.length === 5 ? easySolutions[0] : hardSolutions[0];

    let isWin = true;

    // Iterate over the grid and compare each cell with the solution
    terrainGrid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const solutionCell = solution[rowIndex][colIndex];
            if (cell.track !== solutionCell.track || cell.rotation !== solutionCell.rotation) {
                isWin = false; 
            }
        });
    });

    return isWin; // Returns true if all cells match the solution
}



function displayMessage(message) {
    const messageBox = document.querySelector("#messageBox");
    messageBox.textContent = message;
    messageBox.classList.add("show");
}
