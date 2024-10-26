import fs from "fs";

const posts = [
    {
        id: 1,
        timestamp: "2024-03-01 00:00:01.000000",
        user_id: 1,
        title: "Smooth loading dots animation with CSS",
        description: "Add a touch of flair to your loading screens with this minimal, elegant loading dots animation! Using only CSS, this snippet creates a bouncing dot animation where each dot has a slight delay, creating a smooth, dynamic loading effect. Perfect for web projects needing an extra hint of sophistication, this snippet is easily customizable, lightweight, and simple to implement for any loading state on your site.",
        thumbnail: "/media/code-1.mov",
        html: fs.readFileSync('seeds/code-1/index.html', 'utf8'),
        css: fs.readFileSync('seeds/code-1/style.css', 'utf8'),
        js:  fs.readFileSync('seeds/code-1/main.js', 'utf8'),
    },
    {
        id: 2,
        timestamp: "2023-04-01 00:00:01.000000",
        user_id: 2,
        title: "Floating yogi with smooth mouse follow and bounce animation.",
        description: "Add a touch of playfulness to your site with this floating yogi icon that smoothly follows the user’s mouse movements on the Y-axis and features a subtle bounce animation. Though it showcases a yoga icon here, this flexible snippet can be repurposed for other fun themes, like rockets, astronauts, or floating objects. With minimal CSS and JavaScript, it’s an easy way to introduce an interactive, engaging element to any web project!",
        thumbnail: "/media/code-2.mov",
        html: fs.readFileSync('seeds/code-2/index.html', 'utf8'),
        css: fs.readFileSync('seeds/code-2/style.css', 'utf8'),
        js:  fs.readFileSync('seeds/code-2/main.js', 'utf8'),
    },
    {
        id: 3,
        timestamp: "2024-03-01 00:00:01.000000",
        user_id: 3,
        title: "Beginner-friendly Express server setup in just a few lines",
        description: "This Express.js setup is a straightforward starting point for beginners, containing everything you need for a basic server. It includes JSON parsing with express.json() and a simple GET route at the root ('/') that responds with a UTF-8 encoded 'Hello world!' message to confirm the server is running. The app.listen() function starts the server on a specified port and logs the server URL for easy access. This template provides the fundamental setup needed to start building APIs or adding routes, making it a versatile and beginner-friendly foundation.",
        thumbnail: "/media/code-3.png",
        html: fs.readFileSync('seeds/code-3/index.html', 'utf8'),
        css: fs.readFileSync('seeds/code-3/style.css', 'utf8'),
        js:  fs.readFileSync('seeds/code-3/main.js', 'utf8'),
    },
    {
        id: 4,
        timestamp: "2024-02-01 00:00:01.000000",
        user_id: 2,
        title: "Dynamic starry night effect with customizable twinkling stars",
        description: "This JavaScript and CSS snippet creates a starry night effect with twinkling stars, perfect for adding an animated background to any webpage. Easily customize the count variable to adjust the number of stars, modify the size variable to change star dimensions, or fine-tune animation-duration and animation-delay to control the twinkling speed. Additionally, the background and box-shadow properties allow for custom star colors and glow effects, making this snippet adaptable to a range of themes and designs.",
        thumbnail: "/media/code-4.mov",
        html: fs.readFileSync('seeds/code-4/index.html', 'utf8'),
        css: fs.readFileSync('seeds/code-4/style.css', 'utf8'),
        js:  fs.readFileSync('seeds/code-4/main.js', 'utf8'),
    },
    {
        id: 5,
        timestamp: "2024-01-01 00:00:01.000000",
        user_id: 3,
        title: "Setting up multer with unique file names for media storage",
        description: "This setup uses multer with disk storage to handle media uploads in the backend, ideal for storing images or videos. The diskStorage configuration specifies a destination folder and leverages a uniqueName format for filenames, generated by combining a timestamp with the original filename. This unique naming system prevents file conflicts, ensuring each upload has a distinct name, which is particularly useful for applications handling multiple media files. This configuration provides a solid foundation for integrating file upload capabilities, making it easy to expand with routes for handling file uploads in Express.",
        thumbnail: "/media/code-5.png",
        html: fs.readFileSync('seeds/code-5/index.html', 'utf8'),
        css: fs.readFileSync('seeds/code-5/style.css', 'utf8'),
        js:  fs.readFileSync('seeds/code-5/main.js', 'utf8'),
    },
    {
        id: 6,
        timestamp: "2023-09-01 00:00:01.000000",
        user_id: 1,
        title: "Flashing discount banner",
        description: "This pure CSS snippet creates an eye-catching discount banner with a flashing background effect, perfect for promoting special offers. Using keyframes, the background color of the discount text alternates between dark grey and a vibrant blue, drawing attention to the discount code displayed. With no JavaScript required, this lightweight setup is easy to implement and customize by adjusting colors, font sizes, or animation timing. This snippet is ideal for highlighting promotions and enhancing user engagement with minimal code.",
        thumbnail: "/media/code-6.mov",
        html: fs.readFileSync('seeds/code-6/index.html', 'utf8'),
        css: fs.readFileSync('seeds/code-6/style.css', 'utf8'),
        js:  fs.readFileSync('seeds/code-6/main.js', 'utf8'),
    },
];

export default posts;