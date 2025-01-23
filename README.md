# English Dictionary

A simple and user-friendly English Dictionary web app that allows users to search for a word and provides its meaning, pronunciation, example (if available), and synonyms. The app also features a clickable pronunciation button for audio playback.

## Features

- **Word Search**: Users can search for any word.
- **Pronunciation**: Displays phonetic transcription and allows users to listen to the pronunciation.
- **Meaning**: Provides the meaning of the searched word.
- **Examples**: Shows example usage of the word (if available).
- **Synonyms**: Lists synonyms for the word (if available).
- **Fallbacks**: Gracefully handles cases where some data (example, synonyms, etc.) is unavailable.

## Technologies Used

- **HTML5**: For the app structure.
- **CSS3**: For styling the application.
- **JavaScript (ES6+)**: For handling functionality and API integration.
- **Free Dictionary API**: To fetch word definitions, pronunciation, examples, and synonyms.

## How It Works

1. Enter a word in the search box.
2. Click the search button.
3. The app fetches the data from the Free Dictionary API and displays:
   - Word
   - Phonetics (pronunciation transcription)
   - Meaning
   - Example (if available)
   - Synonyms (if available)
4. Users can click the audio button to hear the pronunciation of the word.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/simranwaswani/english-dictionary.git
