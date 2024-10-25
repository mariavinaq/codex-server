const posts = [
    {
        id: 1,
        timestamp: "2024-03-01 00:00:01.000000",
        user_id: 1,
        title: "This 1 is a sample title for this specific post, just for an example.",
        description: "Lorem 1 ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat orci. Mauris elementum odio interdum odio ornare, id gravida dolor aliquet. Cras sit amet nulla turpis. Sed commodo metus et ultricies facilisis. Nunc quis sapien pellentesque, tempus lectus quis, consectetur purus. Aliquam eget maximus arcu. Praesent maximus mauris risus, vel consectetur dolor pellentesque dictum. Ut molestie lobortis sem, in semper mi cursus quis. Vivamus eget tempus urna. Vivamus vestibulum vulputate mauris eu bibendum. Donec orci velit, tempor eget nunc ac, cursus sodales eros. Nullam non cursus velit.",
        thumbnail: "/media/media1.png",
        html: `<h1>Testing</h1>
<button id="button" onclick="changeColor()">hi</button>`,
        css: `button {
    color:red;
}
button:hover {
    background-color: yellow;
}`,
        js:  `function changeColor(){
    document.getElementById("button").style.color = "blue"
}`,
    },
    {
        id: 2,
        timestamp: "2023-04-01 00:00:01.000000",
        user_id: 2,
        title: "This 2 is a sample title for this specific post, just for an example.",
        description: "Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat orci. Mauris elementum odio interdum odio ornare, id gravida dolor aliquet. Cras sit amet nulla turpis. Sed commodo metus et ultricies facilisis. Nunc quis sapien pellentesque, tempus lectus quis, consectetur purus. Aliquam eget maximus arcu. Praesent maximus mauris risus, vel consectetur dolor pellentesque dictum. Ut molestie lobortis sem, in semper mi cursus quis. Vivamus eget tempus urna. Vivamus vestibulum vulputate mauris eu bibendum. Donec orci velit, tempor eget nunc ac, cursus sodales eros. Nullam non cursus velit.",
        thumbnail: "/media/media2.png",
        html: `<h1>Testing</h1>
<button id="button" onclick="changeColor()">hi</button>`,
        css: `button {
    color:blue;
}
button:hover {
    background-color: red;
}`,
        js:  `function changeColor(){
    document.getElementById("button").style.color = "yellow"
}`,
    },
    {
        id: 3,
        timestamp: "2024-03-01 00:00:01.000000",
        user_id: 3,
        title: "This 3 is a sample title for this specific post, just for an example.",
        description: "Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat orci. Mauris elementum odio interdum odio ornare, id gravida dolor aliquet. Cras sit amet nulla turpis. Sed commodo metus et ultricies facilisis. Nunc quis sapien pellentesque, tempus lectus quis, consectetur purus. Aliquam eget maximus arcu. Praesent maximus mauris risus, vel consectetur dolor pellentesque dictum. Ut molestie lobortis sem, in semper mi cursus quis. Vivamus eget tempus urna. Vivamus vestibulum vulputate mauris eu bibendum. Donec orci velit, tempor eget nunc ac, cursus sodales eros. Nullam non cursus velit.",
        thumbnail: "/media/media3.png",
        html: `<h1>Testing</h1>
<button id="button" onclick="changeColor()">hi</button>`,
        css: `button {
    color:yellow;
}
button:hover {
    background-color: blue;
}`,
        js: `function changeColor(){
    document.getElementById("button").style.color = "red"
}`,
    },
    {
        id: 4,
        timestamp: "2024-02-01 00:00:01.000000",
        user_id: 2,
        title: "This 12 is a sample title for this specific post, just for an example.",
        description: "Lorem 12 ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat orci. Mauris elementum odio interdum odio ornare, id gravida dolor aliquet. Cras sit amet nulla turpis. Sed commodo metus et ultricies facilisis. Nunc quis sapien pellentesque, tempus lectus quis, consectetur purus. Aliquam eget maximus arcu. Praesent maximus mauris risus, vel consectetur dolor pellentesque dictum. Ut molestie lobortis sem, in semper mi cursus quis. Vivamus eget tempus urna. Vivamus vestibulum vulputate mauris eu bibendum. Donec orci velit, tempor eget nunc ac, cursus sodales eros. Nullam non cursus velit.",
        thumbnail: "/media/media4.png",
        html: `<h1>Testing 2</h1>
<button id="button" onclick="changeColor()">hi</button>`,
        css: `button {
    color:red;
}
button:hover {
    background-color: yellow;
}`,
        js:  `function changeColor(){
    document.getElementById("button").style.color = "blue"
}`,
    },
    {
        id: 5,
        timestamp: "2024-01-01 00:00:01.000000",
        user_id: 3,
        title: "This 13 is a sample title for this specific post, just for an example.",
        description: "Lorem 13 ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat orci. Mauris elementum odio interdum odio ornare, id gravida dolor aliquet. Cras sit amet nulla turpis. Sed commodo metus et ultricies facilisis. Nunc quis sapien pellentesque, tempus lectus quis, consectetur purus. Aliquam eget maximus arcu. Praesent maximus mauris risus, vel consectetur dolor pellentesque dictum. Ut molestie lobortis sem, in semper mi cursus quis. Vivamus eget tempus urna. Vivamus vestibulum vulputate mauris eu bibendum. Donec orci velit, tempor eget nunc ac, cursus sodales eros. Nullam non cursus velit.",
        thumbnail: "/media/media2.png",
        html: `<h1>Testing 2</h1>
<button id="button" onclick="changeColor()">hi</button>`,
        css: `button {
    color:blue;
}
button:hover {
    background-color: red;
}`,
        js:  `function changeColor(){
    document.getElementById("button").style.color = "yellow"
}`,
    },
    {
        id: 6,
        timestamp: "2023-09-01 00:00:01.000000",
        user_id: 1,
        title: "This 11 is a sample title for this specific post, just for an example.",
        description: "Lorem 11 ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat orci. Mauris elementum odio interdum odio ornare, id gravida dolor aliquet. Cras sit amet nulla turpis. Sed commodo metus et ultricies facilisis. Nunc quis sapien pellentesque, tempus lectus quis, consectetur purus. Aliquam eget maximus arcu. Praesent maximus mauris risus, vel consectetur dolor pellentesque dictum. Ut molestie lobortis sem, in semper mi cursus quis. Vivamus eget tempus urna. Vivamus vestibulum vulputate mauris eu bibendum. Donec orci velit, tempor eget nunc ac, cursus sodales eros. Nullam non cursus velit.",
        thumbnail: "/media/media3.png",
        html: `<h1>Testing 2</h1>
<button id="button" onclick="changeColor()">hi</button>`,
        css: `button {
    color:yellow;
}
button:hover {
    background-color: blue;
}`,
        js: `function changeColor(){
    document.getElementById("button").style.color = "red"
}`,
    },
];

export default posts;