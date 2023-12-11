This project was built to complete a freelancing task found on Upwork.

Please, see requirements below: 

"I'm looking for someone to help me manipulate some JSON data into the format I need it. It's coming from a CSV, but I need to add some depth.

See the attachment for an example of the data I have and how I need it to look.

There are about 1300 rows in the CSV. I can provide that as JSON."

## Original json:

{
  "OPPONENTS": "DROGHEDA",
  "DATE": "28/09/1993",
  "GK": "Ray Clemence",
  "RB": "Roberts",
  "LB": "Paul Price",
  "RH": "Steve Perryman",
  "CH": "Chris Hughton",
  "LH": "Alan Brazil",
  "RW": "Gary Mabbutt",
  "IR": "Glenn Hoddle",
  "CF": "Tony Galvin",
  "IL": "Steve Archibald",
  "LW": "Mark Falco",
  "SUB": [
     "Gary O'Reilly",
     ""
  ]
}


## What I need it to look like:

{
    "OPPONENTS": "DROGHEDA",
    "DATE": "28/09/1993",
    "PLAYERS": [
      {
        "POSITION": "GK",
        "NAME": "Ray Clemence",
        "STARTING STATUS": "startingXi"
      },
      {
        "POSITION": "RB",
        "NAME": "Roberts",
        "STARTING STATUS": "startingXi"
      },
      {
        "POSITION": "LB",
        "NAME": "Paul Price",
        "STARTING STATUS": "startingXi"
      },
      {
        "POSITION": "RH",
        "NAME": "Steve Perryman",
        "STARTING STATUS": "startingXi"
      },
      {
        "POSITION": "CH",
        "NAME": "Chris Hughton",
        "STARTING STATUS": "startingXi"
      },
      {
        "POSITION": "LH",
        "NAME": "Alan Brazil",
        "STARTING STATUS": "startingXi"
      },
      {
        "POSITION": "RW",
        "NAME": "Gary Mabbutt",
        "STARTING STATUS": "startingXi"
      },
      {
        "POSITION": "IR",
        "NAME": "Glenn Hoddle",
        "STARTING STATUS": "startingXi"
      },
      {
        "POSITION": "CF",
        "NAME": "Tony Galvin",
        "STARTING STATUS": "startingXi"
      },
      {
        "POSITION": "IL",
        "NAME": "Steve Archibald",
        "STARTING STATUS": "startingXi"
      },
      {
        "POSITION": "LW",
        "NAME": "Mark Falco",
        "STARTING STATUS": "startingXi"
      },
      {
        "POSITION": "SUB",
        "NAME": "Gary O'Reilly",
        "STARTING STATUS": "bench"
      }
    ]
  }

In order to achieve such result, I used nodeJS to run JavaScript locally and the "fs" library so I could parse the JSON documents into JavaScript objects. The formated values were then inserted into a new list of objects and then parsed into a json file again.

"function.js" is the logic that performs such task
"data.json" is the sample data used to test the code
"output.json" is the formatted file.
