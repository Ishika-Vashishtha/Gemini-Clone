const API_KEY = "AIzaSyCAFHDcjsEPKTRGGJxORSMd48JW4CnAMCA";

export async function sendPrompt() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");
  output.textContent = "Loading...";

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();

    if (data && data.candidates && data.candidates.length > 0) {
      const aiText = data.candidates[0].content.parts[0].text;
      const formattedText = aiText.replace(/\n/g, "<br>");
      document.getElementById("output").innerHTML = formattedText;
      console.log(output.textContent);
    } else {
      output.textContent = "No response from Gemini API.";
    }
  } catch (error) {
    output.textContent = "Error: " + error.message;
  }
}
