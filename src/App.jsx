import { useState } from 'react'
import QRCode from 'qrcode'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [qrCode, setQrCode] = useState('')

  const generateQRCode = async () => {
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(url)
      setQrCode(qrCodeDataUrl)
    } catch (error) {
      console.error('Error generating QR code:', error)
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnpNMjQgMzRjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yek0zNiAyNGMwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDIgLjkgMiAyIDIgMi0uOSAyLTJ6TTI0IDI0YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnpNMzYgMTRjMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyIC45IDIgMiAyIDItLjkgMi0yek0yNCAxNGMwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDIgLjkgMiAyIDIgMi0uOSAyLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 text-shadow-sm animate-fade-in">
          QR Code Generator
        </h1>
        
        <div className="w-full max-w-md flex flex-col md:flex-row gap-4 mb-6 animate-slide-up">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL or text"
            className="w-full px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/90 backdrop-blur-sm"
          />
          <button
            onClick={generateQRCode}
            className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Generate QR Code
          </button>
        </div>

        {qrCode && (
          <div className="w-full max-w-sm p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl animate-fade-in">
            <img
              src={qrCode}
              alt="Generated QR Code"
              className="w-full rounded-xl shadow-md bg-white p-4"
            />
            <a
              href={qrCode}
              download="qrcode.png"
              className="mt-4 block w-full px-6 py-2 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg text-center"
            >
              Download QR Code
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
