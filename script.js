// Archivo: script.js

document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const comment = document.querySelector('textarea[name="comment"]').value;
    if (comment.trim()) {
        const commentSection = document.getElementById('comment-section');
        const newComment = document.createElement('p');
        newComment.textContent = comment;
        commentSection.appendChild(newComment);
        document.querySelector('textarea[name="comment"]').value = '';
    }
});
