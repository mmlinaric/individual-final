<?php
$title = "Comments";

include("core/functions/database.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $full_name = htmlspecialchars($_POST['full_name'], ENT_QUOTES);
    $comment_body = htmlspecialchars($_POST['comment_body'], ENT_QUOTES);

    // Check full name
    if (empty($full_name)) {
        die('Full name cannot be empty');
    }

    if (strlen($full_name) > 50) {
        die('Full name is too long');
    }

    // Check comment body
    if (empty($comment_body)) {
        die('Comment body cannot be empty');
    }

    if (strlen($comment_body) > 500) {
        die('Comment body is too long');
    }

    $stmt = $conn->prepare("INSERT INTO comments(full_name, comment_body) VALUES (:full_name, :comment_body)");
    $stmt->execute(array(
        'full_name' => $full_name,
        'comment_body' => $comment_body
    ));

    header('Location: '.$_SERVER['PHP_SELF']);
    die();
}

$stmt = $conn->query("SELECT full_name, created_at, comment_body FROM comments ORDER BY created_at DESC");

include("core/tpl/header.php");
?>

<div class="comment-form">
    <?php if (isset($comment_saved)): ?>
        <p>Your comment has been saved successfully.</p>
    <?php endif; ?>

    <fieldset>
        <legent>Add a comment</legent>
        <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>" onsubmit="return validateCommentForm()">
            <label for="full_name">Full name:</label>
            <input type="text" id="full_name" name="full_name" placeholder="Full name">
            <label for="comment">Comment body:</label>
            <textarea id="comment_body" name="comment_body" placeholder="Comment body" rows="10"></textarea>

            <input type="submit" name="Send" value="Post">
        </form>
    </fieldset>
</div>

<?php while ($row = $stmt->fetch()) { ?>
    <small><?php echo $row['full_name']; ?> commented on <?php echo $row['created_at']; ?>:</small>
    <p><?php echo $row['comment_body']; ?></p>
    <hr>
<?php } ?>

<script src="js/formValidator.js"></script>

<?php include("core/tpl/footer.php"); ?>