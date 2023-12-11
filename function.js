const fs = require('fs');

let jsonData = JSON.parse(fs.readFileSync("data.json", "utf-8"));

function newFormatMaker(list) {

    const newFormatList = [];
    
    // loops through each team
    for (const team of list) {
        const newFormat = {
            "OPPONENTS": team.OPPONENTS,
            "DATE": team.DATE,
            "PLAYERS": []
          };

        // loops through each position on team
        for (const position in team) {
            // skips lines where no players are described and substitute players, who'll be added in a later stage
            if (position === "OPPONENTS" || position === "DATE" || position === "SUB") {
                continue;
            }

            const playerName = team[position];

            // Determine starting status based on position
            const startingStatus = "startingXi"

            // adds player to new, formatted, class
            newFormat.PLAYERS.push({
                "POSITION": position,
                "NAME": playerName,
                "STARTING STATUS": startingStatus
            });
        }
        // loops through the players on the bench and adds each of them into the team.
        const bench = team.SUB;
        for (let i = 0; i < bench.length; i++) {
            const player = bench[i];
            newFormat.PLAYERS.push({
                "POSITION": "SUB",
                "NAME": player,
                "STARTING STATUS": "bench"
            });
        }
        newFormatList.push(newFormat);
    }
    return newFormatList;
}


function writeToJsonFile(data, filename) {
    // Convert the data to a JSON-formatted string
    const jsonString = JSON.stringify(data, null, 2); // null and 2 for formatting

    // Write the JSON string to the specified file
    fs.writeFileSync(filename, jsonString);

    console.log(`Data written to ${filename}`);
}

// Calls the function to format data
const transformedData = newFormatMaker(jsonData);

// Specify the filename where you want to write the data
const outputFilename = 'output.json';

// Call the function to write the data to the file
writeToJsonFile(transformedData, outputFilename);
