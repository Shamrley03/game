# 🧠 Study Smart - AI-Powered Learning Assistant

[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.x-green.svg)](https://mongodb.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5-orange.svg)](https://openai.com/)

> Transform your study materials into interactive learning experiences with AI-powered summarization, quizzes, and flashcards.

Study Smart is a full-stack web application that helps students efficiently study by uploading their class notes or PDFs and automatically generating summaries, quizzes, and flashcards using real AI technology.

## 🚀 Features

### 📁 Advanced File Upload

- Support for **any file type** (PDF, DOCX, TXT, images, code files, etc.)
- Drag and drop interface
- Multiple file upload (up to 10 files, 25MB each)
- Automatic file type detection and processing

### 📝 Real AI Summarization

- **OpenAI GPT integration** for intelligent summaries
- Automatic text extraction from PDFs, Word docs, Excel files
- Key points identification
- Detailed summaries with important concepts
- Fallback to mock responses when AI is unavailable

### ❓ Interactive Quizzes

- AI-generated multiple choice questions
- Instant feedback with detailed explanations
- Performance tracking and scoring
- Progress monitoring through questions

### 🃏 Smart Flashcards

- AI-generated question/answer pairs
- Difficulty tracking (Easy, Medium, Hard)
- Study progress monitoring
- Shuffle functionality
- Study time tracking

### 🔧 Backend Processing

- Node.js/Express.js server
- Robust file processing pipeline
- Rate limiting and security features
- Automatic file cleanup

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 16+ installed
- OpenAI API key (optional, for real AI features)

### Quick Start

1. **Clone or download** the project files
2. **Install dependencies**:

   ```bash
   cd study-smart
   npm install
   ```

3. **Configure AI (Optional)**:

   - Copy `env.example` to `.env`
   - Add your OpenAI API key:

   ```bash
   OPENAI_API_KEY=your_api_key_here
   ```

4. **Start the application**:

   ```bash
   npm start
   # or for development with auto-restart:
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:3000`

### Alternative Quick Start

```bash
# One-command setup (installs dependencies and starts server)
node start.js
```

## 📖 How to Use

1. **Upload Files**: Drag and drop any files into the upload area
2. **Select Options**: Choose what to generate (summary, quiz, flashcards)
3. **Process**: Click "Process Files" - files are uploaded and processed on the server
4. **Study**: Use the AI-generated materials to enhance your learning

## 🏗️ Technical Architecture

### Frontend

- **HTML5, CSS3, JavaScript (ES6+)**
- Responsive design with modern UI
- Real-time progress indicators
- Export functionality

### Backend

- **Node.js with Express.js**
- **Multer** for file upload handling
- **PDF-parse** for PDF text extraction
- **Mammoth** for Word document processing
- **XLSX** for Excel file processing
- **OpenAI API** integration for AI features

### File Processing Pipeline

1. File upload with validation
2. Automatic file type detection
3. Text extraction based on file type
4. AI processing for content generation
5. Results delivery to frontend

## 📁 Project Structure

```
study-smart/
├── server.js              # Main Express server
├── package.json           # Dependencies and scripts
├── start.js              # Startup script with auto-install
├── env.example           # Environment configuration template
├── processors/           # File processing modules
│   ├── pdfProcessor.js   # PDF text extraction
│   └── textProcessor.js  # Text file processing
├── services/             # AI and external services
│   └── aiService.js      # OpenAI integration
├── uploads/              # Temporary file storage (auto-created)
├── index.html            # Frontend HTML
├── styles.css            # Frontend styling
├── script.js             # Frontend JavaScript
└── README.md             # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file from `env.example`:

```bash
# Server Configuration
PORT=3000
NODE_ENV=development

# AI Service (Optional)
OPENAI_API_KEY=your_openai_api_key_here

# Security
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

### AI Integration

- **With OpenAI API**: Real AI-generated summaries, quizzes, and flashcards
- **Without API key**: Mock responses for demonstration

## 🌐 API Endpoints

- `GET /` - Serve the main application
- `GET /api/health` - Health check
- `POST /api/upload` - Upload files
- `POST /api/process` - Process uploaded files and generate content

## 🔒 Security Features

- Rate limiting (100 requests per 15 minutes)
- Helmet.js security headers
- File size and type validation
- Automatic file cleanup (24-hour retention)
- CORS configuration

## 🚀 Deployment

### Local Development

```bash
npm run dev
```

### Production

```bash
npm start
```

### Environment Setup

- Set `NODE_ENV=production`
- Configure proper `OPENAI_API_KEY`
- Set up reverse proxy (nginx/Apache)
- Configure HTTPS

## 🛠️ Troubleshooting

### Common Issues

1. **"Cannot find module" errors**:

   ```bash
   npm install
   ```

2. **Port already in use**:

   ```bash
   # Change port in .env file
   PORT=3001
   ```

3. **AI not working**:

   - Check your OpenAI API key
   - Verify API credits
   - App will work with mock responses if AI fails

4. **File upload errors**:
   - Check file size (max 25MB)
   - Ensure uploads directory is writable

## 🔮 Future Enhancements

- [ ] User authentication and accounts
- [ ] Cloud storage integration (AWS S3, Google Drive)
- [ ] Collaborative study features
- [ ] Advanced analytics and progress tracking
- [ ] Mobile app version
- [ ] OCR for image files
- [ ] Multiple AI provider support
- [ ] Study session history
- [ ] Export to Anki/Quizlet

## 📄 License

This project is for educational and demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 💡 Tips for Best Results

- Upload well-formatted PDFs for best text extraction
- Use text-based files for optimal AI processing
- For large documents, consider splitting into smaller files
- Keep file sizes under 25MB for faster processing
