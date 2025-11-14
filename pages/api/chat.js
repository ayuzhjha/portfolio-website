import fetch from 'node-fetch';

export default async function handler(req, res) {
  console.log('Chat handler invoked');
  console.log('Request method:', req.method);
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { message } = req.body;
  console.log('Incoming message:', message);
  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  try {
    // First try to get the Gemini API key from environment variables
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    console.log('API key available:', !!apiKey);
    
    // If no Gemini API key is available, use a fallback approach with predefined responses
    if (!apiKey) {
      console.log('No API key available, using fallback responses');
      // Simple fallback logic to ensure the chatbot always works
      const fallbackResponses = {
        // Basic information about Ayush
        'about': "I'm Ayush Jha, a third-year B.Tech Computer Science student skilled in full-stack development, AI/ML, automation, and system design. I'm passionate about building innovative solutions that solve real-world problems.",
        'contact': "You can contact Ayush via email (your.email@example.com) or phone (+91-7294976499). He's available for internship roles in software engineering, AI, or backend development.",
        'skills': "Ayush's key skills include Python, Java, JavaScript, React, Node.js, Express, Django, MySQL, MongoDB, NumPy, Pandas, Scikit-learn, and LLM/RAG technologies.",
        'projects': "Ayush has worked on various projects including Full-Stack Student Workflow Manager, AI-Based Student Performance Predictor, Gesture-Controlled Automation Toolkit, and LLM-Powered PDF Query Assistant. You can see details on the Projects page of this portfolio.",
        'education': "Ayush is pursuing B.Tech Computer Science and Engineering at XIM University, Bhubaneswar (2024-2028) and is continuously learning new technologies.",
        'experience': "Details about Ayush's professional experience can be found on the Resume page. He has worked as a Software/AI Intern contributing to backend modules, API design, and ML preprocessing pipelines.",
        'default': "Thanks for your message! I'm Ayush's portfolio assistant. Feel free to ask me about Ayush's skills, projects, experience, or anything else about him."
      };
      
      // Simple matching logic to find the most relevant response
      const lowerMessage = message.toLowerCase();
      let responseText = fallbackResponses.default;
      
      // Find which category the message most likely belongs to
      Object.keys(fallbackResponses).forEach(key => {
        if (key !== 'default' && lowerMessage.includes(key)) {
          responseText = fallbackResponses[key];
        }
      });
      
      // For greetings
      if (lowerMessage.match(/^(hi|hello|hey|greetings)/i)) {
        responseText = "Hello! I'm Ayush's portfolio assistant. How can I help you today?";
      }
      
      // Return the response without calling an external API
      return res.status(200).json({ text: responseText });
    }
    
    // Enhanced context for Ayush's portfolio with detailed information
    const instruction = `You are Ayush Jha's intelligent portfolio assistant. Your primary task is to analyze questions about Ayush or his projects and respond with relevant, personalized information.

ABOUT AYUSH:
- Full Name: Ayush Jha
- Profession: Full-Stack Developer | AI/ML Enthusiast
- Education: Third-year B.Tech Computer Science student at XIM University, Bhubaneswar (2024-2028)
- Available for: Internship roles in software engineering, AI, or backend development
- Resume available at: /ayush.pdf in the portfolio
- Contact: Email: your.email@example.com | Phone: +91-7294976499 | GitHub: github.com/ayuzhjha | LinkedIn: linkedin.com/in/ayuzhjha

PORTFOLIO STRUCTURE:
- Home (/)
- About (/about) - Contains personal details and background
- Resume (/resume) - Contains professional experience and skills
- Projects (/projects) - Showcases development projects with tags
- GitHub (/github) - Links to code repositories

SKILLS & EXPERTISE:
- Languages: Python, Java, JavaScript
- Frontend: HTML, CSS, React
- Backend: Node.js, Express, Django (basics)
- Databases: MySQL, MongoDB (basic)
- AI/ML: NumPy, Pandas, Matplotlib, Scikit-learn, basic LLM/RAG
- Dev Tools: Git, GitHub, VS Code, Postman

PROJECTS:
1. Full-Stack Student Workflow Manager (React + Node.js + MySQL)
2. AI-Based Student Performance Predictor (Python, Pandas, Scikit-learn, Streamlit)
3. Gesture-Controlled Automation Toolkit (Python, OpenCV)
4. LLM-Powered PDF Query Assistant (RAG pipeline, embeddings, vector search)

INSTRUCTIONS:
1. First, carefully analyze what aspect of Ayush or his portfolio the user is asking about
2. For project-related questions, focus on the technologies, features, and purpose
3. For skill-related questions, provide specific details from the portfolio
4. Always maintain a professional, helpful tone
5. Only respond about Ayush Jha and his portfolio information
6. If unsure about specific details, provide general information based on the portfolio structure

Now respond to the user's question with relevant details about Ayush or his portfolio.`;
    
    try {
      // Try Gemini API first
      const modelName = 'gemini-1.5-pro';
      console.log('Using model:', modelName);
      
      const url = `https://generativelanguage.googleapis.com/v1/models/${modelName}:generateContent?key=${apiKey}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `${instruction}\n\nUser: ${message}` }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
            topP: 0.8,
            topK: 40
          }
        })
      });
      
      console.log('External API response status:', response.status);
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', response.status, errorText);
        throw new Error('API request failed');
      }
      
      const json = await response.json();
      
      // Extract text from Gemini API response
      let text = 'No response';
      if (json.candidates && json.candidates[0] && json.candidates[0].content && 
          json.candidates[0].content.parts && json.candidates[0].content.parts[0] && 
          json.candidates[0].content.parts[0].text) {
        text = json.candidates[0].content.parts[0].text;
      }
      
      return res.status(200).json({ text });
    } catch (apiError) {
      console.error('API request error:', apiError);
      
      // If API call fails, use the fallback response based on keywords
      const fallbackResponses = {
        'about': "I'm Ayush Jha, a third-year B.Tech Computer Science student skilled in full-stack development, AI/ML, automation, and system design. I'm passionate about building innovative solutions that solve real-world problems.",
        'contact': "You can contact Ayush via email (your.email@example.com) or phone (+91-7294976499). He's available for internship roles in software engineering, AI, or backend development.",
        'skills': "Ayush's key skills include Python, Java, JavaScript, React, Node.js, Express, Django, MySQL, MongoDB, NumPy, Pandas, Scikit-learn, and LLM/RAG technologies.",
        'projects': "Ayush has worked on various projects including Full-Stack Student Workflow Manager, AI-Based Student Performance Predictor, Gesture-Controlled Automation Toolkit, and LLM-Powered PDF Query Assistant. You can see details on the Projects page of this portfolio.",
        'education': "Ayush is pursuing B.Tech Computer Science and Engineering at XIM University, Bhubaneswar (2024-2028) and is continuously learning new technologies.",
        'experience': "Details about Ayush's professional experience can be found on the Resume page. He has worked as a Software/AI Intern contributing to backend modules, API design, and ML preprocessing pipelines.",
        'default': "Thanks for your message! I'm Ayush's portfolio assistant. Feel free to ask me about Ayush's skills, projects, experience, or anything else about him."
      };
      
      const lowerMessage = message.toLowerCase();
      let responseText = fallbackResponses.default;
      
      Object.keys(fallbackResponses).forEach(key => {
        if (key !== 'default' && lowerMessage.includes(key)) {
          responseText = fallbackResponses[key];
        }
      });
      
      if (lowerMessage.match(/^(hi|hello|hey|greetings)/i)) {
        responseText = "Hello! I'm Ayush's portfolio assistant. How can I help you today?";
      }
      
      return res.status(200).json({ text: responseText });
    }
    
    res.status(200).json({ text });
  } catch (err) {
    console.error('Chat error:', err);
    // Always provide a fallback response even if there's an error
    const fallbackResponse = "I'm sorry, I encountered a technical issue. As Ayush's portfolio assistant, I can tell you he's a third-year B.Tech Computer Science student skilled in full-stack development, AI/ML, automation, and system design. Please try asking something else about his skills or projects.";
    res.status(200).json({ text: fallbackResponse });
  }
};
