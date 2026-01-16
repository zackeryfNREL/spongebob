# 🍍 SpongeBob Quotes Website 🧽

A fun, animated web application that displays random SpongeBob SquarePants quotes! Features a beautiful gradient design with smooth animations and a collection of memorable quotes from your favorite Bikini Bottom characters.

## Features

- 🎨 Beautiful gradient UI with smooth animations
- 🎭 40+ memorable SpongeBob quotes
- 🎲 Random quote generator
- 📱 Fully responsive design
- 🐳 Dockerized for easy deployment
- 🚀 Lightweight nginx-based container

## Quick Start

### Using Docker Compose (Recommended)

1. Make sure you have Docker and Docker Compose installed
2. Run the application:

```bash
docker-compose up -d
```

3. Open your browser and visit: `http://localhost:8080`

4. To stop the application:

```bash
docker-compose down
```

### Using Docker

Build and run the container manually:

```bash
# Build the Docker image
docker build -t spongebob-quotes .

# Run the container
docker run -d -p 8080:80 --name spongebob-quotes-app spongebob-quotes

# Stop the container
docker stop spongebob-quotes-app

# Remove the container
docker rm spongebob-quotes-app
```

### Running Locally (Without Docker)

Simply open `index.html` in your web browser. No server required!

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # Quote logic and interactivity
├── Dockerfile          # Docker container configuration
├── docker-compose.yml  # Docker Compose setup
└── README.md          # This file
```

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Container**: Docker with nginx:alpine
- **Server**: Nginx (for containerized deployment)

## Quote Collection

The app includes quotes from popular SpongeBob characters:
- SpongeBob SquarePants
- Patrick Star
- Squidward Tentacles
- Mr. Krabs
- Plankton

## Customization

### Adding More Quotes

Edit `script.js` and add new quote objects to the `spongebobQuotes` array:

```javascript
{ quote: "Your quote here", character: "Character Name" }
```

### Changing Colors

Modify the gradients in `styles.css`:
- Background gradient: `body` selector
- Quote bubble: `.quote-bubble` selector
- Button: `.btn` selector

### Changing Port

Edit `docker-compose.yml` and change the port mapping:

```yaml
ports:
  - "YOUR_PORT:80"
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a fan-made project for educational purposes. SpongeBob SquarePants and all related characters are property of Nickelodeon and Viacom.

## Contributing

Feel free to fork this project and add your own SpongeBob quotes or features!

---

Made with ❤️ for SpongeBob fans everywhere!
