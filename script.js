document.getElementById("searchBtn").addEventListener("click", () => {
    const word = document.getElementById("wordInput").value;
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.title === "No Definitions Found") {
          alert("Word not found! Try another word.");
          return;
        }
  
        const wordData = data[0];
        const phonetics = wordData.phonetics[0] || {};
        const meanings = wordData.meanings[0] || {};
        const definition = meanings.definitions[0] || {};
  
        document.getElementById("word").textContent = wordData.word;
        document.getElementById("phonetics").textContent = phonetics.text || "N/A";
        document.getElementById("meaning").textContent = definition.definition || "No meaning available.";
        document.getElementById("example").textContent = definition.example || "No example available.";
        document.getElementById("synonyms").textContent = meanings.synonyms?.join(", ") || "No synonyms available.";
  
        if (phonetics.audio) {
          const audio = new Audio(phonetics.audio);
          document.getElementById("audioBtn").onclick = () => audio.play();
        } else {
          document.getElementById("audioBtn").onclick = null;
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching the word details.");
      });
  });
  