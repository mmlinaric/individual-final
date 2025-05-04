function validateCommentForm() {
    var fullName = document.getElementById("full_name").value;
    var commentBody = document.getElementById("comment_body").value;

    // Validate full name
    if (fullName.trim() === "") {
        alert("Full name cannot be empty.");
        return false;
    }

    if (fullName.length > 50) {
        alert("Full name is too long.");
        return false;
    }

    // Validate comment body
    if (commentBody.trim() === "") {
        alert("Comment body cannot be empty.");
        return false;
    }

    if (commentBody.length > 500) {
        alert("Comment body is too long.");
        return false;
    }

    return true;
}