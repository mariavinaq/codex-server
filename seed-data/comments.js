const comments = [
    {
        id: 1,
        timestamp: "2024-10-14 12:34:56.000000",
        post_id: 1,
        user_id: 2,
        comment: "This animation looks great! It's exactly what I need for a project. Thanks for sharing!"
    },
    {
        id: 2,
        timestamp: "2024-10-15 08:20:11.000000",
        post_id: 1,
        user_id: 3,
        comment: "Very smooth! I'm curious if there's a way to adjust the speed without affecting the animation quality?"
    },
    {
        id: 3,
        timestamp: "2024-10-15 15:02:43.000000",
        post_id: 1,
        user_id: 4,
        comment: "I tried it out, and it works perfectly. Thanks for this elegant solution for loading screens!"
    },
    {
        id: 4,
        timestamp: "2024-10-16 09:18:30.000000",
        post_id: 1,
        user_id: 5,
        comment: "This is really helpful, especially since it's lightweight. Exactly what I was looking for!"
    },
    {
        id: 5,
        timestamp: "2024-10-16 14:22:17.000000",
        post_id: 1,
        user_id: 6,
        comment: "Question: How would I go about changing the color of each dot individually?"
    },
    {
        id: 6,
        timestamp: "2024-04-01 09:45:21.000000",
        post_id: 2,
        user_id: 1,
        comment: "This floating effect is fantastic! I can see so many creative uses for this beyond just a yogi icon."
    },
    {
        id: 7,
        timestamp: "2024-04-01 13:12:34.000000",
        post_id: 2,
        user_id: 3,
        comment: "Really cool! I love how smooth the movement is. Would this work well on mobile too?"
    },
    {
        id: 8,
        timestamp: "2024-04-02 10:27:19.000000",
        post_id: 2,
        user_id: 4,
        comment: "This adds such a playful touch to the page. Thanks for sharing this snippet!"
    },
    {
        id: 9,
        timestamp: "2024-04-02 15:05:44.000000",
        post_id: 2,
        user_id: 5,
        comment: "I tried it out with a spaceship icon, and it looks amazing. Thanks for making this so easy to customize!"
    },
    {
        id: 10,
        timestamp: "2024-04-03 08:51:12.000000",
        post_id: 2,
        user_id: 6,
        comment: "Quick question: is there a way to adjust the bounce intensity without affecting the follow effect?"
    },
    {
        id: 11,
        timestamp: "2024-10-10 09:23:11.000000",
        post_id: 3,
        user_id: 1,
        comment: "This is exactly what I needed to get started with Express! Thanks for making it so easy to follow."
    },
    {
        id: 12,
        timestamp: "2024-10-10 14:15:45.000000",
        post_id: 3,
        user_id: 2,
        comment: "Great setup for beginners! Would this handle larger JSON payloads as well, or would it need adjustments?"
    },
    {
        id: 13,
        timestamp: "2024-10-11 08:05:30.000000",
        post_id: 3,
        user_id: 4,
        comment: "Simple and effective! This is a fantastic starting template for anyone new to backend development."
    },
    {
        id: 14,
        timestamp: "2024-10-11 11:32:55.000000",
        post_id: 3,
        user_id: 5,
        comment: "Appreciate the clear instructions. I was up and running in no time—thanks for sharing!"
    },
    {
        id: 15,
        timestamp: "2024-10-12 07:42:18.000000",
        post_id: 3,
        user_id: 6,
        comment: "Nice work! I think I'll use this as the base for a small project. Do you recommend any changes for production?"
    },
    {
        id: 16,
        timestamp: "2024-10-07 08:37:59.000000",
        post_id: 4,
        user_id: 1,
        comment: "This is beautiful! The customizable twinkling adds such a unique touch. Great work on this effect!"
    },
    {
        id: 17,
        timestamp: "2024-10-07 11:58:43.000000",
        post_id: 4,
        user_id: 2,
        comment: "Amazing effect! Can this be adapted to display on mobile screens as well, or is it best for desktop?"
    },
    {
        id: 18,
        timestamp: "2024-10-08 09:12:15.000000",
        post_id: 4,
        user_id: 3,
        comment: "Love the starry vibe! I adjusted the star size for a subtle look, and it works perfectly as a page background."
    },
    {
        id: 19,
        timestamp: "2024-10-08 15:33:07.000000",
        post_id: 4,
        user_id: 5,
        comment: "This is exactly the effect I needed! Do you have any tips for controlling the glow intensity without slowing it down?"
    },
    {
        id: 20,
        timestamp: "2024-10-09 07:46:32.000000",
        post_id: 4,
        user_id: 6,
        comment: "So cool! This is giving me ideas for a themed portfolio page. Thanks for sharing the details!"
    },
    {
        id: 21,
        timestamp: "2024-09-15 10:25:30.000000",
        post_id: 5,
        user_id: 1,
        comment: "This unique naming system is a great idea! It makes handling multiple uploads much simpler. Thanks for sharing!"
    },
    {
        id: 22,
        timestamp: "2024-09-15 13:47:18.000000",
        post_id: 5,
        user_id: 2,
        comment: "Very useful setup! Quick question: would this configuration work with cloud storage options like S3?"
    },
    {
        id: 23,
        timestamp: "2024-09-16 08:03:12.000000",
        post_id: 5,
        user_id: 3,
        comment: "This is exactly what I needed for handling image uploads. The unique filenames save so much trouble with naming conflicts!"
    },
    {
        id: 24,
        timestamp: "2024-09-16 16:27:40.000000",
        post_id: 5,
        user_id: 4,
        comment: "Perfect timing—I was looking for a way to avoid filename clashes. Does this approach handle non-image files well too?"
    },
    {
        id: 25,
        timestamp: "2024-09-17 09:54:02.000000",
        post_id: 5,
        user_id: 6,
        comment: "I love how simple yet effective this setup is. Just tried it out, and it works perfectly. Thanks for posting this!"
    },
    {
        id: 26,
        timestamp: "2024-09-17 14:38:55.000000",
        post_id: 5,
        user_id: 7,
        comment: "Thanks for the details on this! Is there a way to modify the naming format to add more metadata, like file type or user ID?"
    },
    {
        id: 27,
        timestamp: "2024-07-25 08:16:42.000000",
        post_id: 6,
        user_id: 1,
        comment: "Love this flashing effect! It really grabs attention—perfect for a quick promotion. Thanks for sharing!"
    },
    {
        id: 28,
        timestamp: "2024-07-25 11:34:58.000000",
        post_id: 6,
        user_id: 2,
        comment: "This is a clever way to add some visual appeal. Does it perform well on mobile devices, especially with older browsers?"
    },
    {
        id: 29,
        timestamp: "2024-07-26 09:12:21.000000",
        post_id: 6,
        user_id: 3,
        comment: "Super useful snippet! I made the colors a bit more subtle, and it works great as a header banner."
    },
    {
        id: 30,
        timestamp: "2024-07-26 13:08:37.000000",
        post_id: 6,
        user_id: 4,
        comment: "This is such an easy way to highlight discounts! Do you think adding a fade transition would improve the effect?"
    },
    {
        id: 31,
        timestamp: "2024-07-27 07:55:19.000000",
        post_id: 6,
        user_id: 5,
        comment: "Nice work! I appreciate that it’s pure CSS. Do you have any recommendations for making it more accessible for users sensitive to flashing?"
    },
    {
        id: 32,
        timestamp: "2024-07-27 15:24:04.000000",
        post_id: 6,
        user_id: 7,
        comment: "Thanks for this! It was super easy to set up, and the color options make it easy to adapt to different themes."
    },
    {
        id: 33,
        timestamp: "2024-07-01 09:15:32.000000",
        post_id: 7,
        user_id: 1,
        comment: "This is adorable! The spinning effect adds a nice touch to the winter theme. Perfect for holiday projects!"
    },
    {
        id: 34,
        timestamp: "2024-07-01 11:42:47.000000",
        post_id: 7,
        user_id: 2,
        comment: "Really fun effect! I love how smooth the spin is. Do you think this would work with different icon shapes too?"
    },
    {
        id: 35,
        timestamp: "2024-07-02 08:29:11.000000",
        post_id: 7,
        user_id: 3,
        comment: "Great snippet! I adjusted the rotation speed, and it gives a subtle look. Works well on my winter-themed site!"
    },
    {
        id: 36,
        timestamp: "2024-07-02 14:54:23.000000",
        post_id: 7,
        user_id: 5,
        comment: "This is awesome! It’s nice that it’s all in CSS. Would love to see a version with a snowflake fade-in animation too."
    },
    {
        id: 37,
        timestamp: "2024-10-27 08:22:45.000000",
        post_id: 8,
        user_id: 1,
        comment: "This is a great idea! The smooth slide-in effect keeps things neat while adding a dynamic touch. Thanks for sharing!"
    },
    {
        id: 38,
        timestamp: "2024-10-27 10:14:23.000000",
        post_id: 8,
        user_id: 2,
        comment: "I love how this only appears on scroll—it’s perfect for a cleaner interface! Do you have suggestions for making it work on mobile?"
    },
    {
        id: 39,
        timestamp: "2024-10-27 13:08:19.000000",
        post_id: 8,
        user_id: 4,
        comment: "Just what I needed! I adjusted the scroll offset, and it fits perfectly with my site's layout. Thanks for the customization tips!"
    },
    {
        id: 40,
        timestamp: "2024-10-27 09:33:57.000000",
        post_id: 8,
        user_id: 5,
        comment: "Great snippet! The scroll-activated sidebar is so subtle yet effective. Any advice on optimizing this for older browsers?"
    },
    {
        id: 41,
        timestamp: "2024-10-27 12:17:30.000000",
        post_id: 8,
        user_id: 6,
        comment: "This works so well! I added some color to the icons, and it really pops. Thanks for the inspiration and easy setup!"
    },
    {
        id: 42,
        timestamp: "2024-10-27 15:45:10.000000",
        post_id: 8,
        user_id: 7,
        comment: "Perfect for social links! Quick question: would it be possible to make the sidebar slide out of view when scrolling back up?"
    },
    {
        id: 43,
        timestamp: "2024-09-01 08:34:52.000000",
        post_id: 9,
        user_id: 1,
        comment: "I love this monochrome toggle! It’s so simple yet effective for minimalist designs. Thanks for sharing this!"
    },
    {
        id: 44,
        timestamp: "2024-09-01 10:48:27.000000",
        post_id: 9,
        user_id: 2,
        comment: "Great approach for dark mode! Just curious, would this handle images with colors, or do they get inverted too?"
    },
    {
        id: 45,
        timestamp: "2024-09-01 14:15:31.000000",
        post_id: 9,
        user_id: 3,
        comment: "Really clever technique! I like the simplicity of it. Any tips on limiting the inversion to specific sections of a page?"
    },
    {
        id: 46,
        timestamp: "2024-09-02 09:11:59.000000",
        post_id: 9,
        user_id: 5,
        comment: "Perfect for my monochrome site! The local storage saving is a great addition too. Thanks for putting this together."
    },
    {
        id: 47,
        timestamp: "2024-09-02 13:45:43.000000",
        post_id: 9,
        user_id: 6,
        comment: "Such a neat trick for dark mode! I wonder if this could be adapted for a sepia or grayscale toggle as well."
    },
    {
        id: 48,
        timestamp: "2024-09-02 16:52:10.000000",
        post_id: 9,
        user_id: 7,
        comment: "This is awesome! Quick question: would it be possible to add a smooth transition effect between modes?"
    },
    {
        id: 49,
        timestamp: "2024-05-09 09:10:22.000000",
        post_id: 10,
        user_id: 1,
        comment: "This button looks fantastic! The offset effect really makes it pop. Perfect for a call-to-action!"
    },
    {
        id: 50,
        timestamp: "2024-05-09 11:22:34.000000",
        post_id: 10,
        user_id: 3,
        comment: "Love the pressed-down effect! Just curious, is there an easy way to adjust the animation speed?"
    },
    {
        id: 51,
        timestamp: "2024-05-09 14:38:47.000000",
        post_id: 10,
        user_id: 4,
        comment: "This is a simple yet effective design. I tried it with different colors, and it works perfectly on my landing page!"
    },
    {
        id: 52,
        timestamp: "2024-05-10 08:15:59.000000",
        post_id: 10,
        user_id: 5,
        comment: "The offset effect gives it such a modern look! Would love to know if it could be adapted for a 3D button style."
    },
    {
        id: 53,
        timestamp: "2024-05-10 12:42:18.000000",
        post_id: 10,
        user_id: 6,
        comment: "Great job with the animation! It’s smooth and responsive. Do you think it would work well on mobile touch events?"
    },
    {
        id: 54,
        timestamp: "2024-05-10 16:55:31.000000",
        post_id: 10,
        user_id: 7,
        comment: "This is exactly what I needed for my site’s buttons. The layering effect is spot on—thanks for the inspiration!"
    },
    {
        id: 55,
        timestamp: "2024-08-18 09:23:11.000000",
        post_id: 11,
        user_id: 1,
        comment: "This product card layout is exactly what I was looking for! The shadows add a nice touch, making the cards stand out."
    },
    {
        id: 56,
        timestamp: "2024-08-18 13:45:30.000000",
        post_id: 11,
        user_id: 2,
        comment: "Love the responsiveness! I added a hover effect to the cards, and it really enhances the user experience. Thanks for the inspiration!"
    },
    {
        id: 57,
        timestamp: "2024-08-19 08:14:22.000000",
        post_id: 11,
        user_id: 3,
        comment: "Great layout! This is perfect for my portfolio page. Do you have any tips on adjusting the shadow for a lighter look?"
    },
    {
        id: 58,
        timestamp: "2024-10-27 09:12:45.000000",
        post_id: 12,
        user_id: 1,
        comment: "This flip effect is awesome! It’s perfect for trivia and keeps the experience engaging. Great work!"
    },
    {
        id: 59,
        timestamp: "2024-10-27 11:34:22.000000",
        post_id: 12,
        user_id: 2,
        comment: "Such a fun design! I’m using this for a quiz page, and it’s working smoothly. Any tips for making the flip a bit faster?"
    },
    {
        id: 60,
        timestamp: "2024-10-27 08:57:38.000000",
        post_id: 12,
        user_id: 3,
        comment: "The 3D flip effect adds so much character! I added a slight shadow to the cards, and it makes the flip look even more realistic."
    },
    {
        id: 61,
        timestamp: "2024-10-27 13:42:19.000000",
        post_id: 12,
        user_id: 4,
        comment: "This is fantastic for interactive content! Do you have any suggestions on making the card auto-flip back after a few seconds?"
    }    
];

export default comments;