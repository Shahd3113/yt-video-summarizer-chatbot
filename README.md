# 🚀 [Tips Hindawi](https://www.tipshindawi.com/) Challenge (June–July) 2026

> 🏆 This repository is my official submission for the [ **Tips Hindawi** ](https://www.tipshindawi.com/) **Challenge (June–July) 2026**.

## 👤 Participant

| Field            | Value                                |
| ---------------- | ------------------------------------ |
| Full Name        | Shahd                                |
| Project Name     | YouTube Video Summarizer + Chatbot & Quiz |
| GitHub Username  | Shahd3113                            |
| Challenge Batch  | June–July 2026                       |
| Training Program | Large Language Models (LLMs) Program |
| Organization     | [**Edrak for Ai**](https://edrak4ai.com/en) |

---

# 📖 Project Overview

A web application that summarizes any YouTube video by extracting its transcript and generating a concise summary. Beyond summarization, the app includes an interactive chatbot that answers questions about the video's content, and an auto-generated multiple-choice quiz to test understanding of the material. The entire stack (backend, frontend, and models) runs inside a single Google Colab notebook, exposed publicly via ngrok — no local installation or paid API required.

---

# ✨ Features

* Extracts transcripts from any YouTube video (supports `watch?v=`, `youtu.be`, and `/shorts/` links)
* Generates abstractive summaries using `facebook/bart-large-cnn`, with hierarchical summarization for long transcripts
* Interactive chatbot to ask free-form questions about the video content
* Auto-generated multiple-choice quiz (5 questions by default) with instant correct/wrong feedback
* Bilingual frontend (Arabic UI, supports English and Arabic transcripts)
* Fully free to run — no paid API keys required

---

# 🛠️ Technologies Used

* **Backend:** Flask, Flask-CORS
* **Summarization Model:** `facebook/bart-large-cnn` (Hugging Face Transformers)
* **Chat/Quiz Model:** `google/flan-t5-large` (Hugging Face Transformers)
* **Transcript Extraction:** `youtube-transcript-api`
* **Frontend:** HTML, CSS, JavaScript (vanilla)
* **Deployment/Tunneling:** Google Colab + pyngrok
* **Deep Learning Framework:** PyTorch

---

# ⚙️ Installation

1. Open `YT_Summarizer_Colab.ipynb` in [Google Colab](https://colab.research.google.com)
2. Create a free [ngrok](https://dashboard.ngrok.com/signup) account and get your authtoken
3. Paste the authtoken into the designated cell
4. Run all cells in order (**Runtime > Run all**)

---

# 🚀 Usage

1. Paste any YouTube video URL into the input field
2. Choose the transcript language (English or Arabic)
3. Click **"لخّص الفيديو"** to generate a summary
4. Switch to the **"اسألي عن الفيديو"** tab to ask questions about the video content
5. Switch to the **"كويز"** tab to generate and take an auto-generated multiple-choice quiz

---

# 📸 Demo

screenshots/summary-tab.png

---

# 📈 Results

The app successfully summarizes videos of varying lengths, answers content-specific questions with reasonable accuracy on English transcripts, and generates coherent multiple-choice quizzes covering key facts from the video.

---

# 🔮 Future Improvements

* Add support for videos without captions using Whisper for transcription
* Add multi-turn conversation memory to the chatbot
* Support persistent public hosting (e.g., Render/Railway) instead of temporary ngrok tunnels
* Optional integration with a higher-quality LLM API for improved chat/quiz accuracy

---

# 📚 About the Challenge

This project was developed as part of the [**Tips Hindawi**](https://www.tipshindawi.com/) **Challenge (June–July) 2026**.

[Tips Hindawi](https://www.tipshindawi.com/) is the internships department of [**Edrak for Ai**](https://edrak4ai.com/en), and the challenge encourages participants to build real-world projects, apply practical skills, and showcase their work through GitHub.

For more information about the challenge, training programs, and upcoming batches, visit the official [Tips Hindawi](https://www.tipshindawi.com/) website.

---

# 📄 License

This project is shared for educational and portfolio purposes.
