document.getElementById("contentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    
    var title = document.getElementById("title").value;
    var image = document.getElementById("image").value;
    var video = document.getElementById("video").value;
    var content = document.getElementById("content").value;

    
    var newContent = document.createElement("div");
    newContent.innerHTML = `
    <h1>Blog Details</h1>
    <h2>Title: ${title}</h2>
    <p>Content: ${content}</p>
    <img src="${image}" alt="Blog Image">
    <p>Video URL: ${video}</p>`;


    document.getElementById("savedContent").appendChild(newContent);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("image").value = "";
    document.getElementById("video").value = "";
});