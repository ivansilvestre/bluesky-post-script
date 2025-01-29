# Bluesky Post Creator

## Description

This script allows you to create posts for the Bluesky platform automatically.

## Getting Started

### Prerequisites

- Node.js installed on your system
- Git installed on your system
- A Bluesky account

### Installation

1. Clone the repository

2. Navigate to the script directory

3. Install the required dependencies
   `npm install`

4. Create a `.env` file in the script directory with the following variables:
   BLUESKY_USERNAME=your_username
   BLUESKY_PASSWORD=your_password

Replace `your_username` and `your_password` with your Bluesky account credentials.

## Usage

1. Open the `script.js` file in your preferred text editor.

2. Locate line 38 where the `postToBluesky()` function is called. Modify the content inside this function call to customize your post.

3. Run the script:
   `node script.js`
