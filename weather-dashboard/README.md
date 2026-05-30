# Weather Dashboard 🌤️

A modern, real-time weather dashboard built with React that fetches live weather data from the OpenWeatherMap API.

## Features ✨

- 🌍 **Search Any City** - Find weather information for any city worldwide
- 📊 **Current Weather** - View detailed current weather conditions
- 🔮 **5-Day Forecast** - See weather predictions for the next 5 days
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Beautiful UI** - Modern gradient backgrounds and smooth animations
- ⚡ **Fast Loading** - Optimized API calls with loading states
- 🛡️ **Error Handling** - Graceful error messages for invalid searches
- 🌡️ **Detailed Metrics** - Temperature, humidity, pressure, wind speed, visibility, and more
- 🌅 **Sunrise/Sunset Times** - Know when the sun rises and sets

## Screenshots 📸

### Current Weather
- Temperature with "feels like" display
- Weather condition with emoji icons
- Humidity, pressure, wind speed, cloudiness, visibility
- Sunrise and sunset times

### 5-Day Forecast
- Daily weather cards with highs/lows
- Weather conditions and descriptions
- Humidity and wind speed for each day

### Quick Search
- Search bar for any city
- Quick city buttons for popular destinations
- Error handling for invalid cities

## Tech Stack 🛠️

- **React 18** - UI library
- **React Hooks** - State management (useState, useEffect)
- **OpenWeatherMap API** - Real-time weather data
- **CSS3** - Modern styling with gradients and animations
- **Fetch API** - HTTP requests

## Getting Started 🚀

### Prerequisites

- Node.js 14.0 or higher
- npm or yarn
- OpenWeatherMap API key (free tier available)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/afiqfauzanmohdaffande-glitch/volunteer-connect.git
cd volunteer-connect/weather-dashboard
```

2. **Install dependencies:**
```bash
npm install
```

3. **Get your API key:**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key from your account dashboard

4. **Create environment file:**
```bash
cp .env.example .env.local
```

5. **Add your API key to `.env.local`:**
```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

6. **Start the development server:**
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Usage 📖

### Searching for a City
1. Type a city name in the search box
2. Click "Search" or press Enter
3. The app will display current weather and 5-day forecast

### Using Quick Cities
- Click on any of the quick city buttons (London, New York, Tokyo, Paris, Dubai)
- Weather data will load instantly

### Reading the Dashboard
- **Current Weather**: Shows temperature, condition, location, and detailed metrics
- **Forecast Cards**: Display daily highs/lows, weather condition, humidity, and wind speed
- **Colors**: Red = High temp, Blue = Low temp

## Project Structure 📁

```
weather-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CurrentWeather.jsx
│   │   ├── ForecastCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── LoadingSpinner.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── .env.example
└── README.md
```

### Component Details

**App.jsx** - Main component managing state and API calls
- Handles weather and forecast data fetching
- Manages loading and error states
- Processes forecast data for 5-day display

**SearchBar.jsx** - Search interface with quick cities
- Input field for city search
- Quick access buttons for popular cities
- Form submission handling

**CurrentWeather.jsx** - Current conditions display
- Temperature and "feels like" display
- Weather icon and description
- Detailed metrics (humidity, pressure, wind, visibility)
- Sunrise and sunset times

**ForecastCard.jsx** - Individual forecast day card
- Date display
- High/low temperatures
- Weather condition
- Humidity and wind speed

**LoadingSpinner.jsx** - Loading state component
- Animated spinner
- Loading message

## API Reference 📚

Uses OpenWeatherMap API endpoints:

- **Current Weather**: `/data/2.5/weather?q={city}&units=metric`
- **5-Day Forecast**: `/data/2.5/forecast?q={city}&units=metric`

Data includes:
- Temperature (current, min, max, feels like)
- Weather conditions
- Humidity percentage
- Atmospheric pressure
- Wind speed
- Cloud coverage
- Visibility
- Sunrise/Sunset times

## Deployment 🌐

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build the app
npm run build

# Deploy the 'build' folder to Netlify
```

### Environment Variables for Production
Set `REACT_APP_WEATHER_API_KEY` in your hosting platform's environment variables.

## Error Handling 🛡️

- **City Not Found**: User-friendly message when searching for non-existent cities
- **API Errors**: Graceful error messages
- **Loading States**: Spinner during API calls
- **Empty State**: Default city (London) on app load

## Future Enhancements 🚀

- [ ] Weather alerts and warnings
- [ ] Historical weather data
- [ ] Multiple language support
- [ ] Dark/Light theme toggle
- [ ] Save favorite cities
- [ ] Weather maps
- [ ] Air quality index
- [ ] UV index
- [ ] Precipitation probability
- [ ] Pollen count

## Performance Optimizations ⚡

- Conditional API calls (only when search submitted)
- Efficient state management
- CSS animations for smooth UX
- Responsive images and icons
- Minimal dependencies

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License 📄

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing 🤝

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support 💬

For issues or questions:
- Create an issue on GitHub
- Check existing documentation
- Review OpenWeatherMap API docs

## Author 👨‍💻

**Afiq Fauzan Mohd Affande**
- GitHub: [@afiqfauzanmohdaffande-glitch](https://github.com/afiqfauzanmohdaffande-glitch)

## Acknowledgments 🙏

- [OpenWeatherMap](https://openweathermap.org/) - Weather data provider
- [React](https://react.dev/) - UI framework
- [CSS-Tricks](https://css-tricks.com/) - CSS inspiration

---

**Made with ❤️ for weather enthusiasts**

Happy weather checking! 🌦️
